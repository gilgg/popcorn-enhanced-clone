import React, { useEffect, useState } from "react";
import "./Providers.scss";
import { getProvidersFromAPI, isEmpty } from "../../helpers/helpers";

const Providers = ({ type, mediaId }) => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const getProviders = async () => {
      const providersArr = await getProvidersFromAPI(type, mediaId);
      setProviders(providersArr);
    };
    getProviders();
  }, [mediaId]);

  return (
    <div className="providers">
      {!isEmpty(providers) &&
        providers.map((provider) => {
          return <img key={provider.id} src={provider.image} alt={`${provider.name} logo`} />;
        })}
    </div>
  );
};

export default Providers;
