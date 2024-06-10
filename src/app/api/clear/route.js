import { revalidateTag } from 'next/cache'
 
export async function GET() {
    revalidateTag('collection');
 
    return new Response("This is a new API route");
}