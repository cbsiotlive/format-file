import React, { useState } from "react";
import useFetchData from '../hooks/useFetchData';
import { useSearchHandler } from '../handler/useSearchHandler';
import useSearchItemClick from '../handler/searchItemClick';

const HomeContainer = () => {


  const { data, loading, error } = useFetchData();
  const { searchTerm, filteredData, handleInputChange, isLoading, error: apiError, } = useSearchHandler();
  const { handleItemClick } = useSearchItemClick();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !Array.isArray(data.users)) return <p>No data available</p>;



  return (
    <div>

      {/* =========================employee search======================= */}
      <div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button onClick={() => handleInputChange({ target: { value: searchTerm } })}>
            <svg height="24" width="24" viewBox="0 0 24 24">
              <path
                d="M10 2a8 8 0 016.32 12.906l4.387 4.388a1 1 0 01-1.414 1.414l-4.388-4.387A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z"
                fill="#555"
              />
            </svg>
          </button>
        </div>

        <div className="search-list">
          {filteredData.length > 0 && (
            <ul>
              {filteredData.map((item) => (
                <li key={item.id}>
                  <a href="#" onClick={() => handleItemClick(item.id)}>
                    {item.name} - {item.email}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* =========================Employee list===================== */}
      <div className='my-4'>
        <ul>
          {data.users.map((user, index) => (
            <div key={user.id}>
              <a href="#" className="table-data-a" onClick={() => handleItemClick(user.id)}>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Phone No:</strong> {user.phoneNo}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Address:</strong> {user.address}</p>
                <p><strong>Designation:</strong> {user.designation}</p>
                <hr></hr>
              </a>
            </div>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default HomeContainer;

