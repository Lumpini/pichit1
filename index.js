'use strict'

const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
const app = express();
var encoding = require("encoding");



app.set('port', (process.env.PORT || 5000)) 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})
var Token = process.env.TOKEN;
//var WebDF = process.env.WebDF;

var access_token = 'Bearer {'+Token+'}'
var name = "";

app.get('/', (req, res) => {
  res.end("ok")
})



app.post('/webhook', (req, res) => {

    var data = req.body; 
console.log('-----ปริ้นทั้งหมด-----' + JSON.stringify(data));
    
//console.log('++++'+JSON.stringify(req.body.events));
    
    var sende_r = req.body.events[0].source.userId
    var reToken = req.body.events[0].replyToken
    
    var data = req.body; 
    
    if (req.body.events[0].type == "message") { 
    if (req.body.events[0].message.type == "text") {
     
     var tex_t = req.body.events[0].message.text
     
        //profile(reToken, sende_r); 
     
     postToDialogflow(req);

     }
        
     }else if (req.body.events[0].type == "beacon") {  
     if (req.body.events[0].beacon.type == "enter") {   
        
     var beacon_id = req.body.events[0].beacon.hwid  
       //  if(beacon_1 == "0133a0751f"){
       //  profile(reToken, sende_r);    
       //  }else if(beacon_1 == "0133a0751f"){
       //  profile(reToken, sende_r);    
       //  } 
       profile(reToken, sende_r, beacon_id);  
       console.log("---enter---" + sende_r+"-------"+beacon_id);  
     }
 }
 
 
 })
 
 
 /////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


function data_enter(sende_r, beacon_id) {


   var checktime = "https://script.google.com/macros/s/AKfycbx5rSDe_Q63snoj2XN0R-cV-aDLjWsgOG61nxe_/exec?userId="+sende_r+"&beaconid="+beacon_id;
 request(checktime, function (error, response, body) {

})


}





// เช็คโปรไฟล์
/////////////////////////////////////////////////////////////////////////

function profile(reToken,sende_r, beacon_id) {

    var headers = {
       'Authorization' : access_token
}
    

var options = {
    url: 'https://api.line.me/v2/bot/profile/'+sende_r,
    method: 'GET',
    headers: headers,
    }

 request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        name = info.displayName;
       
      
        
          if(beacon_id == "014d30a311"){
         var msg = {
           "type": "text",
           "text": "เมืองทราบ"+" " +name +" " + "ว.10 บริเวณจวนผู้ว่า สวนสาธารณะพระพิจิตร"
          
                   
          }; 
        reply(reToken, msg, sende_r, beacon_id);    
         }else if(beacon_id == "014d310ffe"){
         var msg = {
           "type": "text",
           "text": "เมืองทราบ"+" " +name +" " + "ว.10 ลานแอโรบิค สวนสาธารณะพระพิจิตร"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }else if(beacon_id == "014d335349"){
         var msg = {
           "type": "text",
           "text": "เมืองทราบ"+" " +name +" " + "ว.10 ป้อมยาม สวนสมเด็จพระศรีนครินทร์"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }else if(beacon_id == "014d33f70e"){
         var msg = {
           "type": "text",
           "text": "เมืองทราบ"+" " +name +" " + "ว.10 ถ้ำน้ำตก สวนสมเด็จพระศรีนครินทร์ "
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }else if(beacon_id == "014d33f7b4"){
         var msg = {
           "type": "text",
           "text": "เมืองทราบ"+" " +name +" " + "ว.10 บ่อจรเข้ สวนสมเด็จพระศรีนครินทร์"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }else if(beacon_id == "014d342106"){
         var msg = {
           "type": "text",
           "text": "เมืองทราบ"+" " +name +" " + "ว.10 ป้อมยาม สนามกีฬาจังหวัดพิจิตร"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }else if(beacon_id == "014d389174"){
         var msg = {
           "type": "text",
           "text": "เมืองทราบ"+" " +name +" " + "ว.10 ร้านกาแฟ สนามกีฬาจังหวัดพิจิตร"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }else if(beacon_id == "014d3a050c"){
         var msg = {
           "type": "text",
           "text": "เมืองทราบ"+" " +name +" " + "ว.10 ทางเข้า VIP สนามกีฬาจังหวัดพิจิตร"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }else if(beacon_id == "014d3b0577"){
         var msg = {
           "type": "text",
           "text": "เมืองทราบ"+" " +name +" " + "ว.10 ฝั่ง ว.เทคนิค สนามกีฬาจังหวัดพิจิตร"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }else if(beacon_id == "014d3b2bd0"){
         var msg = {
           "type": "text",
           "text": "เมืองทราบ"+" " +name +" " + "ว.10 หลังตลาด(ฝั่งร้านอาหารโต้รุ่ง) ตลาดสดเทศบาล 2"
          }; 
        reply(reToken, msg, sende_r, beacon_id);   
         }
         
        
        
        
    }
 })


}

//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


function reply(reToken, msg, sende_r, beacon_id) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': access_token
    }
    let body = JSON.stringify({
        replyToken: reToken,
        messages: [msg]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }
)
    console.log("---data_enter---" + sende_r+"-------"+beacon_id);
data_enter(sende_r, beacon_id);
}

const postToDialogflow = req => {
    
  var WebDF = "https://bots.dialogflow.com/line/9c6a1598-acdd-4693-929d-29ccb36a541f/webhook";
  req.headers.host = "bots.dialogflow.com";
  return request({
    method: "POST",
    uri: WebDF ,
    headers: req.headers,
    body: JSON.stringify(req.body)
    
  });
 
};

