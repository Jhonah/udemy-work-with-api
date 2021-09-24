import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultaDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';
 
const ResultsList = ({ title, results, navigation }) => {

    const keyExtractor = useCallback((item) => item.id.toString(), []);

    const renderItem = useCallback(({ item }) => {
        return (
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
                    <ResultaDetail result={item}/> 
                </TouchableOpacity>
            )
    }, []);

    // <Text>Results: {results.length}</Text>

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    }
});

export default withNavigation(ResultsList);
