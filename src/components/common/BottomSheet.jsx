import React from 'react';
import {
    Modal,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Animated,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomSheet = ({
    visible,
    onClose,
    items = [],
    filterBy,
    onSelectItem,
    animationType = "slide",
    children,
}) => {
    // console.log("visible", visible)
    return (
        <Modal
            animationType={animationType}
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss(); // Dismiss the keyboard when tapping outside
                    onClose(); // Close the modal if desired (optional)
                }}
            >
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContainer}>
                            <View style={styles.topCon}>
                                <View >
                                </View>
                                <Text style={styles.dash}>_____</Text>
                                <TouchableOpacity
                                    style={styles.close_btn}
                                    onPress={onClose}
                                >
                                    <Ionicons name="close" size={25} color={"gray"} />
                                </TouchableOpacity>
                            </View>

                            <Animated.View style={styles.modalView}>
                                {children ? (
                                    children // Render custom children if provided
                                ) : (
                                    items.map((item, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            style={{
                                                backgroundColor: item.value === filterBy ? '#2248ae' : item.backgroundColor,
                                                paddingHorizontal: 15,
                                                paddingVertical: 5,
                                                borderWidth: 1,
                                                borderColor: item.value === filterBy ? '#2248ae' : 'lightgray',
                                                marginBottom: 2,
                                                width: "100%",
                                                borderRadius: 10,
                                                borderColor: 'lightgray',
                                            }}
                                            onPress={() => onSelectItem(item.value)}
                                        >
                                            <Text
                                                style={{
                                                    fontWeight: "bold",
                                                    textAlign: "center",
                                                    fontSize: 16,
                                                    color: item.value === filterBy ? '#fff' : '#000',
                                                    marginVertical: 8,
                                                }}
                                            >
                                                {item.label}
                                            </Text>
                                        </TouchableOpacity>
                                    ))
                                )}
                            </Animated.View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        maxHeight: '80%',
        backgroundColor: "white",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        overflow: "hidden",
    },
    modalView: {
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        paddingBottom: 40,
    },
    topCon: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    close_btn: {
        alignSelf: "flex-end",
        marginRight: 10,
        marginTop: 5
    },
    dash:{ 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'lightgray', 
        marginTop:-10 
    }
});

export default BottomSheet;
