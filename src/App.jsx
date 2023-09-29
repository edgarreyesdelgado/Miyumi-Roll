import React, { useEffect, useState } from 'react'
import { db } from './Firebase/firebase'
import { collection, getDocs, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { doc } from 'firebase/firestore'





const App = () => {

  const [users, setUsers]= useState([])
  const userCollectionRef = collection(db, 'Reservas')
  const [newName, setNewName] = useState("")
  const [newHour, setNewHour] = useState("")
  const [newDate, setNewDate] = useState("")
  const [newTable, setNewTable] = useState(0)
  const [newPhone, setNewPhone] = useState(0)

const createUserDocs = async()=>{
  await addDoc(userCollectionRef,{nombre: newName, hora: newHour, fecha: newDate, mesa: newTable, telefono: newPhone  })
  getUserDocs()
}


const getUserDocs = async() =>{
  const data = await getDocs (userCollectionRef) 
  setUsers (data.docs.map((doc) => ({...doc.data(), id: doc.id})))
}

 const incrementarMesa = async(id, newTable) =>{
   const userDoc = doc(userCollectionRef, id)
   const newMesa = {mesa: parseInt(newTable) + 1}
   console.log(newMesa)
   await updateDoc(userDoc, newMesa)
   getUserDocs()
   }

   const decrementarMesa = async(id, newTable) =>{
    const userDoc = doc(userCollectionRef, id)
    const newMesa = {mesa: parseInt(newTable) - 1}
    console.log(newMesa)
    await updateDoc(userDoc, newMesa)
    getUserDocs()
    }

   const borrarDoc = async(id) =>{
    const userDoc = doc(userCollectionRef, id)
    await deleteDoc(userDoc)
    getUserDocs()
    }

useEffect(()=>{
  getUserDocs()
},[])



  return (
    <div>
 <p>Sobre Nosotros</p>

<div class="p-5 mt-4 mb-4 bg-warning rounded-3">

    <img height="320px" src="https://scontent.fmex12-1.fna.fbcdn.net/v/t39.30808-6/359842567_801607575004048_7288942667524146010_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=ZvUFo79cOG4AX99vASO&_nc_ht=scontent.fmex12-1.fna&oh=00_AfDdhy3EdTd6I_n5Ni6uDouz3yRMXZemn_HbSMZQj180Dg&oe=651A9C31" class="rounded float-end text-center" alt="Responsive image" ></img>
    <h2 class="col-md-8 fs-1 text-start">Bienvenidos a MIYUMI ROLL</h2>
    <hr />
    <br />
    <h3 class="col-md-8 fs-2 text-start">Si te gusta Splatoon, los videojuegos y el anime; ESTE LUGAR ES PARA TI, donde podras encontrar platillos inspirados en splatoon.</h3>
    <br />
    <h4 class="col-md-8 fs-2 text-start">Ademas en los SplaFest tendremos grandes sorpresas y promociones. LOS ESPERAMOS........</h4>
    <br />
    <h5 class="col-md-8 fs-2 text-start">No esperes mas y RESERVA TU MESA HOY MISMO.</h5>
  </div>

<p>Nuestro menú</p>

<div class="menu">
    <img height="1200px" src="https://scontent.fmex12-1.fna.fbcdn.net/v/t39.30808-6/360089851_801530955011710_6291142074438417206_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_ohc=SsBMOl004T8AX_dSmPC&_nc_ht=scontent.fmex12-1.fna&oh=00_AfAOUUxComtZ-mMQ896vYtHz0_r2SiZ4AN5SAEyogK9G1Q&oe=651BFB0B" ></img>
  </div>


<p>Reserva Ahora</p>

<h6 class="col-md-10 fs-2 text-start">Para reservar porfavor registrate con tu nombre, hora, fecha, numero de personas y telefono.</h6>
<br />
<h6 class="col-md-10 fs-2 text-start">Una vez realize la reservación nos comunicaremos con usted.</h6>
<br />
   

      <input type='text' placeholder='Nombre' onChange={(e)=>{setNewName(e.target.value)}}/>
      <input type='hour' placeholder='Hora' onChange={(e)=>{setNewHour(e.target.value)}}/>
      <input type='date' placeholder='Fecha' onChange={(e)=>{setNewDate(e.target.value)}}/>
      <input type='number' placeholder='#dePersonas' onChange={(e)=>{setNewTable(e.target.value)}}/>
      <input type='number' placeholder='Telefono' onChange={(e)=>{setNewPhone(e.target.value)}}/>
      
    
      <button onClick={createUserDocs}>Reservacion</button>

      

    {users.map((user)=>{
      return (
        <div key={user.id}>
          <br />
          <h1>Nombre:{user.nombre}</h1>
          <h1>Hora:{user.hora}</h1>
          <h1>Fecha:{user.fecha}</h1>
          <h1>No de personas:{user.mesa}</h1>
          <h1>Telefono:{user.telefono}</h1>
          <br />
          <button onClick={()=> incrementarMesa(user.id, user.mesa)}>Añadir Personas</button>
          <button onClick={()=> decrementarMesa(user.id, user.mesa)}>Eliminar Personas</button>
          <button onClick={()=> borrarDoc(user.id)}>Borrar</button>
          
          </div>
      )
    })}

<p>Visitanos</p>

          <h6  class="fs-3 "> Nos ubicamos en: Calle alberes #18 Coyotepec, Estado de México.  </h6>
          <h6  class="fs-3 ">Tel: (52) 55 12 123 456   </h6>
          <h6  class="fs-3 ">emali: miyumiroll@gmail.com</h6> 

          <p>Nuestros Clientes</p>

<div class="p-5 mt-4 mb-4 bg-warning rounded-3">

    <img height="320px" src="https://i.pinimg.com/originals/a0/d2/3d/a0d23d90747d91ad8ca201908b08f0c6.jpg" class="rounded float-end text-center" alt="Responsive image" ></img>
    <h2 class="col-md-8 fs-1 text-start">Experiencia EXPO AKAI</h2>
    <hr />
    <br />
    <h3 class="col-md-8 fs-2 text-start">Los dias 1 y 2 de abril nos encontramos compartiendo experiencias culinarias con ustedes, nos encanta poder atenderlos.</h3>
    <br />
    <h4 class="col-md-8 fs-2 text-start">En esta ocacion todas nuestros productos incluyen sorpresa.</h4>
 
  </div>

      </div>
  )
}

export default App
