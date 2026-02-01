
import React from 'react';
import { Program, AlumniStory } from './types';

export const IRON_LADY_PROGRAMS: Program[] = [
  {
    id: 'leadership-essentials',
    name: 'Leadership Essentials',
    tagline: 'Build the bedrock of your leadership identity.',
    description: 'A transformative journey for mid-level managers and emerging leaders to master the core skills of strategic influence and high-performance management.',
    features: ['Strategic Communication', 'Team Dynamics', 'Self-Leadership', 'Personal Branding'],
    duration: '8 Weeks',
    idealFor: 'Mid-level managers seeking their first major leadership role.'
  },
  {
    id: 'c-suite-league',
    name: 'C-Suite League',
    tagline: 'The bridge between management and enterprise leadership.',
    description: 'Designed for senior executives who are ready to take the seat at the top table. Focused on P&L ownership, board relations, and enterprise-wide strategy.',
    features: ['Executive Presence', 'Strategic Finance', 'Influence at Scale', 'Navigating Politics'],
    duration: '12 Weeks',
    idealFor: 'Senior Directors and VPs eyeing C-level positions.'
  },
  {
    id: '100-board-members',
    name: '100 Board Members',
    tagline: 'Your path to non-executive and corporate board roles.',
    description: 'An elite coaching program focused purely on corporate governance and landing high-impact board seats.',
    features: ['Boardroom Ethics', 'Risk Management', 'The Board CV', 'Interview Preparation'],
    duration: '6 Months',
    idealFor: 'Established leaders and retired executives seeking board roles.'
  },
  {
    id: 'masterclass',
    name: 'Masterclass',
    tagline: 'Deep-dive intensives for specific leadership gaps.',
    description: 'Short, high-impact sessions led by industry pioneers on focused topics like Negotiation, Crisis Leadership, and Digital Transformation.',
    features: ['Practical Case Studies', 'Peer Networking', 'Direct Expert Access', 'Actionable Toolkits'],
    duration: '4 Days',
    idealFor: 'Busy professionals needing rapid skill upgrades.'
  }
];

export const ALUMNI_STORIES: AlumniStory[] = [
  {
    name: 'Sarah Jenkins',
    role: 'VP of Operations',
    quote: "The C-Suite League didn't just teach me how to lead; it gave me the confidence to own my space in the boardroom.",
    program: 'C-Suite League',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'Priya Sharma',
    role: 'Engineering Director',
    quote: "I found my voice and my strategy. Leadership Essentials was the missing piece in my career puzzle.",
    program: 'Leadership Essentials',
    avatar: 'https://picsum.photos/seed/priya/100/100'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Board Director',
    quote: "Landing my first corporate board seat was a dream. The 100 Board Members program made it a reality.",
    program: '100 Board Members',
    avatar: 'https://picsum.photos/seed/elena/100/100'
  }
];

export const QUESTIONS = [
  "What is your current professional role?",
  "How many years of professional experience do you have?",
  "What is the biggest challenge you are currently facing in your career?",
  "Where do you see yourself in 1 to 2 years? (Your primary career goal)",
  "What is your current career level? (e.g., Early, Mid-level, Senior, or looking for Board roles?)"
];
