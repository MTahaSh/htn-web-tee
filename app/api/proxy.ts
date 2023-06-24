import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (req: VercelRequest, res: VercelResponse) => {
  const url = 'https://gy7x3x34.apicdn.sanity.io/v2023-05-30/data/query/production?query=*%5B_type+%3D%3D+%22products%22%5D+%7B%0A++++++++++_id%2C%0A++++++++++title%2C%0A++++++++++description%2C%0A++++++++++price%2C%0A++++++++++image%2C%0A++++++++++category+-%3E+%7B%0A++++++++++++name%0A++++++++++%7D%0A++++++++%7D&%24id=%221fb5ffc8-e7da-40d4-af46-5bc928374baf%22';
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
