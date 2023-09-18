import axios from "axios";


const fetchData = async ()=>{
    let data = await axios.get('http://universities.hipolabs.com/search?country=india')
    return data
}

export default fetchData