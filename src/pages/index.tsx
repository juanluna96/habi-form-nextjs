import { useEffect } from "react";
import { useRouter } from "next/router";
import steps from "@/utils/StepsRoutes";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(steps[0].path);
  });

  return;
};

export default Home;
