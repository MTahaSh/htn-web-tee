import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (req: VercelRequest, res: VercelResponse) => {
  const url = 'https://gy7x3x34.apicdn.sanity.io/v2023-05-30/data/query/production';
  
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
