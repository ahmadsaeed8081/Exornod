//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface TOKEN {
    function transfer(address to, uint tokens) external returns (bool success);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) ;
    function burnFrom(address sender, uint256 amount) external;

    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);

    }
interface NFT {

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    function balanceOf(address owner) external view returns (uint256 balance);
    function ownerOf(uint256 tokenId) external view returns (address owner);
    function safeTransferFrom(address from,address to,uint256 tokenId) external;
    function transferFrom(address from,address to,uint256 tokenId) external;
    function approve(address to, uint256 tokenId) external;
    function getApproved(uint256 tokenId) external view returns (address operator);
    function setApprovalForAll(address operator, bool _approved) external;
    function isApprovedForAll(address owner, address operator) external view returns (bool);
    function safeTransferFrom(address from,address to,uint256 tokenId,bytes calldata data) external;
    function mint(address _to, uint256 _mintAmount) external;  
    function totalSupply() external view returns (uint256 balance);  
    function tokenOfOwnerByIndex(address owner,uint index) external view returns (uint256 balance);



}
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Exornod_Reward 
    {
        
        struct Nod_data{

            uint buying_time;
            address minter;
            uint withdrawRew;

        }
        
        struct Data{

            bool investBefore;
            mapping(uint=>level_data) level;
            mapping(uint=>burn_data) burn;

            uint totalDirect_rew;
            uint totalDirects;
            bool eligible;
            uint total_burn;
            uint total_withdraw;

            address[] myReferrals;
            address referralFrom;
            uint TotalBurnAmount;
            // uint eligible_time;

        }

        struct level_data
        {
            uint count; 
            uint earning;
        }

        struct burn_data
        {
            uint amount; 
            uint burnTime;
            uint expire_Time;
            uint apy;
            uint earned_Reward;
            uint pending_Reward;

        }


        AggregatorV3Interface internal priceFeed;
        uint  per_day_divider;
        uint  rewardSupply;
        uint  launchTime;
        uint min_burnAmount;
        uint max_burnAmount;
        uint public exorUsdPrice;


        uint64[5] public levelpercentage;


        mapping(address=>Data) public user;
        mapping(uint=>uint) public perDaySelling;
        mapping(uint=>Nod_data) nod_data;

        address  EXOR_token; 
        address  NOD_NFT;

        address  USDT_token;
        // address  USDC_token;
        address  DAI_token;

        address public owner;
        uint public nodPriceInDollar;
        uint public feePriceInDollar;

        uint public directRewPercentage;
        uint public totalusers;
        uint public totalburn;


    constructor()
    {

        per_day_divider= 1 minutes;
        rewardSupply = 12500000000*10**18;
        launchTime;
        min_burnAmount=25000*10**18;
        // max_burnAmount=10000000*10**18;
        exorUsdPrice=0.01 ether;


        levelpercentage = [5 ether,4 ether,3 ether,2 ether,1 ether];


        EXOR_token=0x12B17f2786bF83F7E5a2337b2b5A0bdD4eba313e; 
        NOD_NFT=0xe442F8fF8aB966AcB661727114111828e738b864;

        USDT_token=0xc16b32F200eA3c91E06c016e3F19738459F74146;
        DAI_token=0xd562bEA1e3ca6236e3c2626b5E1499f44E9002b7;

        nodPriceInDollar=500;
        feePriceInDollar=0.01 ether;
        directRewPercentage=5;


        launchTime=block.timestamp;
        user[msg.sender].eligible = true;
        owner=msg.sender;
        priceFeed = AggregatorV3Interface(0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada); //Mainnet

    }


            function get_nodePrice() public view returns( uint)
            { 
                uint supply = NFT(NOD_NFT).totalSupply();
                if(supply>2000)
                {
                    return nodPriceInDollar + (supply-2000);
                }  
                else{
                    return nodPriceInDollar;
                }

            }

            function get_apyPercentage(uint _amount) public pure returns( uint)
            { 
                if(_amount>=25000 ether && _amount<=50000 ether)
                {
                    return 0.30556 ether;
                }  
                else if(_amount>50000 ether && _amount<=250000 ether)
                {
                    return 0.3611 ether;
                } 
                else if(_amount>250000 ether && _amount<=750000 ether)
                {
                    return 0.41667 ether;
                } 
                else if(_amount>750000 ether && _amount<=2000000 ether)
                {
                    return 0.55556 ether;
                }
                else if(_amount>2000000 ether && _amount<=10000000 ether)
                {
                    return 0.63889 ether;
                }
                else{
                   return 0;
                }
            }

            function getLatestPrice() public view returns (int) {
            // prettier-ignore
            (
                /* uint80 roundID */,
                int price,
                /*uint startedAt*/,
                /*uint timeStamp*/,
                /*uint80 answeredInRound*/
            ) = priceFeed.latestRoundData();
            return price*10**10;
            }

            function getConversionRate(int dollar_amount) public view returns (int) {

                int MaticPrice = getLatestPrice();
                int maticAmountInUsd = (( dollar_amount*10**18) / (MaticPrice))*10**18;


            return maticAmountInUsd;
            }
            function getConversionRate_fee(int dollar_amount) public view returns (int) {

                int MaticPrice = getLatestPrice();
                int maticAmountInUsd = (( dollar_amount *10**18 ) / (MaticPrice));


            return maticAmountInUsd;
            }

            function getExorRew(uint dollar_amount,uint _no) public view returns (uint) {
                
                if(_no==0)
                {
                    dollar_amount=dollar_amount*10**12;
                }
                
                uint rew = ( dollar_amount/exorUsdPrice)*10**18;


            return rew;
            }


            function Nod_buying_matic(uint _amount,address _ref) payable public returns(bool)
            {
                int totalMatic = getConversionRate(int256(nodPriceInDollar));
                require(uint256(totalMatic) *_amount == msg.value );
                payable(owner).transfer(msg.value);
                uint supply = NFT(NOD_NFT).totalSupply();
                return process( supply ,  (nodPriceInDollar * 1 ether) * _amount ,  _amount, _ref,2);                

            }
 
            function Nod_buying_token(uint _no, uint _amount,address _ref)  public returns(bool)
            {
                uint nodePrice;
                address curr_token;
                if(_no==0){

                    curr_token=USDT_token;
                    nodePrice=(get_nodePrice())*10**6;
                }
                else if(_no==1){

                    curr_token=DAI_token;
                    nodePrice=(get_nodePrice())*10**18;
                }
                else if(_no==2){

                    curr_token=EXOR_token;
                    nodePrice=(get_nodePrice())*10**18;
                }
                                    
                require(TOKEN(curr_token).allowance(msg.sender,address(this)) >= (nodePrice) * _amount);
                uint supply = NFT(NOD_NFT).totalSupply();
                TOKEN(curr_token).transferFrom(msg.sender,owner,(nodePrice) * _amount);
                return process( supply ,  nodePrice ,  _amount, _ref,_no);
                
            }

            function process(uint supply , uint nodePrice , uint _amount,address _ref,uint _no) internal returns(bool)
            {
                for (uint256 i = 1; i <= _amount; i++) {
                    
                    nod_data[supply+i].buying_time=block.timestamp;
                    nod_data[supply+i].minter=msg.sender;

                }
                uint day = (block.timestamp - launchTime)/1 minutes; 
                perDaySelling[day+1]+=_amount;
                NFT(NOD_NFT).mint(msg.sender,_amount);

                if(user[msg.sender].referralFrom == address(0))
                {
                    if(_ref==address(0) || _ref==msg.sender || _ref==owner || !user[_ref].eligible)
                    {
                        
                        user[msg.sender].referralFrom=owner;
                        _ref=owner;
                        user[_ref].myReferrals.push(msg.sender);

                        user[_ref].totalDirect_rew += getExorRew((directRewPercentage * ((nodePrice) * _amount))/(100),_no);
                        user[_ref].level[0].count++;

                    }
                    else 
                    {
                        user[msg.sender].referralFrom=_ref;
                        user[_ref].myReferrals.push(msg.sender);
                        user[_ref].totalDirect_rew += getExorRew((directRewPercentage * ((nodePrice) * _amount))/(100),_no);
                        address temp = _ref;

                        for(uint i=0;i<5;i++)
                        {
                            user[temp].level[i].count++;
                            temp = user[temp].referralFrom;

                            if(temp==address(0))
                            {
                                i=5;
                            }

                        }

                    }                
                }
                else
                {
                    user[user[msg.sender].referralFrom].totalDirect_rew += (directRewPercentage * ((nodePrice) * _amount))/(100*10**18);

                }
                
                if(!user[msg.sender].investBefore)
                {
                    totalusers++; 
                    user[_ref].totalDirects++;
                    user[msg.sender].eligible=true;                                    
                    user[msg.sender].investBefore=true;
                }
                
                return true;

            }


            function burn_token(uint _amount)  public returns(bool)
            {
                require(user[msg.sender].eligible,"not eligible");
                require(TOKEN(EXOR_token).allowance(msg.sender,address(this)) >= _amount);
                require(min_burnAmount <= _amount );

                user[msg.sender].burn[user[msg.sender].total_burn].amount=_amount;
                user[msg.sender].burn[user[msg.sender].total_burn].apy=get_apyPercentage(_amount);

                user[msg.sender].burn[user[msg.sender].total_burn].burnTime=block.timestamp;
                user[msg.sender].burn[user[msg.sender].total_burn].expire_Time = block.timestamp + 360 minutes;
                user[msg.sender].TotalBurnAmount+=_amount;

                user[msg.sender].total_burn++;
                totalburn+=_amount;

                TOKEN(EXOR_token).burnFrom(msg.sender,_amount);

                return true;
            }



            function get_userRew(address inv)  public view returns(uint rew)
            {
              uint totalNfts = NFT(NOD_NFT).balanceOf(inv);
              for(uint i=0;i<totalNfts;i++)
              {
                    uint nft_no = NFT(NOD_NFT).tokenOfOwnerByIndex(inv,i);
                    rew+=get_nodeRew(nft_no);
              }
            }
            
            function get_nodeRew(uint nft_no)  public view returns(uint rew)
            {
                uint day = (block.timestamp - launchTime)/1 minutes; 
                
                uint perDayRew;
                uint perPersonRew;
                uint curr_time=launchTime;
                uint totalbuyers;

                for(uint i=1;i<=day;i++)
                {
                    curr_time+=1 minutes;
                    totalbuyers += perDaySelling[i];
                    if(totalbuyers > 0)
                    {
                        if(i<=360)
                        {
                            perDayRew = (rewardSupply/2)/360;
                            perPersonRew = perDayRew / totalbuyers;
                        }
                        else if(i<=720)
                        {
                            perDayRew = (rewardSupply/4)/360;
                            perPersonRew = perDayRew / totalbuyers;
                        }                    
                        else if(i<1080)
                        {
                            perDayRew = (rewardSupply/8)/360;
                            perPersonRew = perDayRew / totalbuyers;
                        }
                        else if(i<1440)
                        {
                            perDayRew = (rewardSupply/16)/360;
                            perPersonRew = perDayRew / totalbuyers;
                        }                    
                        else if(i<=1800)
                        {
                            perDayRew = (rewardSupply/32)/360;
                            perPersonRew = perDayRew / totalbuyers;
                        }

                    }
                    
                    if(curr_time > nod_data[nft_no].buying_time)
                    {
                        rew+=perPersonRew;
                    }


                }
                rew-=nod_data[nft_no].withdrawRew;

            }


       function getTotalBurnReward(address inv) view public returns(uint){ //this function is get the total reward balance of the investor
            uint totalReward;
            uint depTime;
            uint rew;
            for(uint i=0;i<user[inv].total_burn;i++)
            {
                if(user[inv].burn[i].expire_Time > block.timestamp)
                {
                    depTime =block.timestamp - user[inv].burn[i].burnTime;
                }
                else
                {
                    depTime =user[inv].burn[i].expire_Time - user[inv].burn[i].burnTime;
                }
            
                depTime=depTime/per_day_divider; //1 day
                if(depTime>0)
                {
                    rew  = ((user[inv].burn[i].amount)*get_apyPercentage(user[inv].burn[i].amount))/100000000000000000000;

                    totalReward += depTime * rew;

                }
            }
            
            
            return totalReward;
        }

        function getLevelReward_perInv(uint i,address inv,address main) view public returns(uint)
        {
            uint totalReward;
            uint depTime;
            uint rew;

                if(user[main].eligible)
                {
                    
                    if(block.timestamp < user[inv].burn[i].expire_Time)
                    {
                        depTime =block.timestamp - user[inv].burn[i].burnTime;
                    }
                    else
                    {    
                        depTime =user[inv].burn[i].expire_Time - user[inv].burn[i].burnTime;
                    }                        
                
                }
                
                depTime=depTime/per_day_divider; //1 day
                if(depTime>0)
                {
                rew  = ((user[inv].burn[i].amount)*get_apyPercentage(user[inv].burn[i].amount))/100000000000000000000;


                    totalReward = depTime * rew;
                }
            

            return totalReward;
        }



        function perBurn_Reward(uint i,address inv) view public returns(uint)
        {
            uint totalReward;
            uint depTime;
            uint rew;

                    
            if(block.timestamp < user[inv].burn[i].expire_Time)
            {
                depTime =block.timestamp - user[inv].burn[i].burnTime;
            }
            else
            {    
                depTime =user[inv].burn[i].expire_Time - user[inv].burn[i].burnTime;
            }                        
                                
            depTime=depTime/per_day_divider; //1 day
            if(depTime>0)
            {
            rew  = ((user[msg.sender].burn[i].amount)*get_apyPercentage(user[msg.sender].burn[i].amount))/100000000000000000000;


                totalReward = depTime * rew;
            }
            

            return totalReward;
        }
    function RefLevel_earning(address inv) public view returns( uint[] memory arr1 )
        { 

            uint[] memory levelRewards = new uint[](5);

            uint calc_rew; 
            address[] memory direct_members = user[inv].myReferrals;
            uint next_member_count;

            for(uint j=0; j < 5;j++) //levels
            {

                if(user[inv].eligible)
                {
                    for( uint k = 0;k < direct_members.length;k++) //members
                    {   
                        
                        next_member_count+=user[direct_members[k]].myReferrals.length;

                        uint temp = user[direct_members[k]].total_burn; 

                        for( uint i = 0;i < temp;i++) //burns
                        {   
                            uint temp_amount = getLevelReward_perInv(i,direct_members[k],inv);
                            calc_rew +=  ((temp_amount * (levelpercentage[j]) )/ (100*10**18) );
                            
                        }
                                    
                    }
                    levelRewards[j]=calc_rew;
                    calc_rew=0;

                    address[] memory next_members=new address[](next_member_count) ;

                    for( uint m = 0;m < direct_members.length;m++) //members
                    {   
                        for( uint n = 0; n < user[direct_members[m]].myReferrals.length; n++) //members
                        {   
                            next_members[calc_rew]= user[direct_members[m]].myReferrals[n];
                            calc_rew++;
                        }
                    }
                    direct_members=next_members; 
                    next_member_count=0;
                    calc_rew=0;


                }
                
            }

            return levelRewards;
        }

        function Level_count(address inv) public view returns( uint[] memory _arr )
        {
            uint[] memory referralLevels_count=new uint[](5);

            for(uint i=0;i<5;i++)
            {
                referralLevels_count[i] = user[inv].level[i].count;
            }
            return referralLevels_count ;


        }
        function get_totalEarning() public view returns(uint) {
            
            uint[] memory arr= new uint[](5);
                
            arr=RefLevel_earning(msg.sender);

            uint total_levelReward;
            for(uint i=0;i<5;i++)
            {
                total_levelReward+=arr[i];
            }

           return user[msg.sender].totalDirect_rew + total_levelReward + getTotalBurnReward(msg.sender) + get_userRew(msg.sender) + user[msg.sender].total_withdraw;

        }

        function get_availableBalance() public view returns(uint) {
            
            uint[] memory arr= new uint[](12);
                
            arr=RefLevel_earning(msg.sender);

            uint total_levelReward;
            for(uint i=0;i<5;i++)
            {
                total_levelReward+=arr[i];
            }

           return  ((user[msg.sender].totalDirect_rew + total_levelReward + getTotalBurnReward(msg.sender) + get_userRew(msg.sender)) - user[msg.sender].total_withdraw);

        }

        function activate_Ref(address _ref) public payable returns(bool) {

            require(!user[msg.sender].eligible,"already eligible");
            int total_matic=getConversionRate_fee(int256(feePriceInDollar));
            require( msg.value >= uint256(total_matic));
            payable(owner).transfer(msg.value);
            user[msg.sender].eligible = true;

            if(_ref==address(0) || _ref==msg.sender || _ref==owner || !user[_ref].eligible)
            {
                
                user[msg.sender].referralFrom=owner;
                _ref=owner;
                user[_ref].myReferrals.push(msg.sender);
                user[_ref].level[0].count++;

            }
            else 
            {
                user[msg.sender].referralFrom=_ref;
                user[_ref].myReferrals.push(msg.sender);
                address temp = _ref;

                for(uint i=0;i<5;i++)
                {
                    user[temp].level[i].count++;
                    temp = user[temp].referralFrom;

                    if(temp==address(0))
                    {
                        i=5;
                    }

                }

            }         




            return true;

        }


        function withdrawReward() external returns (bool success)
        {
            uint[] memory arr= new uint[](12);
                
            arr=RefLevel_earning(msg.sender);

            uint total_levelReward;
            for(uint i=0;i<5;i++)
            {
                total_levelReward+=arr[i];
            }

            uint burnRew=getTotalBurnReward(msg.sender);
            uint nodeRew=get_userRew(msg.sender);

            uint Total_reward=(total_levelReward+burnRew+nodeRew)-user[msg.sender].total_withdraw;
            user[msg.sender].total_withdraw+=((total_levelReward+burnRew)-user[msg.sender].total_withdraw);
            uint totalNfts = NFT(NOD_NFT).balanceOf(msg.sender);
            for(uint i=0;i<totalNfts;i++)
            {
                uint nft_no = NFT(NOD_NFT).tokenOfOwnerByIndex(msg.sender,i);
                nod_data[nft_no].withdrawRew+=get_nodeRew(nft_no);
            }
            TOKEN(EXOR_token).transfer(msg.sender,Total_reward);

            
            

            return true;

        }

        function getAll_burns() public view returns (burn_data[] memory burns)
        { 
            uint num = user[msg.sender].total_burn;
        
         
           burn_data[] memory temp_arr =  new burn_data[](num);
            burns =  new burn_data[](num) ;

            for(uint i=0;i<num;i++)
            {
                temp_arr[i]=user[msg.sender].burn[i]; 
                uint total_earned = perBurn_Reward(i,msg.sender);
                temp_arr[i].earned_Reward = total_earned;            
                temp_arr[i].pending_Reward = ((( user[msg.sender].burn[i].amount * user[msg.sender].burn[i].apy) * 360)/100 ether )- total_earned;            

            }

            uint count=num;
            for(uint i=0;i<num;i++)
            {
                count--;
                burns[i]=temp_arr[count];

            }

            return burns;

        }

        function getDirects(address inv) view public returns(address[] memory)
        {
            return user[inv].myReferrals;
        } 
        function gettotalDirects(address inv) view public returns(uint)
        { 
            return user[inv].totalDirects;
        } 
        



            function transferOwnership(address _owner)  public
        {
            require(msg.sender==owner);
            owner = _owner;
        }


       function withdrawFunds(uint _amount)  public
        {
            require(msg.sender==owner);
            uint bal = TOKEN(EXOR_token).balanceOf(address(this));
            require(bal>=_amount);
            TOKEN(EXOR_token).transfer(owner,_amount); 
        }
    }