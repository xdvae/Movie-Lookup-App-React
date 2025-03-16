import { useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        
    }
    return (
        <>
            <div className="nav">
                <div className="nav-data">
                    <h2>Movie <span className="lookup-text">Lookup</span></h2>
                </div>

                <div className="search-bar-div">
                    <form className='form'>
                        <input type="text" placeholder='Search a movie...' className='search-bar' onChange={(e) => {setSearchQuery(e.target.value)}}/>
                        <button className="search-btn"  onClick={handleSearch}>Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Navbar