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



import {useLocation,Location} from "react-router-dom";

interface IState<T> extends Location{
    state: T
}


const useAppLocation = <State>(): IState<State> => useLocation();

export {
    useAppLocation
}
