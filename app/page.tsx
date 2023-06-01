"use client";

import { Modal } from "@/atomic/atoms/modal/Modal";
import styles from "./page.module.css";
import { useCallback } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="form-page">
        <h1>Form Page</h1>
      </div>
    </main>
  );
}
