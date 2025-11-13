import { Outlet } from "@tanstack/react-router";
import Header from "./components/Header";
import BioDataContext from "./context/bioContext";
import { useCallback, useEffect, useState } from "react";
import type { BioDataResponse } from "./type";

const App = () => {
  const [bio, setBio] = useState<null | BioDataResponse>(null);
  const fetchBio = useCallback(async () => {
    const res = await fetch("https://akhlasahmed.online/resumedata");
    const data = (await res.json()) as BioDataResponse;
    setBio(data);
  }, []);

  useEffect(() => {
    fetchBio();
  }, [fetchBio]);

  console.log(bio);
  if (!bio)
    return (
      <h1 className="text-xl p-6 cursor-pointer text-center font-bold">
        <a href="/">loading...</a>
      </h1>
    );

  return (
    <>
      <BioDataContext value={bio}>
        <Header />
        <Outlet />
      </BioDataContext>
    </>
  );
};

export default App;
