import { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const Formulir = (props) => {
    const [nama, setInputTodo] = useState('')
    const [deskripsi, setInputTodo1] = useState('')
    const [harga, setInputTodo2] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            nama: nama,
            deskripsi: deskripsi,
            harga: harga
        }

        props.onCreateTodo(newTodo)

        setInputTodo('')
        setInputTodo1('')
        setInputTodo2('')
    }

    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
    }

    const handleInputTodo1 = (event) => {
        setInputTodo1(event.target.value)
    }

    const handleInputTodo2 = (event) => {
        setInputTodo2(event.target.value)
    }

    return (
        <div className="mt-3">
            {/* <form onSubmit={handleSubmit}>
                <input type="text" value={getInputTodo} onChange={handleInputTodo}></input>
                <button type="submit">Add</button>
            </form> */}
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
                                Nama Buku
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control name="nama" type="text" placeholder="Masukkan Nama" value={nama} onChange={handleInputTodo} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="deskripsi">
                            <Form.Label column sm="2">
                                Deskripsi
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control name="deskripsi" type="text" placeholder="Masukkan Deskripsi" value={deskripsi} onChange={handleInputTodo1} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="harga">
                            <Form.Label column sm="2">
                                Harga Buku
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control name="harga" type="number" placeholder="Masukkan Harga" value={harga} onChange={handleInputTodo2} />
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
