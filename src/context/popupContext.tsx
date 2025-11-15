import { createContext } from "react";
import type { Project } from "../type";

interface popupSettings {
  isOpen: boolean;
  data: Project | null;
}
const popupContext = createContext<popupSettings>({
  isOpen: false,
  data: null,
});

export default popupContext;
