import React from 'react'
import s from "./Friends.module.css";
import axios from "axios";

function PaginationBar(props) {

    let pages = []
    for (let i = 1; i <= Math.ceil(props.totalFriendsCount / props.pageSize); i++) {
        pages.push(i)
    }

    //Making numbers of pages bar compact and interactive

    const dots = '...'
    const dotsLeft = ' ...'
    const dotsRight = '... '

    let tempPages = [...pages]
    if (props.currentPage >= 1 && props.currentPage <= 4) {
        tempPages = [1, 2, 3, 4, 5, dots, tempPages.length]
    } else if (props.currentPage === 5) {
        const slice1 = tempPages.slice(0, 6)
        tempPages = [...slice1, dotsRight, tempPages.length]
    } else if (props.currentPage > 5 && props.currentPage < tempPages.length - 2) {
        const slice2 = tempPages.slice(props.currentPage - 2, props.currentPage)
        const slice3 = tempPages.slice(props.currentPage, props.currentPage + 1)
        tempPages = [1, dotsLeft, ...slice2, ...slice3, dotsRight, tempPages.length]
    } else if (props.currentPage > props.currentPage - 3) {
        const slice4 = tempPages.slice(tempPages.length - 5)
        tempPages = [1, dotsLeft, ...slice4]
    }

    const onPageChanged = (pageNumber) => {
        props.setToggleIsLoading(true)
        props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.setToggleIsLoading(false)
                props.setFriends(response.data.items)
            })
    }

    const changePage = (pageNumber, move) => {
        props.setToggleIsLoading(true)
        props.setCurrentPageButton(pageNumber, move)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber + move}&count=${props.pageSize}`)
            .then(response => {
                props.setToggleIsLoading(false)
                props.setFriends(response.data.items)
            })
    }

    return (
        <div className={s.frList}>
            <div>
                {props.currentPage === 1 ? <span className={s.notActive}>Prev</span> :
                    <span className={s.pages} onClick={() => changePage(props.currentPage, -1)}>Prev</span>}
                {tempPages.map(p => <span key={Math.random()}
                                          className={props.currentPage === p ? s.selectedPage : s.pages}
                                          onClick={(e) => onPageChanged(p)}>{p}</span>)}
                {props.currentPage === pages.length ? <span className={s.notActive}>Next</span> :
                    <span className={s.pages} onClick={() => changePage(props.currentPage, +1)}>Next</span>}
            </div>
        </div>
    )
}

export default PaginationBar;