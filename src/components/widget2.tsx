function Widget2(props: {
  id: string;
  currentWorkers: number;
  totalWorkers: number;
  workers: string;
}) {
  const { id, currentWorkers, workers } = props;

  return (
    <div
      id={id}
      className="bg-white shadow rounded-lg p-4 flex items-center w-[155px] h-[65px]"
    >
      <div>
        <div className="text-[#212121] text-sm">{workers}</div>
        <div className="flex items-baseline">
          <span className="text-[#039855] text-xl font-semibold">
            {currentWorkers}
          </span>
          {/* <span className="text-[#666666] text-xl ml-1">/{totalWorkers}</span> */}
        </div>
      </div>
    </div>
  );
}

export default Widget2;
