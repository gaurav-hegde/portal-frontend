import React, { useEffect, useState } from "react";
import HomePageSection from "./index.jsx";
import Reminders from "../../assets/home/Reminders.svg";
import axios from "../../api/axios.js";
import Loader from "../Loader/index.jsx";
import { useUserAuth } from "../../context/UserAuthContext.jsx";

function Announcement({ announcement }) {
  return (
    <div className="mt-2 p-4 flex items-center bg-lightblue rounded-lg">
      {announcement.description}
    </div>
  );
}

function AnnouncementSection(props) {
  const [loading, setLoading] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const { user } = useUserAuth();

  useEffect(() => {
    user &&
      (async () => {
        setLoading(true);
        const announcements = (
          await axios.authorizedGet("/announcement/userAnnouncements")
        ).data;
        setAnnouncements(announcements);
        setLoading(false);
      })();
  }, [user]);
  return (
    <HomePageSection
      title="Announcements"
      logo={Reminders}
      show={props.show}
      expand={props.expand}
    >
      <div className="relative h-full w-full p-4">
        <Loader loading={loading} />
        {announcements.map((announcement) => (
          <Announcement announcement={announcement} />
        ))}
      </div>
    </HomePageSection>
  );
}

export default AnnouncementSection;
