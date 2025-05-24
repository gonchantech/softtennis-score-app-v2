"use client";

import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { useUser } from "@/features/auth";
import { LogoutButton } from "@/features/auth";
import { Button } from "@/components/button/Button";
import { useRouter } from "next/navigation";
import { Stack } from "../stack/";
import { useNotification } from "@/context/notifications";

export const Header: React.FC = () => {
  const { data: user, isLoading } = useUser();
  const router = useRouter();
  const { showNotification } = useNotification();

  const onTopClick = () => {
    router.push("/");
  };

  const onSignupClick = () => {
    router.push("/auth/signup");
  };

  const onLoginClick = () => {
    router.push("/auth/login");
  };

  const onLogoutSuccess = () => {
    showNotification({
      type: "success",
      message: "ログアウトしました",
      title: "ログアウト成功",
    });
    router.push("/");
  };

  const onLogoutError = () => {
    showNotification({
      type: "error",
      message: "ログアウトに失敗しました",
      title: "ログアウト失敗",
    });
  };

  const onMatchHistoryClick = () => {
    router.push("/match/history");
  };

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>ソフトテニススコアキーパー</h1>
        <Stack direction="horizontal" gap="sm">
          <Button onClick={onTopClick} variant="solid" size="md" color="gray">
            トップ画面へ
          </Button>
          {isLoading ? (
            <div>Loading...</div>
          ) : user ? (
            <>
              <Button
                onClick={onMatchHistoryClick}
                variant="solid"
                size="md"
                color="gray"
              >
                過去の試合
              </Button>
              <LogoutButton
                onSuccess={onLogoutSuccess}
                onError={onLogoutError}
              />
            </>
          ) : (
            <>
              <Button
                onClick={onLoginClick}
                variant="solid"
                size="md"
                color="gray"
              >
                ログイン
              </Button>
              <Button
                onClick={onSignupClick}
                variant="solid"
                size="md"
                color="gray"
              >
                新規登録
              </Button>
            </>
          )}
        </Stack>
      </div>
    </header>
  );
};
