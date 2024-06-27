import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://budget_owner:cqdDXl1STO2A@ep-old-truth-a5rn6i3u.us-east-2.aws.neon.tech/budget?sslmode=require"
);
export const db = drizzle(sql, { schema });