import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
//import { cards } from "~/server/db/schema";

export const cardRouter = createTRPCRouter({
  test: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});
