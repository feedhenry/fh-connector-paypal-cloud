# FeedHenry PayPal Connector

[![Dependency Status](https://img.shields.io/david/feedhenry-templates/fh-connector-paypal-cloud.svg?style=flat-square)](https://david-dm.org/feedhenry-templates/fh-connector-paypal-cloud)

The FeedHenry PayPal Connector. For more information on PayPal see: [https://github.com/paypal/rest-api-sdk-nodejs](https://github.com/paypal/rest-api-sdk-nodejs).

## Group PayPal Connector API

### Add card

Create a new card on a PayPal account

|              |               |
|--------------|---------------|
| Endpoint     | /cloud/paypal |
| HTTP Method  | POST          |

#### Request (application/json)

##### Body

```json
{
  "card": {
    "type": "mastercard",
    "number": "12345678901234",
    "expire_month": "01",
    "expire_year": "1970",
    "cvv2": "123",
    "first_name": "Joe",
    "last_name": "Bloggs"
  }
}
```

#### Response 200 (application/json)
    
##### Body
      
```json 
{
  "ok": "true"
}
```

## Tests

All the tests are in the "test/" directory. The cloud app is using mocha as the test runner. 

### Unit tests

```shell
npm run unit
```

or

```shell
npm run test
```

### Unit coverage

```shell
npm run coverage
```

