import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { movieActions } from "../store/movieSlice";

const useInit = () => {
  const dispatch = useDispatch();
  console.log("in useInit")

  useEffect(() => {
    const getFromDB = async () => {
      const payload = (
        await axios.get(`${process.env.REACT_APP_API_BASE_URL}/media`)
      ).data;

      dispatch(movieActions.setAll(payload));
    };

    getFromDB();
  }, []);
};

export default useInit;
