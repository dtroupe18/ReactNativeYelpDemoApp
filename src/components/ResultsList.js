import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {

    // Only show if we have data
    if (!results.length) {
        return null;
    };

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
                    return (
                        <TouchableOpacity 
                            onPress={ () => {navigation.navigate('ResultsShowScreen', { id: item.id })}
                            }
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
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

export default withNavigation(ResultsList);
