import React from "react";
import style from "./bodyitem.styles";
import { Grid, Box, Typography } from "@mui/material";


interface MyObject {
  id: number;
  name: string;
  image: string;
  text: string;
  hyperLink: string;
}

interface Props {
  eachObj: MyObject;
}

class BodyItem extends React.Component<Props> {
  render() {
    const { eachObj } = this.props;

    return (
      <Grid sx={style.gridItem} item xs={12} sm={12} md={5} lg={5} xl={6}>
        <Box sx={style.bodyItem}>
          <Box
            component="img"
            sx={style.image}
            alt={eachObj.name}
            src={eachObj.image}
          />
          <Box sx={style.textContainer}>
            <Typography component="h2" sx={style.name} variant="h2">
              {eachObj.name}
            </Typography>
            <Typography component="p" sx={style.paragraph}>
              {eachObj.text}
            </Typography>
            <Typography
              component="a"
              href={eachObj.hyperLink}
              sx={style.learnMoreText}
            >
              Learn More
            </Typography>
          </Box>
        </Box>
      </Grid>
    );
  }
}

export default BodyItem;
