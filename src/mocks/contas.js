const contas= [
    ativo=[ 
        {id: 0, nome: "Caixa", tipo:  "ativo", circular: true },
        {id: 1, nome: "Banco", tipo:  "ativo", circular: true },
        {id: 2, nome: "Aplicação financeira", tipo:  "ativo", circular: true },
        {id: 3, nome: "Contas a receber de clientes", tipo:  "ativo", circular: true },
        {id: 4, nome: "Estoque", tipo:  "ativo", circular: true },
        {id: 5, nome: "Impostos a recuperar", tipo:  "ativo", circular: true },
        {id: 6, nome: "Outros creditos", tipo:  "ativo", circular: true },     
        {id: 7, nome: "Aplicações financeiras", tipo:  "ativo", circular: false},
        {id: 8, nome: "Contas a receber de clientes", tipo:  "ativo", circular: false},
        {id: 9, nome: "Imposto de renda e contribuições", tipo:  "ativo", circular: false},
        {id: 10, nome: "Propriedades para investimentos", tipo:  "ativo", circular: false},
        {id: 11, nome: "Imobilizados", tipo:  "ativo", circular: false}
    ],
    passivo =
    [
        {id: 12, nome: "Emprestimos e financiamentos", tipo:  "passivo", circular: true},
        {id: 13, nome: "Arrendamentos", tipo:  "passivo", circular: true},
        {id: 14, nome: "Fornecedores", tipo:  "passivo", circular: true},
        {id: 15, nome: "Outras obrigações", tipo:  "passivo", circular: true},     
        {id: 16, nome: "Emprestimos e financiamentos", tipo:  "passivo", circular: false},
        {id: 17, nome: "Partes selecionadas", tipo:  "passivo", circular: false},
        {id: 18, nome: "Outras Obrigações", tipo:  "passivo", circular: false}
    ],
    pLiquido = 
    [        
        {id: 19, nome: "Capital social", tipo:  "pl", circular: null},
        {id: 20, nome: "Reserva de capital", tipo:  "pl", circular: null},
        {id: 21, nome: "Reserva de lucro", tipo:  "pl", circular: null},
        {id: 22, nome: "Reserva de incentivo fiscal", tipo:  "pl", circular: null},
        {id: 23, nome: "Outros resultados abrangentes", tipo:  "pl", circular: null},
        {id: 24, nome: "Lucros acumulados", tipo:  "pl", circular: null},
        {id: 25, nome: "Dividendos adicionais propostos", tipo:  "pl", circular: null}
    ]
]

export default contas;