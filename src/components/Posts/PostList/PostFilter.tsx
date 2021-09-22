import React from "react"
import { FilterType } from "../Posts"
import { MyInput } from "../../UI/Inputs/myInput"
import { MySelect } from "../../UI/Select/MySelect"
type PostFilterType = {
filter:FilterType
setFilter:(filter:FilterType)=>void
}

export const PostFilter:React.FC<PostFilterType> = ({filter,setFilter}) =>{
return <div>
<MyInput
        placeholder={"Поиск"}
        value={filter.query}
        onChange={(e) => setFilter({...filter,query:e.currentTarget.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort=>setFilter({...filter,sort:selectedSort})}
        defaultValue={"Sort"}
        options={[
          { value: "name", name: "alphabetically" },
          { value: "description", name: "by content" },
        ]}
      />
</div>
}