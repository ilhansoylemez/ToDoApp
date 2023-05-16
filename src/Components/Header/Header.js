import React, { useEffect } from "react";
import { Text, View, useAnimatedValue } from "react-native";
import Styles from './Header.style'

const Header = ({data})  => {
    const da = data.filter(x=> x.isDone == false);
    return( <View style={Styles.container}>
        <View style={Styles.leftContainer}><Text style={Styles.leftText}>Yapılacaklar</Text></View>
        <View style={Styles.rightContainer}><Text style={Styles.rightText}>{da.length}</Text></View>
    </View>)
   
}

export default Header;