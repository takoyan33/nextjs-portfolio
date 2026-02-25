"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editPortfolio(formData: FormData, id: number) {
  console.log(formData);
  const title = formData.get("historyTitle") as string;
  const date = formData.get("historyDate") as string;
  const body = formData.get("historyBody") as string;

  const res = await fetch(`${process.env.BACKEND_API_URL}api/v1/jobs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      title,
      date,
      body,
    }),
  });

  // ✅ エラーならデータを返す（redirectしない）
  if (!res.ok) {
    return { ok: false, error: "更新に失敗しました。" };
  }
  revalidatePath("/admin/edit/job");

  // ✅ 成功時のみリダイレクト
  redirect("/admin/edit/job");
}
