import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');

    // Just like use state above our hook returns this array
    // holding all the values we need in this view.
    const [searchApi, results, errorMessage] = useResults();

    // console.log(`Results: ${results}`);

    const filterResultsByPrice = (price) => {
        // price === $ || $$ || $$$
        return results.filter(result => {
            return result.price === price;
        });
    };
    
    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={ (newTerm) => setTerm(newTerm)}
                onTermSubmit={ () => { searchApi(term) }}
            />
            { errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null }

            <Text style={{ marginLeft: 8 }}>We have found {results.length} results</Text>

            <ResultsList 
                title='Cost Effective'
                results={filterResultsByPrice('$')}
            />

            <ResultsList 
                title='Bit Pricier'
                results={filterResultsByPrice('$$')}
            />

            <ResultsList 
                title='Big Spender'
                results={filterResultsByPrice('$$$')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red'
    }
});

export default SearchScreen;