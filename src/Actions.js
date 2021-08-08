import {
        CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FAILED
} from './Constants';

// export const setSeacrhField = (text) => ({  // baris ini itu merupakan nama Action nya  dan (text) disini itu adalah parameter inputannya
//     type: CHANGE_SEARCH_FIELD,            // nah jadi setelah dijalankan actionnya  maka akan me return sebuah object 
//                                         //dengan property dalam cth ini type yang value nya 'CHANGE_SEARCH_FIELD'
//                                 // 'CHANGE_SEARCH_FIELD' ini adalah the real actionnya,..jadi ketika setSearchfield active maka  action 'CHANGE_SEARCH_FIELD' akan dijalankan 
//                                 // mengapa 'CHANGE_SEARCH_FIELD' huruf gede semua ? supaya lebih mudah mengingatnya karena itu action
//      payload: text   // payload ini gini maksudnya kalo actionnya aktif maka isi yang ada dipayload ini akan dikirim
//                      // ke store reduxnya karena yg dikirim ini sama dengan yg di input maka isinya sama yaotu text
// })

export const setSeacrhField = (text) => {  // baris ini itu merupakan nama Action nya  dan (text) disini itu adalah parameter inputannya
    // console.log(text);
    return{
        type: CHANGE_SEARCH_FIELD,            // nah jadi setelah dijalankan actionnya  maka akan me return sebuah object 
                                        //dengan property dalam cth ini type yang value nya 'CHANGE_SEARCH_FIELD'
                                // 'CHANGE_SEARCH_FIELD' ini adalah the real actionnya,..jadi ketika setSearchfield active maka  action 'CHANGE_SEARCH_FIELD' akan dijalankan 
                                // mengapa 'CHANGE_SEARCH_FIELD' huruf gede semua ? supaya lebih mudah mengingatnya karena itu action
        payload: text   // payload ini gini maksudnya kalo actionnya aktif maka isi yang ada dipayload ini akan dikirim
                     // ke store reduxnya karena yg dikirim ini sama dengan yg di input maka isinya sama yaotu text
    }
    
}

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')   
    .then(response => response.json())
    .then(data => dispatch ({type: REQUEST_ROBOTS_SUCCESS, payload:data }))
    .catch(error => dispatch ({type: REQUEST_ROBOTS_FAILED, payload:error }))
}