# Neto Predileto
Projeto para conectar famílias a acompanhantes para idosos.

### Requisitos

- Node.js (versão recomendada: 18 ou superior)
- npm (vem com o Node.js)

### Instalação

Clone o repositório e instale as dependências:

```bash
git clone [url-do-repositorio]
cd [nome-do-diretorio]
npm install
```


### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor iniciará em `http://localhost:3000` (ou outra porta, caso esta esteja ocupada).

### Construção (Build)

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados no diretório `dist/`.

### Visualizar build localmente

Para testar a build de produção localmente:

```bash
npm run preview
```

### Linting

Para verificar problemas no código:

```bash
npm run lint
```

### Testes

Para executar os testes:

```bash
npm test
```

### Tecnologias principais

- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Magic UI

### Estrutura do projeto

- `src/` - Código fonte do projeto
    - `components/` - Componentes React
    - `assets/` - Imagens e outros recursos estáticos
