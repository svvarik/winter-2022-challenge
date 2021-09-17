export function dateToNasaDateString(date: Date) {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}

export function nasaDateStringToDate(dateString: string) {
  const splitString = dateString.split('-')
  return new Date(
    parseInt(splitString[0]),
    parseInt(splitString[1]) - 1,
    parseInt(splitString[2])
  )
}

export function incrementDate(date: Date) {
  return new Date(date.getTime() + 24 * 60 * 60 * 1000)
}

export function incrementDateByFive(date: Date) {
  return new Date(date.getTime() + 5 * 24 * 60 * 60 * 1000)
}

export function incrementDateBySix(date: Date) {
    return new Date(date.getTime() + 6 * 24 * 60 * 60 * 1000)
  }

export function incrementNasaDate(dateString: string) {
  const date = nasaDateStringToDate(dateString)
  const incrementedDate = incrementDate(date)
  return dateToNasaDateString(incrementedDate)
}

export function incrementNasaDateByFive(dateString: string) {
  const date = nasaDateStringToDate(dateString)
  const incrementedDate = incrementDateByFive(date)
  return dateToNasaDateString(incrementedDate)
}

export function incrementNasaDateBySix(dateString: string) {
    const date = nasaDateStringToDate(dateString)
    const incrementedDate = incrementDateBySix(date)
    return dateToNasaDateString(incrementedDate)
  }

export function isGreaterThanToday(dateString: string) {
  return nasaDateStringToDate(dateString).getTime() > Date.now()
}

