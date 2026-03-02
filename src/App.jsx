import React from 'react';
import { Rocket, Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 font-sans text-center">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-12 rounded-[3rem] shadow-2xl">
        <div className="inline-block p-4 bg-indigo-500/10 rounded-full mb-6 border border-indigo-500/20">
           <Rocket className="text-indigo-400" size={48} />
        </div>
        <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Launch Successful
        </h1>
        <p className="text-slate-400 mb-8 leading-relaxed font-medium">
          This site is now live on Vercel. All duplicate code errors have been resolved.
        </p>
        <div className="flex items-center justify-center space-x-2 text-pink-500 font-bold">
          <Heart size={16} fill="currentColor" />
          <span>Powered by Gemini</span>
        </div>
      </div>
    </div>
  );
}
