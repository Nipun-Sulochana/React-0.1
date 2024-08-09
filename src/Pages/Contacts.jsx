import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Contacts() {
    const navigate = useNavigate(); 
  return (
    <div>Contacts
        <button onClick={() => navigate(-1)}> Go Back </button>
    </div>
  )
}
