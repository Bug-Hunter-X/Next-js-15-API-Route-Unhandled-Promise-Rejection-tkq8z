```javascript
// pages/api/data.js
export default async function handler(req, res) {
  try {
    const data = await fetchData();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data: ' + error.message });
  }
}

async function fetchData() {
  // Simulate an error
  await new Promise((resolve) => setTimeout(resolve, 500));
  throw new Error('Simulated error during data fetching');
}
```