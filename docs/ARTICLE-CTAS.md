# Article calls to action

Requested by the user on 19 October 2026. Every new article needs a reviewed entry in `data/articleCtas.ts`; the build deliberately rejects articles without one.

Match the reader's problem and the work an independent installer can quote for. Repairs, servicing, access control and adaptations should not default to a new-gate pitch. Planning and shared-access articles must not promise consent, legal advice or certification. Keep the quote button text “Get free quotes”.

The article CTA follows the advice. Its headline, body, service selection and enquiry prompt carry through to the modal, including when opened from the article's header. The setback guide also has a contact-free clearance checklist after its measuring section and optional measurement fields in its enquiry form. It does not calculate a compliant distance or confirm approval.

Contextual answers go into the existing backend `message` field through `buildEnquiryMessage`; preserve the original payload keys. Do not submit fake leads to production for testing. Run `node --test tests/article-ctas.test.cjs`, build and inspect the relevant forms.

Article analytics respect the existing accepted-cookie choice. Events: `article_checklist_open`, `article_checklist_complete`, `article_quote_open` and `article_enquiry_success`. Only the article slug and quote placement are sent. Success is recorded only when the existing endpoint returns `ok: true`; contact details, measurements and free text must never be included in analytics.
