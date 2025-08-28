import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN!);

// Команда /start → отвечает сообщением с кнопкой WebApp
bot.command("start", (ctx) => {
  ctx.reply("Открыть приложение:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀 Запустить WebApp",
            web_app: { url: "https://carwash-vert.vercel.app/" }, // твой сайт
          },
        ],
      ],
    },
  });
});

// POST handler — Telegram присылает апдейт сюда
export async function POST(request: Request) {
  try {
    const update = await request.json();
    console.log("📩 Update от Telegram:", update);

    await bot.handleUpdate(update);

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("❌ Ошибка в боте:", err);
    return new Response("Bot error", { status: 500 });
  }
}

// GET — просто проверка, что API работает
export async function GET() {
  return new Response("API бот работает", { status: 200 });
}
