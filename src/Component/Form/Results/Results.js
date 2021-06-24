import React from 'react';
import './Results.scss';

import JSONPretty from 'react-json-pretty';


export default function Results(props) {
    let jsonFormater;

    if (props.count && props.results && props.headers) {

        jsonFormater = {
            "Headers": {
                "content-type": props.headers
            },
            "Response": {
                "count": props.count,
                "results": props.results
            }
        };
    };

    return (
        <div className="container div-results">
            {jsonFormater &&
                <>
                    <JSONPretty id="json-pretty" data={jsonFormater}></JSONPretty>
                </>
            }
        </div>
    );
};
