export default function WhatIsBitNexus() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-300">What is BitNexus?</h2>
      <p className="mb-6 text-lg text-center">
        <span className="font-bold text-purple-400">BitNexus (BNS)</span> is a next-generation decentralized finance (DeFi) platform 
        operating solely with the <span className="font-bold text-purple-400">BNS token</span>. Buy BNS instantly with BNB or USDT, stake to earn daily rewards, 
        and swap rewards to USDT—directly from your dashboard, fully automated and always in your control.
      </p>
      <ul className="mb-6 grid gap-3 md:grid-cols-2">
        <li>🔹 <b>BNS Only:</b> All transactions—buy, stake, earn, withdraw—exclusively with BNS.</li>
        <li>🔹 <b>Instant Buy:</b> Buy BNS with BNB/USDT, tokens go straight to your wallet.</li>
        <li>🔹 <b>Stake & Earn:</b> Stake BNS in flexible packages, earn daily rewards.</li>
        <li>🔹 <b>Instant Withdraw:</b> Swap your BNS rewards to USDT anytime from your dashboard.</li>
        <li>🔹 <b>Fully Automated:</b> Powered by Web3 and smart contracts—fast, secure, trustless.</li>
        <li>🔹 <b>User Controlled:</b> You manage your funds, rewards, and withdrawals.</li>
        <li>🔹 <b>Transparency:</b> All operations on-chain—live stats & full history.</li>
      </ul>
      <div className="bg-purple-900/60 border border-purple-500 rounded-lg p-4 text-center mb-4 font-semibold text-lg">
        <span className="text-pink-300">No BNS, No Entry.</span> BNS is your only ticket to BitNexus rewards.
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
        <img src="/logo.png" alt="BNS Coin" className="w-20 h-20 rounded-full shadow-lg border-4 border-purple-500" />
        <div>
          <div className="flex flex-row items-center gap-2 mb-2">
            <span className="bg-purple-700 text-white px-3 py-1 rounded-lg text-sm font-bold">Total Supply</span>
            <span className="font-mono text-lg">100,000,000,000 BNS</span>
          </div>
          <div className="flex flex-row items-center gap-2 mb-2">
            <span className="bg-purple-700 text-white px-3 py-1 rounded-lg text-sm font-bold">Live Stakers</span>
            <span className="font-mono text-lg">Coming soon</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="bg-purple-700 text-white px-3 py-1 rounded-lg text-sm font-bold">Withdrawn So Far</span>
            <span className="font-mono text-lg">Coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
