import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        return (
            <>


                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.title}</td>
                    <td>{this.props.auther}</td>
                    <td>{this.props.year}</td>
                </tr>
            </>
        )
    }
}
