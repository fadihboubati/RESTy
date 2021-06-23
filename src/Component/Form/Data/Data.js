import React from 'react'

export default function Data(props) {
    const {state} = props
    return (
        <div >
        {
            state.url &&
                <div className="container data">
                    <div className="row">
                        <div className="col-lg-3">
                            <span>{state.method}</span>
                        </div>
                        <div className="col-lg-3">
                            <span>{state.url}</span>
                        </div>
                    </div>
                    <div className="row">
                        
                    </div>
                    <div className="row"></div>
                </div>
        }
    </div>
    );
};
