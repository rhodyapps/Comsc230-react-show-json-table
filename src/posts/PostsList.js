import React, { Component } from 'react'
// import PostData from '../data/posts.json'
import PostData from '../data/posts100.json'
import '../css/styles-list.css'
import { JsonToTable } from "react-json-to-table";


class PostList extends Component {
render () {
return (
<div>
<h1>Posts Table</h1>
{PostData.map((postDetail, index) => {
return <div>
<JsonToTable json={postDetail} />
</div>
})}
</div>
)
}
}

export default PostList
