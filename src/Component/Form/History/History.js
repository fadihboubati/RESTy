import React from 'react';
import "./History.scss";

export default function History(props) {

    const handelData = (data) => {
        props.dataToRender(data)
        
    };


    return (
        <div className="table table-hover history">
            <table>
                <tr>
                    <th></th>
                    <th>Method</th>
                    <th>URL</th>
                    <th>Body</th>
                </tr>
                {localStorage.getItem("data") &&
                    JSON.parse(localStorage.getItem("data")).map((data,idx) => <tr key={idx}>
                        <td id="again" onClick={() => handelData(data)}>Again</td>
                        <td>{data.method}</td>
                        <td>{data.url}</td>
                        <td>{data.body}</td>
                    </tr>)}
            </table>
        </div>
    );
};

