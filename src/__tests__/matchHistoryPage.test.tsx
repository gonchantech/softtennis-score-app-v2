import { act, screen } from "@testing-library/react";
import MatchHistoryPage from "@/app/match/history/page";
import { appRender } from "@/testing/testUtils";
import { userEvent } from "@/testing/testUtils";
import { getUser } from "@/testing/mocks/utils";
import { testData } from "@/testing/testData";

jest.mock("@/features/auth", () => ({
  useUser: () => ({ data: getUser() }),
}));

jest.mock("@/features/match/api/getMatches", () => ({
  useMatches: () => ({
    data: testData.matchMeta,
  }),
}));

const router = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => router,
}));

describe("MatchHistory", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should display matches when data is loaded", async () => {
    await act(async () => appRender(<MatchHistoryPage />));

    expect(screen.getByText("Match History")).toBeInTheDocument();
    expect(screen.getByText("田中・鈴木 vs 佐藤・高橋")).toBeInTheDocument();
    expect(screen.getByText("北高校 vs 南高校")).toBeInTheDocument();
    expect(screen.getByText("4 - 2")).toBeInTheDocument();
    expect(screen.getByText("佐々木・勝俣 vs 多井・日向")).toBeInTheDocument();
    expect(screen.getByText("東京大学 vs 京都大学")).toBeInTheDocument();
    expect(screen.getByText("3 - 0")).toBeInTheDocument();
  });

  it("should call onViewDetails when a match is clicked", async () => {
    await act(async () => appRender(<MatchHistoryPage />));

    const detailButtons = screen.getAllByText("詳細を見る");
    const firstMatch = detailButtons[0];
    await userEvent.click(firstMatch);

    expect(router.push).toHaveBeenCalledWith("/match/history/1");
  });
});
