import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'
import ImageDescription from '../imageDescription/imageDescription'

const useStyles = makeStyles({
  root: {
    minWidth: '20%',
    margin: 15,
    flexBasis: '100%',
  },
  media: {
    height: '50vh',
  },
})

type ImageCardProps = {
  imageURL: string
  key: string
  date: string
  description: string
  title: string
  liked: boolean
  onLike: (date: string, isLiked: boolean) => void
}

export default function ImageCard(props: ImageCardProps) {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  function updateLiked() {
    props.onLike(props.date, !props.liked)
  }

  return (
    <Card
      className={classes.root}
      elevation={4}
      style={matches ? { maxWidth: '50%' } : { maxWidth: '90%' }}
    >
      <CardMedia
        className={classes.media}
        image={props.imageURL}
        title={props.title}
      />
      <CardContent>
        <Typography variant='h6' component='h3'>
          {props.title}
        </Typography>
        <Typography variant='subtitle2' component='h4'>
          {props.date}
        </Typography>
        <ImageDescription description={props.description} />
      </CardContent>

      <CardActions>
        <IconButton
          style={{ marginLeft: 'auto' }}
          aria-label='like the image'
          onClick={() => {
            updateLiked()
          }}
        >
          <FavoriteIcon color={props.liked ? 'primary' : 'inherit'} />
        </IconButton>
      </CardActions>
    </Card>
  )
}
