import React from 'react'

const Card = ({name, anime}) => {
  return (
    <div>
        <h2>Favorite Anime</h2>
        <p>Name: {name} </p>
        <p>Anime: {anime} </p>
    </div>
  )
}

export default Card