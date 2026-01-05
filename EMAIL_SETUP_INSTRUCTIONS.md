# Email Setup Instructions for Contact Form

Your contact form is now configured to send emails to **contact.amolwaghmare@gmail.com** using EmailJS. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail**
4. Click **Connect Account** and authorize your Gmail (contact.amolwaghmare@gmail.com)
5. Copy your **Service ID** (it will look like: `service_xxxxxxx`)service_v9cc1mm

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Message from {{from_name}} - Portfolio Contact Form
```

**Content:**
```
You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click **Save** and copy your **Template ID** (it will look like: `template_xxxxxxx`)template_82rsfzp

## Step 4: Get Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (it will look like: `xxxxxxxxxxxx`)6l9NnKDyGi43VwuJD

## Step 5: Update Your Website Code

Open `index.html` and find this line (near the bottom, line ~400):

```javascript
publicKey: "YOUR_PUBLIC_KEY",
```

Replace `YOUR_PUBLIC_KEY` with your actual public key.

Then in `js/script.js`, find this line (around line 123):

```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
```

Replace:
- `YOUR_SERVICE_ID` with your Service ID
- `YOUR_TEMPLATE_ID` with your Template ID

## Step 6: Update Template Field Names

In your EmailJS template, make sure these field names match:
- `{{from_name}}` - maps to the "name" field
- `{{email}}` - maps to the "email" field  
- `{{subject}}` - maps to the "subject" field
- `{{message}}` - maps to the "message" field

## Step 7: Test Your Form

1. Open your website in a browser
2. Fill out the contact form
3. Submit it
4. Check your email at contact.amolwaghmare@gmail.com
5. You should receive the message within a few seconds!

## Monthly Limit

EmailJS free plan includes:
- ✅ 200 emails per month
- ✅ No credit card required
- ✅ Perfect for portfolio websites

## Troubleshooting

If emails aren't sending:
1. Check browser console (F12) for errors
2. Verify all IDs are correct in the code
3. Make sure your Gmail account is connected in EmailJS
4. Check EmailJS dashboard for delivery status

---

**Need Help?** Visit [EmailJS Documentation](https://www.emailjs.com/docs/)
