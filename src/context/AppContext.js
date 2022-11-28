import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [extendedNavbar, setExtendedNavbar] = useState(false);

    // Add Feeback
    const submitClientInfo = async (clientInfor) => {
        const response = await fetch('/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(clientInfor),
        });
        const data = await response.json();
        console.log(data);
    };

    const value = {
        extendedNavbar,
        setExtendedNavbar,
        submitClientInfo,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
