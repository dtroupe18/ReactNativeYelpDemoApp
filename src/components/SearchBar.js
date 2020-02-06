import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Ionicons name="md-search" style={styles.iconStyle}/>
            <TextInput 
                style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='search'
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit() }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 8,
        backgroundColor: '#c0bebe',
        height: 40,
        marginHorizontal: 15,
        borderRadius: 8,
        flexDirection: 'row'
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 30, // Size of icon
        alignSelf: 'center',
        marginLeft: 8,
        marginRight: 4
    }
});

export default SearchBar;