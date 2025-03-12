import React from 'react';

interface LoadingProps {
    percentage: number;
}

const Loading: React.FC<LoadingProps> = ({ percentage }) => {
    return (
        <div>
            <h2>Next bot update status:</h2>
            <div style={{ border: '1px solid #000', width: '100%', height: '30px', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: `${percentage}%`, height: '100%', backgroundColor: '#4caf50' }}></div>
            </div>
            <p>{percentage}%</p>
        </div>
    );
};

export default Loading;