import React, { useState } from 'react';

const CourseFeeForm = () => {
  const [shortTermFee, setShortTermFee] = useState('');
  const [mediumTermFee, setMediumTermFee] = useState('');
  const [longTermFee, setLongTermFee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fees = {
      shortTerm: shortTermFee,
      mediumTerm: mediumTermFee,
      longTerm: longTermFee,
    };
    console.log(fees);
    // Send this data to the backend or use it in your app logic
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="shortTermFee">
          Short-term Fee (1 month):
        </label>
        <input
          type="number"
          id="shortTermFee"
          value={shortTermFee}
          onChange={(e) => setShortTermFee(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter fee for short-term"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="mediumTermFee">
          Medium-term Fee (3 months):
        </label>
        <input
          type="number"
          id="mediumTermFee"
          value={mediumTermFee}
          onChange={(e) => setMediumTermFee(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter fee for medium-term"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="longTermFee">
          Long-term Fee (6 months):
        </label>
        <input
          type="number"
          id="longTermFee"
          value={longTermFee}
          onChange={(e) => setLongTermFee(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter fee for long-term"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default CourseFeeForm;
