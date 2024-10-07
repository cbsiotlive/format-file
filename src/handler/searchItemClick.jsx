import { useNavigate } from 'react-router-dom'; 
import ApiEntityClass from '../service/empEntity'; 

const useSearchItemClick = () => {
  const navigate = useNavigate(); 

  const handleItemClick = async (id) => {
    try {
      const response = await ApiEntityClass.readSingle(id);
      console.log("Single item data:", response.data);

      navigate(`/watch?v=${id}`, { state: { itemData: response.data } });
    } catch (error) {
      console.error("Error fetching single item data:", error);
    }
  };

  return { handleItemClick }; 
};

export default useSearchItemClick;
