import "dotenv/config";

export const subscriberName = process.env["SUBSCRIBER_NAME"];

export const defaultOption = {
  host: process.env["ENDPOINT"],
  protocol: "mqtts",
  clientId: `user-${Math.floor(Math.random() * 100000 + 1)}`,
  baseReconnectTimeMs: 4000,
  keepalive: 300,
  debug: false,
  region: process.env["REGION"]
};
