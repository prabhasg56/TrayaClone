import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MenuLink from './MenuLink';


export default function MenuLinks({navigation}) {
  const menus = [
    {
      title: "All Products",
      path: "AllProductStack",
    },

    {
      title: "Terms & Policies",
      path: "TermsPolicieStack",
    },
    {
      title: "Read More",
      path: "ReadMoreStack",
    },

    {
      title: "Logout",
      path: "ReadMoreStack",
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.cardCon}>
        {
          menus.map((item, ind) => {
            return <MenuLink key={ind} title={item?.title} path={item?.path} navigation={navigation} />
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  item: {
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
    color: '#000'
  },
  cardCon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    flexWrap: 'wrap',
    gap: 5
  },
});
