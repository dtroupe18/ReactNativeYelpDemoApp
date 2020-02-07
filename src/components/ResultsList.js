import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                // horizontal={true}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem= {({ item }) => {
                    return <ResultsDetail result={item} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginLeft: 8,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList
