/*
 * @Author: liuduan
 * @Github: https://github.com/Tony-Liuduan
 * @Date: 2019-09-08 10:56:56
 * @LastEditors: liuduan
 * @LastEditTime: 2019-09-08 11:52:45
 * @Description: 
 */
import * as React from "react";


const {
    useReducer,
    useContext,
    createContext,
} = React;


interface IState {
    name: string,
    age: number,
}


export default function createStore({
    initialState,
}: {
    initialState: IState,
}) {
    console.log("initialState", initialState);
    // createContext 作为所有状态的管理
    const Appcontext = createContext();
    const middleWareReducer = (lastState, action) => {
        switch (action.type) {
            case "add":
                return {};
                break;

            default:
                return lastState;
                break;
        }
    };

    const store = {
        _state: initialState,
        dispath: undefined,
        getState() {
            return this._state;
        },
        useContext() {
            return useContext(Appcontext);
        }
    };

    const Provider = props => {
        const [
            state,
            dispath,
        ] = useReducer(middleWareReducer, initialState);
        if (!store.dispath) {
            store.dispath = async (action) => {
                dispath(action);
            };
        }
        return <Appcontext.Provider {...props} value={state} />
    };

    return {
        Provider,
        store,
    };
}