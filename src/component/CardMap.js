import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Carousel, Offcanvas } from "react-bootstrap";
import "./CardMap.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CardMap(prop) {
  const mapData = [
    {
      image_top: "",
      title: "Indonesia",

      mid_title: "Quick facts",
      desc: "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Sulawesi, Java, and parts of Borneo and New Guinea. Wikipedia",
      bot_title: "Photos",
      image_bot: "",
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(mapData);
  }, []);

  return (
    <>
      <Container key={prop.id}>
        <Row>
          <Col>
            {!show ? <IoIosArrowForward onClick={handleShow} className="btn-right" /> : null}

            {mapData.map((item, index) => (
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                  <IoIosArrowBack onClick={handleClose} className="btn-left" />
                </Offcanvas.Header>
                <Card key={index}>
                  <Card.Img variant="top" src={require("../../public/images/img/jkt" + item.image_top + ".jpg")} alt="top-img" />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <div className="icon-list">
                      <Card.Link className="bg-primary-soft rounded-circle">
                        <div className="card-icon">
                          <Card.Img src={require("../../public/images/icons/route" + item.image_top + ".svg")} />
                        </div>
                        <p>route</p>
                      </Card.Link>
                      <Card.Link>
                        <div className="card-icon">
                          <Card.Img src={require("../../public/images/icons/save" + item.image_top + ".svg")} />
                        </div>{" "}
                        <p>save</p>
                      </Card.Link>
                      <Card.Link>
                        <div className="card-icon">
                          <Card.Img src={require("../../public/images/icons/loc" + item.image_top + ".svg")} />
                        </div>{" "}
                        <p>nearby</p>
                      </Card.Link>
                      <Card.Link>
                        <div className="card-icon">
                          <Card.Img src={require("../../public/images/icons/send" + item.image_top + ".svg")} />
                        </div>{" "}
                        <p>send</p>
                      </Card.Link>
                      <Card.Link>
                        <div className="card-icon">
                          <Card.Img src={require("../../public/images/icons/share" + item.image_top + ".svg")} />
                        </div>
                        <p>share</p>
                      </Card.Link>
                    </div>
                    <div className="card-desc">
                      <div className="mid-title">
                        <p>{item.mid_title}</p>
                      </div>
                      <div className="mid-desc">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                    <Card.Text className="bot-title">{item.bot_title}</Card.Text>
                    <Carousel>
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("../../public/images/img/img1" + item.image_bot + ".jpg")} alt="First slide" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block w-100" src={require("../../public/images/img/img1" + item.image_bot + ".jpg")} alt="First slide" />
                      </Carousel.Item>
                    </Carousel>
                  </Card.Body>
                </Card>
              </Offcanvas>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardMap;
