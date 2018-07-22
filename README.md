# BraviaController

## Usage
1. Create New AWS IoT Certificate
    * https://docs.aws.amazon.com/ja_jp/iot/latest/developerguide/device-certs-create.html
2. attach policy
    * https://docs.aws.amazon.com/ja_jp/iot/latest/developerguide/iot-policies.html
3. move to certs dir
4. edit .env. refer to .env.example
5. fetch root certificate
   * <code>$ curl https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem -o root-CA.pem && mv root-CA.pem certs</code>
6. install dependency modules
    * <code>$ yarn</code>
7. build
    * <code>$ yarn build</code>
8. exec subscriber
    * <code>$ node build/bin/subscribe.js</code>
