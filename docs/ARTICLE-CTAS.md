# Article calls to action

Requested by the user on 19 October 2026. Every new article needs a reviewed entry in `data/articleCtas.ts`; the build deliberately rejects articles without one.

Match the reader's problem and the work an independent installer can quote for. Repairs, servicing, access control and adaptations should not default to a new-gate pitch. Planning and shared-access articles must not promise consent, legal advice or certification. Keep the quote button text “Get free quotes”.

The article CTA follows the advice. Personalise its headline and body only. The user corrected the scope on 19 October: all pages must open the same general enquiry form. Do not change form fields, headings, prompts, defaults, submission data or success messages to match an article. No article-specific checklist or form is included.

Preserve the general form and existing payload. Do not submit fake leads to production for testing. Run `node --test tests/article-ctas.test.cjs`, build and verify that article CTAs open the general form.

The `article_quote_open` event respects the existing accepted-cookie choice. Only the article slug and quote placement are sent. Contact details and free text must never be included in analytics.
