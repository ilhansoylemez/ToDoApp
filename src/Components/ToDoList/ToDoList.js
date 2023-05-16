import React, { useState } from "react";
import { View,Text } from "react-native";
import Styles from './ToDoList.style'

const ToDoList = ({data,changeIsDone})=> {
    return (
       
       <View style={data.isDone  ? Styles.toDoContainer : Styles.toDoClick}>
       <Text style={data.isDone ? Styles.doneTodoText : Styles.todoTex} onPress={() => changeIsDone(data.id)}> {data.name} </Text>
      </View>
    );
}
export default ToDoList;