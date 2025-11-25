import useSWR from "swr"
import { vi } from "vitest"

export function mockSWRResponse(data: any, error: any = undefined, isLoading: boolean = false) {
  vi.mocked(useSWR).mockReturnValue({
    data,
    error,
    isLoading,
    isValidating: false,
    mutate: vi.fn(),
  } as any)
}
