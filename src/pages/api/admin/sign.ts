import type { APIRoute } from 'astro';
import { signUpload } from '../../../lib/cloudinary';
import { json } from '../../../lib/http';

export const GET: APIRoute = () => json(signUpload('gentau'));
