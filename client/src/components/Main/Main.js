import React from "react";
import "./Main.css";

export const Input = props =>
  <div className="form-group">
    <input className="form-control" {...props} />
  </div>;

export const Heading =  ({children}) =>
    <div className="panel panel-default">
      <div className="panel-heading">
       {children}
      </div>
    </div>;


 export const Grid =  ({children}) =>
     <div className="panel-body">
           {children}
     </div>;

export const Jtron =  ({children}) =>
  <h1 className="jtron" style= {{color: "white"}}>
    {children}
  </h1>;

export const Ito =  ({children}) =>
  <i className="fa fa-newspaper-o" style= {{color: "white"}}>
    {children}
  </i>;

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};

export const ListItem = props =>
  <li className="list-group-item">
    {props.children}
  </li>;


export const FormBtn = props =>
  <button {...props} style={{ float: "center" }} className="btn btn-success">
    {props.children}
  </button>;

export const Col = ({ size, children }) =>
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>;

export const Container = ({ fluid, children }) =>
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;

export const Row = ({ fluid, children }) =>
  <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;

 export const SaveBtn = props =>
  <button {...props} style={{ float: "right" }} className="btnsave">
    {props.children}
  </button>;