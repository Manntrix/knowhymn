import React from "react";
import "./Category.scss";
import { AiOutlineCopyright } from "react-icons/ai";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiPencilLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { BiPlay } from "react-icons/bi";

const Category = () => {
  return (
    <>
      <div id="category">
        <div className="top-bar">
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/category">Category</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Adoration & Praise</Breadcrumb.Item>
            <Breadcrumb.Item active>My Maker & My King</Breadcrumb.Item>
          </Breadcrumb>
          <div className="heading">My Maker & My King</div>
          <div className="author-pen">
            <div className="pen">
              <RiPencilLine />
            </div>
            <div className="name">ANNE STELE</div>
          </div>
          <div className="playnow">
            <div className="copyright">
              <AiOutlineCopyright />
            </div>
            <button className="play-now">
              Play Now{" "}
              <span>
                <BiPlay />
              </span>
            </button>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="like-music">
            <div className="music">
              <BsMusicNote />
            </div>
            <div className="like">
              <FaRegHeart />{" "}
            </div>
          </div>
          <ol>
            <li>
              <div className="ball"></div>
              <p>My maker and my king,</p>
              <p>To Thee my all I owe;</p>
              <p>Thy sovereign bounty is the spring</p>
              <p>Whence all my blessings flow;</p>
              <p>Thy sovereign bounty is the spring</p>
              <p>Whence all my blessings flow.</p>
            </li>
            <li>
              <div className="ball"></div>
              <p>The creature of Thy hand,</p>
              <p>On Thee alone I live;</p>
              <p>My god, Thy benefits demand</p>
              <p>More praise than I can give.</p>
              <p>My God, Thy benefits demand </p>
              <p>More praise than I can give.</p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Category;
