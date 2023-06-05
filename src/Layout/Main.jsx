import { useEffect, useState } from "react"
import Newscard from "./Newscard"
import axios from "axios"
import Navbar from "./Navbar"

const Main = () => {

  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(false)

  const getNews = async (q) => {
    setLoading(true)
    try {
      const res = await axios.get(`${import.meta.env.VITE_URL}${q}&apiKey=${import.meta.env.VITE_API_KEY}`)
      const { articles } = res.data
      setdata(articles)
    } catch (error) {
      console.error("Error fetching news:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getNews("India")
  }, [])

  return (
    <main>
      <Navbar getNews={getNews} />
      {loading ? (
        <div className="custom-loader-container">
          <div className="custom-loader"></div>
        </div>
      ) : (
        <div className="cards-container container flex">
          {
            data?.map((news, index) => {
              return <Newscard title={news.title} source={news.source.name} image={news.urlToImage} desc={news.description} date={news.publishedAt} newsurl={news.url} key={index} />
            })
          }
        </div>
      )}
    </main>
  )
}

export default Main