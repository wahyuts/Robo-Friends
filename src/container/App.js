// import React, {useState, useEffect} from 'react';
import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { setSeacrhField, requestRobots } from '../Actions';  // ini event action yang akan pas dispatch di mapDispatchToProps
import {connect} from 'react-redux';
import ErrorBoundry from '../components/ErrorBoundry';


import './App.css';
// import { requestRobots } from '../Reducers';
// import { render } from 'react-dom';
/*import { robots } from './robots';  /*penulisan robots yang pertama memakai tanda {} karena dy menggunakan export biasa
                                      di file robots.js nya dimana export biasa itu dapat mengasilkan keluaran nilai output yg banyak(bukan satu)
                                      misal kek array object yg diamana lebih dari satu pasti pake export
                                      sedangkan penulisan './robots' itu mengarah kepada nama file nya yg ada difolder yang sama*/


const mapStateToProps = state => {   //mapStateToProps Tugasnya untuk bilang kepada kita state yang mana yang kita perlu guanakan agar dikirim ke props
                                    // INGAT state disini itu adalah initialState yang ada di reducer.js,..jadi silahkan rujuk kesana
    return {
        searchField:state.searchRobots.searchField,    //searchField Pertama adalah nama property yang dihasilkan dari mapSateToProps jadi benernya nama boleh bebas
        robots:state.requestRobots.robots,              //searchRobots itu nama fungsi yang ada didalam reducer 
        isPending:state.requestRobots.isPending,        //searchField itu nama state nya
        error:state.requestRobots.error                             
                                            
                                                    // nah searchField yg ke2 disini adalah property initialState pada reducer.js (nama tidak boleh dirubah karena property initialState)
                                        // state.searchRobots  ini artinya nama fungsi yang digunakan untuk merubah property statenya
                            // searchField  yang ke2 ini mengacu kepada  {searchField:action.payload}  yang ada di reducer tepatnya berada di dalam fungsi searchRobots
    }  // semua perintah diatas hasilnya akan di konversi mejadi suatu props (object kalo kata gw,..ke file json itu) trus agar bisa mengupdate props nya
       // maka dijalankan  mapDispatchToProps-dispatch  dibawah ini
}

const mapDispatchToProps = (dispatch) =>  {   // dispatch ini pelatuk yg mentriger event actionnya dijalankan
    return {   //onSearchchange ini nama fungsi buatan,..jadi bebas mo pake nama apa
        onSearchChange:(event) => dispatch(setSeacrhField(event.target.value)),  //setSearhField ini nama action nya dan   (event.target.value)   ini adalah parameter text di setSearchField
        onRequestRobots:()=>dispatch(requestRobots())
    }  
}

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [] //robots: robots,  artinya robots yang pertama (yg tulisannya robots:) itu nama property jadi bisa bebas namanya benernya,..robots yang ke 2 itu tadi diambil dari value property robots
            
    //     }
    // }

    componentDidMount() {  // componentDidMount() merupakan salah satu method dari life cycle bagian mount,...kita pake ini karena kita amil data nya di server (dalam kaus ini server pura2)
        this.props.onRequestRobots()
        // fetch('https://jsonplaceholder.typicode.com/users')   // fetxh gunanya untuk mengirim request atau permintaan ke server karena data yg mau kita ambil ada diserver (dalam hal ini jsonplaceholder berpura2 jadi server) 
        //     .then(response => response.json()) // kalimat  (response => response.json())  wajib dimasukin sama persis sehabis fetch
        //     .then(users => this.setState( {robots: users} ));  //({robots: robots})  robots yang pertama itu mengacu ke property App nya (yang robots: [])
                                                  // robots yang kedua mengacu ke import robots atau ke (robots.js) jadi bukan property di App nya
        }

        //* arti dari kode fetch diatas itu maksudnya pergi ke alamat url nya kemudian dapatkan (yg then itu) response nya lalu convert ke response.json
            // (response disini itu parameter jadi nama boleh apa saja)
         
    // const [robots, setRobots] = useState ([])  // kalimat kode ini merupakan hook,...dimana hook memungkinkan kita dapat menggunakan state didalam fungsional komponen
                                              // robots disini itu adalah nama propertynya (bisa bebas namanya,...tapi disini karena project kita robot jadi namanya robot)
                                            // setRobots ini kalo di state class itu ibarat setState nya jadi untuk mengupdate suatu value pada robots
                                            // useState ini semacam untuk mendefinisikan nilai dari property robots,..dalam hal ini nilainya []

    // const [searchfield, setSearchfield] = useState ('')   // ini juga sama semacam hook,..atau state didalam fungsi
                                                // informasi tambahan hook itu dapat memecah state jadi 1 property bisa jadi 1 state di dalam fungsi jadi
                                                // satu lagi kita tidak memakai this karena ini bukan object tapi fungsional komponen
    
    // useEffect (()=>{
    //         fetch('https://jsonplaceholder.typicode.com/users')   // fetxh gunanya untuk mengirim request atau permintaan ke server karena data yg mau kita ambil ada diserver (dalam hal ini jsonplaceholder berpura2 jadi server) 
    //         .then(response => response.json()) // kalimat  (response => response.json())  wajib dimasukin sama persis sehabis fetch
    //         .then(users => setRobots( users )); 
    // },[])

    // const onSearchChange = (event) =>{    //event disini emang paramenter tapi biasanya berguna buat onChange DOM event
    //     setSearchfield (event.target.value);  // event.target.value wajib dipake untuk ambil nilai dari apa yg ada di textboxt pada kondisi terkini,...nah untuk kasus ini di assign
    // }

    render(){
        
        const {searchField, onSearchChange, robots, isPending} = this.props;  //searchField dan onSearchChange disini mengacu kepada property yang dihasilkan dari 
                                                           // mapStateToProps dan mapDispatchToProps
    
        const filteredRobots = robots.filter(robotdd => {  // robotdd ini adalah nama parameter jadi bisa apa aja namanya,..dalam prakteknya akan mewakili nama tiap robot,..karena filtering nama
            return robotdd
            .name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        })

        return isPending ?   // fungsi if  kali ini ternary,...jadi ga tulis if,..fungsinya kita pake disini untuk buat fitur loading,..jadi kalo ga keload robotnya akan nampilin loading
            <h1 className="f1">Loading</h1>:   //ternary if tidak pake tulis if dan else serta {} ,..cuma pake  ?,..sikon true ditulis abis ? sisanya else
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/> {/* nah searchChange ini nama property dari komponen searchBox jadi bisa bebas namanya*/}
                    <ErrorBoundry>
                        <Scroll>
                            <CardList robots={filteredRobots}/> {/*komponen cardlist punya property robots (nama bisa diganti,..tapi kalo sekarang diganti repot soalnya ud komplex) */}
                                                                {/*nama property pada komponen cardlist seperti robots pada   <CardList robots={filteredRobots}/>   akan menjadi parameter di pembuatan fungsi komponen cardlist(liat di CardList.js)*/}
                        </Scroll>
                    </ErrorBoundry>
                </div>                                   
            );
    
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);