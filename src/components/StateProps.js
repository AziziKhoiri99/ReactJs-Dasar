import React from 'react'
import Operan from './Operan'

export default class StateProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan: "Bakso"
        }
    }

    gantiMakanan = (makanan_baru) => {
        this.setState({
            makanan: makanan_baru
        })
    }

    render() {
        return (
            <div>
                <h5>{this.state.makanan}</h5>
                <button onClick={() => this.setState({ makanan: "Soto" })}>Change</button>
                <button onClick={() => this.gantiMakanan("Soto")}>Change</button>
                <Operan makanan={this.state.makanan} />
            </div>
        )
    }
}