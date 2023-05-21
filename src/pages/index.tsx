// pages/index.tsx

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import steps from "@/utils/StepsRoutes";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(steps[0].path);
  });

  return;
};

export default Home;
