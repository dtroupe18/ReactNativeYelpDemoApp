import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Text>Search Bar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#c0bebe',
        height: 40,
        marginHorizontal: 15,
        borderRadius: 8
    }
});

export default SearchBar;