# mongoDB

Building knowledge-base in-progress('2023-13-04'). 

Useful links: 

Documentation: #getstarted https://www.mongodb.com/docs/manual/introduction/
Community server: https://www.mongodb.com/try/download/community
Free monitoring(run from compass): https://cloud.mongodb.com/freemonitoring/cluster/................................................... 

Below the manual of installation for 6.0 version (windows): 

1> Go to https://www.mongodb.com/try/download/community
2> Download and install according with out expectation (Mongo as a service in runStart procedure, compass as graphic interface for DB)
3> Save main directory installation path
4> check path c:\data\db - if not exist create. otherwise run the command with --dbpath parameter
5> run ps with Get-ChildItem Env: | Format-Table -Property Name, Value 

Check mongoDB path in system and user variable:(default path)
"C:\Program Files\MongoDB\Server\6.0\bin\" 

6> you can control current state of tasklist and make sure that the system has not run the mongod service 

tasklist /v /fo table | sort

**> if yes: run taskkill /PID <enter_the_PID_number> /F 
7> if not, run:

  cmd.exe - cd "path" next mongod
  powershell.exe "path" next start-process mongod.exe
  
8> run mongo shell:

  cmd.exe - cd "path" next mongosh
  powershell.exe "path" next start-process mongosh.exe
  
# ===================================== #
Optionally you can create the script in .ps1:

WT - required

#variables
$wtPath = "path WT"
$mongoPath = "C:\Program Files\MongoDB\Server\6.0\bin"
#run db
Start-Process $wtPath
Start-Sleep -Seconds 2
$wsh = New-Object -ComObject WScript.Shell
$wsh.AppActivate('Windows Terminal')
$wsh.SendKeys('cd $mongoPath')
$wsh.SendKeys('{ENTER}')
Start-Sleep -Seconds 2
$wsh.SendKeys('mongod')
$wsh.SendKeys('{ENTER}')
# === run mongo shell ===
Start-Process $wtPath
Start-Sleep -Seconds 2
$wsh = New-Object -ComObject WScript.Shell
$wsh.AppActivate('Windows Terminal')
$wsh.SendKeys('cd $mongoPath')
$wsh.SendKeys('{ENTER}')
Start-Sleep -Seconds 2
$wsh.SendKeys('mongosh')
$wsh.SendKeys('{ENTER}')

You do not have to run as admin. I would recommend you docker container or local account - not admin to test mongoDB
Of course it is a basic configuration - not for linux, mac os and so on. It is not for enterprise. 
