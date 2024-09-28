import { useEffect } from "react";
function Timer() {
  useEffect(() => {
    setInterval(() => {
      //   console.log(timer);
    });
  }, []);
  return <div className="timer"></div>;
}
export default Timer;
