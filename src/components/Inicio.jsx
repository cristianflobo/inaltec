import React, { useEffect, useState } from 'react'
import Derecha from './Derecha'
import "./style/inicio.css"
import  axios  from 'axios'

const Inicio = () => {
  const [componetDerecha, setcomponetDerecha] = useState("+")
  const [dataState, setdataState] = useState("")
  const [exitosa, setexitosa] = useState("")
  useEffect(() => {
    dataAxios()
  }, [exitosa])
  const dataAxios = async() => {
    try {
      const data = await axios.get("http://dev.inaltec.com.co:60000/Aeronaves/Lista")
      console.log(data.data)
      setdataState(data.data)  
    } catch (error) {
      console.log(error)
    }
    
  }

  const eliminar = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  const dobleclic = (e) => {
    console.log(e)

  }
  

  const componetForm = () => {
    if (componetDerecha === "+") {
      setcomponetDerecha("-")
    }else {
      setcomponetDerecha("+")
    }
  }
  return (
    <div style={{display:'flex', backgroundColor:"#283039"}}>
      <div className='izquierda' >
        <div className='lista'>
          <div style={{display:'flex', flexDirection:"row"}}>
            <a style={{width:"50%", display:'flex', justifyContent:"center"}}>Lista eronave</a>
            <div  style={{width:"50%", display:'flex', justifyContent:"flex-end"}}>
              <button style={{marginRight:50}} className='botonmas' onClick={() => componetForm ()}>{componetDerecha}</button>
            </div>
          </div>
          <div style={{display:"flex", flexDirection:"row", marginTop:20}}>
            <a style={{width:"30%", display:'flex', justifyContent:"center"}}> id </a>
            <a style={{width:"50%", display:'flex', justifyContent:"center"}}>descripcion </a>
            <a style={{width:"70%", display:'flex', justifyContent:"center"}}>Fecha de registro </a>
          </div>  
          <div>
            <div>
          <button value="1"  onClick={(e) => eliminar(e)} style={{width:15, height:15}} >-</button>
          </div>
            {
              dataState && dataState .map((item)=>{
                return (
                  <div id={item.id} key = {item.id} style={{display:"flex", flexDirection:"row", marginTop:5}} onDoubleClick={(e)=>dobleclic(e)} >
                    <div style={{ marginRight:-15}}>
                      <button key={item.id} value={item.id}  onChange={(e) => eliminar(e)} style={{width:15, height:15}} >-</button>
                    </div>
                    <a style={{width:"30%", display:'flex', justifyContent:"center"}}> {item.id} </a>
                    <a style={{width:"50%", display:'flex', justifyContent:"center"}}>{item.descripcion} </a>
                    <a style={{width:"70%", display:'flex', justifyContent:"center"}}>{item.fechaRegistro} </a>
                  </div>
                )
              })
            }
          </div>
        </div>
        
      </div>
      <div style={{width:"50%"}}>
       {
            componetDerecha === "+" ? null :<Derecha exitosa = {setexitosa}/>
        }
        </div>
    </div>
  )
}

export default Inicio