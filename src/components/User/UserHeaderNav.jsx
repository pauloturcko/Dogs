import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = useState(false)
  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label='menu'
          className={`${styles.mobileButton} ${mobileButton && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
    </>
  )
}

export default UserHeaderNav
