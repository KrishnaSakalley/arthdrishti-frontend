const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

async function postJSON(endpoint, payload) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}

export function sendChat(message, sessionId, mode = "profiler") {
  return postJSON("/chat", { message, session_id: sessionId, mode });
}

export function sendVoiceChat(message, sessionId, mode, languageCode = "hi-IN") {
  return postJSON("/voice-chat", {
    message,
    session_id: sessionId,
    mode,
    language_code: languageCode,
  });
}

export function checkFraud(fraudDetails, sessionId) {
  return postJSON("/fraud-check", { ...fraudDetails, session_id: sessionId });
}

export function getQuantAnalysis(stockName, sessionId) {
  return postJSON("/quant-analysis", { stock_name: stockName, session_id: sessionId });
}