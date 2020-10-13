import React, { Component } from 'react'
import Data from '../data/dischargeSummary.json'

import '../css/styles-list.css'
import { JsonToTable } from "react-json-to-table";

class DischargeSummary extends Component {
render () {
return (
<div>
<h1>FHIR - Discharge Summary </h1>
{Data.map((dataDetail, index) => {
return <div>
<JsonToTable json={dataDetail} />
</div>
})}
</div>
)
}
}

export default DischargeSummary
