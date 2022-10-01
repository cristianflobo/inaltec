import React, { useState } from 'react'
import "./style/derecha.css"
import  axios  from 'axios'

const Derecha = ({exitosa}) => {
  let number =  /^[0-9]+$/
    const [dataForm, setdataForm] = useState({id:"0", Descripcion:"" })

    const onchange = (e) => {
        setdataForm({
            ...dataForm,
            [e.target.name]:e.target.value
        })
        
    }

    const onclick = async({id, Descripcion}) => {
      
      if(number.test(parseInt(dataForm.id))  === false) {
        alert('escribir numeros enteros');
        setdataForm({ ...dataForm, id:"0"})
      }else{
        try {
          const data = await axios.post("http://dev.inaltec.com.co:60000/Aeronaves/Adicionar", {id, Descripcion})
          console.log(data.data)
          exitosa(item => item +1)
        } catch (error) {
          console.log(error)
        }
    }
      
    
    }

    return (
        <div>
          <div className='derecha' >
            <div className='derecha2'>
                <div style={{display:'flex', justifyContent:'center', width:"100%"}}>
                    <a>Registro Aeronaves</a>
                </div>
                <div style={{display:'flex', justifyContent:'center', width:"100%", marginTop:30}}>
                    <a style={{width:"30%" }}>Id</a>
                    <input name='id'  onChange={(e)=>onchange(e)} style={{height:25, width:"50%"}} type="text" />
                </div>
                <div style={{display:'flex', justifyContent:'center', width:"100%", marginTop:15}}>
                    <a style={{width:"30%" }}>Descripcion</a>
                    <textarea name='Descripcion' onChange={(e)=>onchange(e)} style={{width:"50%"}} id="" cols="30" rows="10"></textarea>
                </div>
                <div style={{display:'flex',justifyContent:'end'}}>
                    <div style={{width:"25%"}}>
                    <button  onClick={()=> onclick(dataForm)} style={{width:70, backgroundColor:"#f9c499", border:"none", borderRadius:3, height:25 }}>guardar</button>
                    </div>
                </div>
              
              
              {/* <button style={{width:70,height:25}}>guardar</button> */}
            </div>
          </div>
        </div>
      )
    }


export default Derecha