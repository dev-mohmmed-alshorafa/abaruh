import React from 'react'

function Quotation({quotation,isMove,setIsMove}) {
  const handelState=()=>{
    if(quotation.state==='Pending'){
      setIsMove(true)
    }
  }
  return (
    <div onClick={handelState} className='quotation'>
      <img src={quotation.img} alt="" />
      <section>
        <div className='quotation-fileName-state'>
        <p className='quotation-fileName'>{quotation.fileName}</p>
        <p style={{color:quotation.state==='Pending'?'#FAA61A':
        quotation.state==='Rejected'?'#E3142C':" #04BF2D"}} className='quotation-state'>{quotation.state}</p>
        </div>
        <div className='quotation-date'>
        <p >{quotation.date}</p>
        <p>{quotation.clock}</p>

        </div>
      </section>
    </div>
  )
}

export default Quotation
