import React, { useState, useRef, useEffect } from "react";
import "./App.css";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef(null);
  const bottomRef = useRef(null);

  // scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
  const trimmed = input.trim();
  if (!trimmed || loading) return;

  // add user message
  const userId = "u_" + Date.now();
  setMessages((prev) => [...prev, { id: userId, role: "user", content: trimmed }]);
  setInput("");

  // add assistant placeholder
  const assistantId = "a_" + Date.now();
  setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "" }]);

  setLoading(true);
  const controller = new AbortController();
  abortControllerRef.current = controller;

  try {
    const res = await fetch("http://localhost:3001/ask-stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: trimmed }),
      signal: controller.signal,
    });

    if (!res.ok) throw new Error("Request failed");

    // --- ✅ STREAMING LOGIC ---
    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      if (value) {
        const chunk = decoder.decode(value, { stream: true });

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: m.content + chunk } : m
          )
        );
      }
    }
  } catch (err) {
    if (err.name === "AbortError") {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, content: m.content + "\n\n[Request aborted]" } : m
        )
      );
    } else {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, content: `[Error: ${err.message}]` } : m
        )
      );
    }
  } finally {
    setLoading(false);
    abortControllerRef.current = null;
  }
};


  const abortRequest = () => {
    abortControllerRef.current?.abort();
  };

  return (
    <div className="chat-app">
      <div className="chat-window">
        {messages.map((m) => (
          <div key={m.id} className={`msg ${m.role}`}>
            <div className="bubble">{m.content}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="composer">
        <input
          className="composer-input"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        {!loading ? (
          <button className="send-btn" onClick={sendMessage} disabled={!input.trim()}>
            Send
          </button>
        ) : (
          <button className="abort-btn" onClick={abortRequest}>
            Abort
          </button>
        )}
      </div>
    </div>
  );
}
