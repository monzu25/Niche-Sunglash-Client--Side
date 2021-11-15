import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';
import useCart from '../../hooks/useCart';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const { user, registerUser, loginUser, logOut, isLoading, authError, signInWithGoogle, admin } = useFirebase();
    const { selectedProduct, addToCart, setSelectedProduct } = useCart();
    const Data = {
        user,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        authError,
        selectedProduct,
        addToCart,
        setSelectedProduct,
        signInWithGoogle,
        admin
    };
    return (
        <AuthContext.Provider value={Data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;