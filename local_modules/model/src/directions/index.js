const directionData = require('./data.json');

function getDirectionData(index) {
  let result = {};
  let data = directionData[index];
  result.name = data.name;
  result.upperCaseName = result.name.toUpperCase();
  result.capitalizedName =
    result.name.charAt(0).toUpperCase() + result.name.slice(1);
  result.shortName = data.short;
  return result;
}

for (let i = 0; i < directionData.length; i++) {
  let thisData = getDirectionData(i);
  let inverseData = getDirectionData(directionData[i].inverse);
  thisData.inverseData = {
    name: inverseData.name,
    upperCaseName: inverseData.upperCaseName,
    capitalizedName: inverseData.capitalizedName,
    shortName: inverseData.short,
  };
  thisData.getInverse = function () {
    return exports[inverseData.upperCaseName];
  };
  exports[thisData.upperCaseName] = thisData;
}
