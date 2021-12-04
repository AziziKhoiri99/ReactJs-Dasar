import React from 'react'
import Navbar from '../data/NavbarComponent'
import Table from './Table'
import Form from './Form'
import Footer from '../data/Footer'

export default class Crud extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            motors: [
                {
                    id: 1,
                    nama: 'Supra',
                    harga: 12000000,
                    qtt: 10
                },
                {
                    id: 2,
                    nama: 'Kawasaki',
                    harga: 10000000,
                    qtt: 10
                },
                {
                    id: 3,
                    nama: 'Honda',
                    harga: 15000000,
                    qtt: 10
                },
                {
                    id: 4,
                    nama: 'Yamaha',
                    harga: 15000000,
                    qtt: 10
                },
                {
                    id: 5,
                    nama: 'CBR',
                    harga: 19000000,
                    qtt: 10
                },
                {
                    id: 6,
                    nama: 'Vespa',
                    harga: 12000000,
                    qtt: 10
                },
                {
                    id: 7,
                    nama: 'Scoopy',
                    harga: 10000000,
                    qtt: 10
                },
                {
                    id: 8,
                    nama: 'Astrea',
                    harga: 15000000,
                    qtt: 10
                },
                {
                    id: 9,
                    nama: 'Mio',
                    harga: 15000000,
                    qtt: 10
                },
                {
                    id: 10,
                    nama: 'Vario',
                    harga: 19000000,
                    qtt: 10
                }
            ],
            id: "",
            nama: "",
            qtt: "",
            harga: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Data: ", this.state)

        if (this.state.id === "") {
            this.setState({
                motors: [
                    ...this.state.motors,
                    {
                        id: this.state.motors.length + 1,
                        nama: this.state.nama,
                        qtt: this.state.qtt,
                        harga: this.state.harga
                    }
                ]
            });
        } else {
            const nopickedBook = this.state.motors
                .filter((motor) => motor.id !== this.state.id)
                .map((filterMotor) => {
                    return filterMotor
                })
            this.setState({
                motors: [
                    ...nopickedBook,
                    {
                        id: this.state.motors.length + 1,
                        nama: this.state.nama,
                        qtt: this.state.qtt,
                        harga: this.state.harga
                    },
                ],
            });
        }

        this.setState({
            id: "",
            nama: "",
            qtt: "",
            harga: ""
        })
    }

    editData = (id) => {
        const pickedBook = this.state.motors
            .filter((motor) => motor.id === id)
            .map((filterMotor) => {
                return filterMotor
            })

        this.setState({
            id: pickedBook[0].id,
            nama: pickedBook[0].nama,
            qtt: pickedBook[0].qtt,
            harga: pickedBook[0].harga,
        })
    }
    hapusData = (id) => {
        const motorBaru = this.state.motors
            .filter((motor) => motor.id !== id)
            .map((filterMotor) => {
                return filterMotor
            })

        this.setState({
            motors: motorBaru
        })
    }

    render() {
        console.log(this.state.motors);
        return (
            <div>
                <Navbar />
                <div className="container mt-4">
                    <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    <Table motors={this.state.motors} editData={this.editData} hapusData={this.hapusData} />
                </div>
                <Footer />
            </div>
        )
    }
}
