// var request = require('request');

// request({
//   url: 'https://bf68-116-96-47-60.ngrok.io/webhooks/rest/webhook',
//   method: 'POST',
//   json: {
//       'sender':'Hiep',
//       'message':'alo'
//   },
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded', // or what ever you have used
//     'Authorization': 'Beared', // or what ever you have used
// }
// }, function(error, response, body){
//   console.log(body);
// });

// const axios = require('axios')

// axios
//   .post('https://whatever.com/todos', {
//     todo: 'Buy the milk'
//   })
//   .then(res => {
//     console.log(`statusCode: ${res.status}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })

//   var request = require('request');

// request.post(
//     'http://www.yoursite.com/formpage',
//     { json: { key: 'value' } },
//     function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body);
//         }
//     }
// );

const axios = require('axios');


const params = new URLSearchParams()
params.append('sender', 'Akexorcist')
params.append('message', 'iphone 6')

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
axios.post("https://bf68-116-96-47-60.ngrok.io/webhooks/rest/webhook", params, config).then(response => { 
	console.log(response)
})
.catch(error => {
    console.log(error.response)
});