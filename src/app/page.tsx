"use client";
import MockDash from "@/components/MockDash";
import { invoke } from "@tauri-apps/api/core";
import { useCallback, useState } from "react";

export default function Home() {
  return (
    <MockDash />
  );
}
