import React from "react";
import {render} from 'react-dom'
import 'antd/dist/antd.css'
import App from "./app";
import localUtils from "./utils/localUtils";
import memoryUtils from "./utils/memoryUtils";
const user=localUtils.getAdmin();
memoryUtils.user=user
render(
    <App/>,document.getElementById('root')
)