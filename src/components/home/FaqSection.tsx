import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'Print Quality',
      question: 'What does "Native 8K" print resolution mean for wall art?',
      answer: 'Standard commercial posters are printed from 1080p or 2K web images, leading to visible pixelation and blurring when viewed up close. Every KAGE masterwork is natively authored at 8,192 × 10,920 pixels and printed at 300+ DPI. Even when standing inches away from our 32×48" collector sizes, individual rain mist drops and brushwork texture remain crystalline sharp.'
    },
    {
      category: 'Copyright & Originality',
      question: 'Are these artworks affiliated with existing anime series?',
      answer: 'No. All artworks in our archive are 100% original, independent creations developed exclusively by our atelier artists. We do not use, sell, or copy copyrighted characters from franchises like Naruto, Jujutsu Kaisen, or One Piece. Each piece represents an original fictional universe with its own character lore.'
    },
    {
      category: 'Framing & Materials',
      question: 'What framing finishes and materials are available?',
      answer: 'We offer four collector-grade options: 1) Unframed Archival 310gsm Hahnemühle Rag with 1" white border; 2) Obsidian Matte Anodized Aluminum with anti-reflective glass; 3) Cyber Titanium Alloy gunmetal frame; and 4) Museum Floating Acrylic with diamond-polished edges and a concealed aluminum float mount.'
    },
    {
      category: 'Shipping & Delivery',
      question: 'How is physical artwork packaged and shipped globally?',
      answer: 'Unframed prints are rolled in acid-free glassine protective paper and encased in heavy-duty 4mm reinforced industrial tubes. Framed works ship in custom wooden-bracketed impact-resistant crates with corner protectors. All orders over $150 qualify for complimentary insured global courier dispatch.'
    },
    {
      category: 'Authenticity Guarantee',
      question: 'Do prints come with verification of authenticity?',
      answer: 'Yes. Every individual piece includes a physical serialized Certificate of Authenticity embossed with our studio Hanko seal (影スタジオ), along with the edition number, archival paper batch, and print master date.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#090910]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-purple-400 font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Curator Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm text-white/50">
            Details on our archival printing processes, framing finishes, and museum shipping standards.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#12121e] border-purple-500/40 shadow-lg'
                    : 'bg-[#0e0e16] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white font-display">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 font-light animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
