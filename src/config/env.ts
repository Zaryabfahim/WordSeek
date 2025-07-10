import { z } from "zod";

export const env = z
  .object({
    BOT_TOKEN: z.string().min(1, {
      message: "BOT_TOKEN is required",
    }),
    DATABASE_URI: z.string().min(1, {
      message: "DATABASE_URI is required",
    }),
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    ADMIN_USERS: z
      .string()
      .default("6037958673")
      .transform((val) =>
        val.split(",").filter(Boolean).map((v) => Number(v.trim()))
      ),
    REDIS_URI: z.string().default("redis://127.0.0.1:6379"),
  })
  .parse({
    BOT_TOKEN: "7949443460:AAFI1Uiiye9JtG_EJzLVSvl6r8d4fK9_JXs",
    DATABASE_URI: "mongodb+srv://Zaryab:Zaryab123@cluster0.mge1ngz.mongodb.net/",
    NODE_ENV: "development",
    ADMIN_USERS: "6037958673",
    REDIS_URI: "redis://127.0.0.1:6379",
  });