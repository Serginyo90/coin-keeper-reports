export const sortListByName = list => list.sort((a, b) => {
  console.log('_sortListByName_', list.toJS && list.toJS());
  const NameA = a['Name'];
  const NameB = b['Name'];
  if (NameA < NameB) { return -1; }
  if (NameA > NameB) { return 1; }
  return 0;
});

// from and to must be instance of Date
export const getCountDaysBetweenDate = (from, to) => {
  const timeDiff = Math.abs(to.getTime() - from.getTime());
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}