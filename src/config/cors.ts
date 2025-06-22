import { cors } from "hono/cors";
import { env } from "./env.js";

const DEFAULT_ALLOWED_ORIGINS = ["http://localhost:4000", "*"];

const allowedOrigins = process.env.ANIWATCH_API_CORS_ALLOWED_ORIGINS
  ? process.env.ANIWATCH_API_CORS_ALLOWED_ORIGINS.split(",")
  : ["http://127.0.0.1:5500", "https://letswatch.one", "*"];

export const corsConfig = cors({
    allowMethods: ["GET"],
    maxAge: 600,
    credentials: true,
    origin: allowedOrigins,
});
