import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getBucketRequestAction, addBucketAction } from './Redux/action'
// import './index.css';

function Todo(props) {

    let [bucketName, setBucketName] = useState("")

    let addBucket = e => {
        props.dispatch(addBucketAction(bucketName));
        setBucketName("");
    }

    useEffect(() => {
        props.dispatch(getBucketRequestAction())
    }, []);

    return (
        <>
            <div style={{ "margin": "15px" }} >
                <input placeholder="NAME" value={bucketName} onChange={_ => setBucketName(_.target.value)} />
                <button style={{ "margin-left": "10px" }} onClick={addBucket}>ADD BUCKET</button>
            </div>

            {props.buckets.loading ?
                <h1>Loading...</h1> :
                props.buckets.data ?
                    <div className="todo-list">
                        {props.buckets.data.map(_ =>
                            <div className="todo">
                                <Link to={`/${_.id}`}>
                                    {_.name}
                                </Link>
                            </div>
                        )}
                    </div>
                    : null
            }
        </>
    )
}

export default connect((state) => {
    return {
        buckets: state.bucketReducer
    }
}, null)(Todo)

