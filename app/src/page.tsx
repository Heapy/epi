import * as React from "react";
import {withRouter} from "react-router";
import {MyChart} from "./chart";

class PageComponent extends React.Component<PageProps, PageState> {
    constructor(props) {
        super(props);
        this.state = {data: {}};
    }

    onSearchValueChanged = (value: any): void => {
        this.props.history.push({
            search: {...this.props.match.params, q: value}
        });
    };

    render() {
        return (
            <div>
                <MyChart/>
            </div>
        );
    }
}

interface PageProps {
    history: any;
    match: any;
}

interface PageState {
    readonly data: any;
}

export const Page = withRouter(PageComponent);
