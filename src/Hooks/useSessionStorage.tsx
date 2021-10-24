import React, { useState, useEffect } from "react";

const useSessionStorage = (value: any, key: string) => {
  const [sessionValue, setSessionValue] = useState<any>(value);

  const handleSessionValueUpdate = (event: any) => {
    sessionStorage.setItem(key, JSON.stringify(event.target.value));
    setSessionValue(event.target.value);
  };

  useEffect(() => {
    const fromSession = sessionStorage.getItem(key);
    fromSession && setSessionValue(JSON.parse(fromSession));
  }, []);

  return [sessionValue, handleSessionValueUpdate];
};

export default useSessionStorage;
