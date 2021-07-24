import React from "react";
import Accordion from "../components/accordion/accordion.component";

class SearchHistoryPanel extends React.Component {

    componentDidMount() {
        this.props.getSearchHistory();
    }


    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>Search History</h3>
                </header>
                <div>
                    {this.props.fetchHistorySuccess && this.props.history.length>0?
                        (<div>
                            <Accordion panels={this.props.history} />
                        </div>

                        )
                        : (<div></div>)}

                </div>
            </div>
        );
    }
}
export default SearchHistoryPanel;