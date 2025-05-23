

const config = {
  theme:{
    extend:{
      animation:{
        "loop-scroll":"loop-scroll 50s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateY(0)"},
          to:{transform:"translateY(-100%)"},
        },
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
