import openai from "./chatgpt"

const query = async (prompt: string, chatId: string, model: string) => {
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 0.7,
        frequency_penalty: 0.6,
        presence_penalty: 0,
    }).then(res => res.data.choices[0].text)
        .catch(err =>
            `Error occured ! (Error: ${err.message})`);
    
    return res;
}

export default query;