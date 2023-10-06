


export default function Hojas(
{
  titulo,
  Barrio,
  comiteBienvenida,
  comiteLimpieza,
  comiteRefrigerio,
  comiteSeguridad,
  lider1,
  lider2,
  lider3,
  lider4,
  meta1,
  meta2,
  meta3,
  meta4,
  organizacion,
  Fecha,
  descripcion,
  hora

}
){

   

  return (
     <>
    
 


    <div className='container-all-products'>

   



    <h1 className='titulo2'>Cronograma Actividades</h1>
     <div>

         

       <div className='Cronograma'>

         <div>
          

           <h1 className='titulos'>{titulo}</h1>
         </div>

         <div>
           <div>
             <div>
               <h3 className='titulos'>Organizado:</h3>

               <h4 className='respuestas'>{organizacion}</h4>
             </div>


             <div>
               <div>
                 <h3 className='titulos'>lideres Asignados:</h3>



                 <h4 className='respuestas'>
                    <ul>
                        <li>{lider1}</li>
                        <li>{lider2}</li>
                        <li>{lider3}</li>
                        <li>{lider4}</li>
                    </ul>
                 </h4>
               </div>
             </div>

           </div>

           <div>
             <div>
               <h3 className='titulos'>Descripcion:</h3>

               <h4 className='respuestas'>{descripcion}</h4>
             </div>
           </div>




         </div>


         <div  >

           <div className='container-2bloque'>

             <div>
               
                <div>
                 <h1 className='titulos'>Hora</h1>
                 <h2 className='respuestas'>{hora}</h2>
                 
                </div>


             </div>

             <div>

             <div>
                 <h1 className='titulos'>Fecha</h1>
                 <h2 className='respuestas'>{Fecha}</h2>
                 
                </div>
             </div>


             <div>
             <div>
                 <h1 className='titulos'>Barrio</h1>
                 <h2 className='respuestas'>{Barrio}</h2>
                 
                </div>






  

             </div>


           </div>






         </div>




  
        

<div className='ctn-3-comites'>


<div > 

<h1 className='titulos'> Comite de Bienvenida</h1>
<p className='respuestas'>{comiteBienvenida}</p>


</div>


<div> 

<h1 className='titulos'> Comite de Seguridad</h1>
<p className='respuestas'> {comiteSeguridad}</p>


</div>




<div>

<div> 

<h1 className='titulos'> Comite de Limpieza</h1>
<p className='respuestas'> {comiteLimpieza}</p>


</div>



<div> 

<h1 className='titulos'> Comite de Refrigerio</h1>
<p className='respuestas'> {comiteRefrigerio}</p>


</div>

</div>

<div>

<h1 className='titulos'>Metas</h1>
<ul>
                        <li>{meta1}</li>
                        <li>{meta2}</li>
                        <li>{meta3}</li>
                        <li>{meta4}</li>
                    </ul>

</div>

</div>


       </div>



     


   

     </div>


   </div>
   </>
  )
}
