import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { COLORS } from '../constansts/Colors';

const PlaceItems = ({id, title, image, address, onSelect}) => {
     return (
          <TouchableOpacity 
              key={id}
              onPress={onSelect}
              style={styles.placeItem}
          >
          <Image style={styles.image} source={{ uri: image}} />
          <View style={styles.info}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.address}>{address}</Text>
          </View>
      </TouchableOpacity>
      )
};
export default PlaceItems;
const styles = StyleSheet.create({
     placeItem: {
         borderBottomColor: COLORS.primary,
         borderBottomWidth: 1,
         flexDirection: 'row',
         alignItems: 'center',
         paddingVertical: 16,
         paddingHorizontal: 30
     },
     image: {
         width: 70,
         height: 70,
         borderRadius: 35,
         backgroundColor: COLORS.PEACH_PUFF
     },
     info: {
         marginLeft: 25,
         flex: 1,
         justifyContent: 'center',
         alignItems: 'flex-start',
     },
     title: {
         color: 'black',
         fontSize: 18,
         marginBottom: 6,
     },
     address: {
         color: 'red',
         fontSize: 16,
     }
 })