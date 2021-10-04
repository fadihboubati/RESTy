import React from 'react';
import './Inputs.scss';

import { fetchData } from "../../../API/api";

export function Inputs(props) {
    const [url, setUrl] = React.useState("");
    const [method, setMethod] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [text, setText] = React.useState("");

    React.useEffect(() => {
        let selectedRadioBtn = document.getElementById("thisOne")
        if (selectedRadioBtn != null) {
            selectedRadioBtn.checked = true;
        };

        if (props.dataRender) {
            setUrl(props.dataRender.url);
            setMethod(props.dataRender.method);
            setText(props.dataRender.body);
            setUrl(props.dataRender.url);

        }


    }, [props.dataRender]);


    const sendData = async (evt) => {
        evt.preventDefault();

        if (url == null || method == null) {
            alert("Please Fill all the required inputs");
            return;
        }

        if (method === "PUT" || method === "POST") {
            if (text == null) {
                alert("Please Fill all the required inputs");
                return;
            }
        }
        setIsLoading(true);
        const res = await fetchData(url, method, text);
        setTimeout(() => {
            props.handerData(url, method, res);
            if(method === "DELETE") {
                alert("Deleted Successfully");
            }

            setIsLoading(false);
        }, 1000);
    };

    return (
        <div id="Inputs-div">

            <div className="Inputs-input">
                <span>URL:</span>
                <input placeholder="REMOVE   /   AT THE END" value={url} onChange={evt => setUrl(evt.target.value)} type="url"></input>{" "}
                <button type="submit" onClick={sendData}>Go</button>{" "}
                {isLoading &&
                    <div className="spinner-grow spinner-grow-sm" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }

                <div id="radInputs" onChange={evt => setMethod(evt.target.value)}>
                    <label>
                        GET{" "}
                        <input id={props.dataRender ? props.dataRender.method === "GET" ? "thisOne" : null : null} name='method' value='GET' type='radio' />
                    </label>
                    <label>
                        PUT{" "}
                        <input id={props.dataRender ? props.dataRender.method === "PUT" ? "thisOne" : null : null} name='method' value='PUT' type='radio' />
                    </label>
                    <label>
                        POST{" "}
                        <input id={props.dataRender ? props.dataRender.method === "POST" ? "thisOne" : null : null} name='method' value='POST' type='radio' />
                    </label>
                    <label>
                        DELETE{" "}
                        <input id={props.dataRender ? props.dataRender.method === "DELETE" ? "thisOne" : null : null} name='method' value='DELETE' type='radio' />
                    </label><br />
                </div>
                <textarea value={text} onChange={evt => setText(evt.target.value)}></textarea>
            </div>
        </div>
    );
};


export default Inputs;
