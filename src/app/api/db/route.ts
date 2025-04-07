import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request: Request) {
  try {
    // Example query to retrieve menu items
    const result = await db.query(
      'SELECT * FROM menu_items WHERE is_featured = true ORDER BY name'
    );
    
    return NextResponse.json({ 
      status: 'success', 
      data: result.rows 
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Database error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Example for contact form submission
    if (body.type === 'contact') {
      const { name, email, phone, message, isReservation, date, time, partySize } = body;
      
      const result = await db.query(
        `INSERT INTO contact_submissions 
         (name, email, phone, message, is_reservation, reservation_date, reservation_time, party_size) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
         RETURNING id`,
        [name, email, phone, message, isReservation, date, time, partySize]
      );
      
      return NextResponse.json({
        status: 'success',
        data: { id: result.rows[0].id }
      });
    }
    
    return NextResponse.json(
      { status: 'error', message: 'Invalid request type' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Database error' },
      { status: 500 }
    );
  }
} 