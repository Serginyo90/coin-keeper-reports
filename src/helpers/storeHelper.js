export const sortListByName = list => list.sort((a, b) => {
  console.log('_sortListByName_', list.toJS && list.toJS());
  const NameA = a['Name'];
  const NameB = b['Name'];
  if (NameA < NameB) { return -1; }
  if (NameA > NameB) { return 1; }
  return 0;
});