export const moveElement = (array = [], srcI, desI) => {
  const arrayCopied = [...array];
  arrayCopied.splice(desI, 0, arrayCopied.splice(srcI, 1)[0]);
  return arrayCopied;
}

export const sortByProperty = (array = [], key, property) => {
  return array.sort(a => a[key] === property ? -1 : 1);
} 