"use client";

import styles from "./page.module.css";
import { useCallback } from "react";
import { Confirm } from "@/atomic/molecules/confirm/Confirm";

export default function Home() {
  const submitHandler = useCallback(() => {
    alert("完了");
  }, []);

  return (
    <main className={styles.main}>
      <div className="form-page">
        <h1>Form Page</h1>
        <Confirm title="最終確認" onSubmit={submitHandler}>
          <p>本当に実行しますか？</p>
        </Confirm>
      </div>
    </main>
  );
}
