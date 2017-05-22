import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

const nativeRecipes = () => {
  return (
    <View>
      <Text>Native Recipes</Text>
    </View>
  )
}

AppRegistry.registerComponent('nativeRecipes', () => nativeRecipes);
