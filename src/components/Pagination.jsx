import React, { useContext } from 'react';
import { PageContext } from '../contextapi/ProviderContext';

const Pagination = () => {
  const { inc, dec, mypage } = useContext(PageContext);

  return (
    <div className="flex justify-center gap-10 mt-4 mb-7 space-x-1">
      <button
        title="previous"
        type="button"
        onClick={dec}
        className="inline-flex items-center p-2 h-8 border rounded-md shadow-md hover:bg-gray-200"
      >
        <svg className="w-4 mr-1" viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Previous
      </button>

      <span className="px-4 py-1 text-lg font-medium text-gray-800">Page {mypage}</span>

      <button
        title="next"
        type="button"
        onClick={inc}
        className="inline-flex items-center p-2 h-8 border rounded-md shadow-md hover:bg-gray-200"
      >
        Next
        <svg className="w-4 ml-1" viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
