import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from "react";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Blue from '../app/index';

const TabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    index: (props) => <AntDesign name="home" size={24} color="white" {...props} />,
    Post: (props) => <MaterialIcons name="post-add" size={24} color="white" {...props} />,
    Profile: (props) => <Feather name="user" size={24} color="white" {...props} />
  };

  return (
    <View style={styles.navbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
            ? options.title
            : route.name;

        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.touchable}
          >
            {
              icons[route.name]
                ? icons[route.name]({ color: isFocused ? 'orange' : 'white' })
                : null
            }
            <Text style={{ color: isFocused ? 'orange' : 'white' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    color: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    backgroundColor: 'black'
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    textAlign: 'center',
    alignContent: 'center',
  }
});

export default TabBar;
