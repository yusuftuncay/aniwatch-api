import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const allowedOrigins =
    process.env.ANIWATCH_API_CORS_ALLOWED_ORIGINS?.split(",").map((origin) =>
        origin.trim()
    ) || [];

// Log CORS configuration for debugging (only in development/first load)
if (process.env.NODE_ENV !== "production") {
    console.log("CORS Allowed Origins:", allowedOrigins);
}

const corsConfig = cors({
    allowMethods: ["GET"],
    maxAge: 600,
    credentials: true,
    origin: allowedOrigins,
});

export default corsConfig;
