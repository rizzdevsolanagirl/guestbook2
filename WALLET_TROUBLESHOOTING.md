# Wallet Connection Troubleshooting Guide

## Phantom Wallet Connection Issues

If you're having trouble connecting your Phantom wallet to the Builders Mansion app, follow these steps:

### 1. Check Environment Variables

Make sure you have the required environment variables set up in your `.env.local` file:

```env
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id_here
TAPESTRY_API_KEY=your_tapestry_api_key_here
```

**To get a Privy App ID:**
1. Go to [Privy Console](https://console.privy.io/)
2. Create a new app or use an existing one
3. Copy the App ID from your dashboard
4. Add it to your `.env.local` file

### 2. Phantom Wallet Setup

**Make sure Phantom is properly installed:**
1. Install Phantom from [phantom.app](https://phantom.app/)
2. Create or import a wallet
3. Make sure you're on the Solana network
4. Ensure you have some SOL for transactions

**Check Phantom settings:**
1. Open Phantom extension
2. Go to Settings → Developer Settings
3. Make sure "Allow all sites to connect" is enabled (for development)
4. Or add `localhost:3000` to the allowed sites list

### 3. Reconnection Issues After Disconnect

**If you can't reconnect after disconnecting:**

1. **Use the Debug Tool** (New Feature):
   - Look for the bug icon (🐛) in the bottom-right corner
   - Click it to open the connection debug panel
   - Check the status of "Ready" and "Authenticated"
   - Copy the debug info if you need help

2. **Force Page Refresh**:
   - The app now automatically refreshes after disconnect
   - If that doesn't work, manually refresh the page (Ctrl+R / Cmd+R)

3. **Clear Browser Cache**:
   - Open browser developer tools (F12)
   - Right-click the refresh button
   - Select "Empty Cache and Hard Reload"

4. **Check Phantom Extension**:
   - Make sure Phantom is unlocked
   - Try disconnecting from Phantom's side:
     - Open Phantom extension
     - Go to Settings → Trusted Apps
     - Remove the localhost entry
     - Try connecting again

5. **Restart Development Server**:
   ```bash
   # Stop the server (Ctrl+C)
   pnpm dev
   ```

6. **Check Console for Errors**:
   - Open browser developer tools (F12)
   - Go to Console tab
   - Look for any error messages
   - The app now logs connection attempts

### 4. Browser Issues

**Clear browser cache and cookies:**
1. Open browser developer tools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

**Check browser console for errors:**
1. Open developer tools (F12)
2. Go to Console tab
3. Look for any red error messages
4. Common errors and solutions:
   - `Privy not initialized`: Check your `NEXT_PUBLIC_PRIVY_APP_ID`
   - `Wallet not found`: Make sure Phantom is installed
   - `Network error`: Check your internet connection

### 5. Network Issues

**Make sure you're on the right network:**
1. In Phantom, check the network selector
2. For development, use "Devnet" or "Mainnet"
3. Make sure you have SOL in your wallet

### 6. Connection State Issues

**Fixed Issues:**
- ✅ **Duplicate Phantom wallets**: Now configured for Solana-only to prevent duplicates
- ✅ **Wallet not showing when connected**: Now shows wallet address even without profile
- ✅ **Poor disconnect flow**: Improved logout handling with proper state management
- ✅ **Reconnection issues**: Added automatic page refresh and better error handling

**New Features:**
- **Wallet Status Indicator**: Shows connection state clearly
- **Better Dropdown**: Shows wallet info and profile status separately
- **Improved Disconnect**: Clean logout with proper state reset
- **Connection Debug Tool**: Debug panel to troubleshoot issues
- **Error Messages**: Clear error feedback for connection problems

### 7. Alternative Solutions

**Try different browsers:**
- Chrome (recommended)
- Firefox
- Safari
- Edge

**Try different wallet options:**
- Solflare
- Backpack
- Glow
- Any other Solana wallet

### 8. Development Server

**Restart the development server:**
```bash
# Stop the current server (Ctrl+C)
# Then restart
pnpm dev
```

**Check if the server is running properly:**
1. Open `http://localhost:3000` in your browser
2. You should see the Builders Mansion homepage
3. The "Connect Wallet" button should be visible in the header

### 9. Common Error Messages

**"Wallet not found"**
- Solution: Install Phantom extension
- Make sure it's enabled in your browser

**"User rejected the request"**
- Solution: Check Phantom popup and approve the connection
- Make sure popup blockers are disabled

**"Network error"**
- Solution: Check your internet connection
- Try refreshing the page

**"Privy not initialized"**
- Solution: Check your `NEXT_PUBLIC_PRIVY_APP_ID` environment variable
- Make sure the app is restarted after adding the variable

**"Duplicate wallet options"**
- ✅ **Fixed**: Now configured for Solana-only to prevent duplicates

**"Can't reconnect after disconnect"**
- ✅ **Fixed**: Added automatic page refresh and better state management
- Use the debug tool to check connection status

### 10. Testing the Connection

**Step-by-step test:**
1. Open `http://localhost:3000`
2. Click "Connect Wallet" in the header
3. Select "Phantom" from the wallet list (should only appear once)
4. Approve the connection in Phantom popup
5. You should see your wallet address in the header (even without profile)
6. Click the wallet dropdown to see options
7. Test disconnect and reconnect

### 11. Wallet Management

**To disconnect:**
1. Click on your wallet address in the header
2. Click "Disconnect Wallet" in the dropdown
3. The page should automatically refresh
4. You should see "Connect Wallet" again

**To reconnect:**
1. Click "Connect Wallet"
2. Select Phantom from the list
3. Approve the connection
4. If it doesn't work, use the debug tool to check status

**To check connection status:**
- Look for the wallet icon and address in the header
- Use the debug tool (bug icon) in bottom-right corner
- Green checkmark = connected
- Red X = not connected
- Yellow wallet = connecting

### 12. Debug Tool Usage

**How to use the debug tool:**
1. Look for the bug icon (🐛) in the bottom-right corner
2. Click it to open the debug panel
3. Check the status indicators:
   - **Ready**: Should be "Yes" (green)
   - **Authenticated**: Should be "Yes" (green) when connected
   - **Wallet Address**: Should show your address when connected
4. Use "Copy Debug Info" to share with support
5. Use "Refresh Page" button to reload

### 13. Still Having Issues?

**Check the logs:**
```bash
# Run with verbose logging
DEBUG=* pnpm dev
```

**Contact support:**
- Create an issue in the GitHub repository
- Include your browser, OS, and error messages
- Share any console errors you see
- Include debug info from the debug tool

### 14. Quick Fix Checklist

- [ ] Phantom wallet installed and unlocked
- [ ] Environment variables set correctly
- [ ] Development server running (`pnpm dev`)
- [ ] Browser cache cleared
- [ ] Popup blockers disabled
- [ ] Phantom extension enabled
- [ ] On correct Solana network
- [ ] Have SOL in wallet
- [ ] No duplicate wallet options (fixed)
- [ ] Wallet shows in header when connected (fixed)
- [ ] Can disconnect properly (fixed)
- [ ] Can reconnect after disconnect (fixed)
- [ ] Debug tool shows correct status (new)

---

**Need more help?** Check the [Privy documentation](https://docs.privy.io/) or [Phantom support](https://phantom.app/help). 