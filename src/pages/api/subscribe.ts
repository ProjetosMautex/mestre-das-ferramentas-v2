import type { APIRoute } from 'astro';
import { BrevoClient } from '@getbrevo/brevo';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email } = body;

    console.log('[BREVO] Recebido pedido de cadastro para:', email);

    if (!email || typeof email !== 'string') {
      console.error('[BREVO] E-mail inválido ou ausente.');
      return new Response(
        JSON.stringify({ error: 'E-mail é obrigatório.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = import.meta.env.BREVO_API_KEY;
    const listId = Number(import.meta.env.BREVO_LIST_ID) || 2;

    console.log('[BREVO] API Key encontrada:', apiKey ? `${apiKey.substring(0, 12)}...` : 'NÃO ENCONTRADA');
    console.log('[BREVO] List ID:', listId, '(tipo:', typeof listId, ')');

    if (!apiKey) {
      console.error('[BREVO] BREVO_API_KEY não está configurada no .env');
      return new Response(
        JSON.stringify({ error: 'Erro interno do servidor.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const client = new BrevoClient({ apiKey });

    console.log('[BREVO] Enviando createContact para Brevo...');
    console.log('[BREVO] Payload:', JSON.stringify({ email, listIds: [listId], updateEnabled: true }));

    const response = await client.contacts.createContact({
      email,
      listIds: [listId],
      updateEnabled: true,
    });

    console.log('[BREVO] Contato criado com sucesso! Resposta:', JSON.stringify(response));

    return new Response(
      JSON.stringify({ success: true, message: 'Contato criado com sucesso!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('[BREVO] === ERRO COMPLETO ===');
    console.error('[BREVO] Mensagem:', error?.message);
    console.error('[BREVO] Status:', error?.statusCode || error?.status);
    console.error('[BREVO] Body:', JSON.stringify(error?.body || error?.response));
    console.error('[BREVO] Erro completo:', JSON.stringify(error, null, 2));

    // Se o erro é "Contact already exist" ou "duplicate", trata como sucesso
    const errorMessage = String(error?.message || error?.body?.message || '').toLowerCase();
    const errorBody = JSON.stringify(error?.body || '').toLowerCase();

    if (
      errorMessage.includes('duplicate') ||
      errorMessage.includes('already exist') ||
      errorBody.includes('duplicate') ||
      errorBody.includes('already exist')
    ) {
      console.log('[BREVO] Contato já existe — tratando como sucesso.');
      return new Response(
        JSON.stringify({ success: true, message: 'Contato já cadastrado!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Erro ao registrar contato. Tente novamente.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
