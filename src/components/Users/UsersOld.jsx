import React from 'react';
import s from  './users.module.css'
import * as axios from 'axios'
import userPhoto  from '../../components/assets/images/maleUser.jpg'

let UsersOld = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

                props.setUsers(response.data.items);
            })
        }

    }


        //axios.get()



    return <div>
        <button onClick={getUsers}>Get Users</button>


        {   props.users.map( u => <div className={s.userBox} key={u.id}>
                <span className={s.userPicAndButton}>
                    <div>
                        <img className={s.userpic} src={u.photos.small? u.photos.small: userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() =>{props.unfollow(u.id)} }>Unfollow</button>
                            : <button onClick={() =>{props.follow(u.id)} }>Follow</button>}
                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>

                </span>
            </div>)
        }

    </div>
}

export default UsersOld;

/*   props.setUsers([
           {id: 1, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Official_portrait_of_Petro_Poroshenko.jpg", followed: false, fullName: "Petro", status: "president", location: {city: "Kyiv", country: "Ukraine"}},
           {id: 2, photoUrl: "https://upgrade-yourself.com.ua/wp-content/uploads/2015/06/andrew_klymenko.jpg", followed: true, fullName: "Andrei", status: "student", location: {city: "Kharkiv", country: "Ukraine"}},
           {id: 3, photoUrl: "https://rdo.in.ua/sites/default/files/pictures/fullsizeoutput_8f3.jpeg", followed: true, fullName: "Ivan", status: "programmer", location: {city: "Lviv", country: "Ukraine"}},
           {
               id: 4,
               photoUrl: "https://www.med.uio.no/imb/english/people/aca/stefankr/stefank.jpg",
               followed: false,
               fullName: "Stefan",
               status: "Hello world!",
               location: {city: "Krakow", country: "Poland"}
           },
           {
               id: 5,
               photoUrl: 'https://static.politico.com/e9/77/8366b6844a7a963285e23a4caaa3/bresnahan-john.jpg',
               followed: false,
               fullName: 'John',
               status: "Hello world!",
               location: {city: "Krakow", country: "Poland"}
           },
           {   id: 6,
               photoUrl: 'https://media.www.kent.ac.uk/se/1196/clarkson_peter.jpg',
               followed: false,
               fullName: 'Peter',
               status: "Hello world!",
               location: {city: "Krakow", country: "Poland"}
           },
           {
               id: 7,
               photoUrl: 'https://vokrug.tv/pic/news/9/f/4/6/9f466307ab9f357c0db710631834bc95.jpg',
               followed: false,
               fullName: 'Robert',
               status: "Hello world!",
               location: {city: "Krakow", country: "Poland"}
           },
           {
               id: 8,
               photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_auBLAQJTIbDKUGc5I4-b56IwGYfI8nxP64x3Tg5PfPYwYoy',
               followed: false,
               fullName: 'Anna',
               status: "Hello world!",
               location: {city: "Krakow", country: "Poland"}
           },
           {
               id: 9,
               photoUrl: 'https://www.herbertsmithfreehills.com/sites/contenthub_mothership/files/styles/profile_image__500x500_/public/finance/profile_pic/rebecca.perlman%40hsf.com_WEB.jpg?itok=EYBF9XYn',
               followed: false,
               fullName: 'Rebecca',
               status: "Hello world!",
               location: {city: "Krakow", country: "Poland"}
           },
           {
               id: 10,
               photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHl9PUk8h2RiAOMp6Ekdbxx39Y3XwgmA2zantaoOLZGFNWdL6vw',
               followed: false,
               fullName: 'Angela',
               status: "Hello world!",
               location: {city: "Krakow", country: "Poland"}
           },
           {
               id: 11,
               photoUrl: 'https://www.cicplc.co.uk/media/1649/andrew-williamson.jpg',
               followed: false,
               fullName: 'Andrew',
               status: "Hello world!",
               location: {city: "Krakow", country: "Poland"}
           },
       ])   }  // <==  array with users!!!
*/