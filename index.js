const TOGETHER_API_KEY = '3acb672b094fc5aeba3f446ed2a2cd7ddd4a559d867acc6a089ccae3b1b94724';
const fetch = require('node-fetch'); // If you're on Node.js <18

// Change this city to ask about different weather
const userCityQuery = 'What’s the weather like in Mumbai today?';

async function init() {
    try {
        const response = await fetch('https://api.together.xyz/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${TOGETHER_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
                messages: [
                    {
                        role: 'system',
                        content: `You are a highly intelligent and friendly AI Weather Assistant named MeteoBot. 
Your job is to provide simulated weather forecasts that sound realistic. 
Mention temperature, weather conditions, wind, and any advice (like carrying an umbrella or sunscreen).
Make the response friendly and helpful, and clearly mention it's an estimated simulation.`
                    },
                    {
                        role: 'user',
                        content: userCityQuery
                    }
                ]
            })
        });

        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
            console.log('\n🌤️  AI Weather Forecast:\n');
            console.log(data.choices[0].message.content.trim());
            console.log('\n📝 Note: This is a simulated forecast.\n');
        } else {
            console.error('❌ No response from the AI.');
        }

    } catch (error) {
        console.error('❌ Error communicating with Together.ai API:', error.message);
    }
}

init();
