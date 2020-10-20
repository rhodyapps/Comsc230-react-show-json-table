import React, { Component } from 'react'
import Data from '../data/dischargeSummary2.json'
import { patient } from '../data/patient'
import '../css/styles-list.css'
// import { JsonToTable } from "react-json-to-table";

import  FhirDisplayData from "../fhir-display-data/fhir-display-data"

/*

class Parent extends React.Component {
    render() {
        return (
            <Child example="foo" />
        )
    }
}

class Child extends React.component {
    render() {
        return (
            <h1>{this.props.example}</h1>
        )
    }
}

*/

// const DischargeSummary = props => {
    class DischargeSummary extends React.Component {
        render() {
            return (
                <div>
                <h1>FHIR - Discharge Summary </h1>
                <div>
                
                <FhirDisplayData resource={ patient } />
                </div>
                
                </div>
            )
        }
                
        }
        

  /*  const data = JSON.stringify(Data);
    console.log("data: ", data);
return (
<div>
<h1>FHIR - Discharge Summary </h1>
<div>

<FhirDisplayData resource={ data} />
</div>

</div>
)
}
*/
    
 export default DischargeSummary
