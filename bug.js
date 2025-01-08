```javascript
// pages/api/data.js
export default function handler(req, res) {
  // Some asynchronous operation that might throw an error
  const data = fetchData(); 

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

async function fetchData() {
  // Simulate an error
  await new Promise((resolve) => setTimeout(resolve, 500));
  throw new Error('Simulated error during data fetching');
}
```