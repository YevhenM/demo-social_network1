import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStat";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    return (
      <div>
        {/*<img src="https://www.arohatours.co.nz/media/1645/banner_queenstown-g.jpg?mode=crop&height=700&width=1920&quality=80" alt="img" className={s.cover}/>*/}
        <div className={s.profileinfoBox}>
            <div className={s.userpic}><img src={props.profile.photos.small} alt=""/></div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.textBloc}>
                <div className={s.userName}>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJob ? "Find a job" : "I'm not finding job"}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
            <div className={s.contacts}>
                <div>Contacts</div>
                <div>Facebook: {props.profile.contacts.facebook}</div>
                <div>Website: {props.profile.contacts.facebook}</div>
                <div>VK: {props.profile.contacts.vk}</div>
                <div>Twitter: {props.profile.contacts.twitter}</div>
                <div>instagram: {props.profile.contacts.instagram}</div>
                <div>youtube: {props.profile.contacts.youtube}</div>
                <div>github: {props.profile.contacts.github}</div>
                <div>mainLink: {props.profile.contacts.mainLink}</div>

            </div>

        </div>      
    </div>  
    );    
}

export default ProfileInfo;