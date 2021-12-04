import React from 'react'

var harga = 20000;
if (true) {
    harga = 30000;
}


let harga1 = 20000;
if (true) {
    harga1 = 40000;
}

const Variabel = () => {
    return (
        <div>
            <h2>{harga}</h2>
            <h2>{harga1}</h2>
        </div>
    )
}

export default Variabel
