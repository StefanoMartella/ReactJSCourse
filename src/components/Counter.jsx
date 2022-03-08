import { useState, forwardRef, useEffect } from "react";

function Counter(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Impostazione interval
    return () => {
      // Cancellazione interval
    };
  }, []);

  return (
    <div>
      <h1>{time.toTimeString().split(" ")[0]}</h1>
    </div>
  );
}

export default Counter;
