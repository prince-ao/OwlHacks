import mongoose from "mongoose";
import { Elysia, t } from "elysia";
import { randomSchema } from "./schemas";

const PORT = 8080;

const Questions = mongoose.model("questions", randomSchema);

const app = new Elysia()
  .get("/", async () => await Questions.find().lean())
  .post(
    "/",
    ({ body }) => {
      const question = new Questions({ questionName: body.text });
      question.save();
      return "Success";
    },
    {
      body: t.Object({
        text: t.String(),
      }),
    }
  )
  .listen(PORT, () => console.log(`listening on port ${PORT}`));

export type App = typeof app;
