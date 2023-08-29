const arrNames = require("../country/state/city/index");
const getFirstname = require("../utilities/utils/index");
console.log(arrNames);
console.log(getFirstname);

const getPeopleInCity = (nameList) => {
  return getFirstname(nameList);
};

module.exports = getPeopleInCity;
