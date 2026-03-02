import React from 'react';
import { Rocket, Heart, CheckCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 font-sans text-center">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-12 rounded-[3rem] shadow-2xl border-t-indigo-500">
        <div className="inline-block p-4 bg-indigo-500/10 rounded-full mb-6 border border-indigo-500/20">
           <Rocket className="text-indigo-400" size={48} />
        </div>
        <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent italic">
          Account Synced
        </h1>
        <p className="text-slate-400 mb-8 leading-relaxed font-medium">
          The space3691 repository is now correctly connected to Vercel.
        </p>
        <div className="flex items-center justify-center space-x-2 text-green-400 font-bold bg-green-400/10 py-3 rounded-2xl border border-green-400/20">
          <CheckCircle size={16} />
          <span className="uppercase tracking-widest text-[10px]">Handshake: space3691 verified</span>
        </div>
      </div>
    </div>
  );
}
