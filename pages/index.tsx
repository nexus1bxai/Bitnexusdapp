import Hero from '../components/Hero';
import WhatIsBitNexus from '../components/WhatIsBitNexus';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-black via-[#1e1a4f] to-[#0d0e26] min-h-screen text-white">
      <Hero />
      <WhatIsBitNexus />
      {/* Next: Add Staking, Trading, Roadmap, etc. */}
    </main>
  );
}
