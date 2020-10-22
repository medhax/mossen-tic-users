import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import VisibilityIcon from '@material-ui/icons/Visibility';
import HelpIcon from '@material-ui/icons/Help';
const useStyles = makeStyles({
  root: {
    marginBottom: 20,
    marginTop: 80
  },
  media: {
    height: 140,
  },
});

export default function CardNoti(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          component="img"
          image={props.imgUrl}
          title="Imatge de la notificació"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Link style={{display: 'flex', alignItems: 'center'}} href={props.body} >
  <VisibilityIcon />Veure fitxer <hr style={{color: 'transparent'}}/>  <Link style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} href={props.body} >
 <HelpIcon /> Ajuda 
  </Link>
  </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}