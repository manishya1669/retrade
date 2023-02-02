import axios from "axios";

import PocketBase from "pocketbase";

const pb = new PocketBase("https://bigbitprac.fly.dev");

// Register user
const register = async userData => {
  try {
    await pb.collection("users").create(userData);
  } catch (error) {
    throw error;
  }
};

// Login user
const login = async userData => {
  try {
    await pb
      .collection("users")
      .authWithPassword(userData.email, userData.password);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Logout user
const logout = () => {
  pb.authStore.clear();
  localStorage.removeItem("pocketbase_auth");
};

const authService = {
  register,
  logout,
  login
};

export default authService;
