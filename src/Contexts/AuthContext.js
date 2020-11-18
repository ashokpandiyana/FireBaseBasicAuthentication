import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentuser] = useState();
  //  SignUp
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  //  SignIn
  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  // Logout
  function logout() {
    return auth.signOut;
  }
  function resetpassword(email) {
    return auth.sendPasswordResetEmail(email);
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentuser(user));
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    logout,
    resetpassword,
    updateEmail,
    updatePassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
