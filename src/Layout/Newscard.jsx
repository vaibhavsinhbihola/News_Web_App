import React from 'react'
import { Link } from 'react-router-dom';

const Newscard = ({ title, image, source, desc, date, newsurl }) => {

    const time = new Date(date).toLocaleString("en-us",{
        timeZone: "Asia/jakarta"
    })

    return (
            <Link to={newsurl}>
                <div className='card'>
                    <div className="card-header">
                        <img src={image || "https://via.placeholder.com/400X200"} alt="news-image" id="news-img" />
                    </div>
                    <div className="card-content">
                        <h3 id='news-title' style={{
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis'
                        }}>{title}</h3>
                        <h6 className='news-source' id='news-source'>{source} • {time}</h6>
                        <p className='news-desc' id='news-desc'>{desc}</p>
                    </div>
                </div>
            </Link>
    )
}

export default Newscard