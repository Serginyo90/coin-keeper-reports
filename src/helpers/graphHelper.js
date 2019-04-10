import Moment from "moment/moment";

export const prepareDataForLineGraph = (accounts, format) => {
  let arr = [];
  accounts.forEach((currentItem, i, array) => {
    const currentItemMonth = Moment(currentItem['Data'], "MM/DD/YYYY").format(format);
    const prevItemMonth = array[i - 1] && Moment(array[i - 1]['Data'], "MM/DD/YYYY").format(format);
    if (currentItemMonth === prevItemMonth) {
      arr[arr.length - 1]['sum'] = +arr[arr.length - 1]['sum'] + +currentItem['Amount'];
    } else {
      // round up
      if (arr[arr.length - 1]) {
        arr[arr.length - 1]['sum'] = Math.round(arr[arr.length - 1]['sum'] * 100) / 100;
      }
      // add new element
      arr = arr.concat({date: currentItemMonth, sum: currentItem['Amount'] })
    }
  });
  return arr
};