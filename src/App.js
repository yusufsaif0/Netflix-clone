import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
    <Banner />
{/* <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>  */}
<Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow></Row>
<Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
<Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row> 

    </div>
  );
}

export default App;
