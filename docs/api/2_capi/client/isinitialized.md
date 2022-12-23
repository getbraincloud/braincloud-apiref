# IsInitialized
## Overview
Returns whether the <%= data.branding.codeClient %> has been initialized using the Initialize() method.

<PartialServop service_name="event" operation_name="UPDATE_EVENT_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
bool isInitialized = <%= data.branding.codePrefix %>.Initialized;
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
bool isInitialized = <%= data.branding.codePrefix %>->isInitialized();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
bool isInitialized = [<%= data.branding.codePrefix %> isInitialized];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
boolean isInitialized = <%= data.branding.codePrefix %>.isInitialized();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var isInitialized = <%= data.branding.codePrefix %>.isInitialized();
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
var isInitialized = <%= data.branding.codePrefix %>.isInitialized();
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
var isInitialized = <%= data.branding.codePrefix %>.isInitialized();
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```javascript
var isAuthenticated = <%= data.branding.codePrefix %>.isAuthenticated();
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | The profile id of the user
anonymousId | The anonymous id of the user

