import React from 'react'
import Quotation from './Quotation'
import './quotations.css'
function Quotations({isMove,setIsMove}) {
  const quotations=[{
    id:1,
    fileName:'Kakashi',
    state:'Rejected',
    date:'01/01/2022',
    clock:'7:30pm',
    img:'https://andrewsymons.co.uk/wp-content/uploads/2020/05/NHA1084J.jpg'
  },
  {
    id:2,
    fileName:'Kakashi',
    state:'Pending',
    date:'01/01/2022',
    clock:'7:30pm',
    img:'https://andrewsymons.co.uk/wp-content/uploads/2020/05/NHA1084J.jpg'

  },
  {
    id:3,

    fileName:'Kakashi',
    state:'Accepted',
    date:'01/01/2022',
    clock:'7:30pm',
    img:'https://andrewsymons.co.uk/wp-content/uploads/2020/05/NHA1084J.jpg'

  }]
  
  return (
    <div className='quotations'>
      {
        quotations.map(e=> <Quotation setIsMove={setIsMove} isMove={isMove} quotation={e} key={e.id}/>)
      }
      
    </div>
  )
}

export default Quotations
