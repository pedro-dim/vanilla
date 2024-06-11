import Ajv from "../node_modules/ajv/dist/ajv";

//import Ajv from "../node_modules/ajv/dist/ajv.js";
const ajv = new Ajv({ allErrors: true });

console.log("Ola Mundo");
const schema = {
  // $schema: "http://json-schema.org/draft/2020-12/schema",
  //$key:"482942892024",
  type: "object",
  properties: {
    name: { type: "string", minLength: 1, maxLength: 50, required: true },
    age: { type: "integer", minimum: 0, maximum: 150, required: true },
    message: { type: "string", minLength: 1, maxLength: 1000 },
    subject: { type: "string", minLength: 1, maxLength: 50 },
  },
};

const validate = ajv.compile(schema);

const data = {
  name: "John Doe",
  age: 30,
  message: "Hello World!",
  subject: "Greeting",
};

const valid = validate(data);

if (!valid) {
  console.error(validate.errors);
} else {
  console.log("JSON object is valid.");
}
