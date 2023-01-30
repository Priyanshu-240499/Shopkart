const initialState=[];
const CartData=(state=initialState,action)=>{
    switch (action.type) {
        case "AddedData":
            return state=action.payload;
        default:
            return state;
    }
};
export default CartData;