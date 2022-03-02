import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { movieActions } from "../store/movieSlice";

const useInit = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getFromDB = async () => {
      const payload = (
        await axios.get(`${process.env.REACT_APP_API_BASE_URL}/media`)
      ).data;

      dispatch(movieActions.setAll(payload));
      setIsLoading(false);
    };

    getFromDB();
  }, []);
  return isLoading;
};

export default useInit;
