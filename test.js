data=[['Alabama', 'Republican', [72, 33]],
      ['Alaska', 'Republican', [23, 16, 1]],
      ['Arizona', 'Republican', [38, 22]],
      ['Arkansas', 'Republican', [64, 36]],
      ['California', 'Democratic', [52, 28]],
      ['Colorado', 'Democratic', [34, 31]],
      ['Connecticut', 'Democratic', [87, 64]],
      ['Delaware', 'Democratic', [25, 16]],    
      ['Florida', 'Republican', [82, 37, 1]],  
      ['Georgia', 'Republican', [119, 60, 1]],    
      ['Hawaii', 'Democratic', [43, 8]],  
      ['Idaho', 'Republican', [56, 14]],    
      ['Illinois', 'Democratic', [71, 47]],    
      ['Indiana', 'Republican', [71, 29]],     
      ['Iowa', 'Republican', [57, 43]],    
      ['Kansas', 'Republican', [97, 28]],     
      ['Kentucky', 'Democratic', [54, 46]],     
      ['Louisiana', 'Republican', [61, 42, 2]],     
      ['Maine', 'Democratic', [79, 68, 4]],   
      ['Maryland', 'Democratic', [90, 51]],    
      ['Massachusetts', 'Democratic', [126, 34]],     
      ['Michigan', 'Republican', [63, 47]],    
      ['Minnesota', 'Republican', [72, 62]],
      ['Mississippi', 'Republican', [66, 56]],    
      ['Missouri', 'Republican', [118, 44, 1]],
      ['Montana', 'Republican', [59, 41]],    
      ['Nebraska', 'Republican', [0, 0]],
      ['Nevada', 'Republican', [27, 15]],    
      ['New Hampshire', 'Republican', [239, 160, 1]],
      ['New Jersey', 'Democratic', [48, 32]],    
      ['New Mexico', 'Republican', [37, 33]],
      ['New York', 'Democratic', [106, 44]],    
      ['North Carolina', 'Republican', [74, 46]],
      ['North Dakota', 'Republican', [71, 23]],    
      ['Ohio', 'Republican', [65, 34]],
      ['Oklahoma', 'Republican', [72, 29]],     
      ['Oregon', 'Democratic', [35, 25]],
      ['Pennsylvania', 'Republican', [119, 84]],  
      ['Rhode Island', 'Democratic', [63, 11, 1]],
      ['South Carolina', 'Republican', [78, 46]],    
      ['South Dakota', 'Republican', [58, 12]],
      ['Tennessee', 'Republican', [73, 26]],    
      ['Texas', 'Republican', [98, 52]],
      ['Utah', 'Republican', [62, 13]],   
      ['Vermont', 'Democratic', [84, 55, 9]],
      ['Virginia', 'Republican', [66, 33]],    
      ['Washington', 'Democratic', [50, 47, 1]],
      ['West Virginia', 'Republican', [64, 36]],    
      ['Wisconsin', 'Republican', [63, 36]],     
      ['Wyoming', 'Republican', [51, 9]],
      ['DC','IDK',[0,0]]];

console.log(data.length)
function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
    return "<h4>"+n+"</h4><table>"+
	"<tr><td>Party</td><td>"+(d.party)+"</td></tr>"+
	"<tr><td>Majority</td><td>"+(d.majority)+"</td></tr>"+
	"<tr><td>Minority</td><td>"+(d.minority)+"</td></tr>"+
	"</table>";
}

var sampleData ={};	/* Sample random data. */	
var i=0;
dat=["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI",
 "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", 
 "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", 
 "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", 
 "VT", "VA", "WA", "WV", "WI", "WY", "DC"]

dats=["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
 "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
 "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
 "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
 "WI", "MO", "AR", "OK", "KS", "LS", "VA"]

console.log(dat.length)


dats.forEach(function(d){ 
    big=data[i][2][0];
    small=data[i][2][1];
    sampleData[d]={party:data[i][1], majority:big, 
		   minority:small, color:d3.interpolate("#ffbbcc", "#200026")(big/100)};
    console.log(this)
    i++;
});


/* draw states on id #statesvg */	
uStates.draw("#statesvg", sampleData, tooltipHtml);
