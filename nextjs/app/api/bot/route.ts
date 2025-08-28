// app/api/bot/route.ts
import { Telegraf } from "telegraf";

// Отключаем bodyParser не нужно — в App Router raw тело читается через request.json()
const bot = new Telegraf(process.env.BOT_TOKEN!);

bot.command("start", (ctx) => {
  ctx.reply("Бот работает! 🚀");
});

export async function POST(request: Request) {
  try {
    const update = await request.json(); // читаем JSON напрямую
    console.log("📩 Update от Telegram:", update);

    await bot.handleUpdate(update);

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("❌ Ошибка в боте:", err);
    return new Response("Bot error", { status: 500 });
  }
}

// GET можно для проверки, что route работает
export async function GET() {
  return new Response("API бот работает", { status: 200 });
}
