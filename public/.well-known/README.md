# Apple Pay domain verification (Stripe)

Stripe Apple Pay requires this exact URL to return **200** with the verification file (no redirect):

`https://shoredropapp.com/.well-known/apple-developer-merchantid-domain-association`

## Setup

1. [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_method_domains) → **Payment method domains** → **Add domain**
2. Enter **`shoredropapp.com`** (not `www` — www redirects on GitHub Pages)
3. Download the file Stripe gives you (no file extension)
4. Save it here as:
   `public/.well-known/apple-developer-merchantid-domain-association`
5. Rebuild and deploy the site:
   ```bash
   npm run build
   git add public/.well-known/apple-developer-merchantid-domain-association
   git commit -m "Add Stripe Apple Pay domain verification"
   git push
   ```
6. In Stripe, click **Verify** on the domain
7. Rebuild the iOS app (`npm run ios:sync` in SDAPPdev) — Capacitor hostname must stay **`shoredropapp.com`**

Until step 6 succeeds, the ShoreDrop app shows card only at checkout.
