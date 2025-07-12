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

/*
🔸 The useOnlineStatus hook helps us to detect if the user is connected to the internet or not.

  It returns:
  
  true → when the device is online
  
  false → when the device is offline

  It also cleans up the event listeners when the component using the hook is removed, to avoid memory leaks.

In this app this hook is used inside the Header Component as nav-bar element.


*/
