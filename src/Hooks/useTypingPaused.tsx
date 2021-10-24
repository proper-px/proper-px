import React, { useState, useEffect, RefObject } from "react";

const useTypingPaused = (value: any, wait: number = 1000, action: () => void) => {
  const [val, setValue] = useState<any>("");

  const handleOnChange = (event: any) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => val && action(), wait);
    return () => clearTimeout(timeoutId);
  }, [val]);
  return [val, handleOnChange];
};

export default useTypingPaused;
