---
title: anniversary beta installation tutorial
date: 2019-03-03T06:42:02.036Z
author:
  - QHH
excerpt: This little tutorial shows how to install the anniversary beta.
---
Installation tutorial made by The Super Jew:
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rqn1TfGH0qU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. Download the new version (the file name is different compared to the image below but the process is the same).
![1 Extract 1](https://media.moddb.com/images/members/3/2784/2783391/profile/1_Extract_1.png)

2. Extract all the files and the folder from the RotR 1.1.zip file wherever you want (`Imperial.Splendour_Install.exe`, `IS_FileList.txt` and the folder `IS_Files`) _excluding_ the Empire Total War folder
![1 Extract 2](https://media.moddb.com/images/members/3/2784/2783391/profile/1_Extract_2.png)
![1 Extract 3](https://media.moddb.com/images/members/3/2784/2783391/profile/1_Extract_3.png)

3. Check if the marked files/folder is extracted:
![1 Extract 4](https://media.moddb.com/images/members/3/2784/2783391/profile/1_Extract_4.png)

4. Double click on the `Imperial.Splendour_Install.exe` file (perhaps you need to give the file admin allowance or let windows access it. If a firewall window pops up, click on further information and allow the file to be executed. No worries these are just the windows defender settings for unknown files.)

(4.1) If you have not installed [JAVA Runtime](https://www.java.com/en/download/) the installer will ask you to install it.

5. Follow the steps in the installer, most notably point the installer towards your "Empire Total War" folder. (NOT the "data" folder)
![2 Installer 1](https://media.moddb.com/images/members/3/2784/2783391/profile/2_Installer_1.png)
![2 Installer 2](https://media.moddb.com/images/members/3/2784/2783391/profile/2_Installer_2.png)

6. At the end of the process, the installer asks if you want creates an Imperial Splendour shortcut on your desktop and afterwards, if you want to launch RotR
![2 Installer 3](https://media.moddb.com/images/members/3/2784/2783391/profile/2_Installer_3.png)
![2 Installer 4](https://media.moddb.com/images/members/3/2784/2783391/profile/2_Installer_4.png)

7. To activate RotR start the launcher (basic setting is vanilla ETW) and click on "Switch", then the RotR lettering will appear
![3 Launcher 1](https://media.moddb.com/images/members/3/2784/2783391/profile/3_Launcher_1.png)
![3 Launcher 2](https://media.moddb.com/images/members/3/2784/2783391/profile/3_Launcher_2.png)

---

If it's not working please give us access to the content of your `IS_Launcher.log<` file. It's in the `[...]\Empire Total War` folder

If this leads to no solution, do the following (all files should be in the `\[...]\Empire Total War\IS_Files` folder. If not extract the .zip again, the files are there in the `IS_Files` folder):

1. Move all ".pack" files into the `\[...]\Empire Total War\data` folder.

2. Move all ".esf" ".lua" and ".tga" files into the `\[...]\Empire Total War\data\campaigns\imperial_splendour` folder. If the "imperial_splendour" folder doesn't exist, create one.

3. Move the "user.empire_script.txt" file to the following folder: `C:\document and setting\Users\"yourname"\AppData\Roaming\The Creative Assembly\Empire\script.` If you can't find the folder, it's in a hidden folder. You have to enable "show hidden folders" in your OS.
