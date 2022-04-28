## About The App
Zpol for Android & iOS built using React Native has basic Authentication Flow using React Navigation v6.

## Requirements

- Node 12 or newer
- Java SE Development Kit (JDK) version 8 or newer
- Android Studio

## Development

```bash
# Clone the repo
git clone   
cd zpol  

# Dependencies  
npm install  

# Copy .env.example to .env
cp .env.example .env

# iOS only  
cd ios && pod install && cd ..  

# Run iOS  
npx react-native run-ios  

# Run Android  
npx react-native run-android  

```

## Note

- In android/local.properties add following line: sdk.dir = YOUR_ANDROID_SDK_PATH
