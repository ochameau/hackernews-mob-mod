Prototype of mobile jetpack addon
=================================

This addon example use page-mod API to improve Hacker news rendering
on Firefox Mobile.

It uses work in progress made on page-mod support on Firefox mobile in the following
branch: <br/>
https://github.com/ochameau/addon-sdk/tree/page-mod-mobile

You can run it on Fennec for desktop using:

>  cfx --force-mobile -b /path/to/.../fennec.exe run

Or build a XPI file and install it manually on your mobile device:

>  cfx --force-mobile xpi

Or, if you merge with the following branch that is about to land, 
you can automatically launch it on your Android device: <br/>
https://github.com/ochameau/addon-sdk/tree/device-support

>  cfx -a fennec-on-device -b /path/to/.../adb.exe --force-mobile run

> * You will need to install ADB tool:<br/>
>   http://developer.android.com/guide/developing/tools/adb.html <br/>
> * And connect your device via USB in debugging mode:<br/>
>  - Turn on "USB Debugging" on your device.<br/>
>  - On the device, go to Settings > Applications > Development and enable USB
>   debugging.

Or you can download a sample XPI file from:

>  https://github.com/downloads/ochameau/hackernews-mob-mod/hackernews-mob-mod.xpi