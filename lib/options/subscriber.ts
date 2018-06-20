import "dotenv/config";

export const subscriberName = process.env["SUBSCRIBER_NAME"];

export const defaultOption = {
  host: process.env["ENDPOINT"],
  protocol: "mqtts",
  clientId: process.env["CLIENT_ID"],
  baseReconnectTimeMs: 4000,
  keepalive: 300,
  debug: false
};
