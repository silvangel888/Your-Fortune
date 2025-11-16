import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, RotateCcw, Stars, Share2, Copy } from "lucide-react";

const fortunes = [
  "A new path will reveal itself.",
  "Your patience will bring unexpected rewards.",
  "Something you lost will return to you soon.",
  "A quiet moment will give you the answer you seek.",
  "A surprise message will brighten your day.",
  "Believe the timing — it's aligning for you.",
  "Your intuition already knows what to do.",
  "A small risk will open a big opportunity.",
  "Someone is grateful for you in silence.",
  "A doorway closes, but a better one unlocks.",
  "Your kindness will echo back to you.",
  "Adventure is coming — prepare to say yes.",
  "A meaningful encounter is near.",
  "Trust that you're being guided.",
  "Your next idea will be golden.",
  "You will soon outgrow what once held you back.",
  "A wish you forgot about is making its way to you.",
  "Magic happens when you rest.",
  "Something you've been manifesting is already on its way.",
  "Let go — what comes next is better than what left.",
  "Your glow-up is loading.",
  "A hidden blessing is unfolding.",
  "Someone is thinking of you warmly.",
  "Your creativity will spark something amazing.",
  "Joy enters when you release control.",
  "A lucky moment will strike at the right time.",
  "The universe is rearranging things in your favor.",
  "A beautiful chapter begins soon.",
  "Your courage will impress even you.",
  "An invitation will change everything.",
  "Your heart will feel lighter soon.",
  "A dream you shelved will return.",
  "You are closer than you think.",
  "Your energy is attracting miracles.",
  "A new friendship will feel like fate.",
  "You will soon understand why the wait was necessary.",
  "Someone will open a door for you soon.",
  "Your future self is proud of you.",
  "A breakthrough is approaching.",
  "Good news is traveling toward you.",
  "The next chapter has better characters.",
  "Something enchanting will happen this week.",
  "A peaceful moment will shift your perspective.",
  "Your compassion will be rewarded.",
  "An old worry will fade away soon.",
  "You are entering a lucky cycle.",
  "Your energy will inspire someone unexpectedly.",
  "A long-awaited moment is close.",
  "Your efforts are being noticed.",
  "The universe is preparing a plot twist in your favor.",
  "You will laugh about something that stresses you now.",
  "Your authenticity will attract the right people.",
  "A rare opportunity will appear soon.",
  "This season will transform you beautifully.",
  "Magic is closer than you think.",
  "You will soon celebrate good news.",
  "A new spark will ignite your motivation.",
  "A peaceful resolution is coming.",
  "You will find exactly what you need."
];

export default function App() {
  const [fortune, setFortune] = useState('');

  const getRandomFortune = () => {
    const index = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[index]);
  };

  const copyFortune = () => {
    if (!fortune) return;
    try {
      navigator.clipboard.writeText(fortune).then(() => alert('Fortune copied!')).catch(() => prompt('Copy this fortune:', fortune));
    } catch {
      prompt('Copy this fortune:', fortune);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0d0221] via-[#120436] to-[#1a0a4a] text-white p-6">
      <h1 className="text-5xl font-bold mb-10 drop-shadow-lg">Your Fortune</h1>
      <motion.div whileTap={{ scale: 0.9 }} className="mb-6 p-10 bg-[#ffffff22] rounded-full cursor-pointer flex items-center justify-center">
        <span className="text-xl text-center">{fortune || 'Tap to reveal your fortune'}</span>
      </motion.div>
      <Button onClick={getRandomFortune} className="mb-4 bg-purple-700 hover:bg-purple-600">Reveal Fortune</Button>
      <div className="flex space-x-4">
        <Button onClick={copyFortune} disabled={!fortune} className="bg-blue-700 hover:bg-blue-600"><Copy className="mr-2" /> Copy</Button>
        <Button onClick={() => alert('Shared!')} disabled={!fortune} className="bg-green-700 hover:bg-green-600"><Share2 className="mr-2" /> Share</Button>
      </div>
    </div>
  );
}
