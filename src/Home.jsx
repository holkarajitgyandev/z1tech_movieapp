import React, { useEffect, useState } from 'react'

const Home = () => {
    const[query,setQuery]=useState('');
    const[movies,setMovies]=useState([])

    const handlechange=(e)=>{
        setQuery(e.target.value)
    }

    useEffect(()=>{
        const fetchmovies=async()=>{
            try {
                const response=await fetch(`https://www.omdbapi.com/?s=${query}&apikey=8522ef48`)
                const data=await response.json();
                console.log(data)
                setMovies(data.Search || [])

            } catch (error) {
               console.error(error) 
            }
        }
        if(query){
            fetchmovies();
        }

    },[query])
    
  return (
    <div>
      <div className="serachbar">
      <input type="text" placeholder='search movie' onChange={handlechange} value={query} />
      
      </div>
      <div className='moviegrid' style={{display:'flex',gap:'5px',flexWrap:'wrap',justifyContent:'space-evenly'}}>
        {movies.map((movie,index)=>(
            <div>
                <li key={index}>{movie.Title}</li>
                <img src={movie.Poster} alt={movie.Title} />
                <p>{movie.Year}</p>
            </div>
            
        ))}
      </div>
      
    </div>
  )
}

export default Home
