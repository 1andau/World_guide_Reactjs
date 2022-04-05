import Categories from '../Categories'
import axios from 'axios'
import CardUnsusual from './CardUnsusual'
import React, { useState, useEffect } from 'react';
import CardUnusual from './CardUnsusual';
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../../redux/actions/filters';


const categoryNames = ['Рестораны','Развлечения', 'Места'];


const UnusualPage = () => {
  const dispatch = useDispatch();
 const [unUsual, setUnUsual] = React.useState([])
  const {category } = useSelector(({filters})=>filters ); //тут нужно будет через redux изменить localhost на новый


 React.useEffect(() => {
  axios.get('http://localhost:3002/unUsual')
  .then((res) => {
    setUnUsual(res.data)
  });   
 }, []);

 const onSelectCategory = React.useCallback((index) => {
  dispatch(setCategory(index));
}, []);


  return (
    <div>

 
<Categories 
activeCategory = {category}
onClickCategory = {onSelectCategory}
items = {categoryNames}/>


<h2 className="content__title">All</h2>

{unUsual.map((obj) => (

  <div key={obj.id} className="recom-block">

              <CardUnusual
                key={obj.id}
                imageUrl={obj.imageUrl}
                price = {obj.price}
                title={obj.title}
                name={obj.name}
                subtitle={obj.subtitle}
              />



<div className="recom-block__bottom">
  </div>
</div>
))
};

</div>

  )
}

export default UnusualPage