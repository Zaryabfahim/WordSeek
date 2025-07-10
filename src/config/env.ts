import { z } from "zod";

export const env = z
  .object({
    BOT_TOKEN: z.string().min(1, { message: "7949443460:AAFI1Uiiye9JtG_EJzLVSvl6r8d4fK9_JXs" }),
    DATABASE_URI: z.string().min(1, { message: "mongodb+srv://Zaryab:Zaryab123@cluster0.mge1ngz.mongodb.net/" }),
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    ADMIN_USERS: z
      .string()
      .default("")
      .transform((val) => val.split(",").filter(Boolean).map(Number)),
    REDIS_URI: z.string().default("redis://127.0.0.1:6379"),
  })
  .parse(process.env);
