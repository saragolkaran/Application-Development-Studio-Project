# API Documentation

This document allows you to define your API schema.

Each API should include

1. HTTP Method
2. Endpoint
3. Request body/Parameters
4. Response body
5. Error Body
6. Sample Request
7. Sample Response
8. Sample Error

> Errors and it's corresponding code can be defined by yourself. You need not follow HTTP errors.

## Get Basic Data

| attribute   | value       |
| ----------- | ----------- |
| HTTP Method | GET         |
| Endpoint    | /basic/data |

### Parameters

| parameter  | datatype        | example    |
| ---------- | --------------- | ---------- |
| festivalId | 10 digit number | 1000000001 |

### Response Body

```json
{
  "data": [
    {
      "performanceId": 1000000001,
      "festivalId": 1100000001,
      "startTime": "10:00",
      "endTime": "11:00"
    }
  ]
}
```

### Error

```json
{
  "error": "duplicate key value violates unique constraint \"performance_performanceid_key\"",
  "code": 500
}
```
### Sample Request

```http
GET http://localhost:3000/basic/data?festivalId=1100000001&startTime__gt=1000&page=1&pageSize=1 HTTP/1.1
```
### Response Body
```json
{
  "data": [
    {
      "performanceId": 1000000002,
      "festivalId": 1100000001,
      "startTime": "10:00:00",
      "endTime": "11:00:00"
    }
  ]
}
```

### Sample Error

```json
{
  "error": "Missing Field"
}
```





## Get Basic Result

| attribute   | value       |
| ----------- | ----------- |
| HTTP Method | GET         |
| Endpoint    | /basic/result |

### Parameters

| parameter  | datatype        | example    |
| ---------- | --------------- | ---------- |
| festivalId | 10 digit number | 1000000001 |


### Response Body

```json
[   
    {
    "performanceid": 1000000001,
    "starttime": "1000",
    "endtime": "1100"
  }
]
```

### Error

```json
{
 "error": "Integer Only" , 
 "code": 500
}
```


### Sample Request

```http
GET http://localhost:3000/basic/result?festivalId=1100000002 HTTP/1.1
```


### Sample Response

```json
[   
    {
    "performanceid": 1000000004,
    "starttime": "1000",
    "endtime": "1100"
  },
      {
    "performanceid": 1000000005,
    "starttime": "1100",
    "endtime": "1200"
  },
      {
    "performanceid": 1000000006,
    "starttime": "1200",
    "endtime": "1300"
  }

]
```
### Sample Error

```json
{
 "error": "Integer Only",
  "code": 500
}
```



## Get Advance Data

| attribute   | value       |
| ----------- | ----------- |
| HTTP Method | GET         |
| Endpoint    | /advance/data |

### Parameters

| parameter  | datatype        | example    |
| ---------- | --------------- | ---------- |
| festivalId | 10 digit number | 1000000001 |

### Response Body

```json
{
  "data": [
    {
      "performanceId": 1000000001,
      "festivalId": 1100000001,
      "startTime": "10:00",
      "endTime": "11:00",
      "popularity: 1
    }
  ]
}
```

### Error
```json
{
  "error": "duplicate key value violates unique constraint \"performance_performanceid_key\"",
  "code": 500
}
```
### Sample Request

```http
GET http://localhost:3000/basic/data?festivalId=1100000002&startTime__gt=1000&page=1&pageSize=1 HTTP/1.1
```
### Sample Response


```json
[   
    {
    "performanceid": 1000000005,
    "festivalid": 1100000002,
    "starttime": "11:00:00",
    "endtime": "12:00:00"
  }
]

```

### Sample Error

```json
{
  "error": "Missing Field"
}
```

## Get Advance Result

| attribute   | value       |
| ----------- | ----------- |
| HTTP Method | GET         |
| Endpoint    | /advance/data |

### Parameters

| parameter  | datatype        | example    |
| ---------- | --------------- | ---------- |
| festivalId | 10 digit number | 1000000001 |

### Response Body

```json
{
  "data": [
    {
      "performanceId": 1000000003,
      "startTime": "1030",
      "endTime": "1130",
      "popularity: 10
    }
  ]
}
```

### Error
```json
{
 "error": "Integer Only",
 "code": 500
}
```
### Sample Request

```http
GET http://localhost:3000/advance/result?festivalId=1100000002 HTTP/1.1
```

### Sample Response

```json
[   
    {
    "performanceid": 1000000007,
    "starttime": "1030",
    "endtime": "1230"
  }
]

```

### Sample Error

```json
{
 "error": "Integer Only",
 "code": 500
}
```

