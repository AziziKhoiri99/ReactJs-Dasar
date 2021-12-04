import React from 'react'
import Sublifecycle from './Sublifecycle'
export default class Lifecycle extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            makanan: 'Bakso',
            data: {},
            tampilHalamanSub: false
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            // .then(response => console.log("Hasil: ", response.json()))
            // .then((json) => { console.log("Simpan then 2: ", json) })
            .then((json) => { this.setState({ data: json }) })
    }

    ubahmakanan(value) {
        this.setState({ makanan: value })
    }

    render() {
        console.log("Data : ", this.state.data);
        return (
            <div>
                {/* <h2>{this.state.data.title}</h2> */}
                <h2>{this.state.makanan}</h2>
                {this.state.tampilHalamanSub && <Sublifecycle ubahmakanan={(value) => this.ubahmakanan(value)} />}
                <button onClick={() => this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })}>Tampil Halaman Sub</button>
            </div>
        )
    }
}