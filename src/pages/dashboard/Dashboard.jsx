import { Navigate, Route, Routes } from 'react-router-dom';
import { FaCog, FaHome } from 'react-icons/fa';
import { FaBars, FaXmark, FaUmbrella, FaTwitch, FaSquareJs, FaShieldHalved, FaRust, FaUser, FaEnvelope, FaChartBar   } from "react-icons/fa6";
import { SidebarList } from './SidebarList';
import './dashboard.css'
import { Main } from '../main/Main'
import { Perfil } from '../perfil/Perfil';
import { Estadisticas } from '../estadisticas/Estadisticas';
import { Mensajes } from '../mensajes/Mensajes';
import { Config } from '../config/Config';

const listItems = [
  {
    id: 1,
    name: 'Item 1',
    path: '/item1',
    icon: '<FaUmbrella />'
  },
  {
    id: 2,
    name: 'Item 2',
    path: '/item2',
    icon: '<FaTwitch />'
  },
  {
    id: 3,
    name: 'Item 3',
    path: '/item3',
    icon: '<FaSquareJs />'
  },
  {
    id: 4,
    name: 'Item 4',
    path: '/item4',
    icon: '<FaShieldHalved />'
  },
  {
    id: 5,
    name: 'Item 5',
    path: '/item5',
    icon: '<FaRust />'
  }
]

const data = [
  { icon: <FaHome />, label: 'Inicio', path: '/' },
  { icon: <FaUser />, label: 'Perfil', path: '/main' },
  { icon: <FaCog />, label: 'Configuración', path: '/config' },
  { icon: <FaEnvelope />, label: 'Mensajes', path: '/mensajes' },
  { icon: <FaChartBar />, label: 'Estadísticas', path: '/estadisticas' },
];

export const Dashboard = () => {

  const handleOnSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('active')
  }

  const handleOffSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('active')
  }


  return (
    <>
      <div className="container">
        {/* Navbar */}
        <nav className='navbar'>
          <button id='btnon' onClick={() => handleOnSidebar()}>
            <FaBars />
          </button>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="profile">LiteMap</div>
            <a href="">hola</a>
          </div>
        </nav>
        {/* Main section */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='perfil' element={<Perfil />} />
          <Route path='config' element={<Config />} />
          <Route path='mensajes' element={<Mensajes />} />
          <Route path='estadisticas' element={<Estadisticas />} />
          <Route path="/*" element={<Navigate to="/perfil" />} />
        </Routes>
        {/* <Main /> */}
        
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="logo">
              Logo
            </div>
            <button id='btnoff' onClick={() => handleOffSidebar()}>
              <FaXmark />
            </button>
          </div>

          <SidebarList items={data} />
          <div className="logout">
            <span><FaTwitch /></span>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </>
  )
}