import { getPlayerName } from "../getPlayerName";

describe("getPlayerName", () => {
  const playerA1Name = "山田太郎";
  const playerA2Name = "鈴木花子";
  const playerB1Name = "佐藤次郎";
  const playerB2Name = "田中三郎";

  it("should return A1 player name", () => {
    expect(
      getPlayerName(
        "A1",
        playerA1Name,
        playerA2Name,
        playerB1Name,
        playerB2Name
      )
    ).toBe(playerA1Name);
  });

  it("should return A2 player name", () => {
    expect(
      getPlayerName(
        "A2",
        playerA1Name,
        playerA2Name,
        playerB1Name,
        playerB2Name
      )
    ).toBe(playerA2Name);
  });

  it("should return B1 player name", () => {
    expect(
      getPlayerName(
        "B1",
        playerA1Name,
        playerA2Name,
        playerB1Name,
        playerB2Name
      )
    ).toBe(playerB1Name);
  });

  it("should return B2 player name", () => {
    expect(
      getPlayerName(
        "B2",
        playerA1Name,
        playerA2Name,
        playerB1Name,
        playerB2Name
      )
    ).toBe(playerB2Name);
  });

  it("should return playerId when playerId is not recognized", () => {
    expect(
      getPlayerName(
        "C1",
        playerA1Name,
        playerA2Name,
        playerB1Name,
        playerB2Name
      )
    ).toBe("C1");
  });
});
