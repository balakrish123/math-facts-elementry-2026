# 🔊 Merriam-Webster API Setup Guide

This guide explains how to enable **FREE** Merriam-Webster pronunciation for the spelling page.

## 📝 Step-by-Step Setup Instructions

### **Step 1: Create Free Account**

1. Open your web browser
2. Go to: **https://dictionaryapi.com/**
3. Click **"Register for FREE"** or **"Sign Up"** button
4. Fill out the registration form:
   - Email address
   - Password
   - Name (optional)
5. Verify your email (check inbox/spam)
6. Log in to your account

### **Step 2: Request Free API Key**

1. After logging in, go to **"My Keys"** section
2. Click **"Request API Key"** or **"New Key"**
3. Select **"Collegiate Dictionary"** (this is the one we need!)
4. Give it a name (e.g., "Elementary Spelling App")
5. Accept the terms of service
6. Click **"Submit"** or **"Create Key"**
7. **Copy your API key** - it will look like:
   ```
   12345678-abcd-1234-efgh-123456789012
   ```

### **Step 3: Add API Key to Your Code**

1. Open `spelling.html` in a text editor
2. Find line **82** (look for this section):
   ```javascript
   const MERRIAM_WEBSTER_API_KEY = 'YOUR_API_KEY_HERE'; // Replace this!
   ```
3. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const MERRIAM_WEBSTER_API_KEY = '12345678-abcd-1234-efgh-123456789012';
   ```
4. Save the file

### **Step 4: Test It**

1. Open `spelling.html` in your browser
2. Click "Start ▶️"
3. Listen to the word pronunciation
4. Check browser console (F12) for any errors

If you see "M-W API unavailable, using fallback" in console, the API key may be incorrect or you don't have internet.

## 🎯 How It Works

### **Smart Fallback System:**

```
1. Try Merriam-Webster API first
   ├─ If API key is configured → Fetch audio from M-W
   ├─ If audio found → Play MP3 file (high quality!)
   └─ If failed → Continue to step 2

2. Fallback to Web Speech API
   └─ Use browser's built-in text-to-speech
```

### **Benefits:**

✅ **Better Pronunciation** - Real recorded audio from Merriam-Webster
✅ **Works Offline** - Falls back to Web Speech API if no internet
✅ **Free Forever** - 1,000 requests/day (plenty for classroom use)
✅ **No Downloads Needed** - Fetches audio on-demand
✅ **Legal & Compliant** - Using official API as intended

## 📊 API Limits

- **Free Tier**: 1,000 requests/day
- **Cost**: $0 (completely free)
- **Audio Format**: MP3 (high quality)
- **Coverage**: 100,000+ words in Collegiate Dictionary

### **Usage Estimate:**
- **50 words/day** = 5% of daily limit
- **100 words/day** = 10% of daily limit
- **500 words/day** = 50% of daily limit

For a classroom, this is plenty!

## 🔧 Troubleshooting

### **Problem: Hearing computer voice instead of real audio**

**Solution:**
1. Check API key is correct in `spelling.html` line 82
2. Check internet connection
3. Open browser console (F12) - look for errors
4. Verify you didn't exceed 1,000 requests/day

### **Problem: Console shows "Failed to fetch"**

**Solution:**
1. Check internet connection
2. Verify API key is active (log in to dictionaryapi.com)
3. Make sure you're using the **Collegiate Dictionary** key (not Learner's or Thesaurus)

### **Problem: Some words don't have audio**

**Solution:**
- Not all words have audio files in M-W database
- The code automatically falls back to Web Speech API
- This is normal and expected

## 🎓 Educational Use

This implementation is **100% legal** for educational purposes:
- ✅ Using official API with free tier
- ✅ Fetching audio on-demand (not downloading)
- ✅ Within terms of service
- ✅ Properly attributed

## 🚀 Advanced: Add Loading Indicator (Optional)

If you want to show when audio is loading:

```javascript
// Add this in spelling.html before the audio fetch
const pronounceBtn = document.getElementById('pronounceBtn');
pronounceBtn.textContent = '🔄 Loading...';
pronounceBtn.disabled = true;

// After audio plays
pronounceBtn.textContent = '🔊 Play Word';
pronounceBtn.disabled = false;
```

## 📞 Support

**Merriam-Webster API Support:**
- Website: https://dictionaryapi.com/
- Documentation: https://dictionaryapi.com/products/api-collegiate-dictionary
- Contact: support@dictionaryapi.com (for API issues)

**Having trouble?** The code will still work without the API key - it just uses the browser's text-to-speech instead.

---

## ✅ Quick Checklist

- [ ] Created account at dictionaryapi.com
- [ ] Requested Collegiate Dictionary API key
- [ ] Copied API key
- [ ] Pasted API key into spelling.html line 82
- [ ] Saved the file
- [ ] Tested in browser
- [ ] Heard high-quality pronunciation

**Once complete, you'll have professional Merriam-Webster pronunciation for all 750 spelling words!** 🎉
