import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimSectionProps {
  children: ReactNode;
  // delay?: number; // 애니메이션 시작 지연 시간 (초)
}

export default function AnimSection({ children }: AnimSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }} // 초기 상태: 투명, 아래로 30px 이동
      whileInView={{ opacity: 1, y: 0 }} // 뷰포트에 들어오면 투명도 1, 원위치
      viewport={{ once: true, amount: 0.3 }} // 뷰포트에 30% 보일 때 애니메이션 실행, 1회만
      transition={{ duration: 0.8, ease: "easeOut" }} // 부드러운 easeOut 효과, 지연시간 포함
      className="w-full"
    >
      {children}
    </motion.section>
  );
}
