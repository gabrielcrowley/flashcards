import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
//import { cards } from "~/server/db/schema";

export const cardRouter = createTRPCRouter({
  test: protectedProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getName: protectedProcedure.query(({ ctx }) => {
    return ctx.user.firstName;
  }),
});
