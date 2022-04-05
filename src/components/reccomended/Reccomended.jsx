import React from 'react'
import axios from 'axios';
import CardContent from './CardReccom'
import { useSelector, useDispatch } from 'react-redux'
import Categories from '../Categories';
import { setCategory } from '../../redux/actions/filters';


const categoryNames = ['Рестораны','Развлечения', 'Места'];

 function Reccomended  ()  {
  const dispatch = useDispatch();

  const [recom, setRecom] = React.useState([]); 

  const {category } = useSelector(({filters})=>filters ); //тут нужно будет через redux изменить localhost на новый



  React.useEffect(() => {
    axios.get('http://localhost:3000/recom.json').then(({data}) => {
      setRecom(data.recom);
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

{recom.map((obj) => (

<div key={obj.id} className="recom-block">


<CardContent 
key={obj.id}
imageUrl={obj.imageUrl}
name = {obj.name}
title={obj.title}
subtitle = {obj.subtitle}
/>




<div className="recom-block__bottom">
   
    </div>
    </div> 
))
};
</div>
   )
 }


export default Reccomended

