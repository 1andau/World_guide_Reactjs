export const addGuideToCart = (guideObj) => ({
type: 'ADD_GUIDE_CART', 
payload: guideObj,
});


export const addReccomToCart = (reccomObj) => ({
    type: 'ADD_RECCOM_CART', 
    payload: reccomObj,
})

    export const clearCart = () => ({
        type: 'CLEAR_CART', 
        
        });
    export const removeCartItem = (id) => ({
        type: 'REMOVE_CART_ITEM', 
        payload: id,
        });

        export const minusCartItem = (id) => ({
            type: 'MINUS_CART_ITEM', 
            payload: id,
            });

            export const plusCartItem = (id) => ({
                type: 'PLUS_CART_ITEM', 
                payload: id,
                });
