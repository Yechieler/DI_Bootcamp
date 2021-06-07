let initState = {
    property_one: 'I want to go',
    property_two: 'to a break!!!',
}

export const reducer = (state = initState, action={}) => {
    switch (action.type) {
    case 'PROP_ONE':
        return {...state, property_one:action.payload}
        break;
    case 'PROP_TWO':
    return {...state,property_two:state}
    break;
    default:
            return{...state}   //in redux only returns clone of state
            
    }
}