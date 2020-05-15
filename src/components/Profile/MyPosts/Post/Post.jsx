import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
            let delPost = (a) =>{
                console.log('delpost', a)
                props.onDeletePost(a)
            }
  return (

      
            <div className={s.item}>
              
              <img src="https://s23527.pcdn.co/wp-content/uploads/2017/01/85.png" alt="userpic" className={s.userpic}/>
              <div className={s.textBlock}>{props.text}
                    <div className={s.likes}>♥ {props.likes} ✉︎ {props.comments}</div>
                    <div onClick={()=>{delPost(props.id)} } className={s.deleteButton}>✘</div>
              </div>
              
              
            </div>

 
  
    );    
}

export default Post;