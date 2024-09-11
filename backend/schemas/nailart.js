export default {
  name: "nailart",
  type: "document",
  title: "Nail Art",
  fields: [
    { name: "nailArt", type: "string", title: "Nail Art Name" },
    {
      name: "nailArtType",
      type: "string",
      title: "Nail Art Type",
      options: {
        list: [
          { title: "Gradient", value: "gradient" },
          { title: "Accent nail", value: "accentNail" },
          { title: "Multi color", value: "multicolor" },
          { title: "Dotticure", value: "dotticure" },
          { title: "Watermarble", value: "watermarble" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "polishReq",
      title: "Polish required",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "polishType" }],
        },
      ],
    },
    {
      title: "Does it need peely?",
      name: "needPeely",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Does it need sponge?",
      name: "needSponge",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Does it need dotting tool?",
      name: "needDotter",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Does it need tiny brush?",
      name: "needBrush",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Does it need tape?",
      name: "needTape",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Link to tutorial",
      name: "tutorialLink",
      type: "url",
    },
  ],
};
