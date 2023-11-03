import UiContext from "./UiContext";
import { PropsWithChildren, useCallback, useMemo, useState } from "react";

const UiContextWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadLoading = useCallback((isLoading: boolean) => {
    setIsLoading(isLoading);
  }, []);

  const uiValue = useMemo(
    () => ({ isLoading, loadLoading }),
    [loadLoading, isLoading],
  );

  return <UiContext.Provider value={uiValue}>{children}</UiContext.Provider>;
};

export default UiContextWrapper;
