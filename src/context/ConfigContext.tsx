import React, { createContext, useState, useContext } from "react";

const ConfigContext = createContext<{ blur: boolean; setBlur: any }>({
  blur: false,
  setBlur: () => {},
});

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [blur, setBlur] = useState(false);

  return (
    <ConfigContext.Provider value={{ blur, setBlur }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  return useContext(ConfigContext);
};
