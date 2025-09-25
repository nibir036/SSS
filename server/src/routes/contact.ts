// 1. Create server/src/routes/contact.ts

import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest: string;
  message: string;
  timestamp: string;
}

// Submit contact form
router.post('/', (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, serviceInterest, message } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Required fields are missing'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    const contactData: ContactFormData = {
      firstName,
      lastName,
      email,
      phone,
      company,
      serviceInterest,
      message,
      timestamp: new Date().toISOString()
    };

    // Save to JSON file (for development - in production use a database)
    const contactsPath = path.join(__dirname, '../data/contacts.json');
    let contacts: ContactFormData[] = [];

    // Read existing contacts
    if (fs.existsSync(contactsPath)) {
      const contactsData = fs.readFileSync(contactsPath, 'utf8');
      contacts = JSON.parse(contactsData);
    }

    // Add new contact
    contacts.push(contactData);

    // Save updated contacts
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));

    // Log to console for development
    console.log('📧 New contact form submission:', {
      name: `${firstName} ${lastName}`,
      email,
      company,
      serviceInterest
    });

    res.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: contacts.length,
        submittedAt: contactData.timestamp
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form'
    });
  }
});

// Get all contacts (for admin)
router.get('/all', (req, res) => {
  try {
    const contactsPath = path.join(__dirname, '../data/contacts.json');
    
    if (!fs.existsSync(contactsPath)) {
      return res.json({
        success: true,
        data: []
      });
    }

    const contactsData = fs.readFileSync(contactsPath, 'utf8');
    const contacts = JSON.parse(contactsData);

    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Error reading contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});

export default router;

// 2. Update server/src/server.ts - Add this line after the products route:



// Add this route


// 3. Create the contacts data directory
// mkdir server/src/data (if it doesn't exist)
// The contacts.json file will be created automatically