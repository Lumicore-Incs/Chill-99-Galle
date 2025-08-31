import { AnimatePresence, motion } from "framer-motion";
import { Clock, Coffee, CreditCard, Info } from "lucide-react";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import whychoose from "../../assets/whychoose.jpg";

const questions = [
  {
    icon: Clock,
    q: "What are the opening hours?",
    a: "A unique cultural experience held exclusive at Chill 99 Galle Fort. It is open from 7:00 a.m. to 10:00 p.m. every day of the week.",
  },
  {
    icon: Coffee,
    q: "What is the most delicious food we have?",
    a: "We have the ability to delight children, young and old with delicious new items, foods and beverages in any way. Our most popular foods are Pasta, Burgers and Main Course and Bubble Tea from beverage items.",
  },
  {
    icon: CreditCard,
    q: "What forms of payment do you accept?",
    a: "We accept cash, Visa, Mastercard, American Express and direct bank deposits.",
  },
  {
    icon: Info,
    q: "What is the refund policy?",
    a: "We focus on providing our guests with an unprecedented experience. We do not accommodate requests for refunds, cancellations, or date changes.",
  },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="bg-[#261410] w-full px-4 lg:px-50 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-center text-white gap-8"
      aria-labelledby="faq-heading"
    >
      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.img
          src={whychoose}
          alt="Why choose us"
          className="w-full max-w-md lg:w-[80%] rounded-lg object-cover shadow-lg"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <motion.div
        className="w-full lg:w-1/2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <div className="text-center lg:text-left mb-6">
          <p className="text-lg lg:text-xl font-medium text-[#FAF3E0] mb-2">Why Choose Us</p>
          <h2
            id="faq-heading"
            className="text-[var(--green-primary)] italic font-semibold text-2xl sm:text-3xl lg:text-4xl"
          >
            Your perfect café escape in Galle Fort.
          </h2>
        </div>

        <div className="space-y-3">
          {questions.map((itemQ, idx) => (
            <motion.div key={idx} variants={item}>
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                className="w-full flex items-center justify-between gap-4 bg-white/5 hover:bg-white/10 transition-colors duration-200 rounded-md p-4"
              >
                <span className="flex items-center gap-3 text-left text-sm lg:text-base font-medium">
                  {itemQ.icon && <itemQ.icon className="w-5 h-5 text-[var(--green-primary)]" />}
                  <span>{itemQ.q}</span>
                </span>
                <motion.span
                  animate={{ rotate: open === idx ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="ml-2 text-[var(--green-primary)]"
                >
                  <FaChevronDown />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden px-4"
                  >
                    <div className="py-3 text-sm text-[#E7DCC8]">{itemQ.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
