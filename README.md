# Coach Base AI - Premium SaaS for Personal Trainers

## Overview

Coach Base AI is a comprehensive SaaS platform designed for personal trainers and fitness coaches. It combines AI-powered plan generation, client management, progress tracking, and automated marketing tools into one premium platform.

## Features

### For Trainers
- **Client Management CRM**: Centralized dashboard to manage all clients
- **AI Workout Plan Generator**: Generate personalized workout plans in seconds using OpenAI
- **AI Nutrition Plan Generator**: Create customized nutrition plans with macro calculations
- **Progress Analytics**: Track client progress with charts and metrics
- **Automated Marketing**: Generate WhatsApp follow-ups and Instagram content ideas
- **PDF Export**: Export plans as professional PDFs for sharing

### For Clients
- **Personal Dashboard**: View assigned workout and nutrition plans
- **Progress Tracking**: Log weight, measurements, and photos
- **Photo Check-ins**: Upload progress photos with date tracking
- **Plan Progress**: Track completion of workouts and meals
- **Communication**: Direct messaging with trainer

### Payments & Subscriptions
- **Stripe Integration**: Secure payment processing
- **Subscription Management**: Monthly billing at ₹10,000/month
- **Invoice Management**: Automated invoicing

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **AI**: OpenAI GPT-4, GPT-3.5-turbo
- **Payments**: Stripe
- **PDF Generation**: jsPDF, html2canvas
- **State Management**: Zustand
- **Form Handling**: React Hook Form, Zod

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- OpenAI API key
- Stripe account

### Installation

1. Clone the repository
```bash
git clone https://github.com/udbhav440-hub/coach-base-ai.git
cd coach-base-ai
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.local.example .env.local
# Fill in your API keys
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
coach-base-ai/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── lib/              # Utilities and API clients
│   ├── types/            # TypeScript types
│   └── styles/           # Global styles
├── public/               # Static files
├── supabase/             # Database migrations
├── .env.local.example    # Environment variables template
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── next.config.js        # Next.js configuration
```

## Database Schema

See `/supabase/migrations/` for the complete database schema including:
- Users (trainers and clients)
- Workout Plans and Exercises
- Nutrition Plans and Meals
- Progress Tracking
- Messages and Communications
- Subscriptions and Payments

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout

### Trainers
- `GET /api/trainers/me` - Get current trainer
- `GET /api/trainers/[id]/clients` - Get trainer's clients

### Clients
- `GET /api/clients/me` - Get current client
- `GET /api/clients/[id]/progress` - Get client progress

### Plans
- `POST /api/plans/workout` - Generate workout plan
- `POST /api/plans/nutrition` - Generate nutrition plan
- `GET /api/plans/[id]` - Get plan details
- `POST /api/plans/[id]/export-pdf` - Export as PDF

### Progress
- `POST /api/progress/log` - Log progress entry
- `GET /api/progress/[clientId]` - Get progress history

## Development

### Code Quality
```bash
npm run lint          # Run ESLint
npm run type-check    # Run TypeScript type checking
```

### Database
```bash
npm run db:push       # Push migrations to Supabase
npm run db:pull       # Pull latest schema from Supabase
```

## Deployment

Recommended deployment platform: Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy

## Pricing

- **Professional Plan**: ₹10,000/month
  - Up to 50 clients
  - Unlimited plans and tracking
  - AI plan generation
  - Automation tools
  - Analytics dashboard

## Support

For issues and feature requests, please open a GitHub issue.

## License

Proprietory - All rights reserved
