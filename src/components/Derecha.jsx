import React, { memo, useEffect, useState } from 'react'
import "./style/derecha.css"
import  axios  from 'axios'

const Derecha = ({exitosa, dataInfo, setdataInfo}) => {
  let number =  /^[0-9]+$/
    const [dataForm, setdataForm] = useState({id:"", Descripcion:"" })

    const onchange = (e) => {
        setdataForm({
            ...dataForm,
            [e.target.name]:e.target.value
        })  
    }
    console.log("---------hola", dataInfo )



    useEffect(() => {
      if (dataInfo.edit) {
        console.log("--------", dataInfo.data.id, "--------", dataInfo.data.descripcion)
        setdataForm({
          id:dataInfo.data.id,
          Descripcion:dataInfo.data.descripcion
        })
      }
      
    }, [dataInfo])
  
 
    const onclick = async({id, Descripcion}) => {
      if (dataInfo.edit) {
        try {
          const data = await axios.post("http://dev.inaltec.com.co:60000/Aeronaves/Modificar",{id, Descripcion})
          console.log("modificar",data.data)
          
        } catch (error) {
          console.log(error)
        }
         setdataInfo({
          ...dataInfo,
          edit:false
        })
      }else {
        if(number.test(parseInt(dataForm.id))  === false) {
          alert('escribir numeros enteros');
          setdataForm({ ...dataForm, id:"0"})
        }else{
          try {
            const data = await axios.post("http://dev.inaltec.com.co:60000/Aeronaves/Adicionar", {id, Descripcion})
            console.log(data.data)
            if (data.data.operacionExitosa) {
              exitosa(item => item +1)
            }
            
          } catch (error) {
            console.log(error)
          }
        }
      } 
    setdataForm({id:"", Descripcion:""})
    }

    //setdataForm({id:dataInfo.edit?dataInfo.data.id:dataForm.id, Descripcion:dataInfo.edit?dataInfo.data.Descripcion:dataForm.Descripcion })
    return (
        <div>
          <div className='derecha' >
            <div className='derecha2'>
                <div style={{display:'flex', justifyContent:'center', width:"100%"}}>
                    <a>Registro Aeronaves</a>
                </div>
                <div style={{display:'flex', justifyContent:'center', width:"100%", marginTop:30}}>
                    <a style={{width:"30%" }}>Id</a>
                    <input disabled={dataInfo.edit} name='id' value={dataForm.id}  onChange={(e)=>onchange(e)} style={{height:25, width:"50%"}} type="text" />
                </div>
                <div style={{display:'flex', justifyContent:'center', width:"100%", marginTop:15}}>
                    <a style={{width:"30%" }}>Descripcion</a>
                    <textarea value={dataForm.Descripcion} name='Descripcion' onChange={(e)=>onchange(e)} style={{width:"50%"}} id="" cols="30" rows="10"></textarea>
                </div>
                <div style={{display:'flex',justifyContent:'end'}}>
                    <div style={{width:"25%"}}>
                    <button  onClick={()=> onclick(dataForm)} style={{width:70, backgroundColor:"#f9c499", border:"none", borderRadius:3, height:25 }}>guardar</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )
    }


export default Derecha