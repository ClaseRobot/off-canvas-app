import { useState } from 'react'
import { EditUser } from './EditUser'
import './estadisticas.css'

export const Estadisticas = () => {

  const [users, setUsers] = useState([])
  const [open, setOpen] = useState(false)

  // fetch de los datos
  // logica del paginado y se lo paso al componente hijo
  
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="display">
      <EditUser open={open} handleClose={handleClose} />
      <h1 className='header'>Estadisticas de usuarios</h1>
      <main>
        <table>
          <thead>
            <tr>
              <th data-titulo='id'>#</th>
              <th data-titulo='nombre'>First Name</th>
              <th data-titulo='apellido'>Last Name</th>
              <th data-titulo='username'>Username</th>
              <th data-titulo='email'>Email</th>
              <th data-titulo='level'>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-titulo='id'>1</td>
              <td data-titulo='nombre'>Mark</td>
              <td data-titulo='apellido'>Otto</td>
              <td data-titulo='username'>MarkOtto</td>
              <td data-titulo='email'>Mark@gmail.com</td>
              <td data-titulo='level'>Admin</td>
              <td className='btn-action'>
                <button onClick={handleOpen} >editar</button>
                <button onClick={handleClose} >borrar</button>
              </td>
            </tr>
            <tr>
              <td data-titulo='id'>2</td>
              <td data-titulo='nombre'>Jacob</td>
              <td data-titulo='apellido'>Thornton</td>
              <td data-titulo='username'>jacobTh</td>
              <td data-titulo='email'>jacob@fat.com</td>
              <td data-titulo='level'>User</td>
              <td className='btn-action'>
                <button onClick={handleOpen} >editar</button>
                <button onClick={handleClose} >borrar</button>
              </td>
            </tr>
            <tr>
              <td data-titulo='id'>3</td>
              <td data-titulo='nombre'>Larry</td>
              <td data-titulo='apellido'>Bird</td>
              <td data-titulo='username'>LarryBird</td>
              <td data-titulo='email'>Larry@twitter.com</td>
              <td data-titulo='level'>Supervisor</td>
              <td className='btn-action'>
                <button onClick={handleOpen} >editar</button>
                <button onClick={handleClose} >borrar</button>
              </td>
            </tr>
            <tr>
              <td data-titulo='id'>4</td>
              <td data-titulo='nombre'>Jon</td>
              <td data-titulo='apellido'>Doe</td>
              <td data-titulo='username'>JonDoe</td>
              <td data-titulo='email'>JonDoe@twitter.com</td>
              <td data-titulo='level'>Admin</td>
              <td className='btn-action'>
                <button onClick={handleOpen} >editar</button>
                <button onClick={handleClose} >borrar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}