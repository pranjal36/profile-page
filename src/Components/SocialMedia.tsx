import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome5';
import {Colors} from '../constants/Colors';

export default function SocialMedia() {
  return (
    <View style={styles.mainContainer}>
      {['facebook', 'discord', 'youtube', 'instagram', 'linkedin'].map(
        (item, index) => {
          return (
            <>
              <TouchableOpacity key={index} style={styles.iconContainer}>
                <FontAwesomeIcon
                  size={25}
                  name={item}
                  color={Colors.DARK_ORANGE}
                />
              </TouchableOpacity>
              {index !== 4 && <Text>|</Text>}
            </>
          );
        },
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFE5B4',
    paddingVertical: 3,
    borderRadius: 5,
    alignItems: 'center',
  },
  iconContainer: {
    marginHorizontal: 15,
  },
});
