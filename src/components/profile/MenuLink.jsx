import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';


const MenuLink = ({ title, path, navigation }) => {

    const handleNavigation = () => {
        navigation.navigate(path);
    }

    return (
        <>
            <TouchableOpacity style={styles.containerMain} onPress={() => handleNavigation()}>
                <View style={styles.containerLeft}>
                    <View>
                        <Text style={styles.descText}>{title}</Text>
                    </View>
                </View>

                <View style={styles.containerRight}>
                    <Entypo name='chevron-small-right' size={20} color={"#0d0d0d"} />
                </View>
            </TouchableOpacity>
        </>
    )
}

export default MenuLink;

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10,
        paddingVertical: 10,
        width: "100%",
    },
    containerLeft: {
        flexDirection: 'row',
        gap: 5
    },
    containerRight: {
    },
    descText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#0d0d0d',
        textAlign: 'center'
    },
    amntCon: {
        flexDirection: 'row',
        width: 100,
        height: 100,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,

    },

})