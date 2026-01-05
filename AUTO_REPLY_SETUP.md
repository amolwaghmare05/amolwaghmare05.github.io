# Auto-Reply Email Setup Instructions

Your contact form now sends **TWO emails**:
1. ✉️ Main email to you (contact.amolwaghmare@gmail.com) - ✅ Already working
2. 🔄 Auto-reply confirmation to the person who contacted you - Needs setup

## Create Auto-Reply Template in EmailJS

### Step 1: Go to Email Templates
1. Log in to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Go to **Email Templates**
3. Click **Create New Template**

### Step 2: Set Template ID
Give it the ID: `template_autoreply` (IMPORTANT: Must match exactly!)

### Step 3: Configure the Template

**To Email:**
```
{{to_email}}
```

**From Name:**
```
Amol Waghmare
```

**From Email:**
```
contact.amolwaghmare@gmail.com
```

**Subject:**
```
Thank you for contacting me, {{to_name}}!
```

**Content/Body:**
```
Hi {{to_name}},

Thank you for reaching out through my portfolio website! I've received your message and I appreciate you taking the time to contact me.

I'll review your message and get back to you as soon as possible, usually within 24-48 hours.

In the meantime, feel free to:
- Check out my projects: [Your Portfolio Link]
- Connect with me on LinkedIn: https://www.linkedin.com/in/amolwaghmare05
- Explore my GitHub: https://github.com/amolwaghmare05

If your message is urgent, you can reach me directly:
📧 Email: contact.amolwaghmare@gmail.com
📱 Phone: +91xxxxxxxxxx

Best regards,
Amol Waghmare
Software Developer | AI & IoT Enthusiast

---
This is an automated confirmation message. Please do not reply to this email.
```

### Step 4: Save the Template
Click **Save** in the top-right corner

### Step 5: Test Your Contact Form
1. Open your portfolio website
2. Fill out the contact form with your own email
3. Submit the form
4. You should receive TWO emails:
   - One at contact.amolwaghmare@gmail.com (your notification)
   - One at the email you entered in the form (auto-reply)

## How It Works

When someone submits your contact form:

1. **First Email** → Sent to you (contact.amolwaghmare@gmail.com)
   - Contains: Name, Email, Subject, Message from visitor
   - Template: `template_82rsfzp`

2. **Second Email** → Auto-reply sent to the visitor
   - Confirms you received their message
   - Professional acknowledgment
   - Template: `template_autoreply`

## Customize Your Auto-Reply

You can personalize the auto-reply message by:
- Adding your social media links
- Including your typical response time
- Adding a link to your calendar/booking page
- Mentioning specific services or skills

## Benefits

✅ Professional impression - Shows you're organized and responsive
✅ Builds trust - Visitor knows their message was received
✅ Sets expectations - They know when to expect a reply
✅ Reduces anxiety - No wondering if the form worked
✅ Brand consistency - Another touchpoint with your personal brand

## Template Variables

These variables are automatically filled:
- `{{to_email}}` - Visitor's email address
- `{{to_name}}` - Visitor's name from the form
- `{{from_name}}` - Your name (Amol Waghmare)

---

**Need help?** Check the [EmailJS Auto-Reply Guide](https://www.emailjs.com/docs/examples/auto-reply/)
