import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
  const [incidents, setIncidents] = useState([])

  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  const history = useHistory()

  async function fetchData(ongId){
    const response = await api.get('profile', {
      headers: {
        authorization: ongId,
      }
    })
    setIncidents(response.data)    
  }

  useEffect(() => {
    fetchData(ongId)        
  }, [ongId])

  async function handleDeleteIncident(id){
    try {
      await api.delete(`incidents/${id}`,{
        headers: {
          authorization: ongId,
        }
      })
      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      alert(error)
    }
  }

  function handleDeleteLogout(){
    localStorage.clear()
    history.push('/')
  }

  if(!incidents){    
    return (
      <div className="profile-container">
        
        <header>
          <img src={logoImg} alt="Be the Hero"/>
          <span>Bem vinda, {ongName}</span>

          <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
          <button onClick={handleDeleteLogout} type="button">
            <FiPower size="18" color="#e02041"/>
          </button>
        </header>

        <h1>Casos Cadastrados</h1> 
        <p>Não existem casos cadastrados para esta ONG.</p>
      </div>
    )
  } else {
    return (
      <div className="profile-container">
              
        <header>
          <img src={logoImg} alt="Be the Hero"/>
          <span>Bem vinda, {ongName}</span>
  
          <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
          <button onClick={handleDeleteLogout} type="button">
            <FiPower size="18" color="#e02041"/>
          </button>
        </header>
  
        <h1>Casos Cadastrados</h1>      
        <ul>        
          {incidents.map(incident => (
            <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
  
            <strong>DESCRICAO:</strong>
            <p>{incident.description}</p>
  
            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BLR'}).format(incident.value)}</p>
  
            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size="20" color="#a8a8b3"/>
            </button>
          </li>
          ))}              
        </ul>
      </div>
    )
  }

  
}