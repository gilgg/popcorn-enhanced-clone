const getUrl = (
  type,
  action = "popular",
  mediaId = null,
  genreName = null,
  query = ""
) => {
  let url, actionPart;

  // if(!type) {
  //   return "";
  // }

  switch (action) {
    case "popular":
      actionPart = `/${action}/${type}`;
      break;
    case "search":
      actionPart = `/${action}/${query}/${type}`;
      break;
    case "genres":
      actionPart = `/${action}/${genreName}/${type}`;
      break;
    default:
      actionPart = `/${action}/${mediaId}/${type}`;
      break;
  }

  url = `${process.env.REACT_APP_API_BASE_URL}${actionPart}`;
  return url;
};

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const getType = (params) => {
  if (!isEmpty(params)) {
    return params.type === "movies" ? "movies" : "series";
  } else {
    return "movies";
  }
};

export { getUrl, isEmpty, getType };
