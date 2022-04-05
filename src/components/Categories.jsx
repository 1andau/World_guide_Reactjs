import React from 'react';
import PropTypes from 'prop-types';



const Categories = React.memo(
  function Categories({activeCategory, items, onClickCategory}) {
    
return (
<div className="categories">
      <ul>
 <li className = {activeCategory === null ? 'active' : ''} 
 onClick ={() => onClickCategory(null)}>
   Все
   </li>

   {/* && - если предыдущий код true, то выводится верхний, если false - то нижний */}

  
 {items && 
 items.map((name, index) => (
<li className = {activeCategory === index ? 'active' : ''} //если activeCategory равент index - то 
 //мы сказали что oneSelectItem получает index
 onClick={() => onClickCategory(index)} 
 key = {`${name}_${index}`}>
{name}
 </li>
              //тут мы создали анонимную функцию  onClick={() => alert(name)}
                   //за счет которой кнопки выводят персональный текст для каждой кнопки 
 ))}
 </ul>
      
  </div>
       );
     }

)


Categories.propTypes = {
// activeCategory: PropTypes.oneOf([PropTypes.number.null]),
items: PropTypes.arrayOf(PropTypes.string).isRequired,
onClickCategory: PropTypes.func.isRequired,

};

Categories.defaultProps = {activeCategory: null, items: [] };


  

export default Categories;



