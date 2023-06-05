import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = ({ getNews }) => {

    const [value, setValue] = useState("")
    const [isClicked, setIsClicked] = useState(false)

    const handelClick = (item) => {
        setIsClicked(item)
        getNews(item)
    }

    const clickSearch = () => {
        getNews(value)
        setIsClicked("")
        setValue("")
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            getNews(value)
            setIsClicked("")
            setValue("")
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <nav>
            <div className="main-nav container flex">
                <Link to="/" className="company-logo">
                    <img src="/logo.png" alt="Logo" onClick={() => window.location.reload()}/>
                </Link>
                <div className="nav-links flex">
                    <Link className={`hover-link nav-items ${isClicked === "IPL" ? "active" : ""}`} onClick={() => handelClick("IPL")
                    }>IPL</Link>
                    <Link className={`hover-link nav-items ${isClicked === "Finance" ? "active" : ""}`} onClick={() => handelClick("Finance")
                    } >Finance</Link>
                    <Link className={`hover-link nav-items ${isClicked === "Politics" ? "active" : ""}`} onClick={() => handelClick("Politics")
                    }>Politics</Link>
                </div>
                <div className="search-bar flex">
                    <input type="text" className="news-input" value={value} placeholder="e.g. Technology" onKeyUp={handleKeyPress} onChange={handleChange}/>
                    <button className="search-button" onClick={clickSearch}>Search</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar