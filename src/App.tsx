import { Outlet } from "@tanstack/react-router";
import Header from "./components/Header";
import BioDataContext from "./context/bioContext";
import { useCallback, useEffect, useState } from "react";
import type { BioDataResponse } from "./type";
import bioData from "./data/resumedata.json";
import MainLayout from "./skeletons/MainLayout";

const App = () => {
  const [bio, setBio] = useState<null | BioDataResponse>(null);
  const [isloading, setIsloading] = useState<boolean>(true);

  const fetchBio = useCallback(async () => {
    try {
      setIsloading(true);
      // const res = await fetch("https://akhlasahmed.online/resumedata");
      // const data = (await res.json()) as BioDataResponse;
      // setBio(data);
      throw new Error();
      setIsloading(false);
    } catch (error) {
      console.error("Failed to fetch bio data, using local data.", error);
      setBio(bioData as BioDataResponse);
    } finally {
      setIsloading(false);
    }
  }, []);

  useEffect(() => {
    fetchBio();
  }, [fetchBio]);

  console.log(bio);

  if (isloading) return <MainLayout />;
  return (
    <>
      <BioDataContext value={bio}>
        <div className="w-full max-w-[1500px] m-auto">
          <Header />
          <Outlet />
        </div>
      </BioDataContext>
    </>
  );
};

export default App;
