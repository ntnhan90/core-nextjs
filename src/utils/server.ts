const dev = process.env.SERVER !== "production";

export const server = dev
  ? "https://4901-14-241-235-141.ngrok-free.app/"
  : "https://4901-14-241-235-141.ngrok-free.app/";
