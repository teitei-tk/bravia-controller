import "dotenv/config";
import * as iot from "aws-iot-device-sdk";

import Client from "./certificate";

export const defaultOption = {
  host: process.env["ENDPOINT"],
  protocol: "mqtts",
  clientId: process.env["CLIENT_ID"],
  baseReconnectTimeMs: 4000,
  keepalive: 300,
  debug: false
};

export default class Subscribe {
  client: iot.thingShadow;

  constructor(certificateClient: Client) {
    const opt = Object.assign({}, defaultOption, {
      keyPath: certificateClient.privatePath(),
      certPath: certificateClient.certPath(),
      caPath: certificateClient.rootPath()
    });

    this.client = new iot.thingShadow(opt);
  }

  subscription() {
    this.client.subscribe("bravia/controller");
  }

  run() {
    this.client.on("connect", () => {
      console.log("start connection");
    });

    this.client.on("message", (topic: string, payload: Buffer) => {
      console.log("message", topic, payload.toString());
    });

    this.client.on("error", error => {
      console.error(error);
    });

    process.on("SIGINT", () => {
      console.log("Control + C");
      process.exit(0);
    });

    process.on("exit", () => {
      console.log("exit.");
      process.exit(0);
    });
  }
}
