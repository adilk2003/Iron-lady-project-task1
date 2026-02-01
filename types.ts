
export interface UserProfile {
  currentRole: string;
  yearsExperience: string;
  biggestChallenge: string;
  careerGoal: string;
  careerLevel: string;
}

export interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
}

export interface RecommendationResult {
  careerStage: string;
  keyBlocker: string;
  recommendedProgram: string;
  explanation: string;
  nextStep: string;
}

export interface Program {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  duration: string;
  idealFor: string;
}

export interface AlumniStory {
  name: string;
  role: string;
  quote: string;
  program: string;
  avatar: string;
}
