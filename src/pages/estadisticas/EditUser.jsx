import { FaXmark } from 'react-icons/fa6'
import './editUser.css'

export const EditUser = ({open, handleClose}) => {

  return (
    <div className={`card-edit-user ${open ? 'isActive' : '' }`}>
      <div className='card-body'>
        <h2 className="card-title">Edicion de Usuario</h2> 
        <p className="card-text">Esta seguro que desea modificar los datos del usuario?</p>
        <button className='card-acept-btn' onClick={handleClose}>Aceptar</button>
        <button className='card-cancel-btn' onClick={handleClose}>Cancelar</button>
      </div>
    </div>
  )
}