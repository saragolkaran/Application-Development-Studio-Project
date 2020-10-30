var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var app = express();

const database = require('./database');
const backend = require('./backend');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//basic insert 
app.post('/basic/insert', (req,res,next) =>{
  const { data } = req.body;
  if (data == null || data.length<1) {
    return res.status(400).json({"error": "Empty Result", "code" : 400});
  } 
  database.insertPerformance(data ,(error, result) =>{
    if (error) {
      if (error.code == 23505) {
        return res.status(400).json({ "error" : "Duplicate Entry", "code" : 400 });
      } else {
        return next(error);
      }    
    } 
    res.json({"result":"success"})
  });
});

app.get('/basic/data', function (req,res,next){
  const { festivalId, startTime__gt, page, pageSize } = req.query;
  if (festivalId && !(/^\d+$/.test(festivalId))) {
    return res.status(400).json({"error":"Integer Only"})
  }else if (startTime__gt && !(/^\d+$/.test(startTime__gt))) {
    return res.status(400).json({"error":"Input valid time"})
  }else if (page && !(/^\d+$/.test(page))) {
    return res.status(400).json({"error":"Integer Only"})
  }else if (pageSize && !(/^\d+$/.test(pageSize))) {
    return res.status(400).json({"error":"Integer Only"})
  }
  database.getPerformance(festivalId, startTime__gt,page,pageSize, (error, result) =>{

    if (error){
      return next(error);  
    }
    res.json(result);
  })

});

// adv insert
app.post('/advance/insert', (req, res, next) => {
  const {data} = req.body;
  if (data == null || data.length<1) {
    return res.status(400).json({"error": "Empty Result", "code" : 400});
  } 
  database.insertPerformanceAdv(data, (error, result) =>{
    if (error) {
      if (error.code == 23505) {
        return res.status(400).json({ "error" : "Duplicate Entry", "code" : 400 });
      } else {
        return next(error);
      }    
    }
    res.json({"result":"success"})
  });
});

//adv get
app.get('/advance/data', function (req, res, next){
  const {festivalId, startTime__gt, endTime__gt, page, pageSize} = req.query;
  if (festivalId && !(/^\d+$/.test(festivalId))) {
    return res.status(400).json({"error":"Integer Only"})
  }else if (startTime__gt && !(/^\d+$/.test(startTime__gt))) {
    return res.status(400).json({"error":"Input valid time"})
  }else if (endTime__gt && !(/^\d+$/.test(endTime__gt))) {
    return res.status(400).json({"error":"Input valid time"})
  }else if (page && !(/^\d+$/.test(page))) {
    return res.status(400).json({"error":"Integer Only"})
  }else if (pageSize && !(/^\d+$/.test(pageSize))) {
    return res.status(400).json({"error":"Integer Only"})
  }

  database.getPerformanceAdv(festivalId, startTime__gt, endTime__gt, page, pageSize, (error, result) => {
    if (error) {
      return next(error);
    }
    res.json(result);
  })
})

//algo
app.get('/basic/result', function (req, res, next){
  const{ festivalId } = req.query;
  if (festivalId == null) {
    return res.status(400).json({"error" : "Missing Field" })
  }else if (!(/^\d+$/.test(festivalId))) {
    return res.status(400).json({"error":"Integer Only"})
  }else if (festivalId.length<10) {
    return res.status(400).json({"error":"Insufficient field"})
  }
  database.getPerformanceForResult(festivalId, (error, result) =>{

    if (error){
      return next(error);
    }
    if (result.length==0){
      return res.json({"result": []});
    }
    try {
      var performances = backend.getPerformanceAlgo(result);
      performances = performances.map(({performanceid,starttime,endtime}) => {
        return {"performanceId":performanceid,"startTime":starttime,"endTime":endtime};
      });
      res.json({"result": performances});
    } catch (error) {
      return next(error);
    }
  })

});

app.get('/advance/result', function (req, res, next){
  const{ festivalId} = req.query;
  if (festivalId == null) {
    return res.status(400).json({"error" : "Missing Field" })
  }else if (!(/^\d+$/.test(festivalId))) {
    return res.status(400).json({"error":"Integer Only"})
  }else if (festivalId.length<10) {
    return res.status(400).json({"error":"Insufficient field"})
  }
  database.getPerformanceAdvForResult(festivalId, (error, result) =>{
    

    if (error){
      return next(error);
    }
    if (result.length==0){
      return res.json({"result": []});
    }
    try {
      var performances = backend.getPerformanceWithPopularityAlgo(result)
      performances = performances.map(({performanceid,starttime,endtime,popularity}) => {
        return {"performanceId":parseInt(performanceid),"startTime":starttime.replace(":","").substr(0,4),"endTime":endtime.replace(":","").substr(0,4),"popularity":popularity};
      });
      res.json({"result": performances});
    } catch (error) {
      return next(error);
    }
    
  })

});

//test backend
app.get('/reset', function(req, res) {
  database.resetTable(function(error, result) {
      if (error) { 
          console.log(error);
          return res.json({error: error});
      }
      return res.json({ success: true });
  });
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: err.message,
    code :  err.status || 500,
  });
});

module.exports = app;
