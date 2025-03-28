# News Aggregator App

## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **UI Library**: Material UI (MUI)
- **API Requests**: ReactQuery
- **Containerization**: Docker & Docker Compose

## Note

- For the sake of this project API keys are in compose file so no need to provide one, on real project it will be injected at CI/CD
- `Trouble shoot` Running too many activities might cause api key to run out of quota, though `New York Times` and `The Guardian` have high request intake, `NewsAPI` easily runnout with max request in 24hr=100
  - [News API](https://newsapi.org) you can get new key when quota runout
  - [The Guardian](https://open-platform.theguardian.com/access/) also here
  - [New York Times](https://developer.nytimes.com) also here

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the Application

1. Clone the repository:
   ```sh
   git clone https://github.com/Solomon198/News-Aggregator.git
   cd News-Aggregator
   ```
2. Run docker compose
   ```sh
   sudo docker compose up -d --build
   ```
3. View the app at `http://localhost:3000`
