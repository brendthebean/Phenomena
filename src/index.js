import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';

const App = () => {
    //const [reports, setReports] = useState([]);
    //use state to keep track of input fields using onchange onchange is passed an event
    //

 /*    useEffect(() => {
        const getReports= async() => {
            const result = await axios.get('/api/reports');
            console.log(result);
        }
        getReports();
    }, []) */

    return (
        <h1>phenomena</h1>
    )
}

const root = createRoot(document.getElementById('root'));

root.render(< App />);