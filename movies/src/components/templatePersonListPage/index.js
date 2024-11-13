import React, { useState, useContext } from "react";
import Header from "../headerMovie";
import FilterPersonCard from "../filterPersonCard";
import PersonList from "../personList";
import Grid from "@mui/material/Grid2";
import { MoviesContext } from "../../contexts/moviesContext";
import PagniationPage from "../pagination";

function PersonPageTemplate({ persons, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("0");


  // 筛选显示的人员列表
  let displayedPerson = persons
    .filter((p) => {
      // 筛选名称
      return p.name.toLowerCase().includes(nameFilter.toLowerCase());
    })
    .filter((p) => {
      // 筛选性别，性别值为字符串 "1", "2", "3" 分别对应 女性、男性和未知, "0"表示 全部
      return genderFilter !== "0" ? String(p.gender) === genderFilter : true;
    });

  // 处理筛选条件变化
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenderFilter(value);
  };

  const { page, handlePageChange } = useContext(MoviesContext);

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
          <FilterPersonCard
            onUserInput={handleChange}
            name={nameFilter}
            gender={genderFilter}
          />
        </Grid>
        <PersonList action={action} person={displayedPerson}></PersonList>
      </Grid>
      <Grid 
        container 
        justifyContent="center" 
        sx={{ 
          position: "fixed", 
          bottom: 0, 
          width: "100%", // 确保分页器在底部居中
          padding: "10px", // 给分页器一些内边距
          backgroundColor: "white", // 可选：设置背景色，以便分页器始终可见
          boxShadow: "0 -1px 5px rgba(0,0,0,0.1)" // 可选：添加顶部阴影
        }}
      >
        <PagniationPage 
          page={page} 
          handlePageChange={handlePageChange} 
        />
      </Grid>
    </Grid>
  );
}
export default PersonPageTemplate;