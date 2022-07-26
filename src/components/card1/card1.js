import React from "react";
import america from "./america.jpg";
import china from "./china.jpg";
import woman1 from "./woman1.jpg";
import woman from "./woman.jpg";
import profile from "./profile.jpg";
import "./card1.css";
import {DiPhp} from "react-icons/di";
import {TbBrandFigma} from "react-icons/tb";
import {IoLogoPython} from "react-icons/io";

let card1 ={
    iconLabel:<DiPhp size="2em"/>,
    levelLabel:"Beginners",
    header3 :"Fun with PHP",
    imageSrc :woman1,
    nameLabel :"Darrell Steward",
    bgcolor:{
        "background-color":"rgb(81, 90, 143)"
    },
    percent: 68,
    width:{
        "width":"%"
    },
    num1:19,
    num2: 26,
    country: america
};
let card2 ={
    iconLabel:<TbBrandFigma />,
    levelLabel:"Advanced",
    header3 :"Figma Workshop",
    imageSrc :woman,
    nameLabel :"Cameron Williamson",
    bgcolor:{
        "background-color":"#535055",
    },
    color:{
        "color":"rgb(238, 115, 168)"
    },
    percent: 39,
    width:{
        "width":"70%"
    },
    num1:3,
    num2: 8,
    country: china

};
let card3 = {
    iconLabel:<IoLogoPython size="2em"/>,
    levelLabel:"Advanced",
    header3 :"Python Developer",
    imageSrc :profile,
    nameLabel :"Jenny Wilson",
    bgcolor:{
        "background-color": "rgb(56, 99, 218)"
    },
    color:{
        "color":"rgb(238, 115, 168)"
    },
    percent: 21,
    width:{
        "width":"27%"
    },
    num1:3,
    num2: 8,
    country: america
}
let card4 = {
    iconLabel:<IoLogoPython size="2em"/>,
    levelLabel:"Advanced",
    header3 :"Python Developer",
    imageSrc :profile,
    nameLabel :"Jenny Wilson",
    bgcolor:{
        "background-color": "rgb(44, 32, 28)"
    },
    color:{
        "color":"rgb(44, 32, 28)"
    },
    percent: 88,
    width:{
        "width":"27%"
    },
    num1:3,
    num2: 8,
    country: america
}
class Card extends React.Component{

    render(){
        return(
            <div id="card1">
                <div id="section_one">
                    <label id="php_label" style={this.props.bgcolor}>{this.props.iconLabel}</label>
                    <label id="beginner_label" style={this.props.color}>{this.props.levelLabel}</label>
                    <h3>{this.props.header3}</h3>
                </div>
                <div id="section_two">
                        <p><span id="by">by</span> <span id="span_img"><img src={this.props.imageSrc} alt=""/></span> <span id="customer_name">{this.props.nameLabel}</span></p>
                </div>
                <div id="card_lastSection">
                    <span className="nums">{this.props.percent}%</span>
                    <div id="progress"><div style={this.props.width}></div></div>
                    <span className="nums">{this.props.num1}</span>
                    <span className="nums" id="last_num">/{this.props.num2}</span>
                    <img src={this.props.country} alt=""/>
                    {/*   */}
                    {/*  */}
                </div>
            </div>
        );
    }
}

export class Card1 extends React.Component{
    render(){
        return(
            <div id="card_main">
                <Card iconLabel={card1.iconLabel} levelLabel={card1.levelLabel}  header3={card1.header3} imageSrc={card1.imageSrc} nameLabel={card1.nameLabel} bgcolor={card1.bgcolor} color={card1.color} percent={card1.percent} width={card1.width} num1={card1.num1} num2={card1.num2} country={card1.country}/>
                <Card iconLabel={card2.iconLabel} levelLabel={card2.levelLabel}  header3={card2.header3} imageSrc={card2.imageSrc} nameLabel={card2.nameLabel} bgcolor={card2.bgcolor} color={card2.color} percent={card2.percent} width={card2.width} num1={card2.num1} num2={card2.num2} country={card2.country}/>
                <Card iconLabel={card3.iconLabel} levelLabel={card3.levelLabel}  header3={card3.header3} imageSrc={card3.imageSrc} nameLabel={card3.nameLabel} bgcolor={card3.bgcolor} color={card3.color} percent={card3.percent} width={card3.width} num1={card3.num1} num2={card3.num2} country={card3.country}/>
                <Card iconLabel={card4.iconLabel} levelLabel={card4.levelLabel}  header3={card4.header3} imageSrc={card4.imageSrc} nameLabel={card4.nameLabel} bgcolor={card4.bgcolor} color={card4.color} percent={card4.percent} width={card4.width} num1={card4.num1} num2={card4.num2} country={card4.country}/>
            </div>
            
        );
    }
}