import React, { useRef } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  Alert,
} from 'react-native';
import { Chip } from 'react-native-paper';
import BounceTouchable from '../BounceTouchable';

const { width, height } = Dimensions.get('window');
const CARD_HEIGHT = 470;

const ProductCard = ({ product }) => {

  return (
    <BounceTouchable onPress={()=>Alert.alert("Sorry😔 wait for this feature!")}>
      <View style={styles.card}>
        <View style={styles.chipRow}>
          <Chip textStyle={{ fontSize: 10 }} style={styles.chip} icon="leaf">Ayurveda</Chip>
          <Chip
            textStyle={{ fontSize: 10 }}
            style={[styles.chip, {
              backgroundColor: '#f7e9a1',
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0
            }]}
          >
            Must Have
          </Chip>
        </View>

        <View style={styles.content}>
          <Image source={product.image} style={styles.image} resizeMode="contain" />
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>

          <Text style={styles.description} numberOfLines={2}>
            {product.description}
          </Text>

          <View style={styles.keyIngCon}>
            <Text style={styles.ingredientTitle}>Key Ingredients</Text>
            <View style={styles.ingredientRow}>
              {product.ingredients.map((ing, index) => (
                <View key={index} style={styles.ingredientChip}>
                  <Text style={styles.ingRaw}>🍂</Text>
                  <Text style={styles.ingText}> {ing}</Text>
                </View>
              ))}
            </View>
          </View>

          <Text style={styles.moreBtn}>More Details {'>'}</Text>
        </View>
      </View>
      </BounceTouchable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.70,
    minHeight: CARD_HEIGHT,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    marginVertical: 12,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  chipRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 4,
  },
  chip: {
    marginTop: 4,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
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
  keyIngCon: {
    alignItems: "center",
    marginTop: 2,
    borderTopWidth: 0.2,
    borderColor: "gray",
    borderBottomWidth: 0.2,
    paddingVertical: 2
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
    gap:5
  },
  moreBtn: {
    marginTop: 10,
  },
  ingRaw:{
    borderRadius:50,
    borderWidth:0.5,
    alignSelf:'center',
    padding:8,
    borderColor:'lightgray',
    backgroundColor:'#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
  },
  ingText:{
    fontSize:10
  }
});

export default ProductCard;
