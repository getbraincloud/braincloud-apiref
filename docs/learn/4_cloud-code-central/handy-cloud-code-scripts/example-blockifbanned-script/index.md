---
title: "BlockIfBanned script"
date: "2018-08-17"
---

### Purpose

This script blocks a banned user from attempting to log into the app.

Banned users will be flagged by attaching a "banned" attribute to them, and setting it to "true." The script will optionally look for a "ban\_reason" attribute to return in the response.

Attributes can be assigned to users via the [UpdateAttributes()](https://staging.getbraincloud.com/apidocs/apiref/index.html#capi-playerstate-updateattributes)  API call, or directly via the [Monitoring | User Monitoring | Attributes](https://portal.braincloudservers.com/admin/dashboard#/monitoring/player-attributes) page of the portal.

### Script

Click [BlockIfBanned.ccjs.zip](script/BlockIfBanned.ccjs.zip) to download the file.

### Usage / Setup

To configure this script, simply import it into your app.

The script assumes any authenticate call made with a profile containing a "banned": "true" user attribute should be blocked.

Set the script to run on every authenticate call by setting it as a [Post API Hook](https://staging.getbraincloud.com/apidocs/tutorials/cloud-code-tutorials/cc-tutorial-4-pre-and-post-hooks/) on Authenticate.
