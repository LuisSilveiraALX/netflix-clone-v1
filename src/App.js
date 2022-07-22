import './App.css';
import Row from './Row'
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">

    <Nav />
    <Banner />
    <Row 
       title="NETFLIX ORIGINALES" 
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow={true}
    />
     <Row title="Mejor Valorados"fetchUrl={requests.fetchTopRated} />
     <Row title="Entra en acción"fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedias"fetchUrl={requests.fetchComedyMovies} />
     <Row title="Siente el miedo"fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Cine romántico"fetchUrl={requests.fetchTopRated} />
     <Row title="Documentales"fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
