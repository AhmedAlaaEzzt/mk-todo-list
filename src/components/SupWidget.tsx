import worker from "../assets/imgs/construction-worker.png";
import Manworker from "../assets/imgs/man.png";
import filter from "../assets/imgs/filter.png";

function SupWidget(props: { id: string }) {
  const { id } = props;

  return (
    <div id={id} className="p-6 bg-white rounded-lg shadow-md w-[300px] h-[350px] ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-brown-600 flex items-center text-[#9B624A]">
          <img src={worker} alt="Worker" className="w-6 h-6 mr-2 " />
          Workforce
        </h2>
        <button className="text-gray-600">×</button>
      </div>
      <div className="mb-4  ">
        <input
          type="text"
          placeholder="Search"
          className="w-50 p-2 border rounded"
        />
        <button className=" m-2 border  p-2 rounded">
          <img src={filter} className="h-[15px] " />
        </button>
      </div>

      <div className="space-y-4">
        {Array(1)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border rounded"
            >
              <div className="flex items-center space-x-2">
                <img src={Manworker} alt="Worker" className="w-10 h-10" />
                <div>
                  <h3 className="text-base font-semibold">Jonathan Majors</h3>
                  <p className="text-sm text-gray-600">Worker Code</p>
                </div>
              </div>
              <div className="text-right">
                <span className="px-1 py-0.5 gap-2 bg-green-500 text-white rounded-lg">
                  Active
                </span>
                <p className="text-sm text-gray-600 p-2">Space A</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SupWidget;
