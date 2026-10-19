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
const { buildEnquiryMessage } = load('lib/articleEnquiry.ts');

test('every published article has a unique, intentional CTA and a supported service', () => {
  const modal = fs.readFileSync(path.join(__dirname, '../components/LeadFormModal.tsx'), 'utf8');
  assert.equal(Object.keys(articleCtas).length, blogArticles.length);
  assert.equal(new Set(blogArticles.map(a => getArticleCta(a.slug).heading)).size, blogArticles.length);
  for (const article of blogArticles) {
    const cta = getArticleCta(article.slug);
    for (const field of ['heading', 'body', 'formTitle', 'messageLabel', 'messagePlaceholder']) assert.ok(cta[field], `${article.slug}: ${field}`);
    assert.ok(modal.includes(`'${cta.service}'`), cta.service);
  }
  assert.throws(() => getArticleCta('unreviewed-new-article'), /reader-specific CTA/);
});
test('setback checklist has a matching insertion point in the article', () => {
  const article = blogArticles.find(a => getArticleCta(a.slug).setback);
  const headings = article.content.filter(b => b.type === 'h2').map(b => b.text);
  assert.equal(headings.indexOf('Visibility When You Pull Out'), headings.indexOf('Working Out Your Own Distance') + 1);
});
test('setback answers survive in the existing integration message field', () => {
  const article = blogArticles.find(a => getArticleCta(a.slug).setback);
  const data = new FormData();
  const answers = { gateSetup: 'Existing gates', setbackDistance: '4.8 m', measurementStart: 'Back of pavement', vehicleLength: '5.2 m including towbar', openingClearance: 'Inward swing, 1.8 m', message: 'Move the gate further back', phone: 'PRIVATE-PHONE', email: 'PRIVATE-EMAIL' };
  Object.entries(answers).forEach(([key, value]) => data.set(key, value));
  const message = buildEnquiryMessage(data, { ...getArticleCta(article.slug), slug: article.slug, articleTitle: article.title });
  for (const key of ['gateSetup', 'setbackDistance', 'measurementStart', 'vehicleLength', 'openingClearance', 'message']) assert.ok(message.includes(answers[key]));
  assert.ok(message.includes(article.title));
  assert.ok(!message.includes('PRIVATE'));
});
test('other article forms keep context without adding irrelevant setback fields', () => {
  const article = blogArticles.find(a => a.slug === 'electric-gate-maintenance-kent');
  const data = new FormData(); data.set('gateSetup', 'Existing gates'); data.set('message', 'Service overdue');
  const message = buildEnquiryMessage(data, { ...getArticleCta(article.slug), slug: article.slug, articleTitle: article.title });
  assert.ok(message.includes('Service overdue'));
  assert.ok(message.includes('Your system and service needs'));
  assert.ok(!message.includes('Distance to closed gate'));
  assert.equal(buildEnquiryMessage(data), 'Service overdue');
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
