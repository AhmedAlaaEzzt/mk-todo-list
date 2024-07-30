import WorkersOnFloor from "./components/WorkersOnFloor";

function App() {
  return (
    <>
      <div className="flex gap-10  items-center min-h-screen">
        <WorkersOnFloor
          currentWorkers={48}
          totalWorkers={48}
          Workers={"Workers on floor"}
        />

        <WorkersOnFloor
          currentWorkers={48}
          totalWorkers={48}
          Workers={"Workers on floor"}
        />
        <WorkersOnFloor
          currentWorkers={4}
          totalWorkers={4}
          Workers={"Crews on floor"}
        />
      </div>
    </>
  );
}

export default App;
