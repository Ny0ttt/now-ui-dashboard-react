/*!

=========================================================
* Now UI Dashboard React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
// import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function Profile() {

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-user">
              <div className="" style={{paddingBottom:50, paddingTop:10}}>
                <h1 className="title" style={{textAlign: "center" }}></h1>
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg")}
                    />
                    <h5 className="title">Ny0tt</h5>
                  </a>
                  <p className="description">Student . 24 Reviews</p>
                </div>
                <hr/>
                <br/>
                 {/* nak try cari macam mana nak buat responsive content. bila mobile view, logo besar ini, bila desktop view, logo besar ini  */}
                <div class="side-scroll">
                  <div class="item"><img class="image" alt="..."  src={require("assets/img/badge.png")}/>Juara Bertahan</div>
                  <div class="item"><img class="image" alt="..."  src={require("assets/img/badge2.png")}/>Master</div>
                  <div class="item"><img class="image" alt="..."  src={require("assets/img/badge3.png")}/>Gladators</div>
                  <div class="item"><img class="image" alt="..."  src={require("assets/img/badge4.png")}/>Eagle</div>
                  <div class="item"><img class="image" alt="..."  src={require("assets/img/badge5.png")}/>Guardian</div>
                  <div class="item">box-4</div>
                  <div class="item">box-5</div>
                  <div class="item">box-6</div>
                  <div class="item">box-7</div>
                </div>
                <br/>
                <hr />
                <br/>
                <Col md="12">
                  <p className="description text-left">
                  Username: Ny0t <br />
                  Phone: 0199229299 <br />
                  
                  </p>
                </Col>
                
                <hr />
              </CardBody>
              
              <div className="button-container">
              
                <Button
                 
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >Sign Out
                  <i className="" />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Profile;
