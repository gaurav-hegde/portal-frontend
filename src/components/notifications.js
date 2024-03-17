import { toast } from "react-toastify";

const notifications = {
  success: (message) =>
    toast.success(message, {
      position: window.innerWidth > 640 ? "top-right" : "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    }),

  error: (message) =>
    toast.error(message, {
      position: window.innerWidth > 640 ? "top-right" : "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    }),
};

export default notifications;
