import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)", 
        'custom-heading':'#25221E' , 
        'custom-text':'#6F6D6A' ,  
        'custom-subheading':'#25221E' , 
        'custom-bg':'#FAFAFA' ,
        'custom-hover':'#EFEDEC' 


      },
    },
  },
  plugins: [],
} satisfies Config;
