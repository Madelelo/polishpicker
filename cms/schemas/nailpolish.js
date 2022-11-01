import polishtype from "./polishtype";

export default {
  name: "nailpolish",
  type: "document",
  title: "Nail Polish",
  fields: [
    {
      name: "color",
      type: "string",
      title: "Color",
    },
    {
      name: "colorName",
      type: "string",
      title: "Color Name",
    },
    {
      name: "colorValue",
      title: "Color Value",
      type: "color",
    },
    // {
    //   name: "polishType",
    //   type: "reference",
    //   to: [
    //     {
    //       type: "polishType",
    //     },
    //   ],
    //   readonly: "true",
    // },
    {
      name: "polishType",
      type: "string",
      title: "Polish Type",
      options: {
        list: [
          { title: "Creme", value: "creme" },
          { title: "Multichrome", value: "multichrome" },
          { title: "Holographic", value: "holographic" },
          { title: "Glitter", value: "glitter" },
          { title: "Topper", value: "topper" },
          { title: "Metallic", value: "metallic" },
          { title: "Top coat", value: "topcoat" },
          { title: "Base coat", value: "basecoat" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },

    {
      name: "colorType",
      type: "string",
      title: "Color Type",
      options: {
        list: [
          { title: "Warm", value: "warm" },
          { title: "Cold", value: "cold" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "brand",
      type: "string",
      title: "Brand",
      options: {
        list: [
          { title: "Essie", value: "essie" },
          { title: "HM", value: "hm" },
          { title: "Holo Taco", value: "holotaco" },
          { title: "Misc", value: "misc" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
  ],
};
