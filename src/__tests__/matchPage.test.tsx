import userEvent from "@testing-library/user-event";
import MatchPage from "@/app/match/page";
import { appRender, act, screen } from "@/testing/testUtils";

const router = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => router,
}));

describe("MatchPage", () => {
  describe("Scoring Components", () => {
    it("should record point and update score, history, and tracker", async () => {
      await act(async () => appRender(<MatchPage />));

      // ポイント記録フォームの入力
      // ファーストサーブをインに設定
      await userEvent.click(screen.getByText("イン"));

      // ラリー長を4本以内に設定
      await userEvent.click(screen.getByText("4本以内"));

      // 最終ショット選手を選択
      await userEvent.click(screen.getByRole("button", { name: "選手A1" }));

      // ショット種類を選択
      await userEvent.click(screen.getByRole("combobox"));
      await userEvent.click(screen.getByText("フォアハンドストローク"));

      // ボールコースをクロスに設定
      await userEvent.click(screen.getByText("クロス"));

      // 結果を得点に設定
      await userEvent.click(screen.getByText("得点"));

      // ポイントを記録
      await userEvent.click(screen.getByText("ポイントを記録"));

      // ScoreTrackerの更新を確認
      expect(screen.getByText("1 - 0")).toBeInTheDocument();

      // PointHistoryの更新を確認
      const pointHistory = screen.getByTestId("point-history");
      expect(pointHistory).toHaveTextContent("選手A1");
      expect(pointHistory).toHaveTextContent("フォアハンドストローク");
      expect(pointHistory).toHaveTextContent("クロス");

      // ミスの場合のテスト
      // 結果をミスに設定
      await userEvent.click(screen.getByText("ミス"));

      // ミスの種類を選択
      await userEvent.click(screen.getByText("サイドアウト"));

      // ポイントを記録
      await userEvent.click(screen.getByText("ポイントを記録"));

      // ScoreTrackerの更新を確認
      expect(screen.getByText("1 - 1")).toBeInTheDocument();

      // PointHistoryの更新を確認
      expect(pointHistory).toHaveTextContent("サイドアウト");
    });

    it("should show error modal when trying to record point after match completion", async () => {
      await act(async () => appRender(<MatchPage />));

      // 試合を終了
      await userEvent.click(screen.getByText("試合を終了"));
      await userEvent.click(screen.getByText("はい"));

      // ポイントを記録しようとする
      await userEvent.click(screen.getByText("ポイントを記録"));

      // エラーモーダルが表示されることを確認
      expect(
        screen.getByText(
          "試合が終了しているので、新しいポイントを記録できません"
        )
      ).toBeInTheDocument();
    });
  });
  describe("MatchControl", () => {
    it("should show complete modal and navigate to result page when confirmed", async () => {
      await act(async () => appRender(<MatchPage />));

      // 試合終了ボタンをクリック
      await userEvent.click(screen.getByText("試合を終了"));

      // モーダルが表示されることを確認
      expect(screen.getByText("試合を終了しますか？")).toBeInTheDocument();

      // はいボタンをクリック
      await userEvent.click(screen.getByText("はい"));

      // 結果ページに遷移することを確認
      expect(router.push).toHaveBeenCalledWith("/match/result");
    });

    it("should close complete modal when cancelled", async () => {
      await act(async () => appRender(<MatchPage />));

      // 試合終了ボタンをクリック
      await userEvent.click(screen.getByText("試合を終了"));

      // いいえボタンをクリック
      await userEvent.click(screen.getByText("いいえ"));

      // モーダルが閉じることを確認
      expect(
        screen.queryByText("試合を終了しますか？")
      ).not.toBeInTheDocument();
    });

    it("should show server change modal and update server when selected", async () => {
      await act(async () => appRender(<MatchPage />));

      // サーバー変更ボタンをクリック
      await userEvent.click(
        screen.getByRole("button", { name: "サーバーを変更" })
      );

      // モーダルが表示されることを確認
      expect(
        screen.getByRole("heading", { name: "サーバーを変更" })
      ).toBeInTheDocument();

      // 新しいサーバーを選択
      await userEvent.click(screen.getByText("選手B1 (B1)"));

      // モーダルが閉じることを確認
      expect(
        screen.queryByRole("heading", { name: "サーバーを変更" })
      ).not.toBeInTheDocument();
    });

    it("should show reset confirmation and reset match when confirmed", async () => {
      await act(async () => appRender(<MatchPage />));

      // リセットボタンをクリック
      await userEvent.click(screen.getByText("試合をリセット"));

      // リセット確認ボタンが表示されることを確認
      expect(screen.getByText("リセットを確認")).toBeInTheDocument();

      // リセット確認ボタンをクリック
      await userEvent.click(screen.getByText("リセットを確認"));

      // ボタンが元の状態に戻ることを確認
      expect(screen.getByText("試合をリセット")).toBeInTheDocument();
    });

    it("should navigate to top page when top button is clicked", async () => {
      await act(async () => appRender(<MatchPage />));

      // トップ画面へ戻るボタンをクリック
      await userEvent.click(screen.getByText("トップ画面へ戻る"));

      // トップページに遷移することを確認
      expect(router.push).toHaveBeenCalledWith("/");
    });
  });
});
