import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const FeedCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
        {/* onClick={props.onClick} */}
      <CardActionArea>
        <CardMedia
          component="img"
          height={"150px"}
          image={[]}
          title={[]}
         
        />
        <CardContent>
          <Typography align={'center'}>
            {/* {props.title.toUpperCase()} */}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default FeedCard
