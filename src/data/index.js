import { useState } from 'react'
import Navbar from './NavbarComponent'
import Table from './Table'
import Form from './Form'
import Footer from './Footer'

const Todo = () => {

    const [getTodos, setTodos] = useState([
        {
            id: 1,
            nama: "Badai",
            deskripsi: "Fiksi",
            harga: 12000
        },
        {
            id: 2,
            nama: "Pulang",
            deskripsi: "Fiksi",
            harga: 12000
        },
        {
            id: 3,
            nama: "Pergi",
            deskripsi: "Fiksi",
            harga: 12000
        },
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <Form onCreateTodo={eventCreateTodo} />
                <Table dataTodos={getTodos} />
            </div>
            <Footer />
        </div>
    )
}

export default Todo
