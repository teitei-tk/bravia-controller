import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";
import * as AWS from "aws-sdk";
//import * as iot from "aws-iot-device-sdk";

AWS.config.update({ region: process.env["REGION"] });

const iot = new AWS.IotData({
  endpoint: process.env["ENDPOINT"]
});

export const handler: Handler = (event: APIGatewayEvent, context: Context) => {
  const params = {
    topic: process.env["SUBSCRIBER_NAME"],
    payload: JSON.stringify({ test: "a" })
  };

  iot.publish(params, (err: any, res) => {
    if (err) {
      return context.fail(err);
    }

    return context.succeed(res);
  });
};
