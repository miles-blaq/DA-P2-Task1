const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://da-p2-task1-red.vercel.app";
