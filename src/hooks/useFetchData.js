import { useState, useEffect } from 'react';
import empEntity from '../service/empEntity';

const useFetchData = () => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await empEntity.getAllEmp(); 
        console.log('API response:', response.data); 
        setData(response.data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchData;


