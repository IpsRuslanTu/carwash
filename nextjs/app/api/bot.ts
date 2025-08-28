import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN!);

bot.command("start", (ctx) => {
  ctx.reply("Открыть приложение:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀 Запустить WebApp",
            web_app: { url: "https://carwash-vert.vercel.app/" },
          },
        ],
      ],
    },
  });
});

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    await bot.handleUpdate(req.body);
    return res.status(200).end();
  }
  res.status(200).send("Bot is running");
}