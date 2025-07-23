/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10B981", // 에메랄드 그린
        secondary: "#EC4899", // 핫핑크
        accent: "#3B82F6", // 전기 파랑
        darkbg: "#0F172A", // 딥 네이비
        muted: "#6B7280", // 차콜 그레이
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      animation: {
        "gradient-flow": "gradientFlow 15s ease infinite",
      },
      keyframes: {
        gradientFlow: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
