import React from 'react'

export default class Tugas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobil: ["BMW, ", "Tesla, ", "Porsche"]
        }
    }

    gantiMobil = (mobil_baru) => {
        this.setState({
            mobil: mobil_baru,
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.mobil}</h3>
                <button onClick={() => this.setState({ mobil: "Lamborghini, Toyota" })}>Change</button>
            </div>
        )
    }
}
