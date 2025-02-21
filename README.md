# Tapestry Protocol Template

This is a Next.js application that demonstrates key features of the [Tapestry](https://www.usetapestry.dev/) Protocol. Use this as a starting point for integrating social features into your Solana dApp.

🔑 **Get API Key**: [app.usetapestry.dev](https://app.usetapestry.dev)  
📚 **API Reference**: [docs.usetapestry.dev/api](https://docs.usetapestry.dev/api)

## Features

### 1. Profile Management

- Create new profiles with username and wallet address
- View profile information including follower/following counts
- List all profiles in the system
- Get suggested profiles based on wallet address

**API Endpoints Used:**

- `POST /profiles/findOrCreate` - Create new profile
- `GET /profiles/{username}` - Get profile details
- `GET /profiles` - List all profiles
- `GET /profiles/suggested/{walletAddress}` - Get suggested profiles

### 2. Social Connections

- Follow/unfollow other users
- View followers list
- View following list

**API Endpoints Used:**

- `POST /followers/add` - Follow a user
- `POST /followers/remove` - Unfollow a user
- `GET /profiles/{username}/followers` - Get user's followers
- `GET /profiles/{username}/following` - Get user's following list

### 3. Comments

- Create comments on content
- Support for nested comments (replies)

**API Endpoints Used:**

- `POST /comments` - Create new comment

## Getting Started

### 0. Prerequisites

- Node.js 16+
- Yarn package manager
- Solana wallet (Phantom, Solflare, etc.)

### 1. Get Your API Key

Before you begin, you'll need to get a Tapestry API key:

1. Visit [app.usetapestry.dev](https://app.usetapestry.dev)
2. Create an account or sign in
3. Create a new API key
4. Copy your API key - you'll need it for the next step

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```bash
TAPESTRY_API_KEY=xxx
TAPESTRY_URL=https://protocol-server.fly.dev/v1
```

Install the dependencies

```bash
yarn install

```

## Start the app

```bash
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tapestry Endpoints

Tapestry endpoints are defined in the file `tapestry.ts`
