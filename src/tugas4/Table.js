import React from 'react';
import { Table, Row, Col } from 'react-bootstrap'

const Tabel = ({ motors, editData, hapusData }) => {
    return (
        <div>
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
                                <th>Jumlah</th>
                                <th>Harga</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {motors.map((motor, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{motor.nama}</td>
                                        <td>{motor.qtt}</td>
                                        <td>{motor.harga}</td>
                                        <td>
                                            <button className="btn btn-warning" onClick={() => editData(motor.id)}>Edit</button>
                                            <button className="btn btn-success" onClick={() => hapusData(motor.id)}>Hapus</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default Tabel