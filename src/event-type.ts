import avsc from "avsc";

const schema: avsc.Type = avsc.Type.forSchema({
  type: "record",
  name: "Pet",
  fields: [
    {
      name: "noise",
      type: "string",
    },
  ],
});

export default schema;
