import { useState } from "react";
import ApiEntityClass from "../service/empEntity"

export const useSearchHandler = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      setFilteredData([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Making the API call
      const response = await ApiEntityClass.searchEmp(value);

      if (response.data && Array.isArray(response.data)) {
        setFilteredData(response.data);
      } else {
        setFilteredData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data.");
      setFilteredData([]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    searchTerm,
    filteredData,
    handleInputChange,
    isLoading,
    error,
  };
};
