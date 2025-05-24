import { formatTime } from "../formatTime";

describe("formatTime", () => {
  it("should format timestamp to time string", () => {
    const timestamp = new Date("2024-01-01T12:34:56").getTime();
    const formatted = formatTime(timestamp);
    expect(formatted).toMatch(/^\d{2}:\d{2}$/);
  });

  it("should handle midnight", () => {
    const timestamp = new Date("2024-01-01T00:00:00").getTime();
    const formatted = formatTime(timestamp);
    expect(formatted).toBe("24:00");
  });

  it("should handle noon", () => {
    const timestamp = new Date("2024-01-01T12:00:00").getTime();
    const formatted = formatTime(timestamp);
    expect(formatted).toBe("12:00");
  });

  it("should handle single digit hours and minutes", () => {
    const timestamp = new Date("2024-01-01T09:05:00").getTime();
    const formatted = formatTime(timestamp);
    expect(formatted).toBe("09:05");
  });
});
