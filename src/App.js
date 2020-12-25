import "./App.scss";
import Header from "./components/Header/Header";

import { Col, Row, Container } from "react-bootstrap";
import Main from "./components/Main/Main";
import Trendy from "./components/Trendy/Trendy";
import Category from "./components/Category/Category";
import SubCategoryPage from "./components/Category/subCategoryPage";
import Mobilead from "./assets/img/mobilead.jpg";
import AudioPlayer from "./components/Audioplayer/Audioplayer";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { useMediaQuery } from "react-responsive";

function App() {
  const menu = useSelector((state) => state);
  const { menuCollapse } = menu.menu;

  return (
    <div id="app">
      <Container fluid>
        <Router>
          <Header />
          <Row className="scrollable">
            <Switch>
              <Route exact path="/" exactly>
                <Col
                  md={{
                    span: menuCollapse ? 8 : 7,
                    offset: menuCollapse ? 1 : 2,
                  }}
                  sm={12}
                >
                  <Main />
                </Col>
                <Col md={3}>
                  <Trendy
                    artist={"ANNE STELE"}
                    songtitle={"My Maker and My King"}
                    songtime={"05:10"}
                    ht={true}
                  />
                  <div className="mobilead">
                    <img src={Mobilead} alt="" />{" "}
                  </div>
                </Col>
              </Route>
              <Route path="/category" exact>
                <Col
                  md={{
                    span: menuCollapse ? 8 : 7,
                    offset: menuCollapse ? 1 : 2,
                  }}
                  sm={12}
                >
                  <Category />
                </Col>
                <Col md={3}>
                  <Trendy
                    artist={"ANNE STELE"}
                    songtitle={"My Maker and My King"}
                    songtime={"05:10"}
                    ht={false}
                  />
                </Col>
              </Route>
              <Route path="/category/:id" exact>
                <Col
                  md={{
                    span: menuCollapse ? 8 : 7,
                    offset: menuCollapse ? 1 : 2,
                  }}
                  sm={12}
                >
                  <SubCategoryPage />
                </Col>
                <Col md={3}>
                  <Trendy
                    artist={"ANNE STELE"}
                    songtitle={"My Maker and My King"}
                    songtime={"05:10"}
                    ht={false}
                  />
                </Col>
              </Route>
            </Switch>
          </Row>
        </Router>
      </Container>
      <div
        className="footer"
        style={{
          width: menuCollapse ? "calc(100% - 80px)" : "calc(100% - 215px)",
        }}
      >
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
