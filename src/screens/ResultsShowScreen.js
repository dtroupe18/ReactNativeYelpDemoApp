import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    // Null because we do not have our object yet
    const [result, setResult] = useState(null);

    const businessID = navigation.getParam('id');

    console.log(`businessID ${businessID}`);

    // Pretty print JSON
    console.log(`result: ${JSON.stringify(result, null, 2)}`);

    const getResult = async (id) => {
        const response = await yelp.get(`/${businessID}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(businessID);
    }, []);

    if (!result) { 
        return null
    };

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                showsVerticalScrollIndicator={false}
                keyExtractor={(photo) => photo}
                renderItem= {({ item }) => {
                    return (
                       <Image 
                            source={{uri: item}}
                            style={styles.image}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250
    }
});

export default ResultsShowScreen;