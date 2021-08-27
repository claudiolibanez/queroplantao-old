import permissions from './permissions'

export function validateEmail(email) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
}

export function parseDate(firebaseTimestamp) {
  let date = firebaseTimestamp.toDate()

  const dd = makeTwoDigits(date.getDate())
  const mm = makeTwoDigits(date.getMonth() + 1)
  const yyyy = date.getFullYear()

  date = `${dd}/${mm}/${yyyy}`

  return date
}

export function parseHour(timestamp) {
  const hourOfDay = new Date(timestamp.toDate())

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

export function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function capitalizeTheFirstLetterOfEachWord(words) {
  const separateWord = words.toLowerCase().split(' ')
  // eslint-disable-next-line no-loops/no-loops, no-plusplus
  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] = separateWord[i].charAt(0).toUpperCase()
     + separateWord[i].substring(1)
  }
  return separateWord.join(' ')
}

export function formatData(data, numColumns) {
  const totalRows = Math.floor(data.length / numColumns)
  let totalLastRow = data.length - (totalRows * numColumns)

  // eslint-disable-next-line no-loops/no-loops
  while (totalLastRow !== 0 && totalLastRow !== numColumns) {
    data.push({ id: 'blank', empty: true })
    // eslint-disable-next-line no-plusplus
    totalLastRow++
  }

  return data
}

export function groupSectionsByKey(data) {
  return data.reduce((re, o) => {  
    // let category

    // switch (o.category) {
    // case 'state':
    //   category = 'Estado'
    //   break
    // case 'specialty':
    //   category = 'Especialista'
    //   break
    // case 'region':
    //   category = 'Região'
    //   break
    // default:
    // }

    const existObj = re.find(
      obj => obj.title === o.category // o.category //category
    )

    if (existObj) {
      existObj.data.push(o)
    } else {
      re.push({
        title: o.category, // o.category, //category
        data: [o]
      })
    }

    return re
  }, [])
}

export function orderByAsc(array) {
  array.sort((a, b) => {
    if (a.name < b.name) { return -1 }
    if (a.name > b.name) { return 1 }
    return 0
  })

  return array
}

export {
  permissions
}