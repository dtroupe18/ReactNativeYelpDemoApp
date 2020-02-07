import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    // console.log(props);

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
        // Flex prevents the view from expanding beyond the screen.
        // You can also just use <> </> instead of view.
        <View style={{ flex: 1}}>
            <SearchBar 
                term={term}
                onTermChange={ (newTerm) => setTerm(newTerm)}
                onTermSubmit={ () => { searchApi(term) }}
            />
            { errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null }

            {/* <Text style={{ marginLeft: 8 }}>We have found {results.length} results</Text> */}
            <ScrollView showsVerticalScrollIndicator={false}>
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
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red'
    }
});

export default SearchScreen;