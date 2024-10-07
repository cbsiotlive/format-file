import { useState } from 'react';

export const useFormHandler = (setEmpData) => {
    const [employeeData, setEmployeeData] = useState({
        name: '',
        phoneNo: '',
        email: '',
        address: '',
        designation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({ ...employeeData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await setEmpData(employeeData);
        if (response) {
            setEmployeeData({
                name: '',
                phoneNo: '',
                email: '',
                address: '',
                designation: ''
            });
        }
    };

    return {
        employeeData,
        handleChange,
        handleSubmit
    };
};
