import React, { useRef, useState } from "react";
import "./SearchForm.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { movieActions } from "../../../store/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import SearchDropdownMenu from "./SearchDropdownMenu";

const SearchForm = () => {
  const dispatch = useDispatch();
  const queryFromState = useSelector((state) => state.movie.query);
  const history = useHistory();
  const searchRef = useRef();
  const [isFocus, setIsFocus] = useState(false);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("movies");
  const [isFormBtnActive, setIsFormBtnActive] = useState(false);

  const dropdownOnClickHandler = (resType) => {
    setType(resType);
  };

  const btnOnClickHandler = (e) => {
    e.preventDefault();
    setIsFormBtnActive((prevState) => !prevState);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    const searchQuery = searchRef.current.value;
    dispatch(movieActions.setStateQuery(searchQuery));
    history.push(`/browse/${type}/search/${searchQuery}`);
  };

  return (
    <form className={`search-form ${isFocus ? "focusActive" : ""}`}>
      <input
        type="text"
        placeholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        ref={searchRef}
        onChange={onSubmitHandler}
        value={queryFromState}
      />
      <button onClick={btnOnClickHandler}>
        <div className="search-form-btn-options">
          <div className="search-form-btn-options-default">
            <span>{type === "movies" ? "Movies" : "TV Series"}</span>
            <IoMdArrowDropdown />
          </div>
          <SearchDropdownMenu
            dropdownOnClickHandler={dropdownOnClickHandler}
            isFormBtnActive={isFormBtnActive}
          />
        </div>
      </button>
    </form>
  );
};

export default SearchForm;
