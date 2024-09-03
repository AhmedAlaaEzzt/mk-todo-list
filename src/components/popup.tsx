import PopupTemplate from "@arcgis/core/PopupTemplate";

const template = new PopupTemplate({
  title: "popup",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "place",
          label: "Place",
          visible: true,
        },
        {
          fieldName: "time",
          label: "Time",
          visible: true,
          format: {
            dateFormat: "short-date-short-time",
          },
        },
      ],
    },
  ],
});

export default template;
