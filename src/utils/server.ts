const dev = process.env.SERVER !== "production";

export const server = dev
  ? "https://154f-14-241-235-141.ngrok-free.app/"
  : "https://154f-14-241-235-141.ngrok-free.app/";
