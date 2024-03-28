import React from 'react'
import './CarouselBlock.css'

const CarouselBlock = ({ character }) => {
  return (
    <div className='character-container'>
    <div className='information'>
    <h1 className='title'>{character?.name}</h1>
      <p className='block'><span>Ki:</span> {character?.ki}</p>
      <p className='block'><span>Race:</span> {character?.race}</p>
      <p className='block'><span>Gender:</span> {character?.gender}</p>
      <p className='block'><span>Affiliation:</span> {character?.affiliation}</p>
    </div>
    <img
      className="image"
      src={character?.image}
      alt={character?.name}
    />
  </div>
  )
}

export default CarouselBlock