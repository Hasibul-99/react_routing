import React from 'react';

const Rainbow = (WappedComponent) => {

    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColor = colours[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow