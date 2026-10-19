const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
function load(file, extra = {}) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(code, { exports, ...extra });
  return exports;
}
const { blogArticles } = load('data/blog.ts');
const { articleCtas, getArticleCta } = load('data/articleCtas.ts');

test('every published article has a unique, intentional CTA', () => {
  assert.equal(Object.keys(articleCtas).length, blogArticles.length);
  assert.equal(new Set(blogArticles.map(a => getArticleCta(a.slug).heading)).size, blogArticles.length);
  for (const article of blogArticles) {
    const cta = getArticleCta(article.slug);
    for (const field of ['heading', 'body']) assert.ok(cta[field], `${article.slug}: ${field}`);
  }
  assert.throws(() => getArticleCta('unreviewed-new-article'), /reader-specific CTA/);
});
test('analytics requires consent and sends only article and placement', () => {
  const calls = [];
  let consent = 'rejected';
  const window = { localStorage: { getItem: () => consent }, gtag: (...args) => calls.push(args) };
  const { trackArticleEvent } = load('lib/articleEvents.ts', { window });
  trackArticleEvent('article_quote_open', 'example', 'article'); assert.equal(calls.length, 0);
  consent = 'accepted'; trackArticleEvent('article_quote_open', 'example', 'article');
  assert.equal(JSON.stringify(calls), JSON.stringify([['event', 'article_quote_open', { article_slug: 'example', placement: 'article' }]]));
  window.localStorage.getItem = () => { throw new Error('blocked storage'); };
  assert.doesNotThrow(() => trackArticleEvent('article_quote_open', 'example'));
});
