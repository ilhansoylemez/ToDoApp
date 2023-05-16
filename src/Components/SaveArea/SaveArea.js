import React from "react";
import { Button, TextInput, Touchable, View } from "react-native";
import Styles from './SaveArea.style';

const SaveArea = ({setData,handleSave}) => {
    return (
        <View>
          <TextInput placeholder="Kaydet" onChangeText={(text)=> setData(text)}></TextInput>
          <Button title="Kaydet" onPress={handleSave}></Button>
        </View>
    );
}

export default SaveArea;