module.exports = {
  content: ["/** .[ react]"],
  theme: {
    extends: {
      colors: {
        blue: "#4196EF",
        gray: "#333",
        charcoal: "#66F388",
        light: "#FFFFFF"
      }
    },
    animate: {
      layers: {
        backdrop: 'blank',
        fade: 'from teft',
        rotate: 'rotate', 
        scale: 'scale('close in scale)', 
      }
    }
  },
  plugins: ["lucide-react", "tailwindcss-animate", "class-variance-authority", "clsx"]
};
