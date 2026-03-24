/**
 * commonLabelのビジュアルリグレッションテスト
 */
import { CommonLabel } from "@/components/ui/common-label";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "vitest/browser";

test("CommonLabel - 単一アイテム リグレッションテスト", async () => {
  render(<CommonLabel text="名前" id="name" />);

  await expect(page.getByTestId("common-label-root")).toMatchScreenshot(
    "common-label-single"
  );
});

test("CommonLabel - 複数アイテム リグレッションテスト", async () => {
  render(<CommonLabel text="名前" id="name" required />);

  // スクリーンショット比較
  await expect(page.getByTestId("common-label-root")).toMatchScreenshot(
    "common-label-multiple"
  );
});
