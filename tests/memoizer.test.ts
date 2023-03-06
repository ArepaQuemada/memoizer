import { memoizer } from "../src/memoizer";

describe("Testing memoizer - primitive params", () => {
  it("Should memoize numbers", () => {
    const sumFn = jest.fn().mockImplementation((a: number, b: number) => a + b);
    const memoizedSum = memoizer(sumFn);
    expect(memoizedSum(1, 2)).toBe(3);
    expect(sumFn).toHaveBeenCalledTimes(1);

    expect(memoizedSum(1, 2)).toBe(3);
    expect(sumFn).not.toHaveBeenCalledTimes(2);
  });

  it("Should memoize strings", () => {
    const capitalizeFullNameFn = jest
      .fn()
      .mockImplementation((fullName: string) =>
        fullName
          .split(" ")
          .map((name) =>
            name.charAt(0).toUpperCase().concat(name.substring(1).toLowerCase())
          )
          .join(" ")
      );
    const memoizedCapitalize = memoizer(capitalizeFullNameFn);
    expect(memoizedCapitalize("john doE")).toBe("John Doe");
    expect(capitalizeFullNameFn).toHaveBeenCalledTimes(1);

    memoizedCapitalize("john doE");
    expect(capitalizeFullNameFn).not.toHaveBeenCalledTimes(2);
  });
});
