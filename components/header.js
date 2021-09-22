import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        height: 80,
        paddingTop: 38,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        // marginTop: 20,
        textAlign: 'center'
    }
})
