import Moment from "moment/moment";

export const prepareDataForLineGraph = (accounts, format) => {
  let arr = [];
  accounts.forEach((currentItem, i, array) => {
    const currentItemMonth = Moment(currentItem['Data'], "MM/DD/YYYY").format(format);
    const prevItemMonth = array[i - 1] && Moment(array[i - 1]['Data'], "MM/DD/YYYY").format(format);
    if (currentItemMonth === prevItemMonth) {
      console.log('__s__', {sum: arr[arr.length - 1]['sum'], amount: currentItem['Amount']});
      arr[arr.length - 1]['sum'] = +arr[arr.length - 1]['sum'] + +currentItem['Amount'];
    } else {
      arr = arr.concat({date: currentItemMonth, sum: currentItem['Amount']})
    }
  });
  return arr
};