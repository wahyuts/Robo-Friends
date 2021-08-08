// index.js ini adalah file main js nya,...maksudnya index.js ini figunakan sebagai jembatan untuk menghubungkan komponen
// yang kita buat ke html kita,...menghubungkannya nanti pakai fungsi ReactDOM.render disini

import React from 'react';  // wajib dipake ini untuk import semua core library react,..kalo ga pake ga bisa pake fityr react
import ReactDOM from 'react-dom';  // wajib dipake di index.js aja,..karena ini mengaktifkan vitur DOM nya react,..kita pake DOM nya react bukan DOM biasa,..walaupun penulisannya DOM kek biasa
import './index.css';
import {Provider} from 'react-redux';  // saluran untuk menyalurkan tempat penyimpanan
import {createStore, applyMiddleware, combineReducers} from 'redux';  // untuk nambahin tool untuk buat store / tempatpat penyimpanan
import {searchRobots, requestRobots} from './Reducers';
import App from '../src/container/App';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';  //ini library css kek mirip boostrap dan harus di taro di index.js,..nanti class css dari tachyons bisa dipake di komponen apa aja ga perlu import lagi
// import { robots } from './robots'  //*mengapa penulisan nya beda dari card dan yg ini pake {},..karena komponen/object robots mempunyai banyak data array object didalamnya
                                  // dan komponen robots menggunkan export saja (bukan export default) dimana kalo export saja digunakan jika object memiliki banyak data array
                                  // seperti kumpulan data informasi siswa...dan export default digunakan jika hanya ada satu hasil yg siap digunakan
import reportWebVitals from './reportWebVitals';

const logger = createLogger();  //untuk menciptakan console.log otomatis(maksudnya kita koding kek biasa aja,..ga usah pake console.log buat debug,..tapi pas u buka console.log di dep developer,..hasil u ud ke log)

const rootReducers = combineReducers({ searchRobots, requestRobots})  //combineReducers buat menggabungkan seluruh reducers (state) yang ada di file reducer.js

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware,logger))  // ini store mengambil nilainya dari reducer.js dalam hal ini fungsi serachRobots
                                          // seharusnya kalo banyak reducer nanti jadinya  (rootReducer)  dimana kita 
                                          //menjadikan semua reducer yg ada di file reducers.js menjadi satu


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
        <App />
    </Provider>
      
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
