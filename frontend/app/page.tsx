"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function LoginRouter({
  homepage,
  profile,
}: {
  homepage: ReactNode;
  profile: ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const cookieData = await (await fetch("/api/cookie")).text();
      console.log(cookieData);
      cookieData === ""
        ? router.replace("/homepage")
        : router.replace("/profile");
    })();
  }, []);
  return <div></div>;
}
