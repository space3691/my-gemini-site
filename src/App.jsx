// Paste your React component code here

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 text-center font-sans">
      <div className="max-w-xl animate-in fade-in zoom-in duration-1000">
        <div className="inline-block p-4 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
           <Rocket className="text-blue-400" size={48} />
        </div>
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent">
          System Online
        </h1>
        <p className="text-slate-400 text-xl font-medium mb-8 leading-relaxed">
          This site was deployed automatically using the Gemini Seamless Automator.
        </p>
        <div className="px-6 py-2 bg-slate-900 rounded-full text-blue-400 font-mono text-sm border border-slate-800 inline-block shadow-2xl">
          <span className="animate-pulse mr-2">●</span> STATUS: PRODUCTION_LIVE
        </div>
      </div>
    </div>
  );
}