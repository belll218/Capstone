async function askAI() {
    const userMessage = document.getElementById('question').value;

    const response = await fetch('https://api.together.xyz/v1/chat/completions', {
        method: 'POST',
        headers: {
        'Authorization': 'e6682a54390922ad065700d85b558df14d577b9cc24322ab0ea3786fdf231ae8',  // 🔥 Replace this!
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free", //Tells Together to use which model
        messages: [{"role": "user", "content": userMessage}],
        temperature: 0.7,
        max_tokens: 200
        })
    });

    const data = await response.json();
    document.getElementById('response').innerText = data.choices[0].message.content;
}