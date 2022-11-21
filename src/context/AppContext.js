import { createContext } from 'react';
import { useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [extendedNavbar, setExtendedNavbar] = useState(false);

    const extendOnclick = (isUpdate) => {
        setExtendedNavbar(isUpdate);
    };

    return (
        <AppContext.Provider value={(extendedNavbar, extendOnclick)}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
