import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
    const [responseData, setResponseData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiResponse = await fetch(endpoint);

                if (!apiResponse.ok) {
                    const errorDetails = await apiResponse.text();
                    throw new Error(`HTTP Error: ${apiResponse.status} - ${apiResponse.statusText}. Additional Info: ${errorDetails}`);
                }

                const data = await apiResponse.json();
                setResponseData(data);
            } catch (error) {
                setFetchError(error.message || "An unexpected error occurred");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { responseData, isLoading, fetchError };
};

export default useFetch;