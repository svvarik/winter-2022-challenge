import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

type ImageDescripProps = {
  description: string
}

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
})

export default function ImageDescription(props: ImageDescripProps) {
  const classes = useStyles()
  const [shortenedDescrip, setDescrip] = useState(
    props.description.length > 80 ? true : false
  )

  return (
    <span>
      <Typography variant='body2' component='p'>
        {shortenedDescrip
          ? props.description.substring(0, 80) + '...'
          : props.description}
      </Typography>
      {shortenedDescrip ? (
        <Button
          className={classes.root}
          onClick={() => {
            setDescrip(false)
          }}
        >
          See More
        </Button>
      ) : (
        <Button
          className={classes.root}
          onClick={() => {
            setDescrip(true)
          }}
        >
          See Less
        </Button>
      )}
    </span>
  )
}
