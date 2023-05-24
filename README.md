<h1 align="center"> Copy code without prompts</h1>
<p align="center">
This small add-on removes the characters '$' (by default) and/or '#','>' (of your choice) from the beginning of each line in console code blocks on <strong>github</strong>, thanks to the iteration of html page elements containing code blocks.
<br><br>
<a href="https://addons.mozilla.org/en-US/firefox/addon/copy-code-without-prompts/">
   <img alt="get the add-on from firefox add-ons" src="https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg" width="129" height="45">
</a>
<a href="https://microsoftedge.microsoft.com/addons/detail/copy-code-without-prompts/blkgmfpbljbbhkmpmpebjokgeblpccpl">
   <img alt="get the add-on from microsoft edge add-ons" src="https://get.microsoft.com/images/en-us%20dark.svg" width="129" height="45"/>
</a>
</p>

## Preface
**Note:** You can choose which characters will be removed from the beginning of the lines of code blocks by selecting them from the pop-up menu (click on the add-on icon in the extensions menu to the left of the main menu).

I decided to create this extension when I started seeing similar blocks of code often:
```console
$ cd dir && cmake && make
# [some console command]
> [some console command]
```
Now, after creating this extension, I can no longer worry about deleting every character. '$','#','>' from my terminal!
The previous code will be copied without prompts:
```console
 cd dir && cmake && make
 [some console command]
 [some console command]
```
## compatibility
Use add-on: from the "**chromium**" branch for Chromium based browser, from the "**main**" branch for firefox
