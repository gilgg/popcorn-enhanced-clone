import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const useGetFromApi = (
  initState,
  apiUrl,
  addToAppState = false,
  stateReducer = null
) => {
  const dispatch = useDispatch();
  const [fromApi, setFromApi] = useState(initState);

  useEffect(() => {
    const get = async () => {
      const res = (await axios.get(apiUrl)).data;

      if (addToAppState) {
        dispatch(stateReducer(res));
      }

      setFromApi(res);
    };

    get();
  }, [apiUrl]);

  return fromApi;
};

export default useGetFromApi;
