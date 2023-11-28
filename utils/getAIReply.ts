const axios = require('axios');
const apiUrl = "http://127.0.0.1:4891/v1";
const model = "gpt4all-j-v1.3-groovy";

async function getAIReply({ prompt }) {
  console.log('Building request...')
  const requestData = {
    model: model,
    prompt: prompt.trim(),
    max_tokens: 200
  };

  const headers = {
    'content-type': 'application/json',
  };

  try {
    const response = await axios.post(`${apiUrl}/completions`, requestData, { headers });
    const generatedText = response.data.choices[0].text;
    return generatedText;
  } catch (error: any) {
    console.error(error);
    throw new Error('An error occurred while making the request to the API.');
  }
}

export default getAIReply
