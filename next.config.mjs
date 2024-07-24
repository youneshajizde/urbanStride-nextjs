/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "http://localhost:1337"], // Add your API domain here
  },
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "gradient-bg": "gradient 1s ease infinite",
      },
    },
  },
  plugins: [],
};

export default nextConfig;
