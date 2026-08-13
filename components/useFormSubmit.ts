"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function useFormSubmit(endpoint: string) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const formData = new FormData(form);
      const res = await fetch(endpoint, { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.error || "ارسال با خطا مواجه شد. دوباره تلاش کنید یا از طریق واتساپ پیام بدید.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("ارتباط با سرور برقرار نشد. اتصال اینترنت را بررسی کنید.");
    }
  }

  return { status, errorMsg, handleSubmit, setStatus };
}
