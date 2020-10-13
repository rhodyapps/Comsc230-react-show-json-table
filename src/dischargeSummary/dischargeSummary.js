import React, { Component } from 'react'
import Data from '../data/dischargeSummary.json'

import '../css/styles-list.css'
// import { JsonToTable } from "react-json-to-table";

import  FhirDisplayData from "../fhir-display-data/fhir-display-data";


const DischargeSummary = props => {

    const data = JSON.parse(props);
return (
<div>
<h1>FHIR - Discharge Summary </h1>
<div>

<FhirDisplayData resource={ data} />
</div>

</div>
)
}


export default DischargeSummary
