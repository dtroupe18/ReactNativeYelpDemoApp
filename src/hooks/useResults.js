import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('performing search');

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            
            // console.log(response);
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchAPI when component is first rendered.
    // THIS IS BAD CODE!
    // searchAPI('pasta')
    // This results in an infinite loop of network calls.

    useEffect(() => {
        searchApi('pasta');
    }, []) // empty array makes this only run once.

    return [searchApi, results, errorMessage];
};