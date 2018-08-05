import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";

import { Publisher } from "./publisher";

export const handler: Handler = (event: APIGatewayEvent, context: Context) => {
  const payload = JSON.stringify({
    lambda: 1
  });

  Publisher.initialize().publishWithCallback(payload, err => {
    if (err) {
      return context.fail(err);
    }

    return context.succeed("success");
  });
};
