import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StatsScreenScreen() {
    return (
        <View style={styles.container}>
            <Text>StatsScreen Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});