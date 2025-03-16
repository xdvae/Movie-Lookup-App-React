import './App.css'
import Movie_card from './Movie_card'
import Navbar from './Navbar'
function App() {
  const imge_lnk = "https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_UF1000,1000_QL80_.jpg";
  return (
    <>
      <Navbar />
        <div className="movie-box-txt">
          <h2>Pupular</h2> <hr className='line'/>
        </div>
      <div className="movie-box">
        <Movie_card img_link={imge_lnk} movie_title={"Joker"} rel_date={"A date"} />
        <Movie_card img_link={imge_lnk} movie_title={"Joker"} rel_date={"A date"} />
        <Movie_card img_link={imge_lnk} movie_title={"Joker"} rel_date={"A date"} />
        <Movie_card img_link={imge_lnk} movie_title={"Joker"} rel_date={"A date"} />
        <Movie_card img_link={imge_lnk} movie_title={"Joker"} rel_date={"A date"} />
        <Movie_card img_link={imge_lnk} movie_title={"Joker"} rel_date={"A date"} />
      </div>

    </>
  )
}

export default App
