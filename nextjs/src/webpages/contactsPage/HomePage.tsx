'use client'
import React, {useState} from 'react';

export default function ContactsPage() {
  const [status, setStatus] = useState("");

  const sendWebAppButton = async () => {
    const chatId = "8480195562";
    const res = await fetch("/api/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId }),
    });

    const data = await res.json();
    setStatus(JSON.stringify(data));
  };

  return (
    <div>
      <h1>Telegram Mini App Test</h1>
      <button onClick={sendWebAppButton}>Отправить кнопку WebApp</button>
      <div>Status: {status}</div>
    </div>
  );
};
