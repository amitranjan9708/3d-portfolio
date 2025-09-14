# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
3. Follow the authentication steps
4. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Subject:
```
New Project Inquiry from {{from_name}}
```

### Template Body:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2563eb; }
        .value { margin-top: 5px; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #2563eb; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🚀 New Project Inquiry</h2>
            <p>You have received a new project inquiry through your portfolio website!</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="label">👤 Client Name:</div>
                <div class="value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="label">🏢 Company:</div>
                <div class="value">{{company}}</div>
            </div>
            
            <div class="field">
                <div class="label">💰 Budget:</div>
                <div class="value">{{budget}}</div>
            </div>
            
            <div class="field">
                <div class="label">🎯 Project Type:</div>
                <div class="value">{{project_type}}</div>
            </div>
            
            <div class="field">
                <div class="label">💬 Message:</div>
                <div class="message-box">{{message}}</div>
            </div>
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            
            <p><strong>Reply directly to this email to respond to {{from_name}}</strong></p>
            <p style="color: #666; font-size: 12px;">This email was sent from your portfolio contact form.</p>
        </div>
    </div>
</body>
</html>
```

4. Set the "To Email" to: `{{to_email}}`
5. Set the "Reply To" to: `{{reply_to}}`
6. Save the template and note down your **Template ID**

## Step 4: Get Your User ID
1. Go to "Account" in your EmailJS dashboard
2. Find your **User ID** (also called Public Key)

## Step 5: Update Configuration
1. Open `src/config/emailConfig.js`
2. Replace the placeholder values with your actual IDs:

```javascript
export const emailConfig = {
  serviceID: 'your_actual_service_id',
  templateID: 'your_actual_template_id',  
  userID: 'your_actual_user_id',
};
```

## Step 6: Test Your Setup
1. Start your development server: `npm start`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the formatted message

## Troubleshooting

### Common Issues:
1. **403 Forbidden**: Check your User ID and make sure it's correct
2. **Template not found**: Verify your Template ID
3. **Service not found**: Verify your Service ID
4. **Emails not arriving**: Check spam folder, verify email service setup

### EmailJS Limits:
- Free plan: 200 emails/month
- Paid plans available for higher volumes

## Security Notes:
- Your EmailJS credentials are safe to use in frontend code
- EmailJS handles the actual email sending securely
- No sensitive information is exposed in your client-side code

## Next Steps:
Once everything is working, you can:
1. Customize the email template design
2. Add auto-reply functionality
3. Set up email notifications for different form types
4. Integrate with your CRM or project management tools
