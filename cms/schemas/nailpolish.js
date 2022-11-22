import polishtype from "./polishtype";

export default {
  name: "nailpolish",
  type: "document",
  title: "Nail Polish",
  fields: [
    {
      name: "colorName",
      type: "string",
      title: "Color Name",
    },
    {
      name: "color",
      type: "string",
      title: "Color",
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
          { title: "Creme", value: "Creme" },
          { title: "Multichrome", value: "Multichrome" },
          { title: "Holographic", value: "Holographic" },
          { title: "Glitter", value: "Glitter" },
          { title: "Topper", value: "Topper" },
          { title: "Metallic", value: "Metallic" },
          { title: "Top coat", value: "Topcoat" },
          { title: "Base coat", value: "Basecoat" },
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
          { title: "Warm", value: "Warm" },
          { title: "Cold", value: "Cold" },
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
          { title: "Essie", value: "Essie" },
          { title: "HM", value: "HM" },
          { title: "Holo Taco", value: "Holo Taco" },
          { title: "Misc", value: "Misc" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
  ],
};
