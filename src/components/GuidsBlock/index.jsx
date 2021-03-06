
//тут карточки и их инфа, их переношу позже в home и переделываю там же
//прописывая ключи, подрубая их к корзине и прочее 

import React from 'react';
//import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';



function Block( {id, name, imageUrl, price,  onClickAddGuide, addedCount}) {
    //const availableTypes = ['where to eat', 'museums'];
    //const availableSizes = [26, 30, 40];

   // const [activeType, setActiveType ] = React.useState(types[0]);
    //const [activeSize, setActiveSize] = React.useState(0);


//const onSelectType = (index) => {
  //  setActiveType(index);
//};
//const onSelectSize = (index) => {
   // setActiveSize(index);  };

    const onAddGuide = () => {
    const obj = {
      id, 
      name, 
      imageUrl,
      price,
     // size: availableSizes[activeSize],
      //type: availableTypes[activeType],
    }
  onClickAddGuide(obj)}
    // onClickAddGuide({id, name, imageUrl, price})

  return (
    <div className="guids-block">
    <img className="guids-block__image" src = {imageUrl} alt="guids"/>
    <h4 className="guids-block__title">{name}</h4>
    <div className="guids-block__selector">

    {/* <ul>

{availableTypes.map((type, index) => (
    <li 
    key = {type}
    onClick={()=> onSelectType(index)}
     className={classNames({
         active : activeType === index,
         disabled : !types.includes(index),

     })}>
 {type}
</li>
))} 
 </ul> */}
 {/* <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}>
              {size} см.
            </li>
          ))}
        </ul> */}
   
    </div>
    <div className="guids-block__bottom">
    <div className="guids-block__price"> {price} ₽</div>
    <Button onClick={onAddGuide}
    className="button--add" outline>
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
    <span> Посетить</span>
    
  {addedCount && <i>{addedCount}</i>}
    </Button>
    </div>
    </div>
   )
}


//мы пишем что у нас есть компонент блок, у него есть свойство проптайпс и это свойство моего компонента получает объект. в этом объекте я теперь буду писать типы, name - чем може тявлятся? Строчкой! types -- только массивом и так далее 
//теперь пишем что чвойство name является только строчкой, которое берется из function в начале, 
//isRequired значит что ОБЯЗАТЕЛЬНО должна быть строчка
//теперь если окажется чт о в нашей базе данных price- жто не число а строчка, консоль будет нас ругать 
//как теперь типизировать types и sizes?? пищшем что есть types (4 строка) и из проптайпс библиотеки мы хотим получить array  
//isRequired -- значит что мы хотим чтобы он ОБЯЗАТЕЛЬНО был массивом 


Block.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,

};
Block.defaultProps ={
  name: '---',
  price: 0,
  types: [],
  sizes: [],
}

export default Block;

