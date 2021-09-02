# Manga-rh_frontend
Back-end for MangaRH, an rh management solution. Deployed <a href="https://manga-rh-frontend.vercel.app/registros"> here </a>!

## Routes

> /registros: Return all registered collaborators;

> /:name/validar: Return collaborator details and validate options;

> /:name/registrar: Register collaborator (name, cpf, email, phone, knowledges);

## How to run
1. Clone this repository
2. Install all dependencies
```bash
npm i
```
3. Configure the `.env` file using the `.env.example` file with your backend URL (configure <a href="https://github.com/mateuskuritza/Manga-rh-Backend"> here </a>).
4. Run the front-end in a development environment:
```bash
npm start
```
