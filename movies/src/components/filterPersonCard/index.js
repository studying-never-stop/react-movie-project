import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';
import Spinner from '../spinner';

// 定义表单控制样式
const formControl = {
  margin: 1,
  minWidth: "90%",
  backgroundColor: "rgb(255, 255, 255)"
};

export default function FilterPersonCard(props) {

  // 通用的事件处理函数，用于向父组件传递筛选条件
  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);   // 向父组件传递筛选条件
  };

  // 搜索框输入事件，调用 handleChange 更新名字筛选条件
  const handleNameChange = (e) => {
    handleChange(e, "name", e.target.value);
  };

  // 性别选择事件，调用 handleChange 更新性别筛选条件
  const handleGenderChange = (e) => {
    handleChange(e, "gender", e.target.value);
  };

  return (
    <Card 
      sx={{ backgroundColor: "rgb(179, 255, 83)" }} // 卡片样式
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the cast.
        </Typography>

        {/* 输入姓名筛选条件 */}
        <TextField
          sx={{...formControl}}
          id="name-search"
          label="Search by Name"
          type="search"
          variant="filled"
          value={props.nameFilter}
          onChange={handleNameChange} // 绑定输入事件
        />

        {/* 性别选择筛选条件 */}
        <FormControl sx={{...formControl}}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            id="gender-select"
            defaultValue=""
            value={props.genderFilter}
            onChange={handleGenderChange} // 绑定性别选择事件
          >
            {/* 性别选项 */}
            <MenuItem value="0">All</MenuItem>
            <MenuItem value="1">Female</MenuItem>
            <MenuItem value="2">Male</MenuItem>
            <MenuItem value="3">Unknown</MenuItem>
          </Select>
        </FormControl>
      </CardContent>

      {/* 卡片底部图片 */}
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />

      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the cast.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}