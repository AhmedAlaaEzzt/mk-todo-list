function WorkforceLegends(props: { id: string }) {
  const { id } = props;

  return (
    <div
      id={id}
      className="bg-white p-4 rounded shadow-md w-64 absolute bottom-4 left-4"
    >
      <div className="flex items-center bg-gray-50 p-2 rounded mb-2">
        <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
        <span className="text-gray-700">Active</span>
      </div>
      <div className="flex items-center bg-gray-50 p-2 rounded">
        <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
        <span className="text-gray-700">Inactive</span>
      </div>
      <div className="bg-[#E9F5FE] p-5 w-19 mt-3 rounded shadow-md">
        <p className="text-xs">
          Online workers in the last <span className="font-bold"> 5 mins </span>
          are shown on the map.
        </p>
      </div>
    </div>
  );
}

export default WorkforceLegends;
