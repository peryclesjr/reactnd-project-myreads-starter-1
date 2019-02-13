import React from 'react'
import Book from './Book'
import Prototypes from 'prop-types'

 const listBooks = (props) => {
//     console.log(teste);
//     console.log(atualiza);
//     console.log(books);


//class gridComponent extends React.Component {


    let show =(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
            {props.books.map((book)=>
                <li key={book.id}>
                    <Book  book={book} update={props.atualiza}/>                        
                </li>
            )}
        </ol>
        </div>
    </div>

    )

        return(
                show
            )
    
};

listBooks.prototypes = {
 books:Prototypes.array.isRequired,
 atualiza:Prototypes.func.isRequired

}


export default listBooks;