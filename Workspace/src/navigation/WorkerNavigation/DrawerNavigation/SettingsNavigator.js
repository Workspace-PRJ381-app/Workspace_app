import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from '../../../Worker/DrawerComponents/Settings';


const Stack = createStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options ={{ title : "Settings" }}/>
    </Stack.Navigator>
  );
}

export default ( SettingsStackNavigator );
