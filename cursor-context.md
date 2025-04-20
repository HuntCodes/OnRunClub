# OnRunClub Project Context

# Cursor Context: OAC Run Club App

## 📱 App Overview
This app is an AI-powered run club experience built for On, inspired by their professional teams — OAC Global, OAC Europe, and OAC Oceania. Users choose a coach and receive weekly adaptive training plans based on their goals, fitness level, and feedback. A conversational AI coach guides the user with customized training, product suggestions, and motivational support — all while reflecting the style and philosophy of their chosen coach.

Key features:
- Weekly, dynamic training plans based on user input and coach philosophy.
- Conversational AI coach (powered by OpenAI) that adapts to user feedback, soreness, missed runs, and upcoming races.
- Integration with Supabase for user data, chat logs, preferences, and training plans.
- Product suggestions using real On products, tailored to workout type and weather.
- Future Garmin integration placeholder.
- UI inspired by On’s design language.

## 🛠️ Development Workflow

## Platform Setup:
- **Editor:** [Cursor](locally)
- **Version Control:** GitHub Codespaces
- **Testing:** iPhone with **Expo Go**
- **Local Dev Note:** macOS is outdated, so local dev with the latest `node.js`/`expo` is **not supported**

## Development Workflow:
1. All offline edits are done inside **Cursor** (autocompletions, AI prompts, iterative development).
2. Cursor changes are **pushed to GitHub Codespaces** for execution and testing.
3. Testing is done using **Expo Go** on an iPhone.
4. Backend is handled by **Supabase**.
5. AI coach runs using **OpenAI's GPT model**, and behavior is context-aware using stored user data.

## Cursor Instructions
- Be aware of the development limitations (old macOS).
- When generating or editing files, **ensure compatibility with GitHub Codespaces and Expo Go testing**.
- Prioritize simple, modular architecture that’s easy to test iteratively.
- Always assume this is a long-term project — suggestions should align with scalable best practices.
- Refer back to this file whenever unclear about the context.

## Development Environment Setup
- **Local Environment (Cursor)**: Used as an editor only due to outdated OS limitations
  - Node.js version: 8.6.0 (outdated)
  - Cannot run Expo directly

- **GitHub CodeSpaces**: Primary development environment
  - Used for running the application
  - Has correct Node.js version for Expo
  - Where `npm install` and `expo start` commands should be run

## Important Notes
- Never commit `.env` file (contains sensitive credentials)
- Always use `--tunnel` flag when starting Expo in CodeSpaces
- Asset paths in `app.json` should not include `./` prefix 