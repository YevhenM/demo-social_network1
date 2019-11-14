//import rerenderEntireTree from '../render'

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, text: "Hello world!", likes: "5", comments: "17"},
                {
                    id: 2,
                    text: "It's my first post here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit molestias pariatur architecto, ea voluptas nulla modi ut nesciunt adipisci error debitis odit velit a alias omnis. Veniam et placeat voluptatum?",
                    likes: "9",
                    comments: "16"
                },
                {id: 3, text: 'Anybody hear me?', likes: "6", comments: "0"},
                {id: 4, text: 'Anybody hear me??', likes: "13", comments: "1"},
                {id: 5, text: 'Ніч яка місячна, зоряна ясная.. ', likes: "716", comments: "123"}
            ],
            newPostText: "new post"
        },


        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'John',
                    userpic: 'https://static.politico.com/e9/77/8366b6844a7a963285e23a4caaa3/bresnahan-john.jpg'
                },
                {id: 2, name: 'Peter', userpic: 'https://media.www.kent.ac.uk/se/1196/clarkson_peter.jpg'},
                {
                    id: 3,
                    name: 'Robert',
                    userpic: 'https://vokrug.tv/pic/news/9/f/4/6/9f466307ab9f357c0db710631834bc95.jpg'
                },
                {
                    id: 4,
                    name: 'Anna',
                    userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_auBLAQJTIbDKUGc5I4-b56IwGYfI8nxP64x3Tg5PfPYwYoy'
                },
                {
                    id: 5,
                    name: 'Rebecca',
                    userpic: 'https://www.herbertsmithfreehills.com/sites/contenthub_mothership/files/styles/profile_image__500x500_/public/finance/profile_pic/rebecca.perlman%40hsf.com_WEB.jpg?itok=EYBF9XYn'
                }
            ],
            messages: [
                {id: 1, message: 'Hello!!!!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Excellent!'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'What are you doing?'},
                {id: 6, message: 'What are you doing?'},
                {id: 7, message: 'Are you here?'}
            ],
            newMessageBody: ""

        },


        navbarPage: {
            friends: [
                {
                    id: 1,
                    name: 'John',
                    userpic: 'https://static.politico.com/e9/77/8366b6844a7a963285e23a4caaa3/bresnahan-john.jpg'
                },
                {id: 2, name: 'Peter', userpic: 'https://media.www.kent.ac.uk/se/1196/clarkson_peter.jpg'},
                {
                    id: 3,
                    name: 'Robert',
                    userpic: 'https://vokrug.tv/pic/news/9/f/4/6/9f466307ab9f357c0db710631834bc95.jpg'
                },
                {
                    id: 4,
                    name: 'Anna',
                    userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_auBLAQJTIbDKUGc5I4-b56IwGYfI8nxP64x3Tg5PfPYwYoy'
                },
                {
                    id: 5,
                    name: 'Rebecca',
                    userpic: 'https://www.herbertsmithfreehills.com/sites/contenthub_mothership/files/styles/profile_image__500x500_/public/finance/profile_pic/rebecca.perlman%40hsf.com_WEB.jpg?itok=EYBF9XYn'
                },
                {
                    id: 6,
                    name: 'Angela',
                    userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHl9PUk8h2RiAOMp6Ekdbxx39Y3XwgmA2zantaoOLZGFNWdL6vw'
                },
                {id: 7, name: 'Andrew', userpic: 'https://www.cicplc.co.uk/media/1649/andrew-williamson.jpg'}
            ]
        }

    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {

        let newPost = {
            id: 8,
            text: this._state.profilePage.newPostText,
            likes: 0,
            comments: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state)

    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)

    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);

        this._callSubscriber(this._state)


    }
}


export default store;
window.store = store;