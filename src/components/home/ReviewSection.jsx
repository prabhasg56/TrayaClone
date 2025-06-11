import { StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import ReviewCard from '../cards/ReviewCard';
import HeadingText from './HeadingText';

const reviews = [
    {
        author: 'Bilal Ahmed Shah',
        rating: 5,
        text: 'My friends used to tease me all the time about hair loss but now I am glad that my hair is full. I feel much more confident and proud of my appearance every day!, My friends used to tease me all the time about hair loss but now I am glad that my hair ',
    },
    {
        author: 'Rohit Mehta',
        rating: 4,
        text: 'The product really helped me control my hair fall. Thanks Traya!',
    },
    {
        author: 'Sneha Kapoor',
        rating: 5,
        text: 'I love the personalized approach. My hair is visibly thicker!',
    },
];


const ReviewSection = () => {
    return (
        <View style={styles.container}>
            <HeadingText text={"Google Reviews & Ratings"} style={{marginTop:15}}/>

            <View style={styles.ratingCon}>
                <Text style={styles.ratingTextNum}> 4.6</Text>
                <View>
                    <Text style={styles.ratingText}>⭐ ⭐ ⭐ ⭐</Text>
                    <Text style={styles.ratingText}>6072 ratings</Text>
                </View>
            </View>

            <FlatList
                data={reviews}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <ReviewCard review={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                decelerationRate="fast"
            />
        </View>
    );
};

export default ReviewSection;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 10
    },
    ratingCon: {
        marginVertical: 10,
        flexDirection:'row',
        gap:15,
        alignItems:'center'
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 10,
    },
    ratingText: {
        fontSize: 16,
        marginBottom: 10,
    },
    ratingTextNum:{
        fontSize: 30,
        fontWeight:'bold'
    },
  

});
