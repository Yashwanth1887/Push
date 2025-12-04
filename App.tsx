import React, { useState } from 'react';
import { ConceptMentorDemo } from './components/Simulations/ConceptMentorDemo';
import { PracticeHubDemo } from './components/Simulations/PracticeHubDemo';
import { FeatureCard } from './components/FeatureCard';
import { Bot, Code2, Network, Mic, Sparkles, BrainCircuit, ArrowRight, Globe, School, CheckCircle2, Zap } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'mentor' | 'hub'>('mentor');

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-indigo-500/30 selection:text-indigo-200 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <span className="font-mono font-bold text-white text-xl">V</span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-100">Vak</span>
          </div>
          
          <div className="flex items-center gap-6">
             <button className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors">
                Sign In
             </button>
             <button className="px-6 py-2.5 bg-white text-gray-950 text-sm font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl shadow-white/10">
                Get Started
             </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none animate-pulse-fast"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900/50 border border-gray-800 backdrop-blur-sm text-sm font-medium text-indigo-400 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles size={14} />
            <span>POWERED BY GEMINI 2.5</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Your AI <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 neon-text">
              Coding Mentor
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            The intelligent tutor that sees your code, visualizes concepts in real-time, and speaks your language. 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            <button className="w-full sm:w-auto px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/20 transition-all hover:scale-105 flex items-center justify-center gap-3">
              Start Learning Now <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Demo Container */}
      <section className="px-4 md:px-6 pb-40">
        <div className="max-w-6xl mx-auto">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="p-1.5 bg-gray-900/80 backdrop-blur rounded-full border border-gray-800 inline-flex shadow-xl">
              <button 
                onClick={() => setActiveTab('mentor')}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'mentor' ? 'bg-gray-800 text-white shadow-lg ring-1 ring-white/10' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Concept Visualizer
              </button>
              <button 
                onClick={() => setActiveTab('hub')}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'hub' ? 'bg-gray-800 text-white shadow-lg ring-1 ring-white/10' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Practice Workspace
              </button>
            </div>
          </div>

          {/* Simulation Viewport */}
          <div className="relative group">
             {/* Glow effect behind the container */}
             <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             
             <div className="relative bg-[#030712] rounded-xl border border-gray-800 shadow-2xl overflow-hidden min-h-[450px]">
                {activeTab === 'mentor' ? <ConceptMentorDemo /> : <PracticeHubDemo />}
             </div>
             
             {/* Dynamic Caption - Made Bigger & clearer */}
             <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-4 px-8 py-4 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                    </span>
                    <span className="text-gray-100 font-mono text-base md:text-lg tracking-wide flex items-center gap-2">
                        <span className="font-bold text-green-400">LIVE DEMO:</span>
                        {activeTab === 'mentor' 
                            ? "AI visualizing code logic in real-time"
                            : "AI breaking down the problem step-by-step"
                        }
                    </span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-900/30 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">More than just a chat. <br/>A visual learning engine.</h2>
            <p className="text-gray-400 max-w-xl text-lg">
                Most AI tutors just send text. Vak connects to your code to visualize concepts instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="Visual Context" 
              description="The AI sees where you look. It points to diagrams and highlights code to help you focus."
              icon={<Network />}
            />
            <FeatureCard 
              title="Real-time Voice" 
              description="Talk naturally in your own language. Fast, fluid, and feels like a real conversation."
              icon={<Mic />}
            />
            <FeatureCard 
              title="Smart Editor" 
              description="Vak reads your code as you type. It spots errors early and understands your logic."
              icon={<Code2 />}
            />
            <FeatureCard 
              title="Hands-on Help" 
              description="The AI has tools. It can edit code, run tests, and draw charts to explain things better."
              icon={<Bot />}
            />
            <FeatureCard 
              title="Guided Learning" 
              description="It doesn't just give answers. It asks questions to help you build real problem-solving skills."
              icon={<BrainCircuit />}
            />
            <FeatureCard 
              title="Unlimited Practice" 
              description="Never run out of problems. Vak generates new challenges based on what you need to learn."
              icon={<Sparkles />}
            />
          </div>
        </div>
      </section>

      {/* Pricing for Colleges */}
      <section className="py-24 border-t border-gray-900 relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-indigo-900/5 radial-gradient" />
        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                <div className="md:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400 mb-6">
                        <School size={14} />
                        <span>FOR COLLEGES & UNIVERSITIES</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-6">Pay as you go.<br/>Scale as they learn.</h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Empower your students with 24/7 AI mentorship without the heavy contracts. 
                        No setup fees. You only pay for the active tutoring hours your students actually use.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                        {[
                            'Zero upfront licensing fees',
                            'Pay only per active student hour',
                            'Detailed analytics & progress tracking',
                            'Seamless LMS Integration'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button className="px-8 py-3 bg-gray-100 hover:bg-white text-gray-950 font-bold rounded-xl transition-colors shadow-lg shadow-white/5">
                        Contact Sales
                    </button>
                </div>
                
                <div className="md:w-1/2 w-full">
                    <div className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl">
                        <div className="absolute -top-4 -right-4 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg border border-indigo-400/20">
                            Flexible Model
                        </div>
                        <div className="text-center py-8">
                             <div className="text-6xl font-bold text-white mb-2">$0</div>
                             <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Upfront Cost</div>
                             <div className="my-8 h-px bg-gray-800 w-full"></div>
                             
                             <div className="flex items-center justify-center gap-4 mb-2">
                                <Zap size={32} className="text-yellow-400 fill-yellow-400" />
                                <div className="text-5xl font-bold text-white">Usage</div>
                             </div>
                             
                             <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Based Billing</div>
                             <p className="mt-8 text-gray-400 text-sm px-4 leading-relaxed">
                                We provide monthly reports on student engagement. <br/>Only pay for what connects.
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="font-mono font-bold text-white text-sm">V</span>
            </div>
            <span className="font-bold text-gray-500 text-sm">Vak Inc. © 2024</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-600 font-medium">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}