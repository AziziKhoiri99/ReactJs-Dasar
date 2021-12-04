import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const Formulir = ({ nama, qtt, harga, handleChange, handleSubmit }) => {
    return (
        <div className="mt-3">
            <Row>
                <Col>
                    <h4>Tambah Data</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="nama">
                            <Form.Label column sm="2">
                                Nama Motor
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control required name="nama" type="text" placeholder="Masukkan Nama" value={nama} onChange={(event) => handleChange(event)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="qtt">
                            <Form.Label column sm="2">
                                Jumlah
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control required name="qtt" type="number" placeholder="Masukkan Jumlah" value={qtt} onChange={(event) => handleChange(event)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="harga">
                            <Form.Label column sm="2">
                                Harga Motor
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control required name="harga" type="number" placeholder="Masukkan Harga" value={harga} onChange={(event) => handleChange(event)} />
                            </Col>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <br />
                </Col>
            </Row>
        </div>
    )
}

export default Formulir
