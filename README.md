# NutriCare - Frontend 

<br />

<div align="center">
    <img src="https://ik.imagekit.io/vjqejp2vh/proj03/Logo%20NutriCare%20Transparente.png" alt="Logo NutriCare" width="40%"/>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

<br /><br />

## 1. Descrição

O **NutriCare** é uma plataforma inteligente focada em alimentação saudável e saborosa. O projeto nasceu para transformar a experiência de delivery em um ato de cuidado e consciência nutricional, oferecendo transparência total através de uma API robusta. O objetivo é permitir que o usuário tenha controle absoluto sobre o que consome, unindo a praticidade de um catálogo digital ao rigor das informações dietéticas e calóricas.

------

## 2. 🚀 Deploy da Aplicação

O projeto já está no ar e disponível para uso! Você pode acessar a plataforma completa e testar suas funcionalidades diretamente no link abaixo:

🔗 **[Acessar o NutriCare](https://nutricare-allcare.netlify.app/)**

------

## 3. Recursos

📂 **Gestão de Catálogo e Pesquisa:** Listagem completa de produtos e pesquisa dinâmica por nome ou ID do prato. <br>
📈 **Inteligência Nutricional:** Atribuição de selos de qualidade nutricional (Nutri-Score). <br>
🔍 **Filtros Avançados:** Suporte nativo para categorização de dietas especiais (Vegano, Vegetariano, Sem Glúten e Zero Lactose). <br>
📊 **Controle Calórico:** Monitoramento preciso do valor energético (kcal) por porção. <br>
✨ **Interface Moderna:** Componentes estilizados com Tailwind CSS.

------

## 4. Protótipo e Capturas de Tela

<div align="center">
    <img src="https://ik.imagekit.io/vjqejp2vh/proj03/image.png?updatedAt=1776272465667" alt="Tela Inicial" width="90%"/>
  
</div>

<br /><br />

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%" valign="bottom">
      <img src="https://ik.imagekit.io/vjqejp2vh/proj03/image1.png?updatedAt=1776273472062" alt="Captura de Tela 1" width="95%"/>
    </td>
    <td align="center" width="50%" valign="bottom">
      <img src="https://ik.imagekit.io/vjqejp2vh/proj03/image2.png?updatedAt=1776273504613" alt="Captura de Tela 2" width="95%"/>
    </td>
  </tr>
  <tr>
    <td align="center"><b>Card de Receitas</b></td>
    <td align="center"><b>Formulário para Contato</b></td>
  </tr>

  <tr>
    <td colspan="2"><br><br></td>
  </tr>

  <tr>
    <td align="center" width="50%" valign="bottom">
      <img src="https://ik.imagekit.io/vjqejp2vh/proj03/image4.png" alt="Captura de Tela 3" width="95%"/>
    </td>
    <td align="center" width="50%" valign="bottom">
      <img src="https://ik.imagekit.io/vjqejp2vh/proj03/image5.png" alt="Captura de Tela 4" width="95%"/>
    </td>
  </tr>
  <tr>
    <td align="center"><b>Informações sobre o NutriCare</b></td>
    <td align="center"><b>Informações da Equipe</b></td>
  </tr>
</table>

------

## 5. Tecnologias

| Item                       | Descrição  |
| -------------------------- | ---------- |
| 🖥️ **Servidor** | Node JS    |
| ⌨️ **Linguagem de programação** | TypeScript |
| ⚛️ **Biblioteca** | React JS   |
| ⚡ **Build** | Vite       |
| 🎨 **Framework de Estilização** | Tailwind   |

---

## 6. Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v16+)
- API NestJS ([Repositório da API do NutriCare - Backend](https://github.com/Javascript13-Grupo02/Projeto-integrador-01-NutriCare))

---

## 7. Configuração e Execução

1. Clone o repositório do Projeto
2. Instale as dependências: `npm install`
3. Clone o repositório do Projeto Backend: [Link](https://github.com/Javascript13-Grupo02/Projeto-integrador-01-NutriCare)
4. Siga as instruções de **Configuração e Execução** descritas no README do Projeto Backend
5. Adicione o endereço de execução do projeto na variável de ambiente **VITE_API_URL**, no projeto React.
6. Execute o Projeto React: `npm run dev`
7. A aplicação React estará disponível no endereço: `http://localhost:5173`

---

## 8. Estrutura do Projeto

```plaintext
src/
│
├── components/       # Componentes reutilizáveis
├── contexts/         # Gerenciamento de estado global (ex: autenticação)
├── models/           # Estrutura de dados da aplicação
├── pages/            # Páginas da aplicação
├── services/         # Integração com a API (requisições HTTP)
├── utils/            # Funções auxiliares (alerts)
└── App.tsx           # Componente principal da aplicação
