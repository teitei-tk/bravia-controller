import * as iot from "aws-iot-device-sdk";

import { Certificate, Subscribe } from "../clients";
import { defaultOption, subscriberName } from "../options/subscriber";

export class Subscriber {
  client: iot.thingShadow;

  constructor(certificateClient: Certificate) {
    const opt = Object.assign({}, defaultOption, {
      keyPath: certificateClient.privatePath(),
      certPath: certificateClient.certPath(),
      caPath: certificateClient.rootPath()
    });

    this.client = new iot.thingShadow(opt);
  }

  subscription() {
    this.client.subscribe(subscriberName);
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
