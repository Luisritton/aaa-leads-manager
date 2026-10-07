// 1. Base inicial de Leads e Projetos de Automação
const leadsIniciais = [
    {
        id: 1,
        nome: "Carlos Silva",
        empresa: "Tech Solutions",
        projeto: "Bot de Atendimento Whatsapp",
        status: "Concluído",
        valor: 1500
    },
    {
        id:2,
        nome: "Mariana Souza",
        empresa: "E-commerce Brasil",
        projeto: "Analisador Automático de PDFs",
        status: "Em Andamento",
        valor: 2500
    },
    {
        id: 3,
        nome: "Roberto Alves",
        empresa: "Clinica Odonto",
        projeto: "Agendador Inteligente de Consultas",
        status: "Em Andamento",
        valor: 1800
    }
];

// 2. Persistência: Verifica se já existem dados no localStorage, senão salva a base inicial
if (!localStorage.getItem("leads_agencia")) {
    localStorage.setItem("leads_agencia", JSON.stringify(leadsIniciais));
    console.log("-> Base inicial de leads gravadas no localStorage!");
}

// 3. Recupera os dados salvos no localStorage
const leadsSalvos = JSON.parse(localStorage.getItem("leads_agencia"));

console.log("=== RELATÓRIO GERAL DA AGÊNCIA DE IA ===");

// 4. Filtrando apenas os projetos que estão "Em Andamento" (.filter)
const projetosEmAndamento = leadsSalvos.filter(lead => lead.status === "Em Andamento");

console.log("\n--- Projetos em Andamento ---");
projetosEmAndamento.forEach(lead => {
    console.log(`- ${lead.empresa} (${lead.nome}): ${lead.projeto} [R$ ${lead.valor}]`);
});

// 5. Mapeando e somando o Faturamento Total da Agência (.map e .reduce)
const valores = leadsSalvos.map(lead => lead.valor);
const faturamentoTotal = valores.reduce((total, valor) => total + valor, 0);

console.log("\n--- Resumo Financeiro ---");
console.log(`Total de Leads Cadastrados: ${leadsSalvos.length}`);
console.log(`Faturamento Total Previsto/Realizado: R$ ${faturamentoTotal}`);