import * as iot from "aws-iot-device-sdk";

import { Certificate } from "../clients";
import { defaultOption, subscriberName } from "../options/Publisher";

export class Publisher {
  client: iot.device;

  constructor(certificateClient: Certificate) {
    const opt = Object.assign({}, defaultOption, {
      keyPath: certificateClient.privatePath(),
      certPath: certificateClient.certPath(),
      caPath: certificateClient.rootPath()
    });

    this.client = new iot.device(opt);
  }

  static initialize(): Publisher {
    return new Publisher(new Certificate());
  }

  publish(payload: string) {
    this.client.on("connect", () => {
      console.log("start connection");
      console.log(subscriberName, `payload: ${payload}`);
      this.client.publish(subscriberName, payload, { qos: 1 });
      console.log("published!");
    });
  }

  publishWithCallback(payload: string, callback: (err: any) => void) {
    this.client.on("connect", () => {
      this.client.publish(subscriberName, payload, { qos: 1 }, callback);
    });
  }
}
