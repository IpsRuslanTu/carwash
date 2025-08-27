import { NextApiRequest, NextApiResponse } from "next";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function handler(req: any, res: any) {
    const botToken = process.env.BOT_TOKEN;
    const chatId = req.body.chat_id;

    if (!botToken || !chatId) {
        return res.status(400).json({ error: "Missing BOT_TOKEN or chat_id" });
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text: "Открыть Mini App:",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "🚀 Запустить",
                            web_app: { url: "https://cafe-telegram.vercel.app/" },
                        },
                    ],
                ],
            },
        }),
    });

    const data = await response.json();
    res.status(200).json(data);
}