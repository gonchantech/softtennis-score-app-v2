import { getIsTeamAPoint } from "../getIsTeamAPoint";
import { RawPointInput } from "@/types";

describe("getIsTeamAPoint", () => {
  it("should return true when A team player scores without error", () => {
    const point: RawPointInput = {
      server: "A1",
      firstServeIn: true,
      rallyLength: "short",
      player: "A1",
      playType: "forehandstroke",
      ballCourse: "cross",
    };
    expect(getIsTeamAPoint(point)).toBe(true);
  });

  it("should return false when B team player scores without error", () => {
    const point: RawPointInput = {
      server: "B1",
      firstServeIn: true,
      rallyLength: "short",
      player: "B1",
      playType: "forehandstroke",
      ballCourse: "cross",
    };
    expect(getIsTeamAPoint(point)).toBe(false);
  });

  it("should return true when B team player makes an error", () => {
    const point: RawPointInput = {
      server: "A1",
      firstServeIn: true,
      rallyLength: "short",
      player: "B1",
      playType: "forehandstroke",
      ballCourse: "cross",
      errorCause: "net",
    };
    expect(getIsTeamAPoint(point)).toBe(true);
  });

  it("should return false when A team player makes an error", () => {
    const point: RawPointInput = {
      server: "B1",
      firstServeIn: true,
      rallyLength: "short",
      player: "A1",
      playType: "forehandstroke",
      ballCourse: "cross",
      errorCause: "net",
    };
    expect(getIsTeamAPoint(point)).toBe(false);
  });
});
