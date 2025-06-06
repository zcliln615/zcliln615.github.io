import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async () => {
  return new Response(
    JSON.stringify({ success: false, data: null, error: '投票功能已关闭' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ success: false, data: null, error: '投票功能已关闭' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};