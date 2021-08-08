import React from 'react';
import Card from './Card';

// Cara Pertama tidak pakai looping map jadi harus nulis satu-satu  (ada cara ke dua dan tiga nya dibawah)

// const CardList = ({robots}) => { //CardList mengakses property robots
//     return(
//         <div>
//             <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
//             <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//             <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
//             <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
//             <Card id={robots[4].id} name={robots[4].name} email={robots[4].email}/>
//             <Card id={robots[5].id} name={robots[5].name} email={robots[5].email}/>
//             <Card id={robots[6].id} name={robots[6].name} email={robots[6].email}/>
//             <Card id={robots[7].id} name={robots[7].name} email={robots[7].email}/>
//             <Card id={robots[8].id} name={robots[8].name} email={robots[8].email}/>
//             <Card id={robots[9].id} name={robots[9].name} email={robots[9].email}/>
//         </div>
//     );
// }


//cara kedua yaitu dengan pake fungsi map buat nge loop...jadi ga usah nulis satu satu

// const CardList = ({ robots }) => {
//     const cardArray = robots.map((user,i) => {   // menggunakan fungsi map dengan parameter user,...user itu yang bagian   (<Card key= {i} id={robots[i].id}....)   ini semua user,..nah didalam user ada parameter index
//         return (<Card key= {i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>) //mengapa ada return disini? karena fungsi map mengharuskan ada return
//     })
//     return(   //kalo return yang ini bagian dari CardList karena komponen juga harus ada return (beda sama return map)
//         <div>
//             {cardArray}
//         </div>
//     );
// }

//cara ketiga hampir sama sama cara kedua cuma ga pake variable cardArray

const CardList = ({ robots }) => { // robots disini itu adalah nama parameter pada fungsi  Cardlists TAPIIII,....mengacu pada nama property komponen cardlist
    return(
        <div>
            {
                robots.map((user,i) => {   // menggunakan fungsi map dengan parameter user,...user itu yang bagian   (<Card key= {i} id={robots[i].id}....)   ini semua user,..nah didalam user ada parameter index
                    return (<Card key= {i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>) //mengapa ada return disini? karena fungsi map mengharuskan ada return
                })
            }
        </div>
    );
}


export default CardList;