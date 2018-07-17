import * as Type from '../action-types'

function add(count){    
    return {type:Type.INCREMENT,count}
}

function minus(count){
    return {type:Type.DECREMENT,count}
}
export {add, minus}