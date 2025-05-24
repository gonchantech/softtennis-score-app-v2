"use client";
import { SignupForm } from "@/features/auth";
import { useRouter } from "next/navigation";
import { Container } from "@/components/container/Container";
import { useNotification } from "@/context/notifications";

const SignupPage = () => {
  const router = useRouter();
  const { showNotification } = useNotification();

  const onSuccess = () => {
    showNotification({
      type: "success",
      message: "サインアップに成功しました",
      title: "サインアップ成功",
    });
    router.replace("/auth/login");
  };

  const onError = () => {
    showNotification({
      type: "error",
      message:
        "サインアップに失敗しました。id, name, passwordを確認してください",
      title: "サインアップ失敗",
    });
  };
  return (
    <Container variant="center" height="auto">
      <SignupForm onSuccess={onSuccess} onError={onError} />
    </Container>
  );
};

export default SignupPage;
