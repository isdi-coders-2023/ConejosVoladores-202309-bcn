import { createContext } from "react";
import UiContextStructure from "./types";

const UiContext = createContext<UiContextStructure>({} as UiContextStructure);

export default UiContext;
