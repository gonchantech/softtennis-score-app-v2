import { getCookieValue } from "../getCookieValue";

describe("getCookieValue", () => {
  beforeEach(() => {
    // テスト前にcookieをクリア
    document.cookie = "";
  });

  it("should return cookie value when cookie exists", () => {
    document.cookie = "testCookie=testValue";
    expect(getCookieValue("testCookie")).toBe("testValue");
  });

  it("should return null when cookie does not exist", () => {
    expect(getCookieValue("nonExistentCookie")).toBeNull();
  });

  it("should handle multiple cookies", () => {
    document.cookie = "cookie1=value1";
    document.cookie = "cookie2=value2";
    expect(getCookieValue("cookie1")).toBe("value1");
    expect(getCookieValue("cookie2")).toBe("value2");
  });

  it("should handle cookies with spaces", () => {
    document.cookie = "cookie with spaces=value with spaces";
    expect(getCookieValue("cookie with spaces")).toBe("value with spaces");
  });
});
