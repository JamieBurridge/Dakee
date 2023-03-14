import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const hasVisited: boolean = false;

  const router = useRouter();

  useEffect(() => {
    if (!hasVisited) {
      router?.push("/welcome");
    }
  }, []);

  return <main>Home</main>;
}
