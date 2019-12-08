var express = require('express');
var router = express.Router();
let count = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api',(req,res,next)=>{
  let {name,text} = req.body;
  let answer = {status:"",text:""};
  if(name&&text){
    count += 1;
    answer.status = 'success';
    answer.text = `${count}: ${text}`
    
  res.json(answer);
  } 
  else {
    answer.status = 'error';
    answer.text = 'Something wrong with name or text';
    
  res.status(500).json(answer);
  }
})
module.exports = router;
