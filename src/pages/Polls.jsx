import React from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Navbar";
import PollOption from "../components/PollOption";
import CreatePoll from "../components/CreatePoll";
import { useUserAuth } from "../context/UserAuthContext";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import axios from "../api/axios.js";
import notifications from "../components/notifications";
import { ToastContainer } from "react-toastify";

export default function Polls() {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const { user } = useUserAuth();

  useEffect(() => {
    user &&
      (async () => {
        setLoading(refresh === 0);
        try {
          const response = await axios.authorizedGet("/poll/userPolls");
          console.log(response.data);
          setPolls(response.data);
        } catch (e) {
          notifications.error(e.message);
        }
        setLoading(false);
      })();
  }, [user, refresh]);

  return (
    <div className="font-sans">
      <Sidebar />
      <Nav />
      <ToastContainer />
      <h2 className="text-[2rem] font-bold text-center text-blue pt-2">
        Polls
      </h2>
      <div className="relative min-h-[60vh]">
        <Loader loading={loading} />
        <CreatePoll refresh={refresh} setRefresh={setRefresh} />
        {polls.reverse().map((poll) => (
          <PollOption poll={poll} refresh={() => setRefresh(refresh + 1)} />
        ))}
      </div>
    </div>
  );
}
