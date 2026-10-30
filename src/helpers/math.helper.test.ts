import { describe, expect, test } from "vitest";
import { add, divide, multiply, substract } from "./math.helper";

describe("add", () => {
  test("should add two positive numbers", () => {
    const [a, b] = [1, 2];
    expect(add(a, b)).toBe(a + b);
  });

  test("should add two negative numbers", () => {
    const [a, b] = [-1, -2];
    expect(add(a, b)).toBe(a + b);
  });
});

describe("substract", () => {
  test("should substract two positive numbers", () => {
    const [a, b] = [1, 2];
    expect(substract(a, b)).toBe(a - b);
  });

  test("should substract two negative numbers", () => {
    const [a, b] = [-1, -2];
    expect(substract(a, b)).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply two positive numbers", () => {
    const [a, b] = [1, 2];
    expect(multiply(a, b)).toBe(a * b);
  });

  test("should multiply two negative numbers", () => {
    const [a, b] = [-1, -2];
    expect(multiply(a, b)).toBe(a * b);
  });
});

describe("divide", () => {
  test("should divide two positive numbers", () => {
    const [a, b] = [1, 2];
    expect(divide(a, b)).toBe(a / b);
  });

  test("should divide two negative numbers", () => {
    const [a, b] = [-1, -2];
    expect(divide(a, b)).toBe(a / b);
  });
});
