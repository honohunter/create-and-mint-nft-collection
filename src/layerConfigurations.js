const {
  generateMaxRepeatedTraits,
  generateTraits,
  getLayerTraits
} = require("../utils/config/generate_traits");

console.log({
  layerItemsMaxRepeatedTraits: [...generateMaxRepeatedTraits("Iris", 2)]
});

const layerConfigurations = [
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" }
    ]
    // layerItemsMaxRepeatedTraits: [...generateMaxRepeatedTraits("Background", 1)]
    // layerItemsMaxRepeatedTraits: [
    //   { name: "Background/Black", layerItemMaxRepeatedTrait: 1 },
    // ],
    // incompatibleTraits: {
    //   ...generateTraits(
    //     ["Background/Black"],
    //     getLayerTraits("Eye color", ["Eye color/Cyan", "Eye color/Green"])
    //   )
    // }
  },
  {
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" }
    ],
    layerItemsMaxRepeatedTraits: [...generateMaxRepeatedTraits("Background", 1)]
  }
];

/* Example of configuration settings
const layerConfigurations = [
  {
    growEditionSizeTo: 2,
    maxRepeatedTraits: 1,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color", maxRepeatedTrait: 2 },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid", maxRepeatedTrait: 3 },
      { name: "Top lid" },
    ],
    layerItemsMaxRepeatedTraits: [
      { name: "Background/Black", layerItemMaxRepeatedTrait: 4 },
      { name: "Eyeball/Red", layerItemMaxRepeatedTrait: 5 }
    ],
    incompatibleTraits: {
      "Eye color/Cyan": [
        "Eyeball/Red",
      ],
      "Iris/Large": [
        "Bottom lid/High",
        "Top lid/High"
      ],
    },
    dependentTraits: {
      "Eye color/Cyan": [
        "Eyeball/White",
      ],
      "Background/Blue": [
        "Eyeball/Red",
        "Top lid/low"
      ],
    }
  },
];
*/

module.exports = {
  layerConfigurations
};
