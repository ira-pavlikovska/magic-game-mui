import React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import petImg1 from '../images/1.jpeg'
import petImg2 from '../images/2.jpeg'
import petImg3 from '../images/3.jpeg'
import petImg4 from '../images/4.jpeg'

const imgMap = {
  1: petImg1,
  2: petImg2,
  3: petImg3,
  4: petImg4
}

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 230,
  height: 270,
}));


export default function Card({image, changeStatus, tabIndex}) {

  if (image.isMatch) return <div/>

   return (
     <Item
       elevation={24}
       tabIndex={tabIndex}
       onClick={() => changeStatus(image)}
       onKeyPress={() => changeStatus(image)}
     >
       {image.isOpen && (
         <img src={imgMap[image.picture]} />
       )}
     </Item>
  )
}
