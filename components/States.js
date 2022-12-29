import { atom } from "recoil"

const bagState = atom({
    key: 'bagState', 
    default: [],
})

export {bagState}