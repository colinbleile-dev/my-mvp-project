# Skill Swap (MVP)

A peer-to-peer student skill-sharing platform verified via `.edu` institutional emails.

## Live Deployment
- **Deployed App:** https://my-mvp-project.onrender.com

## Architecture & Design Patterns
- **MVC Pattern:** Separated into `src/models` (data layer), `src/controllers` (business logic & validation), and `src/routes` (API endpoints).

## Setup & Local Usage
1. Clone the repository: `git clone https://github.com/colinbleile-dev/my-mvp-project.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Testing
- Run unit tests with Jest and Supertest: `npm test`
- Covers valid `.edu` registration and error handling for non-`.edu` emails.

## Known Limitations & Future Enhancements
- Currently uses in-memory storage; Sprint 2 will integrate persistent database storage, user skill listings, and session booking.
