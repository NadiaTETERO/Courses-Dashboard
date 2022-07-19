import React from "react";
import {BsSearch,BsSliders,BsBell,BsChatLeftText} from "react-icons/bs";
import dog from "./dog.jpg";
import "./head.css";
export class Head extends React.Component{

    render(){
        return(
            <div id="head_content">
                <header id="head_header">
                    <h1>courses Dashboard</h1>
                    <p>Hello AR Shakir, welcome back!</p>
                </header>

                <div id="head_search">
                    <BsSearch id="head_iconsearch" size="0.8em"/>
                    <input id="inputSearch" type="text" placeholder="search Dashboard"/>
                    <BsSliders id="head_slider" size="0.8em"/>
                </div>
                <ul id="head_ul">
                    <li><BsChatLeftText id="head_chat"/></li>
                    <li><BsBell id="head_bell"/></li>
                    <li><img src={dog}/></li>
                </ul>
            </div>
           
        );
    }
}