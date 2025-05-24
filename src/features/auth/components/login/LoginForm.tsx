"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/button/Button";
import { InputField } from "@/components/form";
import styles from "./LoginForm.module.css";
import { useLogin } from "../../api/login";

type LoginFormData = {
  id: string;
  name: string;
  password: string;
};

interface LoginFormProps {
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, onError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const login = useLogin({ onSuccess, onError });

  const onSubmit = async (data: LoginFormData) => {
    login.submit(data);
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputField
          id="id"
          label="ID"
          type="text"
          {...register("id", { required: "IDは必須です" })}
          error={errors.id?.message}
          placeholder="IDを入力"
          size="md"
        />

        <InputField
          id="name"
          label="名前"
          type="text"
          {...register("name", { required: "名前は必須です" })}
          error={errors.name?.message}
          placeholder="名前を入力"
          size="md"
        />

        <InputField
          id="password"
          label="パスワード"
          type="password"
          {...register("password", { required: "パスワードは必須です" })}
          error={errors.password?.message}
          placeholder="••••••••"
          size="md"
        />

        <Button
          type="submit"
          color="primary"
          size="md"
          isLoading={isSubmitting}
          fullWidth
        >
          ログイン
        </Button>
      </form>
    </div>
  );
};
