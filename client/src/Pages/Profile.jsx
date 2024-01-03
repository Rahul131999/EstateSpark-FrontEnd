import React, { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useSelector } from "react-redux";
import { app } from "../firebase";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(null);
  const [uploadPercent, setUploadPercent] = useState(0);
  const [uploadError, setUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadPercent(Math.round(progress));
      },
      (error) => {
        setUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setFormData({ ...formData, avatar: downloadUrl });
        });
      }
    );
  };

  const fileRef = useRef(null);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="/image/*"
        ></input>
        <img
          onClick={() => {
            fileRef.current.click();
          }}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={formData.avatar || currentUser.avatar}
          alt="Profile"
        />
        <p className="text-sm self-center">
          {uploadError ? (
            <span className="text-red-700">Error uploading Picture</span>
          ) : uploadPercent > 0 && uploadPercent < 100 ? (
            <span className="text-black">
              uploading - {uploadPercent}
            </span>
          ) : uploadPercent === 100 ? (
            <span className="text-green-500">Image Uploaded Successfully</span>
          ) : (
            ""
          )}
        </p>
        <input
          className="rounded-lg p-3 border"
          type="text"
          placeholder="username"
          id="username"
        />
        <input
          className="rounded-lg p-3 border"
          type="email"
          placeholder="email"
          id="email"
        />
        <input
          className="rounded-lg p-3 border"
          type="password"
          placeholder="password"
          id="password"
        />
        <button
          className="text-white p-3 rounded-lg hover:opacity-80 disabled:70 bg-orange-500"
          type="submit"
        >
          Reset
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Log Out</span>
      </div>
    </div>
  );
}

export default Profile;
