//2012_res is True if the state voted Republican in the 2012 Presidential election, false if it voted Democrat
//The num variables represent how many members of the House of Representatives belong to each party for each state

var data = [  {state: "Alabama", 2012_res: True , num_rep: 72 , num_dem: 33 , num_indie: 0}, 
              {state: "Alaska", 2012_res: True , num_rep: 23 , num_dem: 16 , num_indie: 1 }, 
              {state: "Arizona", 2012_res: True, num_rep: 38 , num_dem: 22 , num_indie: 0}, 
              {state: "Arkansas", 2012_res: True , num_rep: 64, num_dem: 36, num_indie: 0}, 
              {state: "California", 2012_res: False, num_rep: ,52 num_dem: 28, num_indie: 0}, 
              {state: "Colorado", 2012_res: False, num_rep: 31, num_dem: 34, num_indie:0}, 
              {state: "Connecticut", 2012_res: False, num_rep: 64, num_dem: 87, num_indie: 0}, 
              {state: "Delaware", 2012_res: False, num_rep: 16, num_dem: 25, num_indie: 0}, 
              {state: "Florida", 2012_res: False, num_rep: 82, num_dem: 37, num_indie: 1}, 
              {state: "Georgia", 2012_res: True, num_rep: 19, num_dem: 60, num_indie: 1}, 
              {state: "Hawaii", 2012_res: False, num_rep: 8, num_dem: 43, num_indie: 0}, 
              {state: "Idaho", 2012_res: True, num_rep: 56, num_dem: 14, num_indie: 0}, 
              {state: "Illinois", 2012_res: False, num_rep: 47, num_dem:71 , num_indie: 0}, 
              {state: "Indiana", 2012_res: True, num_rep: 71, num_dem: 29, num_indie: 0}, 
              {state: "Iowa", 2012_res: False , num_rep:57 , num_dem: 43, num_indie: 0}, 
              {state: "Kansas", 2012_res: True, num_rep: 97, num_dem: 28, num_indie: 0}, 
              {state: "Kentucky", 2012_res: True, num_rep: 46, num_dem: 54, num_indie: 0}, 
              {state: "Louisiana", 2012_res: True , num_rep: 61 , num_dem: 42, num_indie: 2}, 
              {state: "Maine", 2012_res: False, num_rep: 68, num_dem: 79, num_indie: 4}, 
              {state: "Maryland", 2012_res: False, num_rep: 51, num_dem: 90, num_indie: 0}, 
              {state: "Massachusetts", 2012_res: False, num_rep: 34, num_dem: 126, num_indie: 0}, 
              {state: "Michigan", 2012_res: False, num_rep: 63, num_dem: 47, num_indie: 0}, 
              {state: "Minnesota", 2012_res: False, num_rep: 72, num_dem: 62, num_indie: 0}, 
              {state: "Mississippi", 2012_res: True, num_rep: 66, num_dem: 56, num_indie: 0}, 
              {state: "Missouri", 2012_res: True, num_rep: 118, num_dem: 41, num_indie: 1}, 
              {state: "Montana", 2012_res: True, num_rep: 59, num_dem: 41, num_indie: 0}, 
              {state: "Nebraska", 2012_res: True, num_rep: 1, num_dem:1 , num_indie: 0}, 
              {state: "Nevada", 2012_res: False, num_rep: 27, num_dem: 15, num_indie:0 }, 
              {state: "New Hampshire", 2012_res: False, num_rep: 239, num_dem: 160, num_indie: 1}, 
              {state: "New Jersey", 2012_res: False, num_rep: 48, num_dem: 32, num_indie: 0}, 
              {state: "New Mexico", 2012_res: False, num_rep: 37, num_dem: 33, num_indie: 0}, 
              {state: "New York", 2012_res: False, num_rep: 106, num_dem: 44, num_indie: 0}, 
              {state: "North Carolina", 2012_res: True, num_rep: 76, num_dem: 46, num_indie: 0}, 
              {state: "North Dakota", 2012_res: True, num_rep: 71, num_dem: 23, num_indie: 0}, 
              {state: "Ohio", 2012_res: False, num_rep: 65, num_dem: 34, num_indie: 0}, 
              {state: "Oklahoma", 2012_res: True, num_rep: 72, num_dem: 29, num_indie: 0}, 
              {state: "Oregon", 2012_res: False, num_rep: 35, num_dem: 25, num_indie: 0}, 
              {state: "Pennsylvania", 2012_res: False, num_rep: 119, num_dem: 84, num_indie: 0}, 
              {state: "Rhode Island", 2012_res: False, num_rep: 63, num_dem: 11, num_indie: 1}, 
              {state: "South Carolina", 2012_res: True, num_rep: 78, num_dem: 46, num_indie: 0}, 
              {state: "South Dakota", 2012_res: True, num_rep: 58, num_dem: 12, num_indie: 0}, 
              {state: "Tennessee", 2012_res: True, num_rep: 73, num_dem: 26, num_indie: 0}, 
              {state: "Texas", 2012_res: True num_rep: 98, num_dem: 52, num_indie: 0}, 
              {state: "Utah", 2012_res: True, num_rep: 62, num_dem: 13, num_indie: 0}, 
              {state: "Vermont", 2012_res: False, num_rep: 84, num_dem: 55, num_indie: 9}, 
              {state: "Virginia", 2012_res: False, num_rep: 66, num_dem: 33, num_indie: 0}, 
              {state: "Washington", 2012_res: False, num_rep: 50, num_dem: 47, num_indie: 1}, 
              {state: "West Virginia", 2012_res: True, num_rep: 64, num_dem: 36, num_indie: 0}, 
              {state: "Wisconsin", 2012_res: False, num_rep: 63, num_dem: 36, num_indie: 0}, 
              {state: "Wyoming", 2012_res: True, num_rep: 51, num_dem: 9, num_indie: 0}, 
       ]; 


