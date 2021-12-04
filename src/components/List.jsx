import React from 'react';

export const List = (props) => {
    return (
        props.list.map(str => {
            return (
                <div key={str} className="list-item flex justify-between">
                    <span>{str}</span>
                    <button className="button-base bg-red" onClick={() => props.handleDelete(str)}>
                        delete
                    </button>
                </div>
            )
        })
            
    )
}