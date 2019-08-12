This branch presents project with whole lib (DotPay SDK) added to platforms/ios directory.
It is not compiling correctly (and not generating typings)

Output available after running this command:
```
TNS_TYPESCRIPT_DECLARATIONS_PATH="$(pwd)/typings" tns build ios
```

And giving this error (not generating typings at all): 
```
The bundle at $PROJECT_PATH/nativescript-dotpay-ios-sdk-showcase/node_modules/tns-unmodified-dotpay-sdk/platforms/ios/DotPaySDK.framework does not appear to be a dynamic framework.
```

Building with command (trace logging) 
```
tns build ios --log trace
```

Gives a hint, that something is wrong when running these lines from ios-project-service.js
```
  const packageType = plistJson["CFBundlePackageType"];
        if (packageType !== "FMWK") {
            this.$errors.failWithoutHelp("The bundle at %s does not appear to be a dynamic framework.", libraryPath);
        }
```

So, on the branch **modified-sdk-source** you can find version with Info.plist modified manually