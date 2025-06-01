import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { trayaHomeImg } from '../../assets'
import GreetingCard from '../cards/GreetingCard'
import BottomSheet from '../common/BottomSheet';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const rootCauses = [
    {
        id: 1,
        icon: 'sleep',
        title: 'Sleep',
        stat: '30% people under with hair loss report poor sleep cycles.',
        description:
            'Poor sleep disrupts the hair growth cycle, push follicles into a resting phase, and lead to excessive hair fall',
    },
    {
        id: 2,
        icon: 'food-fork-drink',
        title: 'Digestion',
        stat: '37% of Indians experiencing hair loss battle poor gut health.',
        description:
            'Poor digestion directly affects the activity of our gut microbiome, limiting nutrient absorption leading to hair fall',
    },
    {
        id: 3,
        icon: 'apple',
        title: 'Nutrition',
        stat: 'Around 52% people with hair loss also reported deficiencies.',
        description:
            'A poor diet can lead to nutrient gaps leaving your hair follicles without the nourishment, causing hair loss',
    },
];

const TopSection = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOnClick = () => {
        setIsModalVisible(true)
    }

    const handleModalClose = () => {
        setIsModalVisible(false);
    }



    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.titleRow}>
                <Icon name={item.icon} size={24} color="#b8d700" />

                <Text style={styles.title}>{item.title}</Text>
            </View>

            <Text style={styles.stat}>{item.stat}</Text>

            <View style={styles.descriptionBox}>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
        </View>
    );

    return (
        <View>
            <ImageBackground
                source={trayaHomeImg}
                style={styles.headerBackground}
                resizeMode="cover"
            >
                <View style={styles.headerOverlay}>
                    <Text style={styles.headerTitle}>
                        Hair growth is possible, you're in the right hands.
                    </Text>
                </View>

                <View style={styles.greetCon}>
                    <GreetingCard handleOnClick={handleOnClick}/>
                </View>
            </ImageBackground>

            <BottomSheet
                visible={isModalVisible}
                onClose={() => handleModalClose()}
            >
                <Text style={styles.heading}>Your Root Causes</Text>

                <Carousel
                    width={windowWidth - 20}
                    height={200}
                    autoPlay={false}
                    data={rootCauses}
                    scrollAnimationDuration={600}
                    onSnapToItem={setCurrentIndex}
                    renderItem={renderItem}
                    style={{ alignSelf: 'center' }}
                />

                {/* Dotted Pagination */}
                <View style={styles.pagination}>
                    {rootCauses.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                currentIndex === index && styles.activeDot,
                            ]}
                        />
                    ))}
                </View>

            </BottomSheet>
        </View>
    )
}

export default TopSection;

const styles = StyleSheet.create({
    headerBackground: {
        width: '100%',
        height: windowHeight * 0.5,
        paddingTop: 15,
    },
    headerOverlay: {
        padding: 15,
    },
    headerTitle: {
        fontSize: windowWidth * 0.05,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
    },
    bottomSticky: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    greetCon: {
        position: 'absolute',
        bottom: -100,
        left: 0,
        right: 0,
    },
    card: {
        paddingHorizontal: 5

    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    stat: {
        fontSize: 14,
        color: '#333',
        marginVertical: 15,
        fontWeight: '600'
    },
    descriptionBox: {
        backgroundColor: '#f5f7ef',
        padding: 15,
        borderRadius: 10,
    },
    description: {
        fontSize: 15,
        color: '#333',
        textAlign: 'justify'

    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
      },
      dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#ccc',
      },
      activeDot: {
        backgroundColor: 'gray',
        borderColor: 'gray',
      },
})