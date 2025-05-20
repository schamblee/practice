import pool from '../data'; // Adjust the import path as needed

/**
 * Example function to retrieve user role by ID.
 * Parameterized queries safeguard against SQL injection.
 */
async function getUserRole(userId: number) {
  const query = 'SELECT id, role FROM users WHERE id = $1 LIMIT 1';
  const values = [userId];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

export default getUserRole;
