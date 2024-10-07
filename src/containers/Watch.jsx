import React from 'react';
import { useLocation } from 'react-router-dom';

const Watch = () => {
  const location = useLocation();
  const itemData = location.state?.itemData; 
  const queryParams = new URLSearchParams(location.search); 
  const id = queryParams.get('v'); 

  return (
    <div>
      {itemData ? (
        <div>
          <p><strong>ID:</strong> {itemData.user.id}</p>
          <p><strong>Name:</strong> {itemData.user.name}</p>
          <p><strong>Phone No:</strong> {itemData.user.phoneNo}</p>
          <p><strong>Email:</strong> {itemData.user.email}</p>
          <p><strong>Address:</strong> {itemData.user.address}</p>
          <p><strong>Designation:</strong> {itemData.user.designation}</p>
        </div>
      ) : (
        <p>No item data available.</p>
      )}
    </div>
  );
};

export default Watch;
