import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Rocket, MessageCircle, Twitter, Wallet, Coins, Image as ImageIcon, ShieldCheck } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const LINKS = {
  buy: "https://pumpit.pro",
  telegram: "https://t.me/your_nana_group",
  twitter: "https://x.com/your_nana",
};

const TOKENOMICS = [
  { name: "Community", value: 60 },
  { name: "Liquidity", value: 25 },
  { name: "Treasury", value: 10 },
  { name: "Rewards", value: 5 },
];

const COLORS = ["#FFD166", "#F4A261", "#2A9D8F", "#E76F51"];

const howToBuy = [
  { step: 1, title: "Install Starkey Wallet", text: "Create a wallet, save your seed phrase securely (never share it).", icon: <Wallet className="w-6 h-6" /> },
  { step: 2, title: "Buy SUPRA with fiat", text: "Use the wallet's Buy/Add Funds to purchase SUPRA with card/Apple Pay.", icon: <Coins className="w-6 h-6" /> },
  { step: 3, title: "Go to Pumpit.pro", text: "Connect Starkey, select the token you want.", icon: <Rocket className="w-6 h-6" /> },
  { step: 4, title: "Swap SUPRA → $NANA", text: "Choose your amount, confirm the transaction. Boom, you're in!", icon: <ArrowUpRight className="w-6 h-6" /> },
];

const memes = [
  { title: "Banana Rocket", src: "/images/nana-rocket.png" },
  { title: "Beach Vibes", src: "/images/nana-beach.png" },
  { title: "Hop In Meme", src: "/images/nana-hopin.png" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50 text-gray-900">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/nana-logo.png" alt="$NANA logo" className="w-10 h-10 rounded-xl ring-2 ring-yellow-300 object-cover" />
            <span className="font-extrabold text-xl">$NANA</span>
            <span className="ml-2 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-yellow-200/70 text-yellow-900 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Supra Ecosystem
            </span>
          </div>
          <nav className="flex items-center gap-2">
            <a href="#about" className="px-3 py-2 rounded-xl hover:bg-yellow-100 transition">About</a>
            <a href="#buy" className="px-3 py-2 rounded-xl hover:bg-yellow-100 transition">How to Buy</a>
            <a href="#tokenomics" className="px-3 py-2 rounded-xl hover:bg-yellow-100 transition">Tokenomics</a>
            <a href="#memes" className="px-3 py-2 rounded-xl hover:bg-yellow-100 transition">Memes</a>
            <a href={LINKS.buy} target="_blank" rel="noreferrer" className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold shadow-sm">
              Buy on Pumpit.pro <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              The memecoin that <span className="text-yellow-600">prints</span> money
              <br /> on the <span className="text-rose-600">Supra</span> ecosystem 🍌💸
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Born from pure memes, powered by Supra, and fueled by community hype.
              $NANA is here for fun, vibes, and the trip to the 🌕.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={LINKS.buy} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-extrabold shadow-md">
                Buy $NANA on Pumpit.pro <Rocket className="w-5 h-5" />
              </a>
              <a href={LINKS.telegram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-yellow-100 border border-yellow-300 text-gray-900 font-semibold">
                <MessageCircle className="w-5 h-5" /> Join Telegram
              </a>
              <a href={LINKS.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-yellow-100 border border-yellow-300 text-gray-900 font-semibold">
                <Twitter className="w-5 h-5" /> Follow on X
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-600">⚠️ Not financial advice. Meme responsibly. Do your own research.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-yellow-200 blur-3xl rounded-full opacity-70" />
            <img src="/images/nana-hero.png" alt="Banana mascot" className="w-full rounded-3xl shadow-xl ring-2 ring-yellow-200 object-cover" />
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.img initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} src="/images/nana-coin.png" alt="$NANA coin" className="w-full rounded-3xl shadow-lg ring-2 ring-yellow-200 object-cover" />
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-extrabold">What is $NANA?</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              $NANA is the most a-peeling memecoin on Supra—fun-first, community-led, and built for meme-fueled virality.
              We believe a great vibe + fast infra creates undeniable momentum. Peel in or slip behind.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              <li className="p-4 rounded-2xl bg-white border border-yellow-200 shadow-sm"><p className="font-semibold">Lightning Fast ⚡</p><p className="text-sm text-gray-600">Supra-grade speed & low fees for smooth degening.</p></li>
              <li className="p-4 rounded-2xl bg-white border border-yellow-200 shadow-sm"><p className="font-semibold">Meme Engine 😂</p><p className="text-sm text-gray-600">Endless GIFs, memes, and community raids.</p></li>
              <li className="p-4 rounded-2xl bg-white border border-yellow-200 shadow-sm"><p className="font-semibold">Community First 🤝</p><p className="text-sm text-gray-600">Built in public, under construction—but vibing.</p></li>
              <li className="p-4 rounded-2xl bg-white border border-yellow-200 shadow-sm"><p className="font-semibold">Fun > Everything 🍌</p><p className="text-sm text-gray-600">We’re here to laugh, learn, and moon together.</p></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="buy" className="py-16 bg-gradient-to-b from-yellow-100/60 to-amber-100/60">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">How to Buy</h2>
          <p className="mt-2 text-center text-gray-700">From fiat → SUPRA → $NANA on Pumpit.pro</p>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {howToBuy.map((s) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative p-5 rounded-2xl bg-white border border-yellow-200 shadow-sm">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-2xl bg-yellow-400 text-yellow-900 font-extrabold flex items-center justify-center shadow">{s.step}</div>
                <div className="mb-3 text-yellow-900">{s.icon}</div>
                <p className="font-semibold">{s.title}</p>
                <p className="text-sm text-gray-600 mt-1">{s.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href={LINKS.buy} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-extrabold shadow">
              Buy on Pumpit.pro <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="tokenomics" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Tokenomics</h2>
            <p className="mt-3 text-gray-700">Simple, transparent, community-driven.</p>
            <ul className="mt-5 space-y-2 text-gray-700">
              {TOKENOMICS.map((t) => (
                <li key={t.name} className="flex items-center justify-between bg-white border border-yellow-200 rounded-xl p-3">
                  <span className="font-semibold">{t.name}</span>
                  <span className="font-bold">{t.value}%</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-500">*Update these numbers with your final token distribution.</p>
          </div>
          <div className="h-64 md:h-80 bg-white rounded-3xl border border-yellow-200 shadow-sm p-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={TOKENOMICS} dataKey="value" nameKey="name" outerRadius={110} innerRadius={60} paddingAngle={4}>
                  {TOKENOMICS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section id="contract" className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Token Contract</h2>
            <p className="mt-3 text-gray-700">Here’s the official $NANA contract address on Supra. Replace this placeholder when your token is deployed.</p>
            <div className="mt-5 p-4 bg-white border border-yellow-200 rounded-2xl shadow-sm">
              <p className="text-xs uppercase text-gray-500 font-semibold tracking-wide">$NANA Contract Address</p>
              <code className="block mt-2 text-sm md:text-base font-mono break-all text-gray-900">0xYOUR_CONTRACT_ADDRESS_HERE</code>
              <div className="mt-4 flex flex-wrap gap-3">
                <button onClick={() => { navigator.clipboard?.writeText('0xYOUR_CONTRACT_ADDRESS_HERE'); alert('Contract address copied!'); }} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-bold shadow-sm">Copy Address</button>
                <a href="https://explorer.supra.com/address/0xYOUR_CONTRACT_ADDRESS_HERE" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white hover:bg-yellow-100 border border-yellow-300 text-gray-900 font-semibold">View on Explorer</a>
              </div>
              <p className="mt-3 text-xs text-gray-500">Double-check the address in all announcements to avoid impersonators.</p>
            </div>
          </div>
          <img src="/images/nana-coin.png" alt="$NANA coin" className="w-full rounded-3xl shadow-lg ring-2 ring-yellow-200 object-cover" />
        </div>
      </section>

      <section id="memes" className="py-16 bg-gradient-to-b from-amber-100/60 to-yellow-100/60">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <ImageIcon className="w-6 h-6 text-yellow-700" />
            <h2 className="text-3xl md:text-4xl font-extrabold">Meme Gallery</h2>
          </div>
          <p className="mt-2 text-gray-700">Drop your favorite $NANA memes. Community power = meme power.</p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {memes.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group relative overflow-hidden rounded-3xl border border-yellow-200 bg-white shadow">
                <img src={m.src} alt={m.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
                  <span className="text-white font-semibold drop-shadow">{m.title}</span>
                  <span className="text-white/90 text-xs drop-shadow">#NANA</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-yellow-200/60 border border-yellow-300 rounded-3xl p-6">
            <div>
              <p className="text-2xl font-extrabold">Ready to peel in?</p>
              <p className="text-gray-700">Get your $NANA now and join the Banana Army.</p>
            </div>
            <div className="flex gap-3">
              <a href={LINKS.buy} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-extrabold shadow">Buy on Pumpit.pro <ArrowUpRight className="w-5 h-5" /></a>
              <a href={LINKS.telegram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-yellow-100 border border-yellow-300 text-gray-900 font-semibold"><MessageCircle className="w-5 h-5" /> Telegram</a>\n              <a href={LINKS.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-yellow-100 border border-yellow-300 text-gray-900 font-semibold"><Twitter className="w-5 h-5" /> X / Twitter</a>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <footer className="py-10 border-t border-amber-200 bg-white/60">\n        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600">\n          <div className="flex flex-col md:flex-row items-center justify-between gap-4">\n            <div className="flex items-center gap-3">\n              <img src=\"/images/nana-logo.png\" alt=\"$NANA logo\" className=\"w-9 h-9 rounded-lg ring-1 ring-yellow-300 object-cover\" />\n              <span className=\"font-bold\">$NANA</span>\n              <span className=\"text-gray-400\">·</span>\n              <span>Supra Ecosystem</span>\n            </div>\n            <div className=\"flex items-center gap-3\">\n              <a href={LINKS.twitter} target=\"_blank\" rel=\"noreferrer\" className=\"hover:text-gray-900\">@NANA on X</a>\n              <span className=\"text-gray-400\">|</span>\n              <a href={LINKS.telegram} target=\"_blank\" rel=\"noreferrer\" className=\"hover:text-gray-900\">Telegram</a>\n              <span className=\"text-gray-400\">|</span>\n              <a href={LINKS.buy} target=\"_blank\" rel=\"noreferrer\" className=\"hover:text-gray-900\">Buy on Pumpit.pro</a>\n            </div>\n          </div>\n          <p className=\"mt-4 text-xs text-gray-500\">Disclaimer: $NANA is a memecoin created for entertainment. Nothing here is financial advice. Always do your own research and never risk what you can't afford to lose.</p>\n        </div>\n      </footer>\n    </div>\n  );\n}\n