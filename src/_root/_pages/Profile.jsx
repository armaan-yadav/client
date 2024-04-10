import React, { useState } from "react";
import ImageUpload from "../../components/xothers/ImageUpload,";
import { useSelector } from "react-redux";
import { updateUserProfile } from "../../utils/helper";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const [name, setName] = useState(user?.displayName);
  const [photoURL, setPhotoURL] = useState(null);
  const [loading, setLoading] = useState(false);
  return user ? (
    <div className="text-white h-full w-full  flex items-center justify-center">
      <div className="w-[75%] h-full  flex md:flex-row flex-col  items-center justify-center max-sm:gap-[3rem]">
        <div className="w-full md:w-[40%]  md:h-full  ">
          <ImageUpload user={user} setPhotoURL={setPhotoURL} />
        </div>
        <div className="w-full md:w-[60%] md:h-full  flex items-center px-2 flex-col justify-center relative">
          <div className="w-full ">
            <label htmlFor="name">Diplay Name</label>
            <input
              type="text"
              className="w-full  outline-none border-b-2 border-emerald-400 text-white bg-transparent my-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            className="absolute right-0 -bottom-[5rem] md:bottom-10 bg-emerald-400 hover:bg-emerald-500 px-5 py-2 rounded-md duration-200"
            onClick={() => {
              updateUserProfile(name, photoURL);
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-white h-full w-full  flex items-center justify-center">
      sign up karo
    </div>
  );
};

export default Profile;
