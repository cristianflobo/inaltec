import axios from "axios"

const axiosGet = async () => {
    try {
        const data = await axios.get("Lista")
        console.log(data.data)
        return data.data  
      } catch (error) {
        console.log(error)
      }
}

const axiosPost = async (url, {id, Descripcion}) => {
    if (url === "Retirar") { 
        try {
            const data = await axios.post(url, {id, Descripcion})
            return data.data
        } catch (error) {
            console.log(error)
        }
    }
    if (url === "Modificar") { 
        try {
            const data = await axios.post(url, {id, Descripcion})
        } catch (error) {
            console.log(error)
        }
    }
    if (url === "Adicionar") { 
        try {
            const data = await axios.post(url, {id, Descripcion})
            console.log("Adicionar, ",data.data)
            return  data.data
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    axiosGet,
    axiosPost,
}