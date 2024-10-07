import { useState } from 'react';
import empEntity from '../service/empEntity';

const useSetEmpData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const setEmpData = async (data) => {
        setLoading(true);
        setError(null);

        try {
            const response = await empEntity.setEmp(data);
            console.log('Employee created:', response);
            return response;
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { setEmpData, loading, error };
};

export default useSetEmpData;
