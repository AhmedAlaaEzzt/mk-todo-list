
import worker from "../assets/img/construction-worker.png";
import worker1 from "../assets/img/worker.png";

function Vieweye() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-80">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center text-[#792E0D]">
          <img src={worker1} alt="Worker" className="w-6 h-6 mr-2 " />
          Workforce
        </h2>
        <button className="text-gray-600">×</button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="space-y-4">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border rounded "
            >
              <div className="flex items-center  space-x-2 ">
                <img
                  src={worker}
                  alt="Worker"
                  className=" box-border h-10 w-10 p-1  bg-[#F9FAFB] rounded-md"
                />
                <div>
                  <h3 className=" font-semibold">Jonathan Majors</h3>
                  <p className="text-sm text-gray-600">Worker Code</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-white box-border h-10 w-10 p-1  rounded-md bg-[#039855] ">
                  Active
                </span>
                <p className="text-sm text-[#A0A1A2]">Space A</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Vieweye;