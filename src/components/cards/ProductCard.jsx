import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import { Card, Chip, Button, Divider } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const CARD_HEIGHT = 480; // consistent card height

const ProductCard = ({ product }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.chipRow}>
        <Chip style={styles.chip}>Ayurveda</Chip>
        <Chip style={[styles.chip, { backgroundColor: '#f7e9a1', borderTopRightRadius: 0, borderBottomRightRadius: 0 }]}>
          Must Have
        </Chip>
      </View>

      <Card.Content style={styles.content}>
        <Image source={product.image} style={styles.image} resizeMode="contain" />
        {console.log(product.name)}
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>

        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>

        <View style={styles.keyIngCon}>
        <Text style={styles.ingredientTitle}>Key Ingredients</Text>
        <View style={styles.ingredientRow}>
          {product.ingredients.map((ing, index) => (
            <Chip key={index} style={styles.ingredientChip}>{ing}</Chip>
          ))}
        </View>
        </View>

        <Text mode="text" style={styles.moreBtn} textColor='gray' fontSize={20} >
          More Details {'>'}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.70,
    height: CARD_HEIGHT, 
    borderRadius: 8,
    marginVertical: 12,
    alignSelf: 'center',
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 3 },
    // shadowRadius: 6,
    // elevation: 1,
    backgroundColor: '#fff',
    paddingBottom: 10
  },
  chipRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 4
  },
  chip: {
    height: 28,
    marginTop: 4
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: width * 0.3,
    height: height * 0.15,
    marginVertical: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    marginVertical: 4,
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    fontSize: 13,
    color: '#555',
    marginVertical: 6,
  },
  keyIngCon:{
    alignItems:"center",
    marginTop:2,
    borderTopWidth:0.2,
    borderColor:"gray",
    borderBottomWidth:0.2,
    paddingVertical:2
  },
  ingredientTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  ingredientRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 4,
  },
  ingredientChip: {
    margin: 4,
    backgroundColor: '#f0f0f0',
  },
  moreBtn: {
    marginTop: 10,
  },
});

export default ProductCard;
