import "dotenv/config";

import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";
import * as AWS from "aws-sdk";

const iot = new AWS.IotData({
  endpoint: process.env["ENDPOINT"],
  region: process.env["REGION"]
});

const params = {
  topic: process.env["SUBSCRIBER_NAME"],
  payload: "test",
  qos: 0
};

iot.publish(params, (err, data) => {
  if (err) {
    console.log("err");
    console.error(err);
    return;
  }

  console.log("susscess");
});

/*
export const index: Handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
      input: event
    })
  };

  callback(null, response);
};
*/
