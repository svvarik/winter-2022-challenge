import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ImageCard } from '..'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      alignContent: 'center',
    },
  })
)

export default function ImageGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </div>
  )
}
