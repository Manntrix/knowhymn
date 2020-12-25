import React from "react";
import "./Audioplayer.scss";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import Maker from "../../assets/music/my-maker-and-my-king.mp3";
import { FaRegHeart } from "react-icons/fa";

const Audioplayer = () => {
  return (
    <>
      <div id="audioplayer">
        <AudioPlayer
          src={Maker}
          header="My Maker and My King"
          footer={<FaRegHeart />}
        />
      </div>
    </>
  );
};

export default Audioplayer;
