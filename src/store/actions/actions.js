import * as types from "../typeAction"

export let addStyleAction = ()=>{
    return {
        type : types.ADDSTYLE
    }
}

export let changeStylesAction = (index, item)=>{
    return {
        type : types.CHANGESTYLE,
        index,
        item
    }
}

export let removeStylesActon = (index)=>{
    return {
        type : types.REMOVESTYLE,
        index
    }
}