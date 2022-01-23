import React from "react";
import "./Providers.scss";
import { isEmpty, getUrl } from "../../helpers/helpers";
import useGetFromApi from "../../hooks/useGetFromApi";

const Providers = ({ type, mediaId }) => {
  const providers = useGetFromApi([], getUrl(type, "providers", mediaId));

  return (
    <div className="providers">
      {!isEmpty(providers) &&
        providers.map((provider) => {
          return (
            <img
              key={provider.id}
              src={provider.image}
              alt={`${provider.name} logo`}
            />
          );
        })}
    </div>
  );
};

export default Providers;
