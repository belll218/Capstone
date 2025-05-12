async function askAI() {
    const userMessage = document.getElementById('question').value;

    try {
        const response = await fetch('https://api.together.xyz/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_USER_KEY_HERE', // replace with your key
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
                messages: [{ "role": "user", "content": userMessage }],
                temperature: 0.7,
                max_tokens: 200
            })
        });

        const data = await response.json();
        console.log(data); // 👈 Add this to SEE the whole data structure

        if (data.choices && data.choices.length > 0) {
            document.getElementById('response').innerText = data.choices[0].message.content;
        } else {
            document.getElementById('response').innerText = "No response from AI.";
        }
    } catch (error) {
        console.error('Error communicating with Together.ai:', error);
        document.getElementById('response').innerText = "Error: Could not get response.";
    }
}