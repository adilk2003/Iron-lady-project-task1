
import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import RecommendationCard from './components/RecommendationCard';
import ComparisonMatrix from './components/ComparisonMatrix';
import AIAssistant from './components/AIAssistant';
import { IronLadyLogo } from './components/Logo';
import { UserProfile, RecommendationResult, Program } from './types';
import { getCareerRecommendation } from './services/geminiService';
import { ALUMNI_STORIES } from './constants';

const App: React.FC = () => {
  const [recommendation, setRecommendation] = useState<RecommendationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleProfileComplete = async (profile: UserProfile) => {
    setIsLoading(true);
    try {
      const result = await getCareerRecommendation(profile);
      setRecommendation(result);
    } catch (error) {
      console.error("Failed to fetch recommendation:", error);
      setRecommendation({
        careerStage: "Senior Leadership",
        keyBlocker: "Navigating Organizational Politics",
        recommendedProgram: "C-Suite League",
        explanation: "Based on your significant experience, we recommend focusing on executive presence and enterprise strategy.",
        nextStep: "Join the next information session."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setRecommendation(null);
    setSelectedProgram(null);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <IronLadyLogo />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-tight uppercase" style={{ fontFamily: 'Gemunu Libre' }}>IRON LADY</h1>
              <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Leadership Development</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-iron-maroon transition-colors">Programs</a>
            <a href="#" className="hover:text-iron-maroon transition-colors">Community</a>
            <a href="#" className="hover:text-iron-maroon transition-colors">Events</a>
            <button className="bg-iron-maroon text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors shadow-lg shadow-iron-maroon/20">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-12">
            <section className="animate-in slide-in-from-left duration-700">
              <h2 className="text-5xl font-bold text-gray-900 leading-[1.1] uppercase" style={{ fontFamily: 'Gemunu Libre' }}>
                Unleash Your <br /> 
                <span className="text-iron-maroon">Full Potential.</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
                The Iron Lady AI Advisor uses advanced insights to analyze your unique leadership journey and matches you with the exact curriculum needed to shatter your current ceiling.
              </p>
            </section>

            {/* Testimonials */}
            <section className="space-y-6 pt-12 border-t border-gray-100">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Voices of Impact</h3>
              <div className="space-y-8">
                {ALUMNI_STORIES.map((story, i) => (
                  <div key={i} className="flex space-x-4">
                    <img src={story.avatar} alt={story.name} className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer shadow-sm border border-gray-100" />
                    <div>
                      <p className="text-sm italic text-gray-600 leading-relaxed mb-2 font-serif">"{story.quote}"</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-gray-900 uppercase tracking-tight">{story.name}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-[10px] font-bold text-iron-maroon uppercase tracking-widest">{story.program}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            {!recommendation ? (
              <ChatInterface onComplete={handleProfileComplete} isLoading={isLoading} />
            ) : (
              <div className="space-y-12">
                <RecommendationCard 
                  result={recommendation} 
                  onReset={reset} 
                  onLearnMore={setSelectedProgram}
                />
                
                {selectedProgram && (
                  <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-in slide-in-from-bottom duration-500">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 uppercase" style={{ fontFamily: 'Gemunu Libre' }}>{selectedProgram.name} Deep Dive</h3>
                      <button onClick={() => setSelectedProgram(null)} className="text-gray-400 hover:text-gray-600 p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed">{selectedProgram.description}</p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Curriculum Highlights</h4>
                        <ul className="space-y-3">
                          {selectedProgram.features.map((f, i) => (
                            <li key={i} className="flex items-center space-x-3 text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 bg-iron-maroon rounded-full"></div>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Stats</h4>
                        <div className="space-y-4">
                          <div>
                            <span className="text-[8px] font-bold text-gray-400 block uppercase tracking-wider">Duration</span>
                            <span className="font-bold text-gray-900">{selectedProgram.duration}</span>
                          </div>
                          <div>
                            <span className="text-[8px] font-bold text-gray-400 block uppercase tracking-wider">Ideal For</span>
                            <span className="text-sm font-medium text-gray-700 leading-tight block">{selectedProgram.idealFor}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <ComparisonMatrix />
              </div>
            )}
          </div>
        </div>
      </main>

      <AIAssistant />

      {/* Footer */}
      <footer className="mt-20 py-12 border-t border-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-2 grayscale opacity-50">
              <IronLadyLogo />
              <h1 className="text-sm font-bold tracking-tight uppercase" style={{ fontFamily: 'Gemunu Libre' }}>IRON LADY</h1>
            </div>
            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">© 2024 Iron Lady. Empowering the next generation of women leaders.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
