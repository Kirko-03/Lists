import React from "react"
import { MyButton } from "../UI/Buttons/myButton"
type PaginatorType = {
  totalPages:number,
  page:number
  setPage:(page:number)=>void
}


export const Pagination:React.FC<PaginatorType> = (props) =>{
  const buttonStyle={
    margin:'5px',
    minWidth:'50px'
  }
  const activeButtonStyle = {
    color:'darkorchid',
    background:'white'
  }
  const activeButton={...buttonStyle,...activeButtonStyle}
    let pages = []
        for (let i = 1; i <= props.totalPages; i++) {
          pages.push(i)
        }
    return <div>
        {pages.map((page) => (
        <MyButton
        style={props.page===page?activeButton:buttonStyle}
          key={page}
          onClick={() => {
            props.setPage(page);
          }}
        >
          {page}
        </MyButton>
      ))}
    </div>
}   

export const getPagesCount = (totalCount:number,limit:number) =>{
    return Math.ceil(totalCount/limit)
      }
      

