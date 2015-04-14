# SMonitor Client

Launch SMonitor Client on server to get statististics from it

To install:
  1. install node.js from https://nodejs.org/download/
  2. run '$ npm install' to load dependancies
  3. run '$ npm install forever'
  4. launch it by '$ forever start server.js'

(Server responds json on 3300 port)

http://<serverurl>:3300/api/monitor to get full mashine info

http://<serverurl>:3300/api/monitor/poll to get current load averages, meminfo

