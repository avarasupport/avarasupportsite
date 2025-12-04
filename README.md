# Avara Support — Static Website (contact form)

What I changed
- Updated index.html so the "Get Started" button links to `contact.html`.
- Replaced several generic images with realistic Unsplash photos (mentoring, students, parents).
- Added `contact.html` — a standalone contact page with a form using FormSubmit as the default handler.

How the contact form works (two easy options)
- Quick (no signup): FormSubmit — edit the form `action` to `https://formsubmit.co/youremail@example.com` (replace with your email). The first time you submit the form an email confirmation will be sent to that address — confirm it to start receiving messages.
- More control: Formspree — sign up at https://formspree.io, create a form endpoint, and replace the `action` attribute with the Formspree endpoint.

Files to add or replace in your repo
- index.html (replace)
- contact.html (new)
- README.md (replace or merge with existing)

Deploy steps
1. Push these files to your `main` branch.
2. Visit https://avarasupport.co.uk/contact.html and test the form by submitting it (use a test email you can access).
3. After you confirm the FormSubmit verification email, messages will be sent to your email.

If you want me to push these changes to the repository for you, tell me:
- Confirm the repository: avarasupport/avarasupportsite
- Confirm: "Push files to main and overwrite existing files if present."

If you'd like a serverless backend (store messages, send notifications to Slack, or advanced spam filtering) I can add a function and show how to deploy it to Netlify, Vercel, or GitHub Actions — tell me which you prefer.
