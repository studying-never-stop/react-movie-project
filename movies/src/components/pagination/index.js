import React from "react";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";

const PagniationPage = ({ page, handlePageChange }) => {
    return (
        <Pagination 
            count={32} 
            page={page} 
            onChange={handlePageChange} 
            variant="outlined" 
            color="secondary" 
         />
    )
};
export default PagniationPage