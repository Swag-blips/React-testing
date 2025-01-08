import React from "react";
import { renderHook, screen, act,} from "@testing-library/react";
import { describe, it, expect,  } from "vitest";
import { useCounter } from "./useCounter";
import "@testing-library/jest-dom/vitest";

describe("UserProfile", () => {
  it("initial value is 5", () => {
    const { result } = renderHook(() => useCounter(5));

    expect(result.current.count).toBe(5);
  });
  it("increment", () => {
    const { result } = renderHook(() => useCounter(5));

    expect(result.current.count).toBe(5);

    act(() => {
        result.current.increment()
    })
    expect(result.current.count).toBe(6)
  });
  it("decrement", () => {
    const { result } = renderHook(() => useCounter(5));

    expect(result.current.count).toBe(5);

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });
});
