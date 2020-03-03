import React, { Component } from "react"
import ListItem from "./ListItem"

export default class Listing extends Component {
  render() {
    const { posts } = this.props
    return (
      <ul>
        {posts.map(post => {
          let categories = false
          if (post.data.categories[0].category) {
            categories = post.data.categories.map(
              c => c.category.document[0].data.name
            )
          }
          return <ListItem key={post.uid} node={post} categories={categories} />
        })}
      </ul>
    )
  }
}