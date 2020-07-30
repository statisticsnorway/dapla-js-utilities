export const reactTableCustomFilterMethod = (filter, row) => {
  const id = filter.pivotId || filter.id

  return row[id] !== undefined && typeof row[id] === 'string' ?
    String(row[id].toLowerCase()).includes(filter.value.toLowerCase()) : true
}
