import React, { Component } from 'react'
import Data from '../data/dischargeSummary.json'

import '../css/styles-list.css'
// import { JsonToTable } from "react-json-to-table";

import  FhirDisplayData from "../fhir-display-data/fhir-display-data";

// const data = JSON.parse(Data);

class DischargeSummary extends Component {
render () {
    
return (
<div>
<h1>FHIR - Discharge Summary </h1>

return <div>
<FhirDisplayData resource={ Data } />
</div>

</div>
)
}
}

export default DischargeSummary
