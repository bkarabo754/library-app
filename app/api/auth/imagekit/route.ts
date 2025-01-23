import ImageKit from 'imagekit';
import config from '@/lib/config';
import { NextResponse } from 'next/server';

// Create an instance of ImageKit with your credentials
const imagekit = new ImageKit({
  publicKey: config.env.imagekit.publicKey,
  privateKey: config.env.imagekit.privateKey,
  urlEndpoint: config.env.imagekit.urlEndpoint,
});

// Handler function
export async function GET() {
  // Generate authentication parameters
  const authParams = imagekit.getAuthenticationParameters();
  return NextResponse.json(authParams);
}
