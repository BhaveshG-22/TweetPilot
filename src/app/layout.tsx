import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TweetPilot - Your AI Co-Pilot for Twitter Growth",
  description: "TweetPilot helps professionals and content creators post high-quality, personalized tweets daily — even when you're busy focusing on your work.",
  keywords: [
    "Twitter automation",
    "AI tweet generator", 
    "social media management",
    "Twitter growth tool",
    "automated posting",
    "content creation",
    "social media marketing",
    "Twitter bot",
    "AI writing assistant",
    "social media scheduler"
  ],
  authors: [{ name: "TweetPilot Team" }],
  creator: "TweetPilot",
  publisher: "TweetPilot",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tweetpilot.com',
    siteName: 'TweetPilot',
    title: 'TweetPilot - Your AI Co-Pilot for Twitter Growth',
    description: 'AI-powered Twitter automation tool that helps professionals and content creators maintain consistent, high-quality posting while saving time.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TweetPilot - AI Twitter Growth Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TweetPilot - Your AI Co-Pilot for Twitter Growth',
    description: 'AI-powered Twitter automation tool that helps professionals and content creators maintain consistent, high-quality posting while saving time.',
    creator: '@tweetpilot',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://tweetpilot.com',
  },
  category: 'Technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TweetPilot',
    description: 'AI-powered Twitter automation tool that helps professionals and content creators maintain consistent, high-quality posting while saving time.',
    url: 'https://tweetpilot.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '0',
      description: 'Free trial available'
    },
    creator: {
      '@type': 'Organization',
      name: 'TweetPilot'
    },
    featureList: [
      'AI-generated personalized tweets',
      'Custom tone and voice settings', 
      'Advanced scheduling and approval',
      'Growth analytics dashboard'
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
