import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import "./SongCard.scss";
import PropTypes from "prop-types";

const SongCard = ({ artist, songtitle, songtime }) => {
  return (
    <>
      <div className="songcard">
        <AiFillPlayCircle />
        <div className="sctext">
          <div className="artist">{artist}</div>
          <div className="songtitle">{songtitle}</div>
        </div>
        <div className="songtime">{songtime}</div>
        <FaRegHeart />
      </div>
    </>
  );
};

SongCard.propTypes = {
  artist: PropTypes.string,
  songtitle: PropTypes.string,
  songtime: PropTypes.string,
};

export default SongCard;
