import firebase from "firebase/app";
import "firebase/auth";

import {
  emailProviderLogin,
  emailProviderRegister,
} from "./firebase/authEmail";
import { googleProviderLogin } from "./firebase/authGoogle";
import { getByKey, save, update } from "./firebase/handlers";
import { http } from "./http";

const basePath = process.env.REACT_APP_BASE_PATH;

export const loginWithGoogle = async (profileData) => {
  const { user, idToken, isNewUser } = await googleProviderLogin();

  if (isNewUser) {
    const newUser = await save(`${basePath}/users`, {
      ...profileData,
      ...user,
    });

    http.post(
      "new-user-partilhar",
      {
        userEmail: newUser.email,
      },
      {
        baseURL: "https://poker-champioship.herokuapp.com/",
      }
    );

    return {
      user: newUser,
      idToken,
    };
  }

  const userData = await getByKey(`${basePath}/users`, "email", user.email);

  return {
    user: userData,
    idToken,
  };
};

export const registerWithEmailAndPassword = async (credentials) => {
  const { user, idToken, isNewUser } = await emailProviderRegister(credentials);

  if (isNewUser) {
    const newUser = await save(`${basePath}/users`, {
      ...user,
    });

    return {
      user: newUser,
      idToken,
    };
  }

  const userData = await getByKey(`${basePath}/users`, "email", user.email);

  return {
    user: userData,
    idToken,
  };
};

export const loginWithEmailAndPassword = async (credentials) => {
  const { user, idToken, isNewUser } = await emailProviderLogin(credentials);

  if (isNewUser) {
    const newUser = await save(`${basePath}/users`, {
      ...user,
    });

    return {
      user: newUser,
      idToken,
    };
  }

  const userData = await getByKey(`${basePath}/users`, "email", user.email);

  return {
    user: userData,
    idToken,
  };
};

export const updateUserData = async (id, profileData) => {
  const response = await update(`${basePath}/users`, id, profileData);

  return response;
};

export const onAuthStateChange = (callback) => {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ loggedIn: true });
    } else {
      callback({ loggedIn: false });
    }
  });
};

export const logout = async () => {
  const response = await firebase.auth().signOut();

  return response;
};
