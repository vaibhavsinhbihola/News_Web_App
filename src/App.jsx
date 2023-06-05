import { Route, Routes } from "react-router-dom"
import Homepage from "./Layout/Homepage"


const App = () => {

  return (
    <>
    <Routes>
      <Route index element={<Homepage/>}/>
    </Routes>
    </>
  )
}

export default App
