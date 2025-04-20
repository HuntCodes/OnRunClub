# OnRunClub Project Context

## Development Environment Setup
- **Local Environment (Cursor)**: Used as an editor only due to outdated OS limitations
  - Node.js version: 8.6.0 (outdated)
  - Cannot run Expo directly

- **GitHub CodeSpaces**: Primary development environment
  - Used for running the application
  - Has correct Node.js version for Expo
  - Where `npm install` and `expo start` commands should be run

## Project Structure
```
OnRunClub/
├── frontend/
│   ├── src/
│   │   ├── screens/         # React Native screens
│   │   ├── navigation/      # React Navigation setup
│   │   └── config/         # Configuration files (e.g., Supabase)
│   ├── assets/            # App icons and images
│   └── .env              # Environment variables (not in git)
└── backend/              # Backend services
```

## Key Configuration
- **Supabase**: Used for backend services
  - Configuration in `src/config/supabase.js`
  - Requires `.env` file in CodeSpaces with:
    ```
    EXPO_PUBLIC_SUPABASE_URL=your_url
    EXPO_PUBLIC_SUPABASE_ANON_KEY=your_key
    ```

## Development Workflow
1. Edit code in Cursor (local)
2. Push changes to GitHub
3. Pull changes in CodeSpaces
4. Run/test in CodeSpaces
5. Use Expo Go app to test on mobile devices

## Important Notes
- Never commit `.env` file (contains sensitive credentials)
- Always use `--tunnel` flag when starting Expo in CodeSpaces
- Asset paths in `app.json` should not include `./` prefix 