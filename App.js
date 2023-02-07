import React, { Component } from 'react'
import './BookList.css';
import Header from './Header';
import AddForm from './AddForm';


export default class componentName extends Component {
    render() {
        return (
            <div className='bookMain'>
                <Header />
                <AddForm />
            </div>
        )
    }
}
