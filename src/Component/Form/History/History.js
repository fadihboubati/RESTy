import React from 'react';
import "./History.scss";

export default function History(props) {

    const handelData = (data) => {
        props.dataToRender(data)

    };

    const [refresh, useRefresh] = React.useState(false);

    const DeleteOne = (idx) => {
        let data = JSON.parse(localStorage.getItem("data"));
        data.splice(idx, 1)
        localStorage.setItem("data", data);
        useRefresh(!refresh);
    }

    const Clear = () => {
        if (localStorage.getItem("data") === [] || !localStorage.getItem("data")) {
            alert("The History is already empty")
        } else {
            localStorage.setItem("data", []);
        }
        useRefresh(!refresh);

    }

    return (
        <div className="table table-hover history">
            {localStorage.getItem("data")  &&
                <>
                    <hr />
                    <h2>History</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Method</th>
                                <th>URL</th>
                                <th>Body</th>
                            </tr>
                        </tbody>
                        {JSON.parse(localStorage.getItem("data")).map((data, idx) =>
                            <tbody key={idx}>
                                <tr>
                                    <td id="again" onClick={() => handelData(data)}>Again</td>
                                    <td>{data.method}</td>
                                    <td>{data.url}</td>
                                    <td>{data.body}</td>
                                    <td onClick={() => DeleteOne(idx)} className="far fa-trash-alt fa-2x"></td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                    <button onClick={Clear} className="btn btn-danger">Clear</button>
                </>
            }
        </div>
    );
};

