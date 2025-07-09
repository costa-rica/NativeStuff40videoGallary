# React Native Stuff 40 Video Gallery

## Description

React native mobile app testing template. Set up with navigation to access different screens in screens/.

## Video Gallery

### 1. Installations

`npx expo install expo-image-picker`

#### OBE

I installed this but it seems the expo-image-picker works without react-native-image-picker
`yarn add react-native-image-picker`

##### ios

`npx pod-install`

## Environment Variables

- store in: .env.local

```env
EXPO_PUBLIC_API_URL=http://192.168.1.193:3000
```

## Installations

### 1. Navigation

```
yarn add @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

## Rename project

To clone: `git clone git@github.com:costa-rica/NativeStuffTemplate.git <optional new folder name>`

### 1. app.json

```
{
  "expo": {
    "name": "NewAppName",
    "slug": "new-app-name",
    ...
  }
}
```

### 2. package.json

```
{
  "name": "new-app-name",
  ...
}
```
