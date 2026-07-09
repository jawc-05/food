# eFood 🍽️

Um marketplace de delivery de comida moderna e responsiva, construído com React, Vite e Redux. O eFood conecta usuários a diversos restaurantes, permitindo explorar cardápios, adicionar itens ao carrinho e finalizar pedidos de forma integrada.

**🌐 Demo ao vivo:** [efood-five-self.vercel.app](https://efood-five-self.vercel.app)

---

## ✨ Recursos Principais

- 📱 **Interface responsiva** - Funciona perfeitamente em desktop, tablet e mobile
- 🏪 **Catálogo de restaurantes** - Visualize restaurantes em destaque com avaliações e descrições
- 🍽️ **Cardápio dinâmico** - Acesse o menu de cada restaurante com fotos, descrições e preços
- 🛒 **Carrinho de compras** - Adicione, remova e visualize itens selecionados
- 💳 **Checkout completo** - Formulário de entrega e pagamento integrado
- 🎨 **Design moderno** - Interface limpa com Styled Components

---

## 🛠️ Stack Tecnológico

- **Frontend:** React 19 + Vite
- **Estado:** Redux Toolkit + React Redux
- **Roteamento:** React Router v7
- **Estilização:** Styled Components
- **Linter:** Oxlint
- **Deploy:** Vercel

---

## 📁 Estrutura do Projeto

```
efood/
├── src/
│   ├── components/        # Componentes reutilizáveis (Card, Cart, Modal, Hero)
│   ├── pages/            # Páginas da aplicação (Home, Restaurant)
│   ├── store/            # Redux store e reducers (cart)
│   ├── routes/           # Configuração de rotas
│   ├── styles/           # Estilos globais
│   ├── assets/           # Imagens e ícones
│   ├── App.jsx           # Componente raiz
│   └── main.jsx          # Ponto de entrada
├── public/               # Arquivos estáticos
├── package.json          # Dependências e scripts
├── vite.config.js        # Configuração do Vite
└── index.html            # HTML principal
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/jawc-05/food.git
cd food/efood
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no navegador

### Build para produção
```bash
npm run build
```

### Visualizar build
```bash
npm run preview
```

### Verificar qualidade do código
```bash
npm run lint
```

---

## 🔄 Fluxo da Aplicação

```
Home (Lista de Restaurantes)
  ↓
Clique em um restaurante
  ↓
Página do Restaurante (Cardápio)
  ↓
Adicionar itens → Modal de Detalhes
  ↓
Carrinho (Sidebar)
  ↓
Checkout → Entrega → Pagamento
  ↓
Pedido Confirmado ✅
```

---

## 🔌 API

A aplicação consome dados da API EBAC:
- **Base URL:** `https://api-ebac.vercel.app/api/efood`
- **Endpoints principais:**
  - `GET /restaurantes` - Lista todos os restaurantes
  - `POST /checkout` - Finaliza o pedido

---

## 📦 Dependências Principais

| Pacote | Versão | Propósito |
|--------|--------|----------|
| react | ^19.2.7 | Library React |
| react-router-dom | ^7.18.1 | Roteamento SPA |
| @reduxjs/toolkit | ^2.12.0 | Gerenciamento de estado |
| styled-components | ^6.4.3 | CSS-in-JS |
| vite | ^8.1.1 | Build tool |

---

## 📝 Licença

Este projeto está disponível sob licença aberta. Sinta-se livre para usar e modificar.

---

## 👨‍💻 Autor

**jawc-05** - [GitHub](https://github.com/jawc-05)

---

## 💡 Próximos Passos (Ideias para Contribuição)

- [ ] Adicionar filtros e busca de restaurantes
- [ ] Sistema de favoritos
- [ ] Histórico de pedidos
- [ ] Autenticação de usuário
- [ ] Testes automatizados
- [ ] Dark mode

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para abrir issues e pull requests.

1. Fork o repositório
2. Crie sua branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

**Desenvolvido com ❤️ usando React e Vite**
