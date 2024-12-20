const apiKey = process.env.API_KEY_GEMINI;
const apiUrl = process.env.API_URL_GEMINI;

async function fetchData() {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST', // Ou GET, dependendo da API
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        input: "exemplo" // Dados para enviar, se necessário
      })
    });

    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.statusText);
    }

    const data = await response.json();
    console.log('Dados recebidos:', data);
    // Manipule os dados recebidos
  } catch (error) {
    console.error('Erro:', error);
  }
}

fetchData();
