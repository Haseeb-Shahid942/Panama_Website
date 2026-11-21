# Email API Routes

This directory contains Next.js API routes for handling email submissions.

## Available Routes

### 1. `/api/mail/contact` - Flight Inquiry Form
Handles flight booking inquiries from the homepage contact form.

**Endpoint:** `POST /api/mail/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "gmail": "john@example.com",
  "phone": "+44 123 456 7890",
  "from": "London (LON)",
  "to": "New York (JFK)",
  "departure": "2024-03-15",
  "return": "2024-03-22",
  "passenger": {
    "adults": 2,
    "youth": 0,
    "children": 1,
    "infants": 0
  },
  "tripType": "Round trip",
  "classType": "Economy",
  "direct": false,
  "selectedButton": "flights"
}
```

### 2. `/api/mail/inquiry` - General Inquiry Form
Handles general inquiries from destination pages and blog pages.

**Endpoint:** `POST /api/mail/inquiry`

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+44 987 654 3210",
  "checkIn": "2024-04-01",
  "checkOut": "2024-04-10",
  "guests": 2,
  "description": "Interested in Maldives package"
}
```

## Configuration

### Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Gmail Setup
If using Gmail:
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated password in `SMTP_PASS`

## Testing

You can test the API routes using curl or Postman:

```bash
# Test inquiry endpoint
curl -X POST http://localhost:3000/api/mail/inquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "description": "Test inquiry"
  }'
```

## Response Format

**Success Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error information"
}
```

## Components Using These APIs

- **ContactForm** (`src/components/Home/ContactForm.jsx`) → `/api/mail/contact`
- **InquiryForm** (`src/components/UI/Forms/InquiryForm.jsx`) → `/api/mail/inquiry`

## Migration Notes

These local API routes replace the external APIs:
- ❌ Old: `https://apis.successweb.pro/panama/send-mail`
- ✅ New: `/api/mail/contact`

- ❌ Old: `https://apis.successweb.pro/panama/inquiry`
- ✅ New: `/api/mail/inquiry`

## Troubleshooting

### Email not sending
1. Check environment variables are set correctly
2. Verify SMTP credentials
3. Check server logs for detailed error messages
4. Ensure nodemailer is installed: `npm install nodemailer`

### Gmail blocking emails
- Enable "Less secure app access" or use App Passwords
- Check Gmail's security settings
- Verify the email address is correct

### Timeout errors
- Increase timeout values in transporter configuration
- Check network connectivity
- Verify SMTP server is accessible
