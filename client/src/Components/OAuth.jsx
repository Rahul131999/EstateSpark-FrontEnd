import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess } from "../Redux/user/userSlice";

export default function OAuth() {
  const { loading } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleGoogleClick() {
    try {
      dispatch(loginStart())
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const userInfo = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/google`,
        userInfo
      );

      dispatch(loginSuccess(res.data))
      navigate("/");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-orange-500 text-white p-3 rounded-lg hover:opacity-80"
    >
      Continue With Google
    </button>
  );
}
