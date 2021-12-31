import React, { useEffect, useState } from "react";
import "./Avatars.scss";
import Avatar from "./Avatar";
import { getActorsFromAPI } from "../../helpers/helpers";

const Avatars = ({ type, mediaId }) => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getActors = async () => {
      const actorsArr = await getActorsFromAPI(type, mediaId);
      setActors(actorsArr);
    };

    getActors();
  }, [mediaId]);

  return (
    <div className="avatars">
      {actors.map((actor) => {
        return <Avatar key={actor.id} name={actor.name} image={actor.image} />;
      })}
    </div>
  );
};

export default Avatars;
