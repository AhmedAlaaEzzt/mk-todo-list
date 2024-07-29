function Example() {
  return (
    <div className="bg-white p-4 rounded shadow-md w-64">
      <p className="text-gray-500 mb-2">Legends:</p>
      <div className="flex items-center bg-gray-50 p-2 rounded mb-2">
        <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
        <span className="text-gray-700">Active</span>
      </div>
      <div className="flex items-center bg-gray-50 p-2 rounded">
        <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
        <span className="text-gray-700">Inactive</span>
      </div>
    </div>
  );
}
export default Example;
