import { Link, useNavigate } from "react-router-dom"

const Home=()=>{
    const location = useNavigate()
     const handleClick=()=>{
      location('/map')
    }
    return <div className="container">
       
        <button className="button" onClick={handleClick}>
           Start
        </button>
        
    </div>
}

export default Home