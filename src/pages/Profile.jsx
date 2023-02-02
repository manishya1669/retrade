import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { BASE_URL, FILE_URL } from "../app/config";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram, FaTwitter, FaStar } from "react-icons/fa";

const Profile = (props) => {
  const params = useParams();
  const userId = params.userId;
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fetchProfileData = async () => {
      const resultList = await axios.get(`${BASE_URL}/users/records/${userId}`);
      const profileId = resultList.data.profile;
      const data = await axios.get(`${BASE_URL}/profile/records/${profileId}?expand=user`);
      const profileData = data.data;
      setProfileData(profileData);
    };
    fetchProfileData();
  }, []);
  return (
    <div className="flex flex-row p-6">
      <div className="grow-[5]">
        <div className="flex flex-row grow gap-x-4">
          <div className="h-20 w-20 rounded-full bg-gray-300 overflow-hidden">
            <img src={`${FILE_URL}/users/${userId}/${profileData?.expand?.user?.avatar}`} alt="" />
          </div>
          <div className="flex flex-col leading-8 justify-center mb-5">
            <div className="flex flex-row gap-x-3 items-end">
              <h1 className="text-3xl font-bold">{profileData.name}</h1>
              <p className="flex flex-row items-center rounded-md px-2 py-1 text-xs gap-x-3 bg-green-500">
                <FaStar />
                {profileData.rating}
              </p>
            </div>
            <h3 className="text-gray-700 mb-3">
              {profileData.email} • {profileData.contact_no}
            </h3>
            <div className="flex flex-row items-center gap-x-3">
              <IoLocationOutline />
              <p>{profileData.city}</p>
            </div>
          </div>
        </div>
        <div className="h-full">
          <h2 className="w-fit text-xl px-3 py-2 bg-black rounded-lg text-white">Previous Listings</h2>
        </div>
      </div>
      <div className="grow-[2]">
        <div className="">
          <p className="font-bold mb-6">Socials</p>
          <div className="flex flex-row gap-x-3 text-xl">
            {profileData.socials?.instagram && (
              <a className="transition-all hover:text-pink-500" href={profileData.socials?.instagram}>
                <FaInstagram />
              </a>
            )}
            {profileData.socials?.twitter && (
              <a className="transition-all hover:text-blue-500" href={profileData.socials?.twitter}>
                <FaTwitter />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
