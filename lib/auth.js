// utils/auth.js
export const isLoggedIn = () => {
    return !!sessionStorage.getItem("jwt");
  };
  