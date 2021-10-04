import './Form.scss';
import Inputs from './Inputs/Inputs';

import React, { Component } from 'react';
import Data from './Data/Data';
import Results from './Results/Results';
import History from './History/History';

export class Form extends Component {

    state = {
    };

    handerData = (url, method, res) => {
        this.setState({
            url: url,
            method: method,
            results: res.body.results || res.body || "Deleted Successfully",
            count: res.body.count || res.body.length,
            headers: res.headers.get("Content-Type")
        });
    };

    dataToRender = (data) => {
        this.setState({
            dataRender: data
        });
    };

    render() {
        return (
            <div id="form-div">
                <Inputs handerData={this.handerData} dataRender={this.state.dataRender}/>
                <Data state={this.state}/>
                <Results results={this.state.results} count={this.state.count} headers={this.state.headers}/>
                <History dataToRender={this.dataToRender}/>
            </div>
        );
    };
};

export default Form;
