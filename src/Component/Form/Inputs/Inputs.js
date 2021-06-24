import React from 'react';
import './Inputs.scss';

import { fetchData } from "../../../API/api";

export function Inputs(props) {
    const [url, setUrl] = React.useState(null);
    const [method, setMethod] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [text, setText] = React.useState(null);

    React.useEffect(() => {
        let selectedRadioBtn = document.getElementById("thisOne")
        if (selectedRadioBtn != null) {
            selectedRadioBtn.checked = true;
        };
        
    });


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
                <input value={props.dataRender? props.dataRender.url + '/' : null} onChange={evt => setUrl(evt.target.value)} type="url"></input>{" "}
                <button type="submit" onClick={sendData}>Go</button>{" "}
                {isLoading &&
                    <div className="spinner-grow spinner-grow-sm" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }

                <div id="radInputs" onChange={evt => setMethod(evt.target.value)}>
                    <label>
                        GET{" "}
                        <input id={props.dataRender? props.dataRender.method === "GET" ? "thisOne": null : null} name='method' value='GET' type='radio' />
                    </label>
                    <label>
                        PUT{" "}
                        <input id={props.dataRender? props.dataRender.method === "PUT" ? "thisOne": null : null} name='method' value='PUT' type='radio' />
                    </label>
                    <label>
                        POST{" "}
                        <input id={props.dataRender? props.dataRender.method === "POST" ? "thisOne": null : null} name='method' value='POST' type='radio' />
                    </label>
                    <label>
                        DELETE{" "}
                        <input id={props.dataRender? props.dataRender.method === "DELETE" ? "thisOne": null : null} name='method' value='DELETE' type='radio' />
                    </label><br />
                </div>
                <textarea value={props.dataRender? props.dataRender.body : null} onChange={evt => setText(evt.target.value)}></textarea>
            </div>
        </div>
    );
};


export default Inputs;
