import React from 'react'; //tulis kalimat sakti ini setiap mo buat komponen,...penjelasan lengkapnya karena setiap kita buat komponen
                            // pasti pake jsx dan jsx itu bagian dari React,..so makanya perlu import React

const card = (props) => {   // nah disini kita buat object atau komponennya pake fungsi bukan pake class object extends,..walaupun pake class juga bisa
    return (   //baik itu pake fungsi atau class,..ingat rules buat komponen harus ada return nya (render() juga harusnya ada tapi itu kalo pake class)
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow5">
            <img alt="robots" src={`https://robohash.org/${props.id}?200x200`}></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default card;