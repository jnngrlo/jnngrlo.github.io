import { motion } from "framer-motion";

export default function MainTitle() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-darkbg px-6 text-center text-white font-sans">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl">
        full-flow developer
      </h1>
      <p className="mt-6 text-lg md:text-xl text-primary max-w-xl leading-relaxed">
        기획, 디자인, 개발을 모두 경험하며
        <br />
        전체적인 흐름 속에서
        <br />
        ‘어떻게 만들지’와 ‘왜 만들지’를 함께 고민합니다.
      </p>
    </section>
    // <div className="text-center space-y-4">
    //   <motion.h1
    //     className="text-4xl md:text-6xl font-bold"
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //   >
    //     full-flow developer
    //   </motion.h1>
    //   <motion.p
    //     className="text-base md:text-xl text-muted-foreground"
    //     initial={{ opacity: 0, y: 10 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ delay: 0.3, duration: 0.8 }}
    //   >
    //     기획, 디자인, 개발을 모두 경험하며
    //     <br />
    //     전체적인 흐름 속에서
    //     <br />
    //     '어떻게 만들지'와 '왜 만들지'를 함께 고민합니다.
    //   </motion.p>
    // </div>
  );
}
