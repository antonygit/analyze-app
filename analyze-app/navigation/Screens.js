import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Overview from './Overview';
import Analytics from '../screens/Analytics';
import Chat from '../screens/Chat';
import Service from '../screens/Service';
import Settings from '../screens/Settings';
import Map from '../screens/Map';
import Vehicles from '../screens/Vehicles';

export default createDrawerNavigator({
  Overview 
},
{
    navigationOptions: {
      headerStyle:{backgroundColor:'#FFFF00'},
      headerTintColor:'white',
      gesturesEnabled:false
    },
    
  });