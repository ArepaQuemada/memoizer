import { memoizer } from "../src/memoizer";

describe("Non primitive values", () => {
  it("Should memoize object structure", () => {
    const p1 = {
      name: "John",
      age: 20,
    };

    const p2 = {
      name: "John",
      age: 21,
    };

    const p3 = {
      name: "Liam",
    };

    const p4 = {
      name: "John",
      age: 20,
    };

    const getNameAndAge = jest
      .fn()
      .mockImplementation((person) => `${person.name} + ${person.age}`);
    const memoizedGetNameAndAge = memoizer(getNameAndAge);

    memoizedGetNameAndAge(p1);
    expect(getNameAndAge).toHaveBeenCalledTimes(1);

    memoizedGetNameAndAge(p4);
    expect(getNameAndAge).not.toHaveBeenCalledTimes(2);

    memoizedGetNameAndAge(p2);
    memoizedGetNameAndAge(p3);

    expect(getNameAndAge).toHaveBeenCalledTimes(3);

    memoizedGetNameAndAge(p2);
    expect(getNameAndAge).not.toHaveBeenCalledTimes(4);
  });
});
