import React from "react";
import {ReactComponent} from "*.svg";

const WithClass = (Component, className) => {
 return props => {
   return (
       <div className={className}>
          <Component/>
       </div>
   )
 }
}

export default WithClass