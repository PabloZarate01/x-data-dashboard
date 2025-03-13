"use client";

import { useAppSelector } from "@hooks/useAppHooks";
import DashboardPage from "@pages/dashboard/page";
import SignInPage from "@pages/sign-in/page";
import { useEffect, useState } from "react";

export default function Home() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? <DashboardPage /> : <SignInPage />;
}