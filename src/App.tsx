import { useState } from "react";

function App() {
  const [cont, setCont] = useState(0);

  function sup() {
    setCont((pravCont) => pravCont - 1);
  }

  function add() {
    setCont((pravCont) => pravCont + 1);
  }

  return (
    <>
      <button onClick={add}>+</button>
      <span>{cont}</span>
      <button onClick={sup}>-</button>
    </>
  );
}

export default App;
