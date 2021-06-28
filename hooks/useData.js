import React, {useState, useEffect} from 'react'

export default function useData(query, retrieveFunction, onError) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const queryObj = query || {};
      const [fetchedData, err] = await retrieveFunction(queryObj);
      setData(fetchedData);
      setLoading(false);
      if (err) {
        if(onError){
          onError(err)
        }else alert(err.message);
      }
    }
    getData();
  }, [query, retrieveFunction, onError]);
  return {data, loading};
}
