import { createContext, useContext, useState, ReactNode } from "react";

export const UIContext = createContext({});

export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }: { children?: ReactNode }) => {
  const ui = useUIProvide();
  return <UIContext.Provider value={ui}>{children}</UIContext.Provider>;
};

const useUIProvide = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  return { drawerOpen, setDrawerOpen, showSearchBox, setShowSearchBox };
};
