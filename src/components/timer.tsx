import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [timer, setIsTimer] = useState(new Date());
  const [count, setCount] = useState(0);
  const isCount = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTimer(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  useEffect(() => {
    const counter = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(counter);
    };
  }, [count]);

  useEffect(() => {
    const counter2 = setInterval(() => {
      isCount.current++;
    }, 1000);

    return () => {
      clearInterval(counter2);
    };
  }, [isCount]);

//   const handleClick= () =>{
//     isCount.current++;
//     console.log(isCount)
//   }

  return (
    <div className="flex justify-center">
      <div>{timer.toLocaleTimeString()}</div>
      <div className="ml-10">{count}</div>
      <div className="ml-10">{isCount.current}</div>
      {/* <button className="ml-20 bg-amber-300" onClick={handleClick}>
        click
      </button> */}
    </div>
  );
};

export default Timer;
