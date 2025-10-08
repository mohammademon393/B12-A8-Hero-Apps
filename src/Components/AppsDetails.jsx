import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppsDetails = () => {
    const data = useLoaderData();
    const  {id}  = useParams();
    const app = data.find((a) => String(a.id) === id);
    console.log(app);
    
    
    return (
        <div>
            <h1>apps details is here</h1>
        </div>
    );
};

export default AppsDetails;