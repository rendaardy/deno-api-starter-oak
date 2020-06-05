import { Context } from "https://deno.land/x/oak@v5.0.0/mod.ts";
const timingMiddleware = async (ctx: Context, next: () => Promise<void>) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
};

export { timingMiddleware };
