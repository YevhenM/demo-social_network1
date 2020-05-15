import React from 'react';
import s from "./Pagenator.module.css";
import {NavLink} from "react-router-dom";

let Pagenator = (props) => {

    function pagesList(numberOfPages, currentPage, listLenght) {
        let array = []
        let centerPage = currentPage
        if (centerPage<listLenght + 1) {centerPage = listLenght + 1}
        if (centerPage>numberOfPages - listLenght) {centerPage = numberOfPages - listLenght}
        let startPageBlock = centerPage - listLenght
        let finishPageBlock = centerPage + listLenght

        let dStart = 0
        let dFinish = 0
        startPageBlock>1 ? dFinish = dFinish : dFinish++
        startPageBlock>2 ? dFinish = dFinish : dFinish++
        finishPageBlock<numberOfPages-1 ? dStart = dStart : dStart++
        finishPageBlock<numberOfPages ? dStart = dStart : dStart++

        if (startPageBlock>1) {array.push(1)}
        if (startPageBlock>2)  {array.push('...')}
        for (let i=startPageBlock-dStart; i<=finishPageBlock+dFinish; i++) {array.push(i)}
        if (finishPageBlock<numberOfPages-1)  {array.push('...')}
        if (finishPageBlock<numberOfPages)  {array.push(numberOfPages)}

        return array
    }

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);


    let arr = pagesList(pagesCount, props.currentPage, 1)


    return <div>
        <div className={s.pageSelector}>
            <span>Page: </span>
            <div className={s.divide}></div>
            {arr.map(p=>{
                return <div className={props.currentPage === p ? s.selectedPage : s.pageNumberBox }
                             onClick={p=="..." ? null :((e) =>{props.onPageChanged(p)})}>{" "}{ p }{" "}</div>
            })}
        </div>


    </div>
}

export default Pagenator;