import React, { Component } from "react";
import { FhirResource, fhirVersions } from "fhir-react";
// import resource from "./resource";
// import resource from "../data/dischargeSummary4.json";
import { JsonToTable } from "react-json-to-table";
// Import optional styles
import "fhir-react/build/style.css";
import "fhir-react/build/bootstrap-reboot.min.css";

 class FhirDisplayData 
 extends Component {
 // const FhireDisplayData = props => {

  render () {
  return (
    <div className="FhirDisplayData">
      <FhirResource fhirResource= {this.props.patient} FhirVersion={fhirVersions.STU3} />
    </div>
 )
}
}

export default FhirDisplayData
