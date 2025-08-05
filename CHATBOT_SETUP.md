# Chatbot Setup Guide

## Overview
This chatbot uses OpenAI's GPT-3.5-turbo model to provide automated customer support for Open The Box services.

## Features
- Real-time chat interface
- French language support
- Knowledge about Open The Box services
- Responsive design
- Smooth animations

## Setup Instructions

### 1. Get OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in to your account
3. Create a new API key
4. Copy the API key

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory with:

```env
OPENAI_API_KEY=your_actual_openai_api_key_here
```

### 3. Install Dependencies
The required dependencies are already installed:
- `openai` - OpenAI API client
- `lucide-react` - Icons
- `@radix-ui` components - UI components

### 4. Usage
The chatbot will appear as a floating button on all pages. Users can:
- Click the chat icon to open the chat window
- Type questions about Open The Box services
- Get instant responses in French

## Customization

### System Prompt
The system prompt in `/src/app/api/chat/route.ts` contains:
- Company information
- Service details
- Pricing information
- Contact details
- Response guidelines

### Styling
The chatbot uses the Open The Box brand colors:
- Primary green: `#8ABF37`
- White background
- Gray text for messages

### Features
- Auto-scroll to new messages
- Loading indicators
- Error handling
- Mobile responsive
- Keyboard shortcuts (Enter to send)

## API Endpoint
- **Route**: `/api/chat`
- **Method**: POST
- **Body**: `{ "message": "user message" }`
- **Response**: `{ "response": "bot response" }`

## Security
- API key is stored in environment variables
- No sensitive data is logged
- Error messages are user-friendly

## Troubleshooting
1. **API Key Error**: Ensure your OpenAI API key is valid and has credits
2. **No Response**: Check the browser console for errors
3. **Styling Issues**: Ensure Tailwind CSS is properly configured 