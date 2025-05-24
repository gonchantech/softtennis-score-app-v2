import SignUpPage from "@/app/auth/signup/page";
import {
  act,
  appRender,
  screen,
  userEvent,
  waitFor,
} from "@/testing/testUtils";

const router = {
  replace: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => router,
}));

describe("SignUp Page", () => {
  it("should sign up the user into the dashboard", async () => {
    await act(async () => appRender(<SignUpPage />));

    const idInput = screen.getByLabelText(/ID/i);
    const nameInput = screen.getByLabelText(/名前/i);
    const passwordInput = screen.getByLabelText(/パスワード/i);
    const submitButton = screen.getByRole("button", {
      name: /新規登録/i,
    });

    const credentials = {
      id: "user1",
      name: "user1",
      password: "password",
    };

    await act(async () => {
      await userEvent.type(idInput, credentials.id);
      await userEvent.type(nameInput, credentials.name);
      await userEvent.type(passwordInput, credentials.password);
      await userEvent.click(submitButton);
    });

    await waitFor(() =>
      expect(router.replace).toHaveBeenCalledWith("/auth/login")
    );
  });
});
