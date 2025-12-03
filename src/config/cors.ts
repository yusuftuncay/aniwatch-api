import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const allowedOrigins =
    process.env.ANIWATCH_API_CORS_ALLOWED_ORIGINS?.split(",").map((origin) =>
        origin.trim()
    ) || [];

const corsConfig = cors({
    allowMethods: ["GET"],
    maxAge: 600,
    credentials: true,
    origin: allowedOrigins,
});

export default corsConfig;
