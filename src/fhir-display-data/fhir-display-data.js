import React, { useState } from "react";
import { FhirResource, fhirVersions } from "fhir-react";
// import resource from "./resource";
// import resource from "../data/dischargeSummary.json";

// Import optional styles
import "fhir-react/build/style.css";
import "fhir-react/build/bootstrap-reboot.min.css";


const FhirDisplayData = () => {

  const [data, setData] = useState(null);

  return (

    <div className="FhirDisplayData">
      <FhirResource fhirResource= {this.props.resource} FhirVersion={fhirVersions.STU3} />
    </div>
 )
  }

  export default FhirDisplayData
