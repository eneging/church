
import './App.css'
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import Hojas from './Contenido/HojasWed'
import HojasPdf from './Contenido/HojasPdf';
import { PDFViewer , PDFDownloadLink } from '@react-pdf/renderer';

function App() {

 const [verWeb, setVerWeb] = useState(false);   
 const [verPdf, setVerPdf] = useState(false); 
 const [datito, setDatito] = useState({})

 const {register,handleSubmit, formState:{errors}} = useForm()

 const onSubmit = handleSubmit ((datos) => {

 setDatito(datos)

  } ) 

  



 
  return (
    <>
      <center><nav className="navbar navbar-expand-lg bg-body-tertiary"><a href="#" className="navbar-brand">  <center>#Mi App</center> </a></nav></center>

      <main>

        <article>
        
        
        

    <form onSubmit={onSubmit}>



    <div className="mb-3" id='container-form'> <label>Nombre de la Organizacion</label>
<input type="text" className="form-control" name='organizacion' {...register('organizacion', {
required:true

})} />
{errors.organizacion && <span className='alertaspan'>Campo requerido</span>}
</div>

<div className="mb-3" id='container-form'>
<label >Lideres encargados</label>
<ul>
    <li><input type="text" className="form-control" name='lider1' {...register('lider1',{
required:true

})}/></li>
{errors.lider1 && <span className='alertaspan'>Campo requerido</span>}
    <li><input type="text" className="form-control" name='lider2'  {...register('lider2',{
required:true

})}/></li>
{errors.lider2 && <span className='alertaspan'>Campo requerido</span>}
    <li><input type="text" className="form-control"  name='lider3' {...register('lider3',{
required:true

})}/></li>
{errors.lider3 && <span className='alertaspan'>Campo requerido</span>}
    <li><input type="text" className="form-control"  name='lider4'{...register('lider4',{
required:true

})}/></li>
{errors.lider4 && <span className='alertaspan'>Campo requerido</span>}
</ul>

</div>

<div className="mb-3" id='container-form' >
<label>Nombre de la Actividad</label>
<input type="text" className="form-control"  name='titulo' {...register('titulo',{
required:true

})}/>
{errors.titulo && <span className='alertaspan'>Campo requerido</span>}
</div>

<div className="mb-3" id='container-form'>
<label >Descripcion breve de la actividad</label>
<textarea className="form-control" id="exampleFormControlTextarea1" name='descripcion' rows="3" {...register('descripcion',{
required:true

})}></textarea>
{errors.descripcion && <span className='alertaspan'>Campo requerido</span>}
</div>

<div className="mb-3" id='container-form'>
<label >Presupuesto Asignado</label>
<input type="text" className="form-control" name='presupuesto' {...register('presupuesto',{
required:true

})} />
{errors.presupuesto && <span className='alertaspan'>Campo requerido</span>}
</div>


<div className="mb-3" id='container-form'>
    <h1>Datos</h1>


<label htmlFor="start">Fecha</label>
<input type="date" id="start" name="fecha" className="form-control" {...register('fecha',{
required:true

})} />
{errors.fecha && <span className='alertaspan'>Campo requerido</span>}

<label> Hora</label>
<input type='time' className="form-control" name='hora' {...register('hora',{
required:true

})}></input>

{errors.hora && <span className='alertaspan'>Campo requerido</span>}

</div>


<select id='container-form' className="form-select" aria-label="Default select example" name='barrio' {...register('Barrio',{
required:true

})}>
  
  <option selected>Barrio Anfitrion</option>
  <option value="Ica Central">Ica Central</option>
  <option value="San Isidro">San Isidro</option>
  <option value="La Achirana">La Achirana</option> 
  <option value="La Angostura">La Angostura</option>
  <option value="Santa Maria">Santa Maria</option>
  <option value="Puente Blanco">Puente Blanco</option>
  <option value="San Joaquin">San Joaquin</option>
</select>
{errors.barrio && <span className='alertaspan'>Campo requerido</span>}

<div>

    <h1 id='container-form'>Comites</h1>

   
<label> <h3 id='container-form'>Limpieza</h3></label>
<textarea  className="form-control" id="exampleFormControlTextarea1" rows="3" name='comiteLimepieza' {...register('comiteLimpieza',{
required:true

})}></textarea>
{errors.comiteLimpieza && <span className='alertaspan'>Campo requerido</span>}

<label ><h3 id='container-form'>Seguridad</h3></label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='comiteSeguridad' {...register('comiteSeguridad',{
required:true

})}></textarea>


{errors.comiteSeguridad && <span className='alertaspan'>Campo requerido</span>}
<label ><h3 id='container-form'>Refrigerio</h3></label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='comiteRefrigerio' {...register('comiteRefrigerio',{
required:true

})}></textarea>

{errors.comiteRefrigerio && <span className='alertaspan'>Campo requerido</span>}


<label ><h3 id='container-form'>Bienvenida</h3></label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='comiteBienvenida' {...register('comiteBienvenida',{
required:true

})}></textarea>

{errors.comiteBienvenida && <span className='alertaspan'>Campo requerido</span>}


</div>
<div>
<label ><h3 id='container-form'>Metas</h3></label>
<ul>
    <li><input type="text" className="form-control"  {...register('meta1',{
required:true

})}/></li>

{errors.meta1 && <span className='alertaspan'>Campo requerido</span>}
    <li><input type="text"  className="form-control" {...register('meta2',{
required:true

})}/></li>
{errors.meta2 && <span className='alertaspan'>Campo requerido</span>}
    <li><input type="text"  className="form-control" {...register('meta3',{
required:true

})}/></li>
{errors.meta3 && <span className='alertaspan'>Campo requerido</span>}
    <li><input type="text"  className="form-control" {...register('meta4',{
required:true

})}/></li>
{errors.meta4 && <span className='alertaspan'>Campo requerido</span>}
</ul>
</div>


<button className="btn btn-primary" type='submit' > Enviar Datos</button>
    </form>

       
        </article>
        <div>
            
             <button id='botoncisito'  onClick={()=> {
               setVerWeb(!verWeb);
               setVerPdf(false);

             }}>{verWeb ? "ocultar Web" : "ver Web"}</button>
      
      
      <button id='botoncisito' 
      onClick={()=> {
        setVerPdf(!verPdf);
        setVerWeb(false);
       

      }}
      >
        
        
        {verPdf ? "ocultar pdf" : "Ver pdf"}
      
        </button>
        
        <PDFDownloadLink document={<HojasPdf 
        
        Fecha = {datito.fecha}
        Barrio ={datito.Barrio} 
        comiteBienvenida ={datito.comiteBienvenida}
        comiteLimpieza = {datito.comiteLimpieza}
        comiteRefrigerio = {datito.comiteRefrigerio}
        comiteSeguridad = {datito.comiteSeguridad}
        lider1 = {datito.lider1}
        lider2 = {datito.lider2}
        lider3 = {datito.lider3}
        lider4 = {datito.lider4}
        meta1 = {datito.meta1}
        meta2 = {datito.meta2}
        meta3 = {datito.meta3}
        meta4 = {datito.meta4}
        organizacion = {datito.organizacion}
        presupuesto = {datito.presupuesto}
        titulo = {datito.titulo}
        descripcion = {datito.descripcion}
        hora = {datito.hora}
        > </HojasPdf> 
} fileName='Church.pdf'>
        <button id='botoncisito' >
          Descargar
        </button></PDFDownloadLink>
    
    
    </div>

{ datito ? 
    <div style={{minHeight : "100vh"}}>
       {verWeb ? <Hojas 
       
       Fecha = {datito.fecha}
       Barrio ={datito.Barrio} 
       comiteBienvenida ={datito.comiteBienvenida}
       comiteLimpieza = {datito.comiteLimpieza}
       comiteRefrigerio = {datito.comiteRefrigerio}
       comiteSeguridad = {datito.comiteSeguridad}
       lider1 = {datito.lider1}
       lider2 = {datito.lider2}
       lider3 = {datito.lider3}
       lider4 = {datito.lider4}
       meta1 = {datito.meta1}
       meta2 = {datito.meta2}
       meta3 = {datito.meta3}
       meta4 = {datito.meta4}
       organizacion = {datito.organizacion}
       presupuesto = {datito.presupuesto}
       titulo = {datito.titulo}
       descripcion = {datito.descripcion}
       hora = {datito.hora}
      
       
       
       
       ></Hojas> : null}
       {verPdf ? <PDFViewer style={{ minHeight: "100vh" , height: "90vh"}
       }>
        
        <HojasPdf 
        
        Fecha = {datito.fecha}
        Barrio ={datito.Barrio} 
        comiteBienvenida ={datito.comiteBienvenida}
        comiteLimpieza = {datito.comiteLimpieza}
        comiteRefrigerio = {datito.comiteRefrigerio}
        comiteSeguridad = {datito.comiteSeguridad}
        lider1 = {datito.lider1}
        lider2 = {datito.lider2}
        lider3 = {datito.lider3}
        lider4 = {datito.lider4}
        meta1 = {datito.meta1}
        meta2 = {datito.meta2}
        meta3 = {datito.meta3}
        meta4 = {datito.meta4}
        organizacion = {datito.organizacion}
        presupuesto = {datito.presupuesto}
        titulo = {datito.titulo}
        descripcion = {datito.descripcion}
        hora = {datito.hora}
        > </HojasPdf> 



       </PDFViewer>
       
       : null}
       </div>

   :null }


      </main>
    </>
  )
}

export default App
