import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles({
  root: {
    minWidth: '20%',
    margin: 15,
  },
  media: {
    height: '50vh',
  },
})

export default function ImageCard() {
  const classes = useStyles()

  const [like, setLike] = useState(false)

  return (
    <Card className={classes.root} elevation={4}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://apod.nasa.gov/apod/image/2109/M31WideField_Ziegenbalg_1400.jpg'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Lizard
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          aria-label='add to favorites'
          onClick={() => {
            setLike(!like)
          }}
        >
          <FavoriteIcon color={like ? 'primary' : 'inherit'} />
        </IconButton>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
