const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Sample data
const projects = [
  {
    id: 'proj_001',
    title: 'Nkubu Avocado Drive',
    location: { name: 'Nkubu, Meru', lat: -0.201, lng: 37.6 },
    tree_type: 'Hass Avocado',
    status: 'ongoing',
    planted: 500,
    goal: 2000,
    start_date: '2025-03-01',
    end_date: '2026-03-01',
    description: 'A project to plant 2000 Hass Avocado trees in Nkubu, Meru.',
    photos: ['/placeholder.jpg'],
    contact: { name: 'Denis Mutugi', phone: '+254790147944' },
  },
];

const seedlings = [
    {
        "id":"seed_ava_01",
        "name":"Hass Avocado Seedling",
        "price_usd":2,
        "description":"A high-yield Hass Avocado seedling.",
        "benefits":["Income generating","High yield"]
    }
]

// API Routes
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/seedlings', (req, res) => {
  res.json(seedlings);
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
});

app.post('/api/adoptions', (req, res) => {
  // Stripe integration notes:
  // 1. Create a PaymentIntent with the amount and currency
  // 2. Return the client secret to the frontend
  res.status(201).json({ message: 'Adoption created successfully', data: req.body });
});

app.post('/api/volunteer', (req, res) => {
  res.status(201).json({ message: 'Volunteer registered successfully', data: req.body });
});

app.post('/api/contact', (req, res) => {
  res.status(201).json({ message: 'Message sent successfully', data: req.body });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});