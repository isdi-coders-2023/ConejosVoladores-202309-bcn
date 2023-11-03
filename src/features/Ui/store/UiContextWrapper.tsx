import UiContext from "./UiContext";
import { PropsWithChildren, useMemo, useState } from "react";

const UiContextWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const uiValue = useMemo(() => ({ isLoading, setIsLoading }), [isLoading]);

  return <UiContext.Provider value={uiValue}>{children}</UiContext.Provider>;
};

export default UiContextWrapper;
