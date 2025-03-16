import './Movie_card.css'

function Movie_card(props) {
    return (
        <>
            <div className="box">
                <div className="image-box">
                    <img src={props.img_link} alt="" srcset="" />
                </div>
                <div className="data-box">
                    <h3 className="title">{props.movie_title}</h3>
                    <h6 className="rel_date">{props.rel_date}</h6>
                </div>
            </div>
        </>
    )
}

export default Movie_card