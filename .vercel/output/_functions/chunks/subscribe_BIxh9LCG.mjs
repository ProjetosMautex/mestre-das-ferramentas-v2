import { BrevoClient } from '@getbrevo/brevo';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { email } = body;
    console.log("[BREVO] Recebido pedido de cadastro para:", email);
    if (!email || typeof email !== "string") {
      console.error("[BREVO] E-mail inválido ou ausente.");
      return new Response(
        JSON.stringify({ error: "E-mail é obrigatório." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const apiKey = "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";
    const listId = Number("2") || 2;
    console.log("[BREVO] API Key encontrada:", apiKey ? `${apiKey.substring(0, 12)}...` : "NÃO ENCONTRADA");
    console.log("[BREVO] List ID:", listId, "(tipo:", typeof listId, ")");
    if (!apiKey) ;
    const client = new BrevoClient({ apiKey });
    console.log("[BREVO] Enviando createContact para Brevo...");
    console.log("[BREVO] Payload:", JSON.stringify({ email, listIds: [listId], updateEnabled: true }));
    const response = await client.contacts.createContact({
      email,
      listIds: [listId],
      updateEnabled: true
    });
    console.log("[BREVO] Contato criado com sucesso! Resposta:", JSON.stringify(response));
    return new Response(
      JSON.stringify({ success: true, message: "Contato criado com sucesso!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("[BREVO] === ERRO COMPLETO ===");
    console.error("[BREVO] Mensagem:", error?.message);
    console.error("[BREVO] Status:", error?.statusCode || error?.status);
    console.error("[BREVO] Body:", JSON.stringify(error?.body || error?.response));
    console.error("[BREVO] Erro completo:", JSON.stringify(error, null, 2));
    const errorMessage = String(error?.message || error?.body?.message || "").toLowerCase();
    const errorBody = JSON.stringify(error?.body || "").toLowerCase();
    if (errorMessage.includes("duplicate") || errorMessage.includes("already exist") || errorBody.includes("duplicate") || errorBody.includes("already exist")) {
      console.log("[BREVO] Contato já existe — tratando como sucesso.");
      return new Response(
        JSON.stringify({ success: true, message: "Contato já cadastrado!" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ error: "Erro ao registrar contato. Tente novamente." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
