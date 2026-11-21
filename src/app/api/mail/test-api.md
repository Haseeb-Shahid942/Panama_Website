# API Testing Guide

## Quick Test Commands

### Test Inquiry API (for blog/destination forms)
```bash
curl -X POST http://localhost:3000/api/mail/inquiry \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"phone\":\"1234567890\",\"description\":\"Test inquiry from API\"}"
```

### Test Contact API (for flight booking form)
```bash
curl -X POST http://localhost:3000/api/mail/contact \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"gmail\":\"test@example.com\",\"phone\":\"1234567890\",\"from\":\"London\",\"to\":\"New York\",\"departure\":\"2024-03-15\",\"return\":\"2024-03-22\",\"passenger\":{\"adults\":1,\"youth\":0,\"children\":0,\"infants\":0},\"tripType\":\"Round trip\",\"classType\":\"Economy\",\"direct\":false,\"selectedButton\":\"flights\"}"
```

## Using Browser Console

Open your browser console on any page and run:

### Test Inquiry API
```javascript
fetch('/api/mail/inquiry', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    description: 'Test from browser'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

### Test Contact API
```javascript
fetch('/api/mail/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    gmail: 'test@example.com',
    phone: '1234567890',
    from: 'London',
    to: 'New York',
    departure: '2024-03-15',
    return: '2024-03-22',
    passenger: { adults: 1, youth: 0, children: 0, infants: 0 },
    tripType: 'Round trip',
    classType: 'Economy',
    direct: false,
    selectedButton: 'flights'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

## Expected Responses

### Success
```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

### Error
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error"
}
```

## Checklist Before Testing

- [ ] `.env.local` file exists with SMTP credentials
- [ ] `nodemailer` is installed (`npm list nodemailer`)
- [ ] Development server is running (`npm run dev`)
- [ ] SMTP credentials are correct
- [ ] If using Gmail, App Password is generated

## Common Issues

1. **"Connection timeout"** - Check SMTP host and port
2. **"Authentication failed"** - Verify SMTP_USER and SMTP_PASS
3. **"Module not found: nodemailer"** - Run `npm install nodemailer`
4. **No email received** - Check spam folder, verify recipient email
