import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import styles from "./Login.module.css";

export default function register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.login_container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
        <input
          type="text"
          placeholder="Enter your first name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          {...register("email", { required: true, maxLength: 20 })}
          name="email"
          id="email"
          type="email"
          autoComplete="off"
          placeholder="jon@example.com"
        />
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />

        <div>
          <Link href="/auth/login">
            <a>Already have an account? Please sign-in.</a>
          </Link>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
