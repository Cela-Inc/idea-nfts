"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[702],{3702:(t,e,a)=>{a.r(e),a.d(e,{Pack:()=>T});var r=a(1452),n=a(2514);const s=JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');var o=a(7761),i=a(2593),c=a(5553),d=a(9279),p=a(1604);a(3550),a(5025),a(332),a(8455),a(6219),a(8834),a(5660),a(1303),a(1497),a(9242),a(4317),a(3670),a(9120),a(7604),a(8187),a(9362),a(9190),a(4730),a(6250),a(5725),a(8730),a(8507),a(8398),a(2090),a(6841),a(9561),a(580),a(246),a(4253),a(1559),a(553),a(26),a(9392),a(9526),a(4601),a(6878),a(583),a(2355),a(4194),a(1121),a(8613),a(2484),a(8435),a(4098),a(1770),a(2555),a(2037),a(7437),a(9189),a(2162),a(4063),a(4161),a(266),a(8839),a(1375),a(3320),a(5815),a(2378),a(5173),a(721),a(7191);const u=p.z.object({contractAddress:n.cK}),l=u.extend({quantity:r.A}),h=u.extend({tokenId:n.cL}),y=u.extend({tokenId:n.cL,quantity:n.cL}),w=l.omit({quantity:!0}).extend({quantityPerReward:r.A}),g=h,m=y.omit({quantity:!0}).extend({quantityPerReward:n.cL}),f=w.extend({totalRewards:n.cL.default("1")}),k=g,v=m.extend({totalRewards:n.cL.default("1")});p.z.object({erc20Rewards:p.z.array(w).default([]),erc721Rewards:p.z.array(g).default([]),erc1155Rewards:p.z.array(m).default([])});const A=p.z.object({erc20Rewards:p.z.array(f).default([]),erc721Rewards:p.z.array(k).default([]),erc1155Rewards:p.z.array(v).default([])}),R=A.extend({packMetadata:r.N,rewardsPerPack:n.cL.default("1"),openStartTime:n.cM.default(new Date)});class b{constructor(t,e,a,s,i){let c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:new n.cx(t,e,o,s);(0,r._)(this,"featureName",n.cN.name),(0,r._)(this,"contractWrapper",void 0),(0,r._)(this,"storage",void 0),(0,r._)(this,"chainId",void 0),(0,r._)(this,"events",void 0),this.contractWrapper=c,this.storage=a,this.chainId=i,this.events=new n.aM(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async open(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const a=await this.contractWrapper.sendTransaction("openPack",[t,e],{gasLimit:5e5});let r=i.O$.from(0);try{r=this.contractWrapper.parseLogs("PackOpenRequested",a?.logs)[0].args.requestId}catch(t){}return{receipt:a,id:r}}async claimRewards(){const t=await this.contractWrapper.sendTransaction("claimRewards",[],{gasLimit:5e5}),e=this.contractWrapper.parseLogs("PackOpened",t?.logs);if(0===e.length)throw new Error("PackOpened event not found");const a=e[0].args.rewardUnitsDistributed;return this.parseRewards(a)}async parseRewards(t){const e=[],a=[],r=[];for(const s of t)switch(s.tokenType){case 0:{const t=await(0,n.aZ)(this.contractWrapper.getProvider(),s.assetContract);e.push({contractAddress:s.assetContract,quantityPerReward:c.bM(s.totalAmount,t.decimals).toString()});break}case 1:a.push({contractAddress:s.assetContract,tokenId:s.tokenId.toString()});break;case 2:r.push({contractAddress:s.assetContract,tokenId:s.tokenId.toString(),quantityPerReward:s.totalAmount.toString()})}return{erc20Rewards:e,erc721Rewards:a,erc1155Rewards:r}}async addPackOpenEventListener(t){return this.events.addEventListener("PackOpened",(async e=>{t(e.data.packId.toString(),e.data.opener,await this.parseRewards(e.data.rewardUnitsDistributed))}))}async canClaimRewards(t){const e=t||await this.contractWrapper.getSignerAddress();return await this.contractWrapper.readContract.canClaimRewards(e)}async openAndClaim(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5;const r=await this.contractWrapper.sendTransaction("openPackAndClaimRewards",[t,e,a],{gasLimit:i.O$.from(5e5)});let n=i.O$.from(0);try{n=this.contractWrapper.parseLogs("PackOpenRequested",r?.logs)[0].args.requestId}catch(t){}return{receipt:r,id:n}}async getLinkBalance(){return this.getLinkContract().balanceOf(this.contractWrapper.readContract.address)}async transferLink(t){await this.getLinkContract().transfer(this.contractWrapper.readContract.address,t)}getLinkContract(){const t=n.c4[this.chainId];if(!t)throw new Error(`No LINK token address found for chainId ${this.chainId}`);const e=new n.cx(this.contractWrapper.getSignerOrProvider(),t,s,this.contractWrapper.options);return new n.aj(e,this.storage,this.chainId)}}class T extends n.aH{get vrf(){return(0,n.bN)(this._vrf,n.cN)}constructor(t,e,a){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.cx(t,e,o,s.gasless&&"openzeppelin"in s.gasless?{...s,gasless:{openzeppelin:{...s.gasless.openzeppelin,useEOAForwarder:!0}}}:s),a,i),(0,r._)(this,"abi",void 0),(0,r._)(this,"metadata",void 0),(0,r._)(this,"roles",void 0),(0,r._)(this,"encoder",void 0),(0,r._)(this,"events",void 0),(0,r._)(this,"estimator",void 0),(0,r._)(this,"royalties",void 0),(0,r._)(this,"interceptor",void 0),(0,r._)(this,"erc1155",void 0),(0,r._)(this,"owner",void 0),(0,r._)(this,"_vrf",void 0),this.abi=o,this.erc1155=new n.aA(this.contractWrapper,this.storage,i),this.metadata=new n.ab(this.contractWrapper,n.cO,this.storage),this.roles=new n.ac(this.contractWrapper,T.contractRoles),this.royalties=new n.ad(this.contractWrapper,this.metadata),this.encoder=new n.aa(this.contractWrapper),this.estimator=new n.aL(this.contractWrapper),this.events=new n.aM(this.contractWrapper),this.interceptor=new n.aN(this.contractWrapper),this.owner=new n.aQ(this.contractWrapper),this._vrf=this.detectVrf()}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t),this._vrf?.onNetworkUpdated(t)}getAddress(){return this.contractWrapper.readContract.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole((0,n.bq)("transfer"),d.d)}async getPackContents(t){const{contents:e,perUnitAmounts:a}=await this.contractWrapper.readContract.getPackContents(t),r=[],s=[],o=[];for(let t=0;t<e.length;t++){const d=e[t],p=a[t];switch(d.tokenType){case 0:{const t=await(0,n.aZ)(this.contractWrapper.getProvider(),d.assetContract),e=c.bM(d.totalAmount,t.decimals);r.push({contractAddress:d.assetContract,quantityPerReward:p.toString(),totalRewards:i.O$.from(e).div(p).toString()});break}case 1:s.push({contractAddress:d.assetContract,tokenId:d.tokenId.toString()});break;case 2:o.push({contractAddress:d.assetContract,tokenId:d.tokenId.toString(),quantityPerReward:p.toString(),totalRewards:i.O$.from(d.totalAmount).div(p).toString()})}}return{erc20Rewards:r,erc721Rewards:s,erc1155Rewards:o}}async create(t){const e=await this.contractWrapper.getSignerAddress();return this.createTo(e,t)}async addPackContents(t,e){const a=await this.contractWrapper.getSignerAddress(),r=A.parse(e),{contents:n,numOfRewardUnits:s}=await this.toPackContentArgs(r),o=await this.contractWrapper.sendTransaction("addPackContents",[t,n,s,a]),i=this.contractWrapper.parseLogs("PackUpdated",o?.logs);if(0===i.length)throw new Error("PackUpdated event not found");const c=i[0].args.packId;return{id:c,receipt:o,data:()=>this.erc1155.get(c)}}async createTo(t,e){const a=await(0,n.cE)(e.packMetadata,this.storage),r=R.parse(e),{erc20Rewards:s,erc721Rewards:o,erc1155Rewards:i}=r,c={erc20Rewards:s,erc721Rewards:o,erc1155Rewards:i},{contents:d,numOfRewardUnits:p}=await this.toPackContentArgs(c),u=await this.contractWrapper.sendTransaction("createPack",[d,p,a,r.openStartTime,r.rewardsPerPack,t]),l=this.contractWrapper.parseLogs("PackCreated",u?.logs);if(0===l.length)throw new Error("PackCreated event not found");const h=l[0].args.packId;return{id:h,receipt:u,data:()=>this.erc1155.get(h)}}async open(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(this._vrf)throw new Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");const a=await this.contractWrapper.sendTransaction("openPack",[t,e],{gasLimit:5e5}),r=this.contractWrapper.parseLogs("PackOpened",a?.logs);if(0===r.length)throw new Error("PackOpened event not found");const s=r[0].args.rewardUnitsDistributed,o=[],i=[],d=[];for(const t of s)switch(t.tokenType){case 0:{const e=await(0,n.aZ)(this.contractWrapper.getProvider(),t.assetContract);o.push({contractAddress:t.assetContract,quantityPerReward:c.bM(t.totalAmount,e.decimals).toString()});break}case 1:i.push({contractAddress:t.assetContract,tokenId:t.tokenId.toString()});break;case 2:d.push({contractAddress:t.assetContract,tokenId:t.tokenId.toString(),quantityPerReward:t.totalAmount.toString()})}return{erc20Rewards:o,erc721Rewards:i,erc1155Rewards:d}}async toPackContentArgs(t){const e=[],a=[],{erc20Rewards:r,erc721Rewards:s,erc1155Rewards:o}=t,c=this.contractWrapper.getProvider(),d=await this.contractWrapper.getSignerAddress();for(const t of r){const r=(await(0,n.a_)(c,t.quantityPerReward,t.contractAddress)).mul(t.totalRewards);if(!await(0,n.cF)(this.contractWrapper,t.contractAddress,r))throw new Error(`ERC20 token with contract address "${t.contractAddress}" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("${t.contractAddress}").setAllowance("${this.getAddress()}", ${r});\n\n`);a.push(t.totalRewards),e.push({assetContract:t.contractAddress,tokenType:0,totalAmount:r,tokenId:0})}for(const t of s){if(!await(0,n.cG)(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,d))throw new Error(`ERC721 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("${t.contractAddress}").setApprovalForToken("${this.getAddress()}", ${t.tokenId});\n\n`);a.push("1"),e.push({assetContract:t.contractAddress,tokenType:1,totalAmount:1,tokenId:t.tokenId})}for(const t of o){if(!await(0,n.cG)(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,d))throw new Error(`ERC1155 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("${t.contractAddress}").setApprovalForAll("${this.getAddress()}", true);\n\n`);a.push(t.totalRewards),e.push({assetContract:t.contractAddress,tokenType:2,totalAmount:i.O$.from(t.quantityPerReward).mul(i.O$.from(t.totalRewards)),tokenId:t.tokenId})}return{contents:e,numOfRewardUnits:a}}async call(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),r=1;r<e;r++)a[r-1]=arguments[r];return this.contractWrapper.call(t,...a)}detectVrf(){if((0,n.bO)(this.contractWrapper,"PackVRF"))return new b(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.readContract.address,this.storage,this.contractWrapper.options,this.chainId)}}(0,r._)(T,"contractRoles",["admin","minter","asset","transfer"])}}]);
//# sourceMappingURL=702.js.map