import React, { Component } from 'react'
import Book from './Book';
export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            auther: '',
            year: '',
            book: []
        }
        this.subForm = this.subForm.bind(this);

    }
    handleInput(event) {
        switch (event.target.name) {
            case "title":
                this.setState({ title: event.target.value });
                break;
            case "auther":
                this.setState({ auther: event.target.value });
                break;
            case "year":
                this.setState({ year: event.target.value });
                break;
            default:
                break;

        }
    }

    subForm(event) {
        event.preventDefault();
        let lastId = this.state.book.length;
        if (title && auther && year) {
            let newBook = {
                id: lastId + 1,
                title: title,
                auther: auther,
                year: year
            }
            this.state.book.push(newBook);
        }

        this.setState({ title: '', auther: '', year: '' });
    }
    render() {

        return (
            <>
                <div className='addFrom'>
                    <form onSubmit={this.subForm}>
                        <div className='form-gorup'>
                            <label htmlFor="title">Title</label>
                            <input type="text" name='title'
                                onChange={(e) => this.handleInput(e)}
                                value={this.state.title}
                            />
                        </div>
                        <div className='form-gorup'>

                            <label htmlFor="auther">Auther</label>
                            <input type="text" name='auther'
                                onChange={(e) => this.handleInput(e)}
                                value={this.state.auther}
                            />
                        </div>
                        <div className='form-gorup'>
                            <label htmlFor="year">Year</label>
                            <input type="text" name='year'
                                onChange={(e) => this.handleInput(e)}
                                value={this.state.year}
                            />

                        </div>
                        <input type="submit" value={"AddBook"} className='btnSub'

                        />
                    </form>
                </div>

                <br />
                <hr />
                <div className="addFrom">
                    <table>
                        <caption>Book list</caption>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Title</th>
                                <th>Auther</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.book.map((item) => (
                                    <Book key={item.id} {...item} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
