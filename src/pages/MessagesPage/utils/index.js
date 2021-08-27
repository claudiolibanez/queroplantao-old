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