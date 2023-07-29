// for the chatGPT
const { Configuration, OpenAIApi } = require("openai");
require('dist/dotenv').config();

const configuration = new Configuration({
    apiKey: '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',
})
const openai = new OpenAIApi(configuration);

async function runCompletion(){
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "How are you today?",
        max_tokens: 4000
    });
    console.log(completion.data.choices[0].text);
}

runCompletion();