import React, {useState} from "react";
import './styles/App.css'
import './styles/os.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Convert from "./components/Convert";
import Os from "./components/Os"
import Lab5 from "./components/Lab5"
import axios from "axios";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import Script1 from "./scripts/Script1";
import Script2 from "./scripts/Script2";
import Script4 from "./scripts/Script4";
function App() {
    const [posts, setPosts] = useState([
        {id:1, title:'клоп', body:'писечки'},
        {id:2, title:'шлёк', body:'впрврвар'},
        {id:3, title:'попочки', body:'писечки'},
    ])
    const [curencys, setcurency1] = useState([
        {id:1, name:'RUB'},
        {id:2, name:'EUR'},
        {id:3, name:'USD'},
        {id:4, name:'JPY'},
        {id:5, name:'GBP'},
        {id:6, name:'AUD'},
    ])
    const [info, setInfo] = useState(new Map([
        ["yourName", "(Ваше имя)"],
        ["parentName", '(Имя Родителя)'],
        ["childName", '(Имя ребёнка)'],
        ["childGender", 'Мальчик'],
        ["subject",    '(предмет)']
    ]))

    const [resultString, setResultString] = useState("")
    const updateInfo = (key, value) => {
        setInfo(map => new Map(map.set(key, value)));
    }
    const updateResultString = (value) => {
        setResultString(value);
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Os resultString={resultString}  updateMap={updateInfo} />,
            children:[
                {
                    path: "/script1",
                    element: <Script1 updateResult={updateResultString} parentName={info.get("parentName")} yourName={info.get("yourName")} subject={info.get("subject")} childName={info.get("childName")} childGender={info.get("childGender")} />,
                },
                {
                    path: "/script2",
                    element: <Script2 updateResult={updateResultString} parentName={info.get("parentName")} yourName={info.get("yourName")} subject={info.get("subject")} childName={info.get("childName")} childGender={info.get("childGender")} />,
                },
                {
                    path: "/script4",
                    element: <Script4 updateResult={updateResultString} parentName={info.get("parentName")} yourName={info.get("yourName")} subject={info.get("subject")} childName={info.get("childName")} childGender={info.get("childGender")} />,
                }
            ]
        },
    ]);
    // parentName={parentName} yourName={yourName} subject={subject} childName={childName} childGender={childGender}
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
