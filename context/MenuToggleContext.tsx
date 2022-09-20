import React, {useState, useContext} from 'react'

const MemuToggleContext = React.createContext(null);

interface Props {
  children: React.ReactNode;
}
export const MenuToggleProvider: React.FC<Props> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MemuToggleContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MemuToggleContext.Provider>
  );
};

export const useMenuToggleContext = () => useContext(MemuToggleContext)
