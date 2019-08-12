This branch presents project with whole lib (DotPay SDK) added to platforms/ios directory. 
Info.plist was modified - I changed CFBundlePackageType entry from BNDL to FMWK. It allows build to complete sucessfully and generate typings, but typing for DotPaySDK are missing. Application crashes instantly after splash screen. After opening this in XCode, it looks like it lacks the dependency

```
dyld: Library not loaded: @rpath/VisaCheckoutSDK.framework/VisaCheckoutSDK
```
