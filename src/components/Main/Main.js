import React from "react";
import "./Main.scss";
import { HiSearch } from "react-icons/hi";
import Cover from "../../assets/img/COVER.jpg";
import { Row, Col } from "react-bootstrap";
import Songcard from "../../components/Songcard/SongCard";

const Main = () => {
  return (
    <>
      <div id="maincontent">
        <div className="searchbox">
          <input type="text" name="" id="" placeholder="Search songs here..." />
          <div className="searchicon">
            <HiSearch />
          </div>
        </div>
        <div className="banner">
          <img src={Cover} alt="" />
        </div>
        <div className="popularsongs">
          <h3>Most Popular Songs</h3>
          <h6>610 Songs</h6>
          <div className="viewmore">
            <p>VIEW MORE</p>
          </div>
          <Row>
            <Col md={6}>
              <Songcard
                artist={"ANNE STELE"}
                songtitle={"My Maker and My King"}
                songtime={"05:10"}
              />
            </Col>
            <Col md={6}>
              <Songcard
                artist={"ANNE STELE"}
                songtitle={"My Maker and My King"}
                songtime={"05:10"}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Songcard
                artist={"ANNE STELE"}
                songtitle={"My Maker and My King"}
                songtime={"05:10"}
              />
            </Col>
            <Col md={6}>
              <Songcard
                artist={"ANNE STELE"}
                songtitle={"My Maker and My King"}
                songtime={"05:10"}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Songcard
                artist={"ANNE STELE"}
                songtitle={"My Maker and My King"}
                songtime={"05:10"}
              />
            </Col>
            <Col md={6}>
              <Songcard
                artist={"ANNE STELE"}
                songtitle={"My Maker and My King"}
                songtime={"05:10"}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Main;
