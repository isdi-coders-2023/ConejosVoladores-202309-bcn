import UiContext from "./UiContext";
import { PropsWithChildren, useState } from "react";

const UiContextWrapped = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <UiContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiContextWrapped;
