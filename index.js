const { Configuration, OpenAIApi } = require("openai");
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const configuration = new Configuration({
    organization: "org-WGVvCM7Uo2XCkz173IU847kp",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();









const app=express()
app.use(bodyParser.json())
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port=3080

app.post('/',async (req, res) => {
     const {message}=req.body;
     const prompt = req.body.prompt;
     const completion = await openai.createCompletion({
      
         model: "text-davinci-003",
         prompt: `${message}`,
         max_tokens: 1000,
         temperature: 0.5,
       });
    
      // console.log(completion.data.choices[0].text);
      console.log(message)
      //const prompt = req.body.prompt;
      res.json({
        // data:completion.data
        message:completion.data.choices[0].text
      })
  
});
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});

