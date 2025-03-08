import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// Handle both GET and POST requests for Kinde authentication
export const GET = handleAuth();
export const POST = handleAuth();
