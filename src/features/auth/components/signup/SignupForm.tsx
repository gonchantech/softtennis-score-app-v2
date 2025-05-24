"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/button/Button";
import { InputField } from "@/components/form";
import styles from "./SignupForm.module.css";
import { useSignup } from "../../api/signup";
import { AuthData } from "@/types";

type SignupFormData = AuthData;

interface SignupFormProps {
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({
  onSuccess,
  onError,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>();

  const signup = useSignup({ onSuccess, onError });

  const onSubmit = async (data: SignupFormData) => {
    signup.submit(data);
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>新規登録</h1>
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
          新規登録
        </Button>
      </form>
    </div>
  );
};
