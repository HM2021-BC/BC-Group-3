# Bazinga

## Projektbeschreibung

Über die Plattform sollen die Urheberrechte bzw. Eigentumsrechte für immaterielle
Vermögensgegenstände verwaltet und gehandelt werden können. Insbesondere sog.
Memes, d.h. kleine Medieninhalte, die über das Internet verbreitet werden, wie Bilder oder
Videos mit einer kurzen prägnanten Aussage, bei denen die Urheberschaft oft nicht mehr
feststellbar ist, da sich diese viral im Internet verbreiten.
Auf dem Marktplatz wird ein Smart Contract zwischen zwei Handelnden abgeschlossen und
ausgeführt. Die dApp behält sich hierfür einen kleinen Prozentsatz für die
Transaktionsgebühr ein. Dabei gehen die Eigentumsrechte an den Käufer über und das
Geld in Form von Ethereum an den Verkäufer.

## Technologien

* Ethereum
* Solidity
* Truffle
* Morpheus Labs SEED
* React

## Team (BC-Group-3) 

* Vitaliia Savchyn - savchyn@hm.edu
* Fabian Rittmeier - f.rittmeier@hm.edu
* Simon Hirner - simon.hirner@hm.edu

## Benutzung

### Kompilieren des Projekts
1. Navigation in den Projektordner: cd BC-Group-3/ethereum
2. Kompilieren des Projekts: truffle compile

### Einsatz der Smart Contracts im lokalem Ethereum Netzwerk der Truffle Entwicklungsumgebung
1. Navigation in den Projektordner: cd BC-Group-3/ethereum
2. Öffnen der Truffle Entwicklungsumgebung: truffle develop
3. Deployen der Smart Contracts im lokalem Ethereum Netzwerk: truffle migrate

### Ausführung der Tests
1. Navigation in den Projektordner: cd BC-Group-3/ethereum
2. Ausführung der Tests: truffle test

### Einsatz der Smart Contracts im Morpheus Labs BPaaS Ethereum PoA Netzwerk
1. Navigation in den Ordner ethereum im Projektordner: cd BC-Group-3/ethereum
2. Einsatz der Smart Contracts im Moprheus Labs Ethereum Netzwerk: truffle migrate --network private_poa

### Start des Frontends
1. Navigation in den Projektordner: cd BC-Group-3/
2. Install dependencies: npm install
3. Start frontend: node server.js

## GitHub Repository

https://github.com/HM2021-BC/BC-Group-3

## Lizenz

MIT
