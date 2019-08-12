This branch presents project with whole lib (DotPay SDK) added to platforms/ios directory. 
Info.plist was modified - I changed CFBundlePackageType entry from BNDL to FMWK. It allows build to complete sucessfully and generate typings, but typing for DotPaySDK are missing - and the effect is the same like attaching the Podfile - 

```
CONSOLE ERROR [native code]: ERROR ReferenceError: Can't find variable: DotPay
CONSOLE ERROR [native code]: ERROR CONTEXT {
"view": {
"def": {
"nodeFlags": 33603585,
"rootNodeFlags": 33554433,
"nodeMatchedQueries": 0,
"flags": 0,
"nodes": [
{
"nodeIndex": 0,
"parent": null,
"renderParent": null,
"bindingIndex": 0,
"outputIndex": 0,
"checkIndex": 0,
"flags": 33554433,
"childFlags": 49152,
"directChildFlags": 49152,
"childMatchedQueries": 0,
"matchedQueries": {},
"matchedQueryIds": 0,
"references": {},
"ngContentIndex": null,
"childCount": 1,
"bindings": [
{
"flags": 8,
"ns": "",
"name": "title",
"nonMinifiedName": "title",
"securityContext": 0
}
],
"bindingFlags": 8,
"outputs": [],
"element": {
"ns": "",
"name": "ActionBar"<…>
```

