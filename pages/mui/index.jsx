import React from 'react'
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const Input = styled("input")({
  display: "none",
});
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Mui() {
    const clickHander = () => {
        alert("you just send email ");
    }
  return (
    <div className=" flex justify-around">
      <Button variant="contained" sx={{ color: "blue" }}>
        Contained
      </Button>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <IconButton>
          <AddPhotoAlternateIcon />
        </IconButton>
      </label>
      <Checkbox
        {...label}
        icon={<FavoriteBorder color="error"/>}
        checkedIcon={<Favorite />}
      />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}

export default Mui