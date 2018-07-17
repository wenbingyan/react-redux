import * as Type from '../action-types'

function todo(content){    
    return {type:Type.ADD_TODO,text:content}
}

export default todo