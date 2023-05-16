import React,{useState} from "react";
import { Alert, FlatList, SafeAreaView, View } from "react-native";
import ToDoList from "./src/Components/ToDoList";
import ToDoData from "./src/ToDo.json"
import Headers from "./src/Components/Header";
import SaveArea from "./src/Components/SaveArea";

const App = () => {

  const [state, setState] = useState(ToDoData);
  const [name, setName] = useState("");
  const [counter,setCounter] = useState(0);
  const updateName = () => {
    const newItem = { id: Date.now() + Math.random(), name: name,isDone:true };
    setState(prevState => [...prevState,newItem ]);
  };
  const isDoneChange = (id:number) => {
    const newTodoList = state.map(todo => {
      if (todo.id == id) {
        todo.isDone = !todo.isDone ;
       console.log("abc");
      }
      return todo;
    });
    setState(newTodoList);
  };
  
  return(
    <SafeAreaView>
    <Headers data={state}/>
    <FlatList data={state}
    renderItem={({item}) => <ToDoList changeIsDone={() => isDoneChange(item.id)}  data={item}/>}
     />
     <SaveArea setData = {setName} handleSave = {updateName}/>
    </SafeAreaView >
  );
}

export default App;