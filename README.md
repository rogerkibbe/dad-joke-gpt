# Dad Jokes GPT

Welcome to the Dad Jokes GPT repository! This is a specialized version of ChatGPT, designed to deliver humorous dad jokes with a unique twist. It swiftly presents a joke's text and then creates a related image, visually encapsulating the humor of the joke. Give the live version a try at: https://chat.openai.com/g/g-xuJ4d3MzM-dad-jokes

This is a very simple GPT. The purpose is a proof of concept of a GPT calling an API and open sourcing a GPT. An LLM front end in front of an API is a huge unlock

## What is Dad Jokes GPT?

Dad Jokes GPT is a custom GPT (Generative Pre-trained Transformer) designed to entertain users with dad jokes. Upon receiving a prompt for a joke, it uses an API (https://icanhazdadjoke.com/api) to fetch a dad joke and then employs DALL·E image generation capability to create a visual representation of the joke, enhancing the comedic experience.

## Repository Contents

This repository contains two key files:

- `prompt.txt`: This file contains the prompt used to define the behavior of the Dad Jokes GPT. It includes the instructions and goals for the GPT, guiding it to respond with just the joke's text followed by a visual

- `action.json`: This file holds the action JSON data, which defines the actual interaction and response mechanics of the GPT. It is crucial for integrating the API

## How to Use

To create a GPT like Dad Jokes GPT, follow these steps:

1. **Clone the Repository**: Start by cloning this repository to your local machine or development environment.

2. **Understanding the Files**:
   - Review `prompt.txt` to understand the custom instructions and behavior defined for the Dad Jokes GPT.
   - Examine `action.json` to see how the GPT is programmed to interact and respond with the dad jokes API

3. **Integration**:
   - Integrate the `action.json` in your GPT environment to set up the response mechanics.

4. **Testing**:
   - Test the setup by prompting the GPT for a dad joke and observing its response and image generation.

5. **Customization** (Optional):
   - Feel free to modify `prompt.txt` or `action.json` to alter the GPT's behavior or add new features.

## Contribute

Contributions to the Dad Jokes GPT are welcome! Whether it's a bug fix, feature enhancement, or a new dad joke, feel free to fork this repository and submit your pull requests.

