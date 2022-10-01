import React, { useEffect, useState } from 'react'
import Derecha from './Derecha'
import "./style/inicio.css"
import  axios  from 'axios'

const Inicio = () => {
  const [componetDerecha, setcomponetDerecha] = useState("+")
  const [dataState, setdataState] = useState("")
  const [exitosa, setexitosa] = useState("")
  const [dobleClick, setdobleClick] = useState({data:"", edit:false})

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

  const eliminar = async (id) => {
   const deleteData = dataState.find(item => item.id == id)
    try {
      const data = await axios.post("http://dev.inaltec.com.co:60000/Aeronaves/Retirar", {id:deleteData.id, descripcion: deleteData.descripcion, fechaRegistro:deleteData.fechaRegistro})
      console.log(data.data.operacionExitosa)
      if (data.data.operacionExitosa) {
        dataAxios()
      }
    } catch (error) {
      console.log(error)
    }
    
    console.log(id)
  }

  const dobleclic = (id) => {
    const updateData = dataState.find(item => item.id == id)
    setdobleClick({
      ...dobleClick,
      data:updateData,
      edit:true
    })
  
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
            <a  style={{width:"35%", display:'flex', justifyContent:"center"}}> id </a>
            <a style={{width:"50%", display:'flex', justifyContent:"center"}}>descripcion </a>
            <a style={{width:"70%", display:'flex', justifyContent:"center"}}>Fecha de registro </a>
          </div>  
          <div>
            <div>
        
          </div>
            {
              dataState && dataState .map((item)=>{
                return (
                  <div id={item.id}   style={{display:"flex", flexDirection:"row", marginTop:5}} onDoubleClick={()=>dobleclic(item.id)} >
                    <div style={{ marginRight:-15, width:"10%"}}>
                      <button key={item.id} value={item.id}  onClick={() => eliminar(item.id)} style={{width:30, height:20, fontSize:12}} >-</button>
                    </div>
                    <a value={item.id} style={{width:"20%", display:'flex', justifyContent:"center"}}> {item.id} </a>
                    <a value={item.id} style={{width:"50%", display:'flex', justifyContent:"center"}}>{item.descripcion} </a>
                    <a value={item.id} style={{width:"70%", display:'flex', justifyContent:"center"}}>{item.fechaRegistro} </a>
                  </div>
                )
              })
            }
          </div>
        </div>
        
      </div>
      <div style={{width:"50%"}}>
        {
            componetDerecha === "+" ? null :<Derecha exitosa = {setexitosa} dataInfo = {dobleClick} setdataInfo={setdobleClick} />
        }
        </div>
    </div>
  )
}

export default Inicio