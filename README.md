# BraviaController

## Usage
1. Create New AWS IoT Certificate
    * https://docs.aws.amazon.com/ja_jp/iot/latest/developerguide/device-certs-create.html
2. move to certs dir
3. edit .env. refer to .env.example
4. fetch root certificate
   * <code>$ curl https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem -o root-CA.pem && mv root-CA.pem certs</code>
5. install dependency modules
    * <code>$ yarn</code>
6. build
    * <code>$ yarn build</code>
6. exec subscriber
    * <code>$ node build/bin/subscribe.js</code>
