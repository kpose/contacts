import { createStackNavigator, createAppContainer } from "react-navigation";

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';


const RootStack = createStackNavigator({
    Contacts : {
      screen : Contacts 
    },
    Profile: {
      screen: Profile
    },
  });
  
  const Container = createAppContainer(RootStack);
  
  export default Container;