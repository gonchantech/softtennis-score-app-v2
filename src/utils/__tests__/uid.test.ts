import { uid } from "../uid";

describe("uid", () => {
  it("should generate unique IDs", () => {
    const id1 = uid();
    const id2 = uid();
    expect(id1).not.toBe(id2);
  });

  it("should generate string IDs", () => {
    const id = uid();
    expect(typeof id).toBe("string");
  });

  it("should not contain dots", () => {
    const id = uid();
    expect(id).not.toContain(".");
  });

  it("should generate IDs with expected length", () => {
    const id = uid();
    // performance.now()とMath.random()の組み合わせなので、最低でも10文字以上はあるはず
    expect(id.length).toBeGreaterThan(10);
  });
});
