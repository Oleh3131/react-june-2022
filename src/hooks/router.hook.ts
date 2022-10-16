// ----------------------ПЕРШИЙ ВАРІАНТ--------------------------------------------------

// import {useLocation} from "react-router-dom";
//
// type useLocationType = ReturnType<typeof useLocation>;
//
//
// interface IState<T> extends useLocationType{
//     state: T
// }
//
//
// export type {
//     useLocationType
// }


// ---------------------------------ДРУГИЙ ВАРІАНТ--------------------------------

import {useLocation} from "react-router-dom";

interface IState<T>{
    state: T
}

type LocationType<S> = ReturnType<typeof useLocation & IState<S>>;

const useAppLocation = <State>(): LocationType<State> => useLocation();

export {
    useAppLocation
}
