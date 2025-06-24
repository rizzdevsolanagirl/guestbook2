# Builders Mansion Guestbook App

A virtual guestbook application built on Solana for web3 builders to connect, share experiences, and leave their mark on the blockchain ecosystem.

## 🏗️ Overview

Builders Mansion is a social platform that allows participants to:
- Connect their wallet and create profiles
- Share their experiences from different cohorts and weeks
- Express their mood and feelings about their journey
- Add highlights, tags, and personal insights
- Interact with other builders' entries
- View community statistics and trends

## ✨ Features

### 🔐 Wallet Integration
- Seamless wallet connection using Privy
- Support for both Ethereum and Solana wallets
- On-chain identity management

### 📝 Guestbook Entries
- **Rich Content**: Share messages, experiences, highlights, and tags
- **Cohort & Week Tracking**: Organize entries by cohort and week
- **Mood Expression**: Express feelings with 5 different mood options
- **Privacy Controls**: Choose between public and private entries
- **Social Features**: Like and comment on entries

### 🎯 Filtering & Discovery
- Filter by cohort, week, and mood
- Search and discover other builders' experiences
- View community statistics and trends

### 📊 Community Insights
- Real-time statistics dashboard
- Popular tags and trends
- Community mood analysis
- Activity tracking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Solana wallet (Phantom, Solflare, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd solana-starter-kit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with:
   ```env
   TAPESTRY_API_KEY=your_tapestry_api_key
   NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏛️ Architecture

### Frontend
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons

### Backend
- **Next.js API Routes** for backend functionality
- **SocialFi SDK** for profile management
- **Mock data storage** (can be replaced with database)

### Key Components

```
src/
├── app/
│   ├── guestbook/
│   │   └── page.tsx              # Main guestbook page
│   └── api/
│       └── guestbook/
│           ├── route.ts          # Guestbook CRUD operations
│           └── stats/
│               └── route.ts      # Statistics endpoint
├── components/
│   └── guestbook/
│       ├── guestbook-entry-form.tsx    # Entry creation form
│       ├── guestbook-entry.tsx         # Individual entry display
│       ├── guestbook-stats.tsx         # Statistics dashboard
│       └── hooks/
│           ├── use-guestbook-entries.ts
│           ├── use-create-guestbook-entry.ts
│           └── use-guestbook-stats.ts
└── models/
    └── guestbook.models.ts       # TypeScript interfaces
```

## 📱 Usage

### 1. Connect Wallet
- Click "Log in" in the header
- Connect your Solana or Ethereum wallet
- Create a profile if you don't have one

### 2. Sign the Guestbook
- Navigate to `/guestbook`
- Click "Sign Guestbook" to open the form
- Fill in your experience details:
  - **Message**: Your main guestbook entry
  - **Cohort**: Select your cohort (Alpha, Beta, etc.)
  - **Week**: Choose your week (1-8)
  - **Experience**: Describe your main achievement
  - **Highlights**: Add key moments and achievements
  - **Tags**: Add relevant tags
  - **Mood**: Express how you feel
  - **Privacy**: Choose public or private

### 3. Explore & Interact
- Browse other builders' entries
- Use filters to find specific content
- Like and comment on entries
- View community statistics

## 🎨 Customization

### Styling
The app uses Tailwind CSS with a dark theme. Key color variables:
- Primary: Purple (`purple-500`, `purple-600`)
- Secondary: Pink (`pink-500`, `pink-600`)
- Background: Black (`black`)
- Text: White (`white`) and Gray (`gray-400`)

### Configuration
- **Cohorts**: Modify `COHORT_OPTIONS` in guestbook components
- **Weeks**: Update `WEEK_OPTIONS` array
- **Moods**: Customize `MOOD_OPTIONS` with new emotions

## 🔧 Development

### Adding New Features
1. Create new components in `src/components/guestbook/`
2. Add corresponding hooks in `src/components/guestbook/hooks/`
3. Update models in `src/models/guestbook.models.ts`
4. Add API routes in `src/app/api/guestbook/`

### Database Integration
Currently using mock data. To integrate a real database:
1. Replace mock storage in API routes
2. Add database connection (PostgreSQL, MongoDB, etc.)
3. Implement proper data persistence
4. Add caching layer for performance

### Testing
```bash
# Run tests
pnpm test

# Run linting
pnpm lint

# Type checking
pnpm type-check
```

## 🌟 Future Enhancements

### Planned Features
- **NFT Integration**: Mint guestbook entries as NFTs
- **Real-time Chat**: Live messaging between builders
- **Event Calendar**: Track upcoming events and deadlines
- **Achievement System**: Badges and rewards for participation
- **Analytics Dashboard**: Advanced community insights

### Technical Improvements
- **Database Migration**: Replace mock data with real database
- **Caching**: Implement Redis for better performance
- **Search**: Add full-text search capabilities
- **Notifications**: Real-time notifications for interactions
- **Mobile App**: React Native mobile application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built on the [Solana Starter Kit](https://github.com/Primitives-xyz/solana-starter-kit)
- Uses [Privy](https://privy.io/) for wallet authentication
- Powered by [SocialFi](https://socialfi.com/) for social features
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Join our Discord community
- Email: support@buildersmansion.com

---

**Built with ❤️ for the web3 community** 