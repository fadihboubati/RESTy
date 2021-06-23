import './Form.scss'
import Inputs from './Inputs/Inputs';

import React, { Component } from 'react';
import Data from './Data/Data';
import Results from './Results/Results';

export class Form extends Component {

    state = {
    };

    handerData = (url, method, res) => {
        this.setState({
            url: url,
            method: method,
            results: res.body.results || res.body,
            count: res.body.count || res.body.length,
            headers: res.headers.get("Content-Type")
        });

    };

    render() {
        return (
            <div id="form-div">
                <Inputs handerData={this.handerData} />
                <Data state={this.state}/>
                <Results results={this.state.results} count={this.state.count} headers={this.state.headers}/>
            </div>
        );
    };
};

export default Form;
