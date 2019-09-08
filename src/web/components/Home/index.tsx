import * as React from "react";
import HooksRedux from "./HooksRedux";


const {
    Provider,
    store,
} = HooksRedux({
    initalState: {
        name: "ts-learn",
        age: 18,
    }
});


const actionAdd = () => {
    return {
        type: "init",
    }
}

const Button = () => {
    const handleAdd = () => {
        store.dispath(actionAdd);
    };

    return <button onClick={handleAdd}>新增</button>
};


const Home = () => {
    const state = store.useContext();
    return (
        <div>
            It is home component
            {state.age}
            <hr />
            <Button />
        </div>
    );
};


const WarpHome = () => {
    return (
        <Provider>
            <Home />
        </Provider>
    );
}


export default WarpHome;