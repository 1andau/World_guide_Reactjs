import React from 'react';
import Button from '../Button';

function CardUnusual ({info, id, imageUrl,title,name, subtitle, price}) {

const onAddForClick = () => { //эту функцию будем передавать в onClick, отвечает за кликабельность кнопки
    const obj = { //в этой const все данные 
        id, 
        imageUrl,
        title,
        name
    }
//personaСlickСomponents((obj)) //это для корзины 
}


const [like, setLike] =  React.useState(false);
const onClickLike = () => {
  setLike(!like)
}


  return (

<div>
<img 
src=  {  like ?  
    "/img/liked.png" : "/img/unLiked.png"}
onClick={onClickLike} 
className='icon' 
 />  

<img className="recom-block__image" src = {imageUrl} alt="guids"/>

<div className="recom-block__price">  {name}</div>
<h5> {title}</h5>
<p>{subtitle}</p>
<div className="recom-block__bottom">
   <div className="guids-block__price">{price}</div>
    </div>
    </div>
  )
}

export default CardUnusual; 