import axios from "axios";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  //   User Registraion  Email & Password
  const registration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   Update User Profile
  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //   User Sign in with Email & Password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // User Sign/Signup With Google
  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // User Signin/Sing up with Github
  const githubSignin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  //   User Login Out
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   track User Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      setUser(currentUser);
      setLoading(false);
      const loggeduser = { email: userEmail };
      if (currentUser) {
        axios
          .post("https://sharesurplus-server.vercel.app/jwt", loggeduser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      } else {
        axios
          .post("https://sharesurplus-server.vercel.app/logout", loggeduser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => unsubscribe();
  }, [auth, user?.email]);
  const authinfo = {
    user,
    loading,
    registration,
    loginUser,
    googleSignin,
    githubSignin,
    userLogOut,
    profileUpdate,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
