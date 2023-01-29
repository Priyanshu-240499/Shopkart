const intialState=[];
function filteredData(state=intialState,action) {
  switch (action.type) {
    case "filteredData":
        return state=action.payload;  
    default:
        return state;
  }
}

export default filteredData