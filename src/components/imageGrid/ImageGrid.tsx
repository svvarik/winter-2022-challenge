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
  liked: boolean
}

export default function ImageGrid() {
  const classes = useStyles()

  const [photos, setPhotos] = useState<Array<ImageCardProps>>([])
  const [loading, setLoading] = useState(true)

  function checkURL(url: string) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null
  }

  function updateLikeForImage(date: string, isLiked: boolean) {
    const updatedArray = [...photos]
    updatedArray.forEach((x) => {
      if (x.date === date) {
        x.liked = isLiked
      }
    })
    setPhotos(updatedArray)
    localStorage.setItem('photos', JSON.stringify(photos))
  }

  useEffect(() => {
    const cachedPhotosList = localStorage.getItem('photos')
    // if (cachedPhotosList && cachedPhotosList.length > 5) {
    //   const json = JSON.parse(cachedPhotosList)
    //   setPhotos(json)
    //   setLoading(false)
    // } else {
    fetch(
      `https://api.nasa.gov/planetary/apod?start_date=2021-08-15&api_key=${process.env.REACT_APP_NASA_API_KEY}`
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
              liked: false,
            })
          }
        })
        setPhotos(loadedPhotos)
        localStorage.setItem('photos', JSON.stringify(photos))
        setLoading(false)
      })
    // }
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
              onLike={updateLikeForImage}
              liked={x.liked}
            />
          )
        })
      ) : (
        <CircularProgress style={{ marginTop: '20%' }} />
      )}
    </div>
  )
}
