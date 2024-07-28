import React, { useState } from "react";

const AddNumbers: React.FC = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [output, setOutput] = useState<number | null>(null);

  const handleAdd = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setOutput(num1 + num2);
    } else {
      setOutput(null);
    }
  };

  return (
    <div className="p-4 justify-center">
      <input
        type="text"
        name="input1"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        className="placeholder:text-slate-400 flex-initial bg-white border border-slate-300 rounded-md focus:outline-none sm:text-sm m-3 p-3 bg-stone-200 "
        placeholder="Enter number"
      />
      <button
        id="addButton"
        onClick={handleAdd}
        className="ml-2 min-h-10 min-w-10 bg-sky-500 hover:bg-sky-700 rounded-md"
      >
        Add
      </button>
      <input
        type="text"
        name="input2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        className="placeholder:text-slate-400 flex-initial bg-white border border-slate-300 rounded-md focus:outline-none sm:text-sm m-3 p-3"
        placeholder="Enter number"
      />
      <div id="output" className="mt-4">
        {output !== null ? `Result: ${output}` : ""}
      </div>
    </div>
  );
};

export default AddNumbers;
