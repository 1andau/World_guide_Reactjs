import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

const ImpressionPage = () => {
  return (
   
<div className="bg">
  <div className="boxing">
   <h2>Еще не решили? <br />
   Отлично!</h2>
   <Link  to= "/Reccomended" >
     
 <Button 
     className="btn-contact" to="/Reccomended">I recommend
     
</Button>
</Link>






    </div>
</div>
  )
}

export default ImpressionPage