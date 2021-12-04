import React from 'react';
import { Table, Row, Col } from 'react-bootstrap'

const Tabel = (props) => {
    console.log(props.dataTodos);

    return (
        <div>
            {/* <ul>{
                props.dataTodos.map((todo) => (
                    <li key={todo.id}>{todo.nama}</li>
                ))
            }
            </ul> */}
            <Row>
                <Col>
                    <h4>List Data</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover variant="dark">
                        <thead className="text-center">
                            <tr>
                                <th>#</th>
                                <th>Nama</th>
                                <th>Deskripsi</th>
                                <th>Harga</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.dataTodos.map((todo, index) => (
                                <tr key={todo.id}>
                                    <td>{index + 1}</td>
                                    <td>{todo.nama}</td>
                                    <td>{todo.deskripsi}</td>
                                    <td>{todo.harga}</td>
                                    <td></td>
                                </tr>
                            ))
                            }</tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default Tabel