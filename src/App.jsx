import React from 'react';
import { Rocket, Heart, CheckCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 font-sans text-center">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-12 rounded-[4rem] shadow-2xl border-t-4 border-t-green-500">
        <div className="inline-block p-4 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
           <CheckCircle className="text-green-400" size={48} />
        </div>
        <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent italic">
          Account Synced
        </h1>
        <p className="text-slate-400 mb-8 leading-relaxed font-medium">
          The deployment from <strong>space3691</strong> is successful. Your site is now pulling from the correct repository.
        </p>
        <div className="flex items-center justify-center space-x-2 text-pink-500 font-bold">
          <Heart size={16} fill="currentColor" />
          <span>Live on Personal Account</span>
        </div>
      </div>
    </div>
  );
}
