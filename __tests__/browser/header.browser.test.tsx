/**
 * Headerのビジュアルリグレッションテスト
 */
import { Header } from "@/components/layout/header";
import type { ReactNode } from "react";
import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "vitest/browser";

vi.mock("@/components/ui/transition-link", () => ({
  TransitionLink: ({
    children,
    href,
    className,
  }: {
    children: ReactNode;
    href: string;
    className?: string;
  }) => {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  },
}));

test("Header - リグレッションテスト", async () => {
  render(<Header />);

  // スクリーンショット比較
  await expect(page.getByTestId("header-root")).toMatchScreenshot(
    "header-single"
  );
});
