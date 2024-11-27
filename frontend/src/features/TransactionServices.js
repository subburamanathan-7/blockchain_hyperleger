import axios from 'axios'
const BASE_URL = "http://localhost:5000/api/assets/"

export const getTransactions = async()=>{
    const response = await axios.get(BASE_URL+"get-all")
    // console.log(response)
    return response.data
}