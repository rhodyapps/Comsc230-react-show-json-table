import React, { Component } from 'react'
// import PostData from '../data/posts.json'
import Data from '../data/students.json'
import '../css/styles-list.css'
import { JsonToTable } from "react-json-to-table";


class StudentList extends Component {
render () {
return (
<div>
<h1>Students Table</h1>
{Data.map((dataDetail, index) => {
return <div>
<JsonToTable json={dataDetail} />
</div>
})}
</div>
)
}
}

export default StudentList
