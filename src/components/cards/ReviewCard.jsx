import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import BottomSheet from '../common/BottomSheet';

const { width } = Dimensions.get('window');

const ReviewCard = ({ review }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const preview = review.text.slice(0, 120);

    const handleOnClick = () => {
        setIsModalVisible(true)
    }

    const handleModalClose = () => {
        setIsModalVisible(false);
    }
    return (
        <>
            <TouchableOpacity
                onPress={handleOnClick}
                style={styles.reviewCard}
            >
                <Text style={styles.reviewAuthor}>{review.author}</Text>
                <Text style={styles.stars}>{'⭐'.repeat(review.rating)}</Text>
                <Text style={styles.reviewText}>
                    {review.text?.length > 120 ? `${preview}...` : review.text}
                    <Text style={styles.readMore}>{review.text?.length > 120 ? 'Read More' : ''}</Text>
                </Text>
            </TouchableOpacity>

            <BottomSheet
                visible={isModalVisible}
                onClose={() => handleModalClose()}
            >
                <ScrollView style={styles.sheetCon}>
                    <Text style={styles.reviewAuthor}>{review.author}</Text>
                    <Text style={styles.stars}>{'⭐'.repeat(review.rating)}</Text>
                    <Text style={styles.reviewText}>
                        {review.text}
                    </Text>
                </ScrollView>
            </BottomSheet>
        </>
    );
};

export default ReviewCard;

const styles = StyleSheet.create({
    reviewCard: {
        width: width * 0.8,
        marginRight: 16,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 1,
        borderColor: 'lightgray',
        borderWidth: 1
    },
    reviewAuthor: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    stars: {
        fontSize: 16,
        color: '#f5c518',
        marginVertical: 4,
    },
    reviewText: {
        marginTop: 8,
        color: '#333',
    },
    readMore: {
        color: '#6ba539',
        marginTop: 4,
        textDecorationLine: 'underline'
    },
    sheetCon:{
        marginBottom:25
    }
})