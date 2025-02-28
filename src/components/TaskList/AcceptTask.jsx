import React from "react";

const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
      <div className="flex justify-between mt-2">
        <button className="bg-green-600 rounded-md py-1 px-2 text-sm">Mark as Completed</button>
        <button className="bg-blue-600 rounded-md py-1 px-2 text-sm">Mark as Failed</button>
      </div>
    </div>

    
  );
};

export default AcceptTask;
