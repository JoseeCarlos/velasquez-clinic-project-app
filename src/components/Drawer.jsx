import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './home/Main'; 


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;