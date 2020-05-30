import * as React from "react";
import {Page} from "./page";
import {Route, BrowserRouter} from "react-router-dom";
import {Switch} from "react-router";

export function Root() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Page}/>
            </Switch>
        </BrowserRouter>
    );
}
