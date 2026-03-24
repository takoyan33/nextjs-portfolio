/**
 * Breadcrumb のビジュアルリグレッションテスト
 */
import type { ReactNode } from "react";
import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "vitest/browser";

// Next.js の App Router コンテキストに依存する TransitionLink をモック
vi.mock("@/components/ui/transition-link", () => ({
  TransitionLink: ({
    children,
    href,
    className,
    "aria-current": ariaCurrent,
  }: {
    children: ReactNode;
    href: string;
    className?: string;
    "aria-current"?:
      | "page"
      | "step"
      | "location"
      | "date"
      | "time"
      | "true"
      | "false";
  }) => (
    <a href={href} className={className} aria-current={ariaCurrent}>
      {children}
    </a>
  ),
}));

import { Breadcrumb } from "@/components/ui/breadcrumb";

test("Breadcrumb - 単一アイテム リグレッションテスト", async () => {
  render(<Breadcrumb items={{ name: "About", link: "/about" }} />);

  await expect(page.getByTestId("breadcrumb-root")).toMatchScreenshot(
    "breadcrumb-single"
  );
});

test("Breadcrumb - 複数アイテム リグレッションテスト", async () => {
  render(
    <Breadcrumb
      items={[
        { name: "Portfolios", link: "/portfolios" },
        { name: "Detail", link: "/portfolios/1" },
      ]}
    />
  );

  await expect(page.getByTestId("breadcrumb-root")).toMatchScreenshot(
    "breadcrumb-multiple"
  );
});
