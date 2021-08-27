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