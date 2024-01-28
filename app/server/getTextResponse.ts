import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
export default async function  getTextResponse(prompt:string){

    try{
        const response = await openai.chat.completions.create({
            messages: [
              {
                role: "system",
                content: "You are a helpful assistant , also remember what coversation is going on and respond accordingly ",
              },
              { role: "user", content: prompt },
            ],
            model: "gpt-3.5-turbo-1106",
          });
          return response.choices[0].message.content
    }
   catch(error){
     console.log(error)
     return ""
   }

}