import './Formulario.css'
import { useState, Fragment } from 'react'



function Fomulario() {
const [dataFom, setDataForm] = useState({

organizacion : '',
lider1: '',
lider2: '',
lider3: '',
lider4: '',
titulo: '',
descripcion:'',
presupuesto:'',
fecha:'',
hora:'',
comiteLimepieza: '',
comiteSeguridad: '',
comiteBienvenida: '',
comiteRefrigerio: '',


})



const inputHandleChange = (e) => {


setDataForm({ ...setDataForm, 
   [ e.target.name] : e.target.value}
   
)






}



const enviarDatos = (event) => {
    event.preventDefault()

}


  return (

<Fragment>

    <form onSubmit={enviarDatos}>



    <div className="mb-3"> <label>Nombre de la Organizacion</label>
<input type="text" className="form-control" name='organizacion' onChange={inputHandleChange} />
</div>

<div className="mb-3">
<label >Lideres encargados</label>
<ul>
    <li><input type="text" className="form-control" name='lider1' onChange={inputHandleChange}/></li>
    <li><input type="text" className="form-control" name='lider2'  onChange={inputHandleChange}/></li>
    <li><input type="text" className="form-control"  name='lider3' onChange={inputHandleChange}/></li>
    <li><input type="text" className="form-control"  name='lider4' onChange={inputHandleChange}/></li>
</ul>

</div>

<div className="mb-3">
<label>Nombre de la Actividad</label>
<input type="text" className="form-control"  name='titulo' onChange={inputHandleChange}/>
</div>

<div className="mb-3">
<label >Descripcion breve de la actividad</label>
<textarea className="form-control" id="exampleFormControlTextarea1" name='descripcion' rows="3" onChange={inputHandleChange}></textarea>

</div>

<div className="mb-3">
<label >Presupuesto Asignado</label>
<input type="text" className="form-control" name='presupuesto' onChange={inputHandleChange} />
</div>


<div className="mb-3">
    <h1>Datos</h1>


<label htmlFor="start">Fecha</label>
<input type="date" id="start" name="fecha" className="form-control" onChange={inputHandleChange} />


<label> Hora</label>
<input type='time' className="form-control" name='hora' onChange={inputHandleChange}></input>



</div>


<select className="form-select" aria-label="Default select example">
  <option selected>Barrio Anfitrion</option>
  <option value="1">Ica Central</option>
  <option value="2">San Isidro</option>
  <option value="4">La Achirana</option> 
  <option value="5">La Angostura</option>
  <option value="6">Santa Maria</option>
  <option value="7">Puente Blanco</option>
  <option value="8">San Joaquin</option>
</select>


<div>

    <h1>Comites</h1>

   
<label> <h3>Limpieza</h3></label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='comiteLimepieza' onChange={inputHandleChange}></textarea>


<label ><h3>Seguridad</h3></label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='comiteSeguridad' onChange={inputHandleChange}></textarea>


<label ><h3>Refrigerio</h3></label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='comiteRefrigerio' onChange={inputHandleChange}></textarea>



<label ><h3>Bienvenida</h3></label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='comiteBienvenida' onChange={inputHandleChange}></textarea>



</div>
<div>
<label ><h3>Metas</h3></label>
<ul>
    <li><input type="text" className="form-control"  onChange={inputHandleChange}/></li>
    <li><input type="text"  className="form-control" onChange={inputHandleChange}/></li>
    <li><input type="text"  className="form-control" onChange={inputHandleChange}/></li>
    <li><input type="text"  className="form-control" onChange={inputHandleChange}/></li>
</ul>
</div>


<button className="btn btn-primary" type='submit'> Enviar Datos</button>
    </form>


    </Fragment>
  )
}

export default Fomulario