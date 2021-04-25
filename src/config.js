require("dotenv").config();

module.exports = {
  aws_table_name: "movies-dynamodb-nodejs",
  aws_local_config: {
    region: "local",
    endpoint: "http://localhost:8000",
  },
  aws_remote_config: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: "sa-east-1",
  },
};
