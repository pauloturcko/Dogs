import React from 'react'

const Erro = ({ error }) => {

  if(!error) return null
  return <p>{{color: '#f31', margin: '1rem, 0'}}{error}</p>
}

export default Erro
