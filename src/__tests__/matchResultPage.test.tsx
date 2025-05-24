import userEvent from "@testing-library/user-event";
import MatchResultPage from "@/app/match/history/[matchId]/page";
import { appRender, act, screen } from "@/testing/testUtils";
import { testData } from "@/testing/testData";

const router = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useParams: () => ({ matchId: "1" }),
  useRouter: () => router,
}));

const mockUseMatch = jest.fn();

jest.mock("@/features/match/api/getMatch", () => ({
  useMatch: () => mockUseMatch(),
}));

describe("MatchResultPage", () => {
  beforeEach(() => {
    mockUseMatch.mockReturnValue({
      data: {
        matchResultMeta: testData.matchMeta.filter(
          (match) => match.id === "1"
        )[0],
        points: testData.point.filter((point) => point.matchId === "1"),
      },
      isLoading: false,
    });
  });

  it("should display match result, stats, and point history", async () => {
    await act(async () => appRender(<MatchResultPage />));

    // マッチ結果の表示を確認
    expect(screen.getByText("田中 / 鈴木")).toBeInTheDocument();
    expect(screen.getByText("佐藤 / 高橋")).toBeInTheDocument();

    //　ラリー統計を表示
    expect(screen.getByText("ラリー長の統計")).toBeInTheDocument();
    expect(screen.getByText("4本以内のラリー")).toBeInTheDocument();
    expect(screen.getByText("17ポイント")).toBeInTheDocument();

    // サーブ統計を表示
    expect(screen.getByText("サーブ統計")).toBeInTheDocument();
    expect(screen.getByText("55%")).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("36%")).toBeInTheDocument();
    expect(screen.getByText("75%")).toBeInTheDocument();

    // ポイント履歴の表示を確認
    const pointHistory = screen.getByTestId("point-history");
    expect(pointHistory).toHaveTextContent("ポイント履歴");
    expect(pointHistory).toHaveTextContent("フォアハンドストローク");
    expect(pointHistory).toHaveTextContent("クロス");

    // 「一覧へ戻る」ボタンの動作を確認
    await userEvent.click(screen.getByText("一覧へ戻る"));
    expect(router.push).toHaveBeenCalledWith("/match/history");
  });

  it("should show 'Match not found' when data is not available", async () => {
    mockUseMatch.mockReturnValue({
      data: undefined,
      isLoading: false,
    });

    await act(async () => appRender(<MatchResultPage />));
    expect(screen.getByText("Match not found")).toBeInTheDocument();
  });
});
