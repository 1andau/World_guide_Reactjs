import axios from 'axios';

export const fetchGuids = (sortBy, category) => (dispatch) => {
   console.log(category, sortBy );

   dispatch({
      type: 'SET_LOADED',
      payload: false,    
});

 //если вызывается fetchGuids то сразу ставь (setLoaded(false) и когда выполнится второй запрос, выполняется второй action setGuids, он сохраняет пиццы и ставит фдаг о том что все загружено 
   axios.get(`/guids?${category !==null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`).then(({data}) => {
dispatch(setGuids(data));
   });  
};

//обрати внимание что у нас axios находится в диспатче setGuids, и именно его мы передаем в другие функции и файлы 
//items -- сокращает код, в нем хранятся все данные json`a

export const setGuids = (items) => ({ //этот объект возвращает нам объект 
   type: 'SET_GUIDS', //тип - обязательный параметр
   payload: items, //все данные, которые передаются вместе с действием, кладут внутрь свойства payload.
});


// ========================RECCOM===========================






