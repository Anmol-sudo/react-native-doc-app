import React from 'react';
import { View, StyleSheet, Text } from'react-native';

function MainContent(props) {
    return (
        <View style={styles.container}>
            <Text>Welcome to the Home Page!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default MainContent;