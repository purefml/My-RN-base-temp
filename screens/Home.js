import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          <Text>Home</Text>
        </SafeAreaView>
    )
}

export default Home;