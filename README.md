# TweetPilot2

A modern landing page for TweetPilot - an AI-powered Twitter automation service that helps professionals and content creators grow their audience on autopilot.

## Overview

TweetPilot helps users post high-quality, personalized tweets daily even when busy focusing on their work. The platform targets various audiences including tech professionals, business owners, content creators, startups, and personal brands.

## Features

- **Modern Landing Page**: Responsive design with dark theme
- **Dynamic Hero Section**: Rotating audience types with smooth animations
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Feature Showcase**: Highlighting key platform capabilities
- **Waitlist Integration**: Email collection for early access
- **Trust Section**: Building credibility with potential users
- **Roadmap Display**: Transparent development timeline

## Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with Lucide React icons
- **Animations**: React Text Transition library
- **Database**: PostgreSQL with Prisma ORM
- **Development**: ESLint for code quality

## Project Structure

```
src/
├── app/
│   ├── api/health/
│   ├── new/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Trust.tsx
│   │   ├── Roadmap.tsx
│   │   └── Waitlist.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Form.tsx
└── lib/
    └── auth.ts
```

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm, yarn, pnpm, or bun
- PostgreSQL database (for Prisma)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tweetpilot2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
# Create .env.local file
DATABASE_URL="postgresql://..."
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### Hero Section
- Dynamic text animation showing different target audiences
- Email collection form
- Call-to-action buttons
- Live tweet preview mockup

### Features Section
Showcases platform capabilities and benefits for users.

### Trust Section
Builds credibility with testimonials, metrics, or social proof.

### Roadmap
Displays development timeline and upcoming features.

### Waitlist
Email collection system for early access signup.

## Database Schema

The project uses Prisma with PostgreSQL. Schema is defined in `prisma/schema.prisma`.

## Development

The project follows modern React patterns with:
- TypeScript for type safety
- Component composition
- Custom hooks for state management
- Responsive design principles
- Accessibility considerations

## Deployment

Deploy on Vercel (recommended):

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with automatic builds on push

Alternatively, deploy to any platform supporting Node.js applications.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
