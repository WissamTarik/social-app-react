import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { dispatchType, storeType } from "./store";


export const useAppDispatch:()=>dispatchType=useDispatch
export const useAppSelector:TypedUseSelectorHook<storeType>=useSelector
