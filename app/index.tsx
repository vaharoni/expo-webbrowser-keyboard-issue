import { Text, Pressable, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, { useAnimatedKeyboard, useAnimatedStyle } from "react-native-reanimated"
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';


export default function HomeScreen() {
  const { height } = useAnimatedKeyboard();
  const keyboardDetectorWidth = useAnimatedStyle(() => ({ width: height.value }))

  function handlePress() {
    const linkToHere = Linking.createURL('/index');
    WebBrowser.openBrowserAsync(linkToHere);
  }
  return (
    <View style={{ gap: 20 }}>
      <Animated.View style={[{ backgroundColor: 'blue', height: 100 }, keyboardDetectorWidth]} />
      <TextInput placeholder="Press here to open keyboard" />;
      <Pressable onPress={handlePress} style={{ backgroundColor: 'gray', width: '100%', borderRadius: 24 }}>
        <Text>
          Click to launch WebBrowser
        </Text>
      </Pressable>
    </View>
  )
}
