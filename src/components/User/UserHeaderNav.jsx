import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null)
  const { userLogout } = useContext(UserContext)

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        Minhas Fotos
      </NavLink>
      <NavLink to="/conta/estatisticas">
        Estatísticas
      </NavLink>
      <NavLink to="/conta/postar">
        Adicionar Foto
      </NavLink>
      <button onClick={userLogout}>
        Sair
      </button>
    </nav>
  )
}

export default UserHeaderNav
