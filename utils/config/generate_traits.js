const fs = require("fs");
const path = require("path");

const { FOLDERS } = require(`../../constants/folders`);

// const { rarityDelimiter } = require(`../../src/config`);

// console.log(rarityDelimiter);

const getLayerTraits = (layerName, layersExceptions = []) => {
  const layerPath = `${FOLDERS.layersDir}/${layerName}`;

  const generateItemName = file =>
    `${layerName}/${file.split("#")[0].split(".")[0]}`;

  const layerItemKeys = fs
    .readdirSync(layerPath)
    .filter(file => !layersExceptions.includes(generateItemName(file)))
    .map(file => generateItemName(file));

  return layerItemKeys;
};

const generateTraits = (keys, value) => {
  const traits = {};
  keys.forEach(key => {
    traits[key] = value;
  });
  return traits;
};

const generateMaxRepeatedTraits = (layerName, maxRepeat) => {
  const layerItemKeys = getLayerTraits(layerName);
  return layerItemKeys.map(key => ({
    name: key,
    layerItemMaxRepeatedTrait: maxRepeat
  }));
};

module.exports = {
  getLayerTraits,
  generateTraits,
  generateMaxRepeatedTraits
};
