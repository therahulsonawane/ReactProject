import { useState } from "react";
import "./index.css";

function Rahul() {
  const [color, setColor] = useState("white");
  return (
    <div
      className="w-full h-screen duration-200 bg-green-500"
      style={{ backgroundColor: color }}
    >
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            onClick={() => setColor("pink")}
            className="outline- none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            {" "}
            Red{" "}
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline- none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            {" "}
            Green{" "}
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline- none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            {" "}
            Blue{" "}
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline- none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            {" "}
            Purple{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rahul;
