-- Create database tables for restaurant website

-- Menu Categories
CREATE TABLE menu_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  display_order INTEGER NOT NULL
);

-- Menu Items
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES menu_categories(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  is_vegetarian BOOLEAN DEFAULT false,
  is_vegan BOOLEAN DEFAULT false,
  is_gluten_free BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  image_url VARCHAR(255)
);

-- Events
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  event_time TIME NOT NULL,
  price DECIMAL(10, 2),
  image_url VARCHAR(255),
  contact_info TEXT,
  max_participants INTEGER
);

-- Team Members
CREATE TABLE team_members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  bio TEXT,
  image_url VARCHAR(255),
  display_order INTEGER NOT NULL
);

-- Job Listings
CREATE TABLE job_listings (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT,
  is_full_time BOOLEAN DEFAULT true,
  posted_date DATE NOT NULL DEFAULT CURRENT_DATE,
  contact_email VARCHAR(255)
);

-- Contact Form Submissions
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_reservation BOOLEAN DEFAULT false,
  reservation_date DATE,
  reservation_time TIME,
  party_size INTEGER,
  is_processed BOOLEAN DEFAULT false
); 