import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [extendedNavbar, setExtendedNavbar] = useState(false);

    const extendOnclick = (isUpdate) => {
        setExtendedNavbar(isUpdate);
    };

    const value = {
        extendedNavbar,
        extendOnclick,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
