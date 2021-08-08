// reducer ini secara global puyna isi state (di redux nyebutnya initialState) dan logika untuk bisa gunta ganti gaya atau action
// logika untuk bisa gunta ganti gaya atau action maksudnya cuma logika nya aja,..bukan semua action dimasukin dini
// REDUCER BISA PAKE ACTION KARENA ADA IMPORT DARI FILE CONSTANTS,..YANG MANA FILE CONSTAN ITU BERISI NAMA GAYANYA(HANYA NAMA GAYA)

import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './Constants';


const initialStateSearch = {
    searchField:'',
    //misal properety lainnya:
    //properti lainnya:

}

//dibawah ini adalah fungsi yang berisi berbagai macam logika action, dimana ketika action tersebut dipilih/dipake 
//maka akan merubah property di initialState (misal action case CHANGE_SEARCH_FIELD di pilih maka akan tampilin return objec assign)
//TAPI INGAT INI HANYA KUMPULAN LOGIKA CASE ACTIONNYA SAJA,..BUKAN NAMA ACTION ATAU GAYANYA
//NAMA ACTION DAN DETAIL/PROPERTY ACTION KEK TYPE DAN PAYLOAD DI ATUR DI ACTION.JS DAN CONSTANTS.JS
export const searchRobots = (state=initialStateSearch,action={}) => {   // bagian ini buat logika fungsi gunta ganti gaya
    // console.log(action.type);
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:  // Nah CHANGE_SEARCH_FIELD ini gaya nya,..bisa dipake disini karena kita sudah link ke file constants.js
            return Object.assign({}, state, {searchField:action.payload});
        default : 
            return state;
    }
}

//Dibawah ini kita buat fungsi reducer baru supaya lebih spesifik dan enak diliat

const initialStateRobots = {
    isPending: false,
    robots:[],
    error:''
    
}

export const requestRobots = (state=initialStateRobots,action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign ({}, state, {error: action.payload});
        default:
            return state;
    }

}