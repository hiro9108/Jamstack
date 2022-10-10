"use strict";
const { buildClient } = require("@datocms/cma-client-node");

// Model ID
const id = "324351";

const client = buildClient({ apiToken: process.env.NEXT_DATOCMS_API_TOKEN });

const createRecord = async (title, content) => {
  const record = await client.items.create({
    item_type: { type: "item_type", id },
    title,
    content,
  });
  return record;
};

const updateRecord = async (id, title, content) => {
  const record = await client.items.update(id, { title, content });
  return record;
};

const deleteRecord = async (id) => {
  const record = await client.items.destroy(id);
  return record;
};

module.exports.hello = async (event) => {
  const { id, title, content, flag } = JSON.parse(event.body);

  let record;
  switch (flag) {
    case "c":
      record = await createRecord(title, content);
      break;
    case "u":
      record = await updateRecord(id, title, content);
      break;
    case "d":
      record = await deleteRecord(id);
      break;
  }

  return {
    statusCode: 200,
    body: { record },
  };
};
