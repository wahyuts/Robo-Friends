import React from 'react';

const SearchBox = ({searchChange}) => {   //mengambil property dari komponen searchBox yg ada di app.js,..intinya 
    return(                               // parameter di const searchNox sini itu adalah atau harus nama property komponen searchBox yang ada di app.js
        <div className="pa2">
            <input className= "pa3 ba b--green bg-lightest-blue" 
                type="search" 
                placeholder="Ketikan Nama Robotnya"
                 onChange={searchChange}  //onChange fungsinya buat mantau keadaan di text box,..misal kalo di text box ada huruf 1 efek nya apa, 2 hurf efeknya apa
            />
        </div>
    );
}


export default SearchBox;