
> Try [rserve-client](https://www.npmjs.com/package/rserve-client) for Node.js

## Install

1. `$ git clone https://github.com/swells/rserve-client-test.git`

2. `$ cd rserve-client-test`

2. `$ npm install`

## Usage

### Start Rserve

```R
> library("Rserve")
> Rserve()
```

By default Rserve will listen on *http://localhost:6311*

### Start Node Webserver
```
$ node server.js
```

Vist *http://localhost:8000/eval/{rcode}* and include some R Code. 

### Example:

```
http://localhost:8000/eval/x<-rnorm(10)
```

Supports both HTTP `POST` and `GET`
