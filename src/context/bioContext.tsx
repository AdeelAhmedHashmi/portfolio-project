import { createContext } from "react";
import type { BioDataResponse } from "../type";

const BioDataContext = createContext<BioDataResponse | null>(null);

export default BioDataContext;
