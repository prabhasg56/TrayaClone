import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import ProductCard from '../../components/cards/ProductCard';
import { rasDetox } from '../../assets';

const products = [
    {
        id: 1,
        name: 'Nasal Drop',
        price: '₹150',
        description:
            'Ayurvedic nasal drops for nourishing hair follicles and reducing sleep-related hair loss. ',
        ingredients: ['Cow Ghee', 'Yastimadhu', 'Shatavari', 'Jatamansi'],
        image: rasDetox,
    },
    {
        id: 2,
        name: 'Hair Oil',
        price: '₹250',
        description:
            'Herbal oil to strengthen roots and reduce hair fall naturally.',
        ingredients: ['Bhringraj', 'Amla', 'Neem', 'Coconut Oil'],
        image: rasDetox,
    },
    {
        id: 3,
        name: 'Herbal Shampoo',
        price: '₹200',
        description:
            'Sulfate-free shampoo enriched with natural herbs for soft hair.',
        ingredients: ['Shikakai', 'Reetha', 'Aloe Vera', 'Hibiscus'],
        image: rasDetox,
    },
    {
        id: 4,
        name: 'Hair Mask',
        price: '₹300',
        description: 'Deep-conditioning mask for stronger, shinier hair.',
        ingredients: ['Fenugreek', 'Hibiscus', 'Curd', 'Vitamin E'],
        image: rasDetox,
    },
    {
        id: 5,
        name: 'Scalp Serum',
        price: '₹400',
        description: 'Promotes hair growth and nourishes the scalp.',
        ingredients: ['Onion Extract', 'Biotin', 'Tea Tree Oil'],
        image: rasDetox,
    },
    {
        id: 6,
        name: 'Hair Capsules',
        price: '₹180',
        description: 'Ayurvedic supplements for reducing hair thinning.',
        ingredients: ['Ashwagandha', 'Brahmi', 'Zinc', 'Iron'],
        image: rasDetox,
    },
    {
        id: 7,
        name: 'Diet Plan Guide',
        price: '₹100',
        description: 'PDF diet guide to support healthy hair growth.',
        ingredients: ['Custom Diet', 'Balanced Nutrition'],
        image: rasDetox,
    },
];

const HairKitScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.kitTitle}>
                1 Month Customised Kit - (7 products)
            </Text>

            <FlatList
                data={products}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                        <ProductCard product={item} />
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    kitTitle: {
        fontSize: 17,
        fontWeight: '700',
        marginLeft: 16,
        marginBottom: 12,
    },
    listContainer: {
        paddingHorizontal: 16,
    }
});

export default HairKitScreen;
