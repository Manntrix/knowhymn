import React from "react";
import "./Category.scss";
import { HiSearch } from "react-icons/hi";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Category = () => {
  var i;
  var musics = [];
  for (i = 0; i < 7; i++) {
    musics.push(
      <Link to="/category/adoration-praise" className="no-under" key={i}>
        {" "}
        <div className="adoration" key={i}>
          <div className="num">
            <p>01</p>
          </div>
          <div className="title-desc">
            <div className="title">
              <p>
                Adoration & Praise <span>88</span>
              </p>
            </div>
            <div className="desc">
              <p>Lorem ipsum dolor sit amed</p>
            </div>
          </div>
          <div className="arrow">
            <MdKeyboardArrowRight />
          </div>
        </div>
      </Link>
    );
  }
  return (
    <>
      <div id="category">
        <div className="top-bar">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Category</Breadcrumb.Item>
          </Breadcrumb>
          <div className="heading">Category</div>
          <div className="searchbox">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search songs here..."
            />
            <div className="searchicon">
              <HiSearch />
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <Row>
            <Col md={6} className="side-border">
              {musics}
            </Col>
            <Col md={6}>{musics}</Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Category;
