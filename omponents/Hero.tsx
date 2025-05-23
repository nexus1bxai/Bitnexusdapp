export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center relative">
      <img src="/logo.png" alt="BitNexus Logo" className="w-24 h-24 mb-6 animate-spin-slow" />
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-600 text-transparent bg-clip-text">
        BitNexus (BNS)
      </h1>
      <p className="mb-8 text-lg md:text-2xl max-w-2xl mx-auto">
        Powering the Future of Decentralized Finance with <span className="font-bold text-purple-300">BNS</span>. <br />
        Earn. Stake. Trade. Grow — All in One Place.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold shadow-lg">
          Connect Wallet
        </button>
        <button className="px-6 py-3 rounded-lg bg-transparent border border-purple-500 hover:bg-purple-800 transition font-semibold">
          Get Started
        </button>
        <button className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition font-semibold border border-gray-700">
          Whitepaper
        </button>
      </div>
    </section>
  );
}
