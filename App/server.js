// create all necessary variables
const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
affId = "rxapi",
apiKey = "0WbibL1pE57WTOuiADgRKrlrGoGUapmg",
devinf = "NodeJS,10.12",
appver = "1.0";

// handle post request
app.use(express.static('static_files'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// object storing msg body for post
var opts = {title:"Refill Rx", url:"",token:"",affId:affId,devinf:devinf,appver:appver};

var currUser = "test@gmail.com"
app.post('/', (req, res) => {
  currUser = req.body.user;
});
/*
app.post('https://services-qa.walgreens.com/api/util/mweb5url', (req, res) => {
    console.log("making post request to obtain url");
    if (res.statusCode == 200)
    {
      console.log("got the landing url");
      console.log({status:"success",result:body});
      opts.url = res.body.landingUrl;
      opts.token = res.body.token;
      res.send(opts);
    }
    else
    {
      console.log("failed to request landing url");
      console.log({status:"error",result:err});
      opts.url = "";
      opts.token = "";
      res.send(opts);
    }
});

app.post('landingUrl' , (req, res) => {
  console.log("making post request for landingUrl");
});
*/

/*
app.get('/',function(req,res){
  console.log("Get Request for obtainUrl");
  // call function to get landing url from walgreens
  getLandingURL(function(json)
  {
    if(json.url != "" && json.token != "")
    {
      opts.url = json.url;
      opts.token = json.token;
      res.send("successful get");
      //res.render("/prescription.html", opts);
    }
    else
    {
      res.send("error");
    }
  });
});

function getLandingURL(callback)
{
  console.log("Post Request for callback");
  var options = {
    method: 'POST',
    url: 'https://services-qa.walgreens.com/api/util/mweb5url',
    json:true,
    body:{
      apiKey: apiKey,
      affId: affId,
      transaction: "refillByScan",
      act: "mweb5Url",
      view: "mweb5UrlJSON",
      devinf: devinf,
      appver: appver
    }
  };
  request(options, function(err,response,body)
  {
    if (!err && response.statusCode == 200)
    {
      console.log("got the landing url");
      console.log({status:"success",result:body});
      callback({url:body.landingUrl,token:body.token});
    }
    else
    {
      console.log("failed to request landing url");
      console.log({status:"error",result:err});
      callback({url:"",token:""});
    }
  });
}

app.post('/', (req,res) => {
  openLandingURL(req.rxNo, function(json)
  {
    if(json != "")
    {
      console.log("received feedback");
      res.send(opts);
    }
    else
    {
      res.send("hello");
      //res.send();
    }
  });
});

function openLandingUrl(rxNum,callback){
  console.log("submitting user's rxNo");
  var options = {
    method: 'POST',
    url: 'https://services-qa.walgreens.com/api/util/mweb5url',
    json:true,
    body:{
      affId: affId,
      token: opts.token,
      lat: "",
      lng: "",
      rxNo: rxNum,
      appCallBackScheme: 'localhost:3000',
      appCallBackAction: 'localhost:3000',
      trackingId: "YOUR OWN TRACKING ID",
      appId: "refillByScan",
      act: "chkExpRx",
      devinf: "THE DEVICE INFO",
      appver: "THE APP VERSION"
    }
  };
  request(options, function(err,response,body)
  {
    $('.formBox').style.display = hidden;
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
}
*/

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});

// const fakeData = {
//     'Vicodin': {Indiction: 'Management of pain severe enough to require an opioid analgesic and for which alternative treatments are inadequate.',
//                 Dosage:  'Give every 4–6hrs as needed. Initially 1–2 tabs of 5mg/300mg (max 8 tabs/day) or 1 tab of 7.5mg/300mg or 10mg/300mg (max 6 tabs/day).'},
//     'Synthroid': {Indiction: 'As adjunct to surgery and radioiodine therapy for thyrotropin-dependent well-differentiated thyroid cancer.',
//                 Dosage: 'Take in AM on empty stomach, ½ to 1hr before breakfast.'},
//     'Lipitor': {Indiction: 'Adjunct to diet in primary hypercholesterolemia (heterozygous familial and nonfamilial) and mixed dyslipidemia (Types IIa and IIb) to reduce total-C, LDL-C, apo B and TG, and to increase HDL-C.',
//                 Dosage: 'Heterozygous and Types IIa and IIb: initially 10 or 20mg once daily; if more than a 45% reduction in LDL-C is needed, may start at 40mg once daily; range 10–80mg once daily.'},
//     'Norvasc': {Indiction: 'Vasospastic and chronic stable angina.',
//                 Dosage: '10mg once daily. Elderly or hepatic impairment: 5mg once daily.'},
//     'Amoxicillin': {Indiction: 'Susceptible infections including ear/nose/throat (ENT), genitourinary tract, skin and skin structures, lower respiratory, acute uncomplicated gonorrhea.',
//                     Dosage: '>40kg: ENT: mild/moderate: 500mg every 12hrs; severe: 875mg every 12hrs.'},
//     'Hydrochlorothiazide': {Indiction: 'Edema.',
//                             Dosage: '25–100mg daily in single or divided doses; may give on intermittent schedule (every other day or 3–5 days/wk).'},
//     'Zocor': {Indiction: 'Adjunct to diet when response to nondrug therapy is inadequate.',
//             Dosage: ' Initially 10–20mg once daily in the PM; if patient is high risk of CHD event: initially 40mg/day; range 5–40mg/day; monitor lipids after 4 weeks and periodically thereafter.'},
//     'Lisinopril': {Indiction: 'Hypertension',
//                     Dosage: ' Initially 10mg/12.5mg or 20mg/12.5mg. Wait 2–3 weeks before increasing HCTZ dose. Max 80mg/50mg daily. CrCl <30mL/min: not recommended.'},
//     'Azasite': {Indiction: 'Susceptible bacterial conjunctivitis.',
//                 Dosage: '1 drop in affected eye(s) twice daily (8–12hrs apart) for 2 days then once daily for the next 5 days.'},
//     'Metformin': {Indiction: 'Adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes.',
//                 Dosage: 'Give in divided doses with meals. Drug-naive: initially 2mg/500mg once or twice daily; may increase by 2mg/500mg per day after 4 weeks; max 8mg/2000mg per day.'},
// };

// app.get('/drugName', (req, res) => {
//     const allDrugName = Object.keys(fakeData);
//     res.send(allDrugName);
// });

// app.get('/drugName/:drugid', (req, res) => {
//     const nameToLookup = req.params.drugid;
//     const val = fakeData[nameToLookup];
//     if (val){
//         res.send(val);
//     } else{
//         res.send({});
//     }
// });
