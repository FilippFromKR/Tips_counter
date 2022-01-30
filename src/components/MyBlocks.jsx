import React from 'react';

const MyBlocks = ({children}) => {
    return (
        <div>
            <div className="add_cost">
                {children}
            </div>
        </div>
    );
};

export default MyBlocks;