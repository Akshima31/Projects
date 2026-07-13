export const totalItem = (cart) => {
return cart.reduce((sum, product) => sum + product.quantity , 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price , 0)
    }

const CartReducer = (state, action) => {
    switch(action.type) {
            
        case "ADD_TO_CART":

    const exist = state.find(
        item => item.id === action.payload.id
    );

    if (exist) {
        return state.map(item =>
            item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    return [
        ...state,
        { ...action.payload, quantity: 1 }
    ];
        case "Remove":
            return state.filter(item => item.id !== action.id)

        case "Increase":
            return state.map(item =>
                item.id === action.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                      }
                    : item
            );

        case "Decrease":
            return state.map(item =>
                item.id === action.id
                    ? {
                        ...item,
                        quantity: Math.max(
                            item.quantity - 1,
                            1
                        )
                      }
                    : item
            );

        case "Clear":
            return [];
        default:
             return state;
    }
}

export default CartReducer