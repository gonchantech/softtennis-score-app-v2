import LoginPage from "@/app/auth/login/page";
import {
  appRender,
  screen,
  userEvent,
  waitFor,
  act,
} from "@/testing/testUtils";

const router = {
  replace: jest.fn(),
  query: {},
};

jest.mock("next/navigation", () => ({
  useRouter: () => router,
  useSearchParams: () => {
    return {
      get: (key: string) => {
        if (key === "redirect") return "";
        return null;
      },
    };
  },
}));

describe("Login Page", () => {
  it("should login the user into the dashboard", async () => {
    await act(async () => appRender(<LoginPage />));

    screen.debug();

    const idInput = screen.getByLabelText("ID");

    const nameInput = screen.getByLabelText("名前");

    const passwordInput = screen.getByLabelText("パスワード");

    const submitButton = screen.getByRole("button", {
      name: /ログイン/i,
    });

    const credentials = {
      id: "1",
      name: "田中",
      password: "password",
    };

    await act(async () => {
      await userEvent.type(idInput, credentials.id);
      await userEvent.type(nameInput, credentials.name);
      await userEvent.type(passwordInput, credentials.password);
      await userEvent.click(submitButton);
    });

    await waitFor(() => expect(router.replace).toHaveBeenCalledWith("/"));
  });
});
