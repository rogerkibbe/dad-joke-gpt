# Dad Jokes GPT

Welcome to the Dad Jokes GPT repository! This is a specialized version of ChatGPT, designed to deliver humorous dad jokes with a unique twist. It swiftly presents a joke's text and then creates a related image, visually encapsulating the humor of the joke. Give the live version a try at: [https://chat.openai.com/g/g-xuJ4d3MzM-dad-jokes](https://chat.openai.com/g/g-xuJ4d3MzM-dad-jokes)

This is a very simple GPT. The purpose is a proof of concept of a GPT calling an API and open sourcing a GPT. An LLM front end in front of an API is a huge unlock.

## What is Dad Jokes GPT?

Dad Jokes GPT is a custom GPT designed to entertain users with dad jokes. Upon receiving a prompt for a joke, it uses an API (https://icanhazdadjoke.com/api) to fetch a dad joke and then employs DALL·E image generation capability to create a visual representation of the joke, enhancing the comedic experience.

## Repository Contents

This repository contains three critical files:

- `prompt.txt`: This file contains the prompt used to define the behavior of the Dad Jokes GPT. It includes the instructions and goals for the GPT, guiding it to respond with just the joke's text followed by a visual.

- `action.json`: This file holds the action JSON data, which defines the actual interaction and response mechanics of integrating the API.

- `dad-joke-api-proxy.js`: This file is an Node.js based API proxy script to set the Accept header to `application/json` for the dad jokes API, as GPTs cannot set API call headers directly.

## How to Use

To create a GPT like Dad Jokes GPT, follow these steps:

1. **Clone the Repository**: Start by cloning this repository to your local machine or development environment.

2. **Understanding the Files**:
   - Review `prompt.txt` to understand the custom instructions and behavior defined for the Dad Jokes GPT.
   - Examine `action.json` to see how the GPT is programmed to interact and respond with the dad jokes API.
   - Check `dad-joke-api-proxy.js` for the API proxy setup required for proper API interaction.

3. **Setting Up the API Proxy**:
   - Deploy `dad-joke-api-proxy.js` to a Node.js server to handle the API call headers correctly. No external libraries are used so no `package.json` is needed

4. **Integration**:
   - Integrate the `action.json` in your GPT environment to set up the response mechanics. You will need to update this line:
   - `"URL": [URL-HOSTING-PROXY]`
   - to the URL for `dad-joke-API-proxy.js`

5. **Testing**:
   - Test the setup by prompting the GPT for a dad joke and observing its response and image generation.

6. **Customization** (Optional):
   - Feel free to modify `prompt.txt` or `action.json` to alter the GPT's behavior or add new features.

## Contribute

Contributions to the Dad Jokes GPT are welcome! Whether it's a bug fix or a feature enhancement, feel free to fork this repository and submit your pull requests.
