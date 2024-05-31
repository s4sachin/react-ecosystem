import { useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(false);

  // check if online => return online
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
        setOnlineStatus(false);
      });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;