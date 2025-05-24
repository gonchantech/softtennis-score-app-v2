import userEvent from "@testing-library/user-event";
import MatchSetupPage from "@/app/page";
import { appRender, act, screen } from "@/testing/testUtils";

const router = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => router,
}));

describe("MatchSetupForm", () => {
  it("should correctly handle match format selection", async () => {
    await act(async () => appRender(<MatchSetupPage />));

    // 初期状態では5ゲームマッチが選択されていることを確認
    const fiveGameButton = screen.getByText("5ゲームマッチ").closest("button");
    const sevenGameButton = screen.getByText("7ゲームマッチ").closest("button");
    expect(fiveGameButton).toHaveClass("primary");
    expect(sevenGameButton).toHaveClass("gray");

    // Select 7-game match
    await userEvent.click(screen.getByText("7ゲームマッチ"));

    // Verify 7-game match is selected
    expect(fiveGameButton).toHaveClass("gray");
    expect(sevenGameButton).toHaveClass("primary");

    // Switch back to 5-game match
    await userEvent.click(screen.getByText("5ゲームマッチ"));

    // Verify 5-game match is selected
    expect(fiveGameButton).toHaveClass("primary");
    expect(sevenGameButton).toHaveClass("gray");
  });

  it("should correctly handle server selection", async () => {
    await act(async () => appRender(<MatchSetupPage />));

    // Check initial server label
    const initialServerLabel = screen.getByText("最初のサーバー");
    expect(initialServerLabel).toBeInTheDocument();

    // Verify server selection buttons
    const serverButtons = screen.getAllByRole("button", {
      name: /選手A1|選手A2|選手B1|選手B2/,
    });
    expect(serverButtons).toHaveLength(4);

    // Select different server
    await userEvent.click(screen.getByText("選手B1"));

    // Verify selected server button has primary color
    const selectedServerButton = screen.getByText("選手B1").closest("button");
    expect(selectedServerButton).toHaveClass("primary");
  });

  it("should correctly handle team and player setup", async () => {
    await act(async () => appRender(<MatchSetupPage />));

    // Check team name input fields
    const teamAInput = screen.getByDisplayValue("チームA");
    const teamBInput = screen.getByDisplayValue("チームB");
    expect(teamAInput).toBeInTheDocument();
    expect(teamBInput).toBeInTheDocument();

    // Check player name input fields
    const playerA1Input = screen.getByDisplayValue("選手A1");
    const playerA2Input = screen.getByDisplayValue("選手A2");
    const playerB1Input = screen.getByDisplayValue("選手B1");
    const playerB2Input = screen.getByDisplayValue("選手B2");
    expect(playerA1Input).toBeInTheDocument();
    expect(playerA2Input).toBeInTheDocument();
    expect(playerB1Input).toBeInTheDocument();
    expect(playerB2Input).toBeInTheDocument();

    // Input team names
    await userEvent.clear(teamAInput);
    await userEvent.clear(teamBInput);
    await userEvent.type(teamAInput, "Team Alpha");
    await userEvent.type(teamBInput, "Team Beta");

    // Input player names
    await userEvent.clear(playerA1Input);
    await userEvent.clear(playerA2Input);
    await userEvent.clear(playerB1Input);
    await userEvent.clear(playerB2Input);
    await userEvent.type(playerA1Input, "Player A1");
    await userEvent.type(playerA2Input, "Player A2");
    await userEvent.type(playerB1Input, "Player B1");
    await userEvent.type(playerB2Input, "Player B2");

    // Verify input values
    expect(teamAInput).toHaveValue("Team Alpha");
    expect(teamBInput).toHaveValue("Team Beta");
    expect(playerA1Input).toHaveValue("Player A1");
    expect(playerA2Input).toHaveValue("Player A2");
    expect(playerB1Input).toHaveValue("Player B1");
    expect(playerB2Input).toHaveValue("Player B2");
  });

  it("should correctly handle form submission", async () => {
    await act(async () => appRender(<MatchSetupPage />));

    // Get input fields by their display values
    const teamAInput = screen.getByDisplayValue("チームA");
    const teamBInput = screen.getByDisplayValue("チームB");
    const playerA1Input = screen.getByDisplayValue("選手A1");
    const playerA2Input = screen.getByDisplayValue("選手A2");
    const playerB1Input = screen.getByDisplayValue("選手B1");
    const playerB2Input = screen.getByDisplayValue("選手B2");

    // Clear and type new values
    await userEvent.clear(teamAInput);
    await userEvent.clear(teamBInput);
    await userEvent.clear(playerA1Input);
    await userEvent.clear(playerA2Input);
    await userEvent.clear(playerB1Input);
    await userEvent.clear(playerB2Input);

    await userEvent.type(teamAInput, "Team Alpha");
    await userEvent.type(teamBInput, "Team Beta");
    await userEvent.type(playerA1Input, "Player A1");
    await userEvent.type(playerA2Input, "Player A2");
    await userEvent.type(playerB1Input, "Player B1");
    await userEvent.type(playerB2Input, "Player B2");

    // Select server
    await userEvent.click(screen.getByText("Player B1"));

    // Submit form
    await userEvent.click(screen.getByRole("button", { name: /試合開始/ }));

    // Verify router.push was called
    expect(router.push).toHaveBeenCalled();
  });
});
