import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {Tabs} from 'expo-router'
// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import TabBar from '../components/TabBar'
const _layout = () => {
  return (
      <Tabs
        tabBar={props => <TabBar {...props} />}
      >
        <Tabs.Screen 
        name='index'
        options={{title:'Blue Bird'}}
        />
        <Tabs.Screen 
        name='Post'
        options={{title:'Create'}}
        />
        <Tabs.Screen 
        name='Profile'
        options={{title:'Profile'}}
        />
      </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})