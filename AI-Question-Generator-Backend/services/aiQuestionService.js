const {CohereClient} = require('../config/cohereClient');

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY
});

async function generateQuestions(topic, numQuestions, difficulty, guidence, keyConcepts, doNotInclude, questionType) {
    const response = await cohere.generate({
        model: 'command-xlarge-nightly',
        prompt: `Generate ${numQuestions} ${difficulty} level${questionType} questions on the topic of ${topic}. Give me questions with 4 answer choices. And also include the correct answer.The questions should focus on the following key concepts: ${keyConcepts}. The questions should not include the following: ${doNotInclude}. Use the following guidance to help you generate the questions: ${guidence}. Format the questions as json array with each question having the following structure: { "question": "question text", "choices": ["choice1", "choice2", "choice3", "choice4"], "correct_answer": "correct choice" }`,
        max_tokens: 1000,
        temperature: 0.7,
    })
    return response.body.generations[0].text;
}
module.exports = {
    generateQuestions
};