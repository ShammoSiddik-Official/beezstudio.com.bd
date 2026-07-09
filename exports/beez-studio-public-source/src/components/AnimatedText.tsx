import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const charVariants: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const wordVariants: Variants = {
  hidden: {},
  visible: {},
};

/** Animates text word-by-word with a stagger */
export function AnimatedWords({
  text,
  className = "",
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const words = text.split(" ");
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={wordVariants}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block overflow-hidden mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay + i * 0.08,
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/** Animates text character-by-character */
export function AnimatedChars({
  text,
  className = "",
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const chars = text.split("");
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          custom={i}
          variants={charVariants}
          style={{ transformOrigin: "top center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/** Animated counter that counts up to a number */
export function AnimatedCounter({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.span>
      {suffix}
    </motion.span>
  );
}
