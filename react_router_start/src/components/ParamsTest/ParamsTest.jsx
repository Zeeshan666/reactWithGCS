import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ParamsTest() {
  const { testID } = useParams();
  const navigate = useNavigate();

  const goToDummy = () => {
    navigate(`/dummy?initialCount=${testID}`); // Pass testID as a query parameter
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Params Test!!</h1>
      <span className="block mb-4">Value is: {testID}</span>
      <button
        onClick={goToDummy}
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Go to Dummy
      </button>
    </div>
  );
}

export default ParamsTest;
