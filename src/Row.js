import { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css'


const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState([]);
   /*  const [trailerUrl, setTrailerUrl] = useState(""); */

    // un fragmento de código que se ejecuta en función de una condición/variable específica
    useEffect(() => {
      // if [],ejecutar una vez cuando se carga la fila, y no ejecutar de nuevo
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results)
        return request;
        // https://api.themoviedb.org/3
      }
      fetchData();
    }, [fetchUrl]);

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {

        autoplay:1,
      },
    };

   /*  const handleClick = (movie) => {
      if(trailerUrl) {
        setTrailerUrl('');
      }else {
        movieTrailer(movie?.name || "")
        .then((url) => {
            const urlParams = new URLSearchParams( new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        }).catch(error => console.log(error))
      }
    } */

  return (
    <div className='columnas'>
        <h2>{title}</h2>

    <div className='columnas_posters'>
    {/* several row__posters(s) */}
    {movies.map(movie => (
      <img 
      key={movie.id}
      className={`columnas_poster ${isLargeRow && "columnas_posterLarge"}`}
      src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
      alt={movie.name}/>
    ))}
    </div>
 {/*      <YouTube videoId={trailerUrl} opts={opts} /> */}
    </div>
  )
}

export default Row