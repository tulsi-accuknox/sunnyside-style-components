import React from 'react'
import styled from "styled-components";

const ImageDiv = styled.img`
    border-radius: 50%;
    width: 100px;
    
`

const CardDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
`

const Testimonial = () => {
  return (
    <div>
          <h2 className="text-center p-7 text-5xl text-slate-500 tracking-wider font-extrabold mt-20">CLIENT TESTIMONIALS</h2>
       <section className="flex justify-center items-center p-36 gap-12">
      
         <CardDiv className="t1">
            <ImageDiv src='/images/image-emily.jpg'/>
              
           
             
             <p className="text-center text-xl text-slate-600 font-semibold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dignissimos adipisci veniam est beatae ratione, libero ducimus non sequi assumenda voluptatibus repellat eligendi. </p>
              <div className="flex justify-center items-center flex-col gap-3">
                <h3 className="text-lg font-bold">Emily R.</h3>
                <p className="text-slate-500">Marketing Director</p>
              </div>    
         </CardDiv>

         <CardDiv className="t2">
         <ImageDiv src='/images/image-thomas.jpg'/>
         
             <p className="text-center text-xl text-slate-600 font-semibold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dignissimos adipisci veniam est beatae ratione, libero ducimus non sequi assumenda voluptatibus repellat eligendi. </p>
              <div className="flex justify-center items-center flex-col gap-3">
                <h3 className="text-lg font-bold">Thomas S.</h3>
                <p className="text-slate-500">Chief Operating Officer</p>
              </div> 
            
         </CardDiv>

         <CardDiv className="t3">
         <ImageDiv src='/images/image-jennie.jpg'/>
         
             <p className="text-center text-xl text-slate-600 font-semibold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dignissimos adipisci veniam est beatae ratione, libero ducimus non sequi assumenda voluptatibus repellat eligendi. </p>
              <div className="flex justify-center items-center flex-col gap-3">
                <h3 className="text-lg font-bold">Jennie F.</h3>
                <p className="text-slate-500">Business Owner</p>
              </div> 
            
         </CardDiv>
       </section>
    </div>
  )
}

export default Testimonial