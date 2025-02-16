import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen p-5 bg-[#212121] text-white flex  items-center justify-center text-[18px]">
      <div className="px-2">
        <p>Count: {count}</p>
      </div>
      <button
        className="bg-neutral-300 cursor-pointer text-black px-2 rounded "
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
    </div>
  );
}

export default Count;
