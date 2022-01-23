import React from "react";
import "./Avatars.scss";
import Avatar from "./Avatar";
import useGetFromApi from "../../hooks/useGetFromApi";
import { getUrl } from "../../helpers/helpers";

const Avatars = ({ type, mediaId }) => {
  const actors = useGetFromApi([], getUrl(type, "actors", mediaId));

  return (
    <div className="avatars">
      {actors.map((actor) => {
        return <Avatar key={actor.id} name={actor.name} image={actor.image} />;
      })}
    </div>
  );
};

export default Avatars;
