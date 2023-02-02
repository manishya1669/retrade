import axios from "axios";

import PocketBase from "pocketbase";

const pb = new PocketBase("https://bigbitprac.fly.dev");

// Register user
const register = async userData => {
  await pb.collection("users").create(userData);
};

// Login user
const login = async userData => {
  await pb
    .collection("users")
    .authWithPassword(userData.email, userData.password);
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
