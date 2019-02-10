import React from 'react'
import Book from './Book'

// const gridComponent = ({books = []}, atualiza,teste) => {
//     console.log(teste);
//     console.log(atualiza);
//     console.log(books);


class gridComponent extends React.Component {


    render(){
        return(

            
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.teste}</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book)=>
                            <li key={book.id}>
                                <Book  book={book} update={this.props.atualiza}/>                        
                            </li>

                        )}
                    </ol>
                    </div>
                </div>

            )
    }
};


export default gridComponent;