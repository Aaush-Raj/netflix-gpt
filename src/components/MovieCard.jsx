import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40'>
        <img src={POSTER_URL+posterPath} alt="POSTER" />
      
    </div>
  )
}

export default MovieCard
