import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/ListOfFilms";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ModalCase from "./ModalCase";
import {
  Card,
  Container,
  Icon,
  Row,
  Col,
  CardTitle,
  Button,
} from "react-materialize";
export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const userName = useParams();
  const film = data.find((obj) => {
    return obj.id == userName.id;
  });
  //    let cost = film.cost.toLocaleString();
  return (
    <Container className="container-detail">
      <Row>
        <Col m={12} s={12}>
          <Card
            actions={[
              // <a onClick={() => setIsOpen( true )} className='btn-floating haftway-fab waves-effect waves-light red'>
              <a onClick={() => setIsOpen(true)}>
                <Button
                  node="button"
                  style={{
                    marginRight: "5px",
                  }}
                  waves="light"
                >
                  Trailer
                  <Icon left>ondemand_video</Icon>
                </Button>
              </a>,
            ]}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={film.img} />}
            horizontal
            // revealIcon={<Icon>more_vert</Icon>}
          >
            <div className="badge">{film.title}</div>
            <div className="product-details">
              <p>{film.info}</p>
              <div className="product-bottom-details"></div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* <div className="product-card">
        <div className="badge">{film.title}</div>
        <Card className="product-tumb">
          <img src={`../${film.img}`} alt="" /> 
          
        </Card>
        <div className="product-details">
          <p>{film.info}</p>
          <div className="product-bottom-details"></div>
        </div>
      </div>
      <a onClick={() => setIsOpen( true )} className='btn-floating haftway-fab waves-effect waves-light red'>
                <Icon>ondemand_video</Icon>
            </a> */}

      {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
    </Container>
  );
}
