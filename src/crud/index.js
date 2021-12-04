import React from 'react'
import Navbar from '../data/NavbarComponent'
import Table from './Table'
import Form from './Form'
import Footer from '../data/Footer'

export default class Crud extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            bukus: [],
            id: "",
            nama: "",
            deskripsi: "",
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
                bukus: [
                    ...this.state.bukus,
                    {
                        id: this.state.bukus.length + 1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            });
        } else {
            const nopickedBook = this.state.bukus
                .filter((buku) => buku.id !== this.state.id)
                .map((filterBuku) => {
                    return filterBuku
                })

            this.setState({
                bukus: [
                    ...nopickedBook,
                    {
                        id: this.state.bukus.length + 1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    },
                ],
            });
        }

        this.setState({
            id: "",
            nama: "",
            deskripsi: "",
            harga: ""
        })
    }
    editData = (id) => {
        const pickedBook = this.state.bukus
            .filter((buku) => buku.id === id)
            .map((filterBuku) => {
                return filterBuku
            })

        this.setState({
            id: pickedBook[0].id,
            nama: pickedBook[0].nama,
            deskripsi: pickedBook[0].deskripsi,
            harga: pickedBook[0].harga,
        })
    }
    hapusData = (id) => {
        const bukuBaru = this.state.bukus
            .filter((buku) => buku.id !== id)
            .map((filterBuku) => {
                return filterBuku
            })

        this.setState({
            bukus: bukuBaru
        })
    }
    render() {
        console.log(this.state.bukus);
        return (
            <div>
                <Navbar />
                <div className="container mt-4">
                    <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    <Table bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} />
                </div>
                <Footer />
            </div>
        )
    }
}
