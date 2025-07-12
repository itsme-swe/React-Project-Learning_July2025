import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onOnlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setOnlineStatus(false);
    const handleOnline = () => setOnlineStatus(true);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return onOnlineStatus;
};

export default useOnlineStatus;
