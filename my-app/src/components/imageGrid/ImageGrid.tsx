import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ImageCard } from '..'
import CircularProgress from '@material-ui/core/CircularProgress'

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

type ImageCardProps = {
  imageURL: string
  key: string
  date: string
  description: string
  title: string
}

export default function ImageGrid() {
  const classes = useStyles()

  const [photos, setPhotos] = useState<Array<ImageCardProps>>([])
  const [loading, setLoading] = useState(true)

  const API_KEY = 'FvG2ykUPedQnrXd0Q9IyREYOZfMphhnKHyB4RsCm'

  function checkURL(url: string) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null
  }

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?start_date=2021-08-15&api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        const loadedPhotos: Array<ImageCardProps> = []

        response.forEach((x: any) => {
          if (checkURL(x['url'])) {
            loadedPhotos.push({
              imageURL: x['url'],
              key: x['date'],
              title: x['title'],
              date: x['date'],
              description: x['explanation'],
            })
          }
        })
        setPhotos(loadedPhotos)
        setLoading(false)
      })
  }, [])

  return (
    <div className={classes.root}>
      {!loading ? (
        photos.map((x) => {
          return (
            <ImageCard
              key={x.key}
              imageURL={x.imageURL}
              title={x.title}
              date={x.date}
              description={x.description}
            />
          )
        })
      ) : (
        <CircularProgress style={{ marginTop: '20%' }} />
      )}
    </div>
  )
}