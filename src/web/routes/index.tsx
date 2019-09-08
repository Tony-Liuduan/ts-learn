import * as React from "react";
import {
    Switch,
    // RouterProps,
    Route,
} from "react-router-dom";


const {
    Suspense,
    lazy,
} = React;


const Home = lazy(() => import(/* webpackChunkName: "home" */ "../components/Home"));


const routes/* : RouterProps[] */ = [
    {
        path: "/",
        exact: true,
        component: Home,
    }
];


const Routes = () => (
    <Suspense fallback={<i>loading...</i>}>
        <Switch>
            {
                routes.map(r => {
                    const {
                        path,
                        exact,
                        component,
                    } = r;
                    const LazyCom = component;
                    return <Route key={path} path={path} exact={exact} render={() => <LazyCom />} />
                })
            }
        </Switch>
    </Suspense>
);


export default Routes;