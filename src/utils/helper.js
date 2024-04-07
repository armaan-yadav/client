import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { toast } from "react-toastify";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithRedirect(auth, googleProvider).then((userCredentials) => {
    window.location.reload();
    return 200;
  });
};

export const signInWithGithub = async () => {
  await signInWithRedirect(auth, githubProvider).then((userCredentials) => {
    window.location.reload();
    return 200;
  });
};

export const signUp = async (name, email, password) => {
  let status, data;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      user.displayName = name;
      updateProfile(user, { displayName: name });
      status = 200;
      data = user;
    })
    .catch((error) => {
      status = 409;
      data = error;
    });
  return { status, data };
};

export const signIn = async (email, password) => {
  let status, data;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      status = 200;
      data = user;
    })
    .catch((error) => {
      status = 409;
      data = error;
      console.log(error);
    });
  return { status, data };
};

export const signUserOut = async () => {
  await signOut(auth).catch((e) => console.log(e));
};

export const updateUserProfile = async (displayName, photoURL) => {
  await updateProfile(auth.currentUser, {
    displayName,
    photoURL,
  }).then(() => {
    toast.success("Profile photo updated successfully");
  });
};
export const removeUserPhoto = () => {
  updateProfile(auth.currentUser, {
    photoURL: null,
  }).then(() => {
    toast.success("Profile photo removed successfully");
  });
};
