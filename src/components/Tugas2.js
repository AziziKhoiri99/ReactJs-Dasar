const motors = [
    {
        nama: 'Supra',
        harga: 12000000,
        qtt: 10
    },
    {
        nama: 'Kawasaki',
        harga: 10000000,
        qtt: 10
    },
    {
        nama: 'Honda',
        harga: 15000000,
        qtt: 10
    },
    {
        nama: 'Yamaha',
        harga: 15000000,
        qtt: 10
    },
    {
        nama: 'CBR',
        harga: 19000000,
        qtt: 10
    },
    {
        nama: 'Vespa',
        harga: 12000000,
        qtt: 10
    },
    {
        nama: 'Scoopy',
        harga: 10000000,
        qtt: 10
    },
    {
        nama: 'Astrea',
        harga: 15000000,
        qtt: 10
    },
    {
        nama: 'Mio',
        harga: 15000000,
        qtt: 10
    },
    {
        nama: 'Vario',
        harga: 19000000,
        qtt: 10
    }
]

const total_bayar = motors.reduce((total_harga, motor) =>
    total_harga + motor.harga, 0)

const Map = () => {
    return (
        <div>
            <h2>Jenis Motor</h2>
            <table>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>QTy</th>
                    <th>Harga</th>
                    <th>Akumulasi</th>
                </tr>
                {motors.map((motor, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{motor.nama}</td>
                        <td>{motor.qtt}</td>
                        <td>{motor.harga}</td>
                        <td>{motor.qtt * motor.harga}</td>
                    </tr>
                ))}
            </table>

            <h2>Motor Filter Harga yang kurang dari 11.000.000</h2>
            <ul>
                {motors.filter((motor) => motor.harga > 11000000)
                    .map((motor, index) => (
                        <li>{index + 1}. {motor.nama} - Harga {motor.harga}</li>
                    ))}
            </ul>

            <h3>Total Bayar : {total_bayar}</h3>
        </div>
    )
}

export default Map