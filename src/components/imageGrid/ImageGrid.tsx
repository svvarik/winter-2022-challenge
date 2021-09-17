import React, { useCallback, useEffect, useReducer, useRef } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ImageCard } from '..'
import CircularProgress from '@material-ui/core/CircularProgress'
import { dateToNasaDateString } from '../../utils'
import {
  incrementNasaDateByFive,
  incrementNasaDateBySix,
  isGreaterThanToday,
} from '../../utils/dateUtils'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#fafafa',
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

  const imgReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'ADD_IMAGES':
        return { ...state, images: state.images.concat(action.images) }
      case 'FETCHING_IMAGES':
        return { ...state, fetching: action.fetching }
      case 'UPDATE_IMAGES':
        return { ...state, images: action.images }
      case 'INCREMENT_DATE':
        return {
          ...state,
          startDate: incrementNasaDateByFive(state.startDate),
          endDate: incrementNasaDateByFive(state.endDate),
        }
      default:
        return state
    }
  }
  const dateReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'INCREMENT_DATE':
        const incrementedEndDate = incrementNasaDateBySix(state.endDate)

        if (isGreaterThanToday(incrementedEndDate)) {
          return {
            ...state,
            startDate: incrementNasaDateBySix(state.startDate),
            endDate: dateToNasaDateString(new Date()),
            endReached: true,
          }
        } else {
          return {
            ...state,
            startDate: incrementNasaDateBySix(state.startDate),
            endDate: incrementNasaDateBySix(state.endDate),
          }
        }
      default:
        return state
    }
  }

  const [imgData, imgDispatch] = useReducer(imgReducer, {
    images: [],
    fetching: true,
  })

  const [dates, dateDispatch] = useReducer(dateReducer, {
    startDate: '2021-08-02',
    endDate: incrementNasaDateByFive('2021-08-02'),
    endReached: false,
  })

  function updateLiked(key: string, liked: boolean) {
    const images: Array<any> = []
    imgData.images.forEach((x: any) => {
      if (x.date === key) {
        x.liked = liked
      }
      images.push(x)
    })
    imgDispatch({ type: 'UPDATE_IMAGES', images: images })
  }

  useEffect(() => {
    imgDispatch({ type: 'FETCHING_IMAGES', fetching: true })
    fetch(
      `https://api.nasa.gov/planetary/apod?start_date=${dates.startDate}&end_date=${dates.endDate}&api_key=${process.env.REACT_APP_NASA_API_KEY2}`
    )
      .then((data) => data.json())
      .then((imgArray) => {
        imgArray.forEach((x: any) => {
          x['liked'] = false
        })
        imgDispatch({ type: 'ADD_IMAGES', images: imgArray })
        imgDispatch({ type: 'FETCHING_IMAGES', fetching: false })
      })
      .catch((e) => {
        // handle error
        imgDispatch({ type: 'FETCHING_IMAGES', fetching: false })
        return e
      })
  }, [imgDispatch, dates.endDate])

  let bottomBoundaryRef = useRef(null)
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0 && !dates.endReached) {
            dateDispatch({ type: 'INCREMENT_DATE' })
          }
        })
      }).observe(node)
    },
    [dateDispatch, dates.endReached]
  )
  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current)
    }
  }, [scrollObserver, bottomBoundaryRef])

  return (
    <div className={classes.root}>
      {imgData.images.map((x: any) => {
        return (
          <ImageCard
            key={x.date}
            imageURL={x.url}
            title={x.title}
            date={x.date}
            description={x.explanation}
            liked={x.liked}
            onLike={updateLiked}
          />
        )
      })}

      {imgData.fetching ? (
        <div
          style={{
            backgroundColor: '#fafafa',
            flexBasis: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CircularProgress style={{ marginTop: 40, marginBottom: 40 }} />
        </div>
      ) : null}
      {dates.endReached ? (
        <div
          style={{
            backgroundColor: '#fafafa',
            flexBasis: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <p>You've caught up to today!</p>
        </div>
      ) : null}
      <div
        id='page-bottom-boundary'
        style={{ width: '100%' }}
        ref={bottomBoundaryRef}
      ></div>
    </div>
  )
}
