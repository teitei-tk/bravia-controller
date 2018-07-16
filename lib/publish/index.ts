import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";

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
