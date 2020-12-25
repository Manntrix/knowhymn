import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import "./Trendy.scss";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const Trendy = ({ artist, songtitle, songtime, ht }) => {
  var i;
  var musics = [];
  for (i = 0; i < 8; i++) {
    musics.push(
      <div className="songcard" key={i}>
        <AiFillPlayCircle />
        <div className="sctext">
          <div className="artist">
            {artist} <span>{songtime}</span>{" "}
          </div>
          <div className="songtitle">{songtitle}</div>
        </div>

        <FaRegHeart />
      </div>
    );
  }
  return (
    <>
      <div id="trendy">
        <div className="toptext">
          <h3>Trendy Musics</h3>
          <div className="ellipses">
            <IoEllipsisVerticalSharp />
          </div>
        </div>
        <div className="songbox" style={{ height: ht ? "250px" : "" }}>
          {musics}
        </div>
        <div className="viewmore">
          <p>VIEW MORE</p>
        </div>
      </div>
    </>
  );
};

export default Trendy;
Trendy.propTypes = {
  artist: PropTypes.string,
  songtitle: PropTypes.string,
  songtime: PropTypes.string,
  ht: PropTypes.bool,
};
