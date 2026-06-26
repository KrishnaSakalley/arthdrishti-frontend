import { useState, useCallback } from "react";

function generateUUID() {
  return crypto.randomUUID();
}

export function useSessionId() {
  const [sessionId, setSessionId] = useState(() => {
    const existing = localStorage.getItem("arthdrishti_session_id");
    if (existing) return existing;

    const fresh = generateUUID();
    localStorage.setItem("arthdrishti_session_id", fresh);
    return fresh;
  });

  const resetSession = useCallback(() => {
    const fresh = generateUUID();
    localStorage.setItem("arthdrishti_session_id", fresh);
    setSessionId(fresh);
    return fresh;
  }, []);

  return { sessionId, resetSession };
}