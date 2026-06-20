/**
 * Search page — redirects to home (search feature removed)
 */
import { redirect } from 'next/navigation';

export default function SearchPage() {
  redirect('/');
}
