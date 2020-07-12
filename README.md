<h1 align="center">
    Electron Routex
</h1>
<p align="center">
An attempt to get routex to work as a side worker with Electron to have a simpler client server approach in electron apps instead of an ipc arch
</p>


## Motivation / Why ?

While I think electron's IPC is really well implemented, its a pain for a developer who has no idea of how IPC's work and ends up spending a lot of time trying to figure out the control flow of events.

I wanted to go with JSON RPC approach where a daemon listens for general network POST requests and the client can perform system level actions without actually having access to it. 

Transmission uses this (kind off) and If I could get something similar working with [routex](https://github.com/barelyhuman/routex) then the user has a pretty easy way to write the server side of the electron app that's launched on side of the actual client view and the client developer can talk to the server by making simple `fetch` calls.


## TODO

- [ ] Figure out port automatically (harcoded to 3000 right now)
- [ ] API requests from client to worker in bundled electron app 
- [x] Worker alongside Electron to launch routex
- [x] End Worker when client closes
- [x] API requests from client to worker in unbundled electron app 

## Current Limitations

- The routex instances is always started on port 3000 which is not ideal since the app would collide with other instance and that's the next thing i'll be working on.



