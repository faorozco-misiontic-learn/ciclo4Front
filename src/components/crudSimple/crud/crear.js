import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

export default class CrudSimpleCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      loading: false,
      crudSimple: {
        fila_1: "",
        fila_2: "",
        fila_3: "",
        fila_4: "",
        fila_5: "",
        fila_6: "",
        fila_7: "",
        fila_8: "",
        fila_9: "",
        fila_10: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }

  setValue(index, value) {
    this.setState({
      crudSimple: {
        ...this.state.crudSimple,
        [index]: value,
      },
    });
  }

  guardarCrudSimple() {
    this.setState({ loading: true });
    request
      .post("/crudSimple", this.state.crudSimple)
      .then((response) => {
        if (response.data.exito) {
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      });
  }

  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab("buscar");
  }

  render() {
    return (
      <Container id="crudSimple-crear-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />

        <Loading show={this.state.loading} />

        <Row>
          <h1>Crear</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Primer Nombre</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fila_1", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Segundo Nombre</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fila_2", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Primer Apellido</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fila_3", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Segundo Apellido</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fila_4", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Tipo id</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fila_5", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label># id</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fila_6", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Dirección</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fila_7", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Celular</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fila_8", e.target.value)} />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fila_9", e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Departamento</Form.Label>
              <Form.Control onChange={(e) => this.setValue("fila_10", e.target.value)} />
            </Form.Group> */}

            <Button variant="primary" onClick={() => console.log(this.guardarCrudSimple())}>
              Guardar
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
