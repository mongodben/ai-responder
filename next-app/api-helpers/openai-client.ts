import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

class OpenAIClient {
  oai: OpenAIApi;

  constructor(apiKey: string) {
    this.oai = new OpenAIApi(new Configuration({ apiKey }));
  }

  async respond(story: string, nextPromptContent?: string) {
    const mainPrompt =
      "Write the next paragraph of the story between ~~~START~~~ and ~~~STOP~~~ like a Hans Christian Anderson fairy tail.";
    const nextPrompt = "In the next paragraph, include the following content: ";
    console.log("STORY IS::\n\n" + story);
    const response = await this.oai.createCompletion({
      model: "text-davinci-003",
      max_tokens: 1024,
      temperature: 0.9,
      presence_penalty: 0.5,
      stop: "~~~END~~~",
      prompt: `${mainPrompt}${
        nextPromptContent
          ? "\n\n" + nextPrompt + nextPromptContent + "\n\n"
          : ""
      }

      ~~~START~~~\n${story}\n~~~STOP~~~
      ~~~END~~~`,
    });
    console.log("API RES:: \n\n" + JSON.stringify(response.data));
    const completion = response.data.choices[0].text;
    return completion;
  }

  async editResponse(input: string, instruction: string) {
    try {
      const response = await this.oai.createEdit({
        model: "text-davinci-edit-001",
        // temperature: 0.7,
        input,
        instruction,
      });
      const edit = response.data.choices[0].text;
      return edit;
    } catch (err) {
      console.error(err);
      return "error";
    }
  }
}

const openAIClient = new OpenAIClient(process.env.OPENAI_API_KEY as string);

export { openAIClient };
