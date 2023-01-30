const intialState=[]
function ConstAllData(state=intialState,action) {
  switch (action.type) {
    case "ConstAllData":
        return state=action.payload;  
    default:
        return state;
  }
}

export default ConstAllData
