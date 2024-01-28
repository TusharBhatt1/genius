import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
export default async function  getImageResponse(prompt:string){

    try{
       const response = await openai.images.generate({
        prompt:prompt,
        n:1,
        size:"512x512"
       })

       return response.data[0].url
    }
   catch(error){
     console.log(error)
     return ""
   }

}