import React, { useState } from 'react';
import useSetEmpData from '../hooks/useSetEmpData';
import { useFormHandler } from '../handler/formHandler';

const Form = () => {
  const { setEmpData, loading, error } = useSetEmpData();
  // Using the form handler
  const { employeeData, handleChange, handleSubmit } = useFormHandler(setEmpData);

  return (
    <div className="form-container">
      <h2>Create Employee</h2>
      <form className="employee-form" onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>}
      
        <input
          name="name"
          value={employeeData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="form-input"
        />
        <input
          name="phoneNo"
          value={employeeData.phoneNo}
          onChange={handleChange}
          placeholder="Phone No"
          required
          className="form-input"
          type="tel"
        />
        <input
          name="email"
          value={employeeData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="form-input"
          type="email"
        />
        <input
          name="address"
          value={employeeData.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="form-input"
        />
        <input
          name="designation"
          value={employeeData.designation}
          onChange={handleChange}
          placeholder="Designation"
          required
          className="form-input"
        />
        <div className="d-grid gap-2 my-3">
          <button className="btn btn-dark" type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
