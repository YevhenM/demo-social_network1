
const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

let initialState = {
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

}

const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {
         case SEND_MESSAGE:
            let newMessage = {
                id: 8,
                message: action.newMessageBody
            };
            return {...state,
                         newMessageBody: "",
                         messages: [...state.messages, newMessage]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});



export default dialogsReducer