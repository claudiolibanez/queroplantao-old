export function getDayofWeekWithDate(date) {
  const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']

  const dateOfDay = new Date(date.toDate()) 

  const dayOfWeek = dateOfDay.getDay()

  const day = parseTwoDigitDay(dateOfDay)
  const month = parseTwoDigitMonth(dateOfDay)

  const formatDate = `${days[dayOfWeek]} ${day}/${month}`

  return formatDate
}

function parseTwoDigitDay(day) {
  return (day.getDate() < 10 ? '0' : '') + day.getDate()
}

function parseTwoDigitMonth(month) {
  return (`0${month.getMonth() + 1}`).slice(-2)
}

export function parseHour(date) {
  const hourOfDay = new Date(date.toDate())

  const hours = makeTwoDigits(hourOfDay.getHours())
  const minutes = makeTwoDigits(hourOfDay.getMinutes())

  const hour = `${hours}:${minutes}`

  return hour
}

function makeTwoDigits(time) {
  const timeString = `${time}`
  if (timeString.length === 2) return time
  return `0${time}`
}

export function parseAdvertiseJobFromFirestore(data) {
  return {
    ...data.data(),
    id: data.id,
  }
} 

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const capitalizeTheFirstLetterOfEachWord = (words) => {
  const separateWord = words.toLowerCase().split(' ')
  // eslint-disable-next-line no-loops/no-loops, no-plusplus
  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] = separateWord[i].charAt(0).toUpperCase()
     + separateWord[i].substring(1)
  }
  return separateWord.join(' ')
}