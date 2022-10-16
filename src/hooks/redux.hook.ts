import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {AppDispatch, MainState} from "../redux/store";


const useAppSelector: TypedUseSelectorHook<MainState> = useSelector;

const useAppDispatch = () => useDispatch<AppDispatch>();

export {
    useAppSelector,
    useAppDispatch
}