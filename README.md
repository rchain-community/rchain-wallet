# RChainWallet
## build
```
npm install
npm run start # localhost:3000
npm run build # static optimized build in build directory.
```
### on rhobot.net
start it with "nohup" to start it with "no hangup" when the terminal disconnected. Now restarting meant killing all the processes:
```
rchain@rhobot:~/rchain-wallet$ kill $(ps aux | grep rchain-wallet| grep -v grep | cut -c7-15)
rchain@rhobot:~/rchain-wallet$ nohup npm start &
[1] 4138
rchain@rhobot:~/rchain-wallet$ nohup: ignoring input and appending output to 'nohup.out'
```
## TASKS (MVP)

- [x] Landing page
- [x] RChain functionality
	- [x] Connecting to different nodes
	- [x] Checking balance
	- [x] Transferring between wallets
- [x] Create wallet
	- [ ] Mnemonic
		- [x] 24 word
		- [ ] 12 word
	- [x] Keystore
- [x] Access wallet
	- [x] Via MetaMask
	- [x] From mnemonic
	- [x] Via keystore
	- [x] From private key
	- [x] From locally stored account
- [x] Wallet
	- [x] Dashboard
	- [x] Settings
		- [x] - Create keystore
		- [x] - Save account locally
	- [x] Transfer screen
	- [x] Settings screen
	- [x] Design for mobile
	- [x] Deploy code screen
	- [ ] Offline signing
- [ ] Other
	- [x] Display errors when they happen and inform user about what went wrong
	- [ ] Inform user when transfer is complete
