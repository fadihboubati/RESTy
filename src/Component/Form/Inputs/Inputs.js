import React from 'react';
import './Inputs.scss';

import { fetchData } from "../../../API/api";

export function Inputs(props) {
    const [url, setUrl] = React.useState(null);
    const [method, setMethod] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [text, setText] = React.useState(null);


    const sendData = async (evt) => {
        evt.preventDefault();
        setIsLoading(true);
        const res = await fetchData(url, method, text);
        setTimeout(() => {
            props.handerData(url, method, res);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div id="Inputs-div">
            <div className="Inputs-input">
                <span>URL: </span>
                <input onChange={evt => setUrl(evt.target.value)} type="url"></input>{" "}
                <button type="submit" onClick={sendData}>Go</button>{" "}
                {isLoading &&
                    <div className="spinner-grow spinner-grow-sm" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }

                <div onChange={evt => setMethod(evt.target.value)}>
                    <label>
                        GET{" "}
                        <input name='method' value='GET' type='radio' />
                    </label>
                    <label>
                        PUT{" "}
                        <input name='method' value='PUT' type='radio' />
                    </label>
                    <label>
                        POST{" "}
                        <input name='method' value='POST' type='radio' />
                    </label>
                    <label>
                        DELETE{" "}
                        <input name='method' value='DELETE' type='radio' />
                    </label><br />
                </div>
                <textarea onChange={evt => setText(evt.target.value)}></textarea>
            </div>
        </div>
    );
};


export default Inputs;
