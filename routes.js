import { createStackNavigator, createAppContainer } from "react-navigation";

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import colors from "./utils/colors";


const RootStack = createStackNavigator({
  Contacts: {
    screen: Contacts,
  },
    Profile: {
      screen: Profile,
      navigationOptions : ({ navigation: {state: { params }}}) => {
        const{ contact: { name }} = params;
        return {
          title: name.split(' ') [0],
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.blue,
          },
        };
      },
    }
  });
  
  
  const Container = createAppContainer(RootStack);
  
  export default Container;