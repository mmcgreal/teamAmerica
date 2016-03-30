var data = [
  {state: "Hawaii", res: false, num_rep: 8,num_dem: 43, num_indie: 0},
  {state: "Alaska", res: true , num_rep: 23 , num_dem: 16 , num_indie: 1 },
	{state: "Florida", res: false, num_rep: 82, num_dem: 37, num_indie: 1},
	{state: "South Carolina", res: true, num_rep: 78, num_dem: 46, num_indie: 0},
	{state: "Georgia", res: true, num_rep: 119, num_dem: 60, num_indie: 1},
	{state: "Alabama", res: true , num_rep: 72 , num_dem: 33 , num_indie: 0},
	{state: "North Carolina", res: true, num_rep: 76, num_dem: 46, num_indie: 0},
	{state: "Tennessee", res: true, num_rep: 73, num_dem: 26, num_indie: 0},
	{state: "Rhode Island", res: false, num_rep: 63, num_dem: 11, num_indie: 1},
	{state: "Connecticut", res: false, num_rep: 64, num_dem: 87, num_indie: 0},
	{state: "Massachusetts", res: false, num_rep: 34, num_dem: 126, num_indie: 0},
	{state: "Maine", res: false, num_rep: 68, num_dem: 79, num_indie: 4},
	{state: "New Hampshire", res: false, num_rep: 239, num_dem: 160, num_indie: 1},
	{state: "Vermont", res: false, num_rep: 84, num_dem: 55, num_indie: 9},
	{state: "New York", res: false, num_rep: 106, num_dem: 44, num_indie: 0},
	{state: "New Jersey", res: false, num_rep: 48, num_dem: 32, num_indie: 0},
	{state: "Pennsylvania", res: false, num_rep: 119, num_dem: 84, num_indie: 0},
	{state: "Delaware", res: false, num_rep: 16, num_dem: 25, num_indie: 0},
	{state: "Maryland", res: false, num_rep: 51, num_dem: 90, num_indie: 0},
	{state: "West Virginia", res: true, num_rep: 64, num_dem: 36, num_indie: 0},
	{state: "Kentucky", res: true, num_rep: 46, num_dem: 54, num_indie: 0},
	{state: "Ohio", res: false, num_rep: 65, num_dem: 34, num_indie: 0},
	{state: "Michigan", res: false, num_rep: 63, num_dem: 47, num_indie: 0},
	{state: "Wyoming", res: true, num_rep: 51, num_dem: 9, num_indie: 0},
	{state: "Montana", res: true, num_rep: 59, num_dem: 41, num_indie: 0},
	{state: "Idaho", res: true, num_rep: 56, num_dem: 14, num_indie: 0},
	{state: "Washington", res: false, num_rep: 50, num_dem: 47, num_indie: 1},
	{state: "DC", res: false, num_rep: 1, num_dem: 1, num_indie: 1},
	{state: "Texas", res: true, num_rep: 98, num_dem: 52, num_indie: 0},
	{state: "California", res: false, num_rep: 52, num_dem: 28, num_indie: 0},
	{state: "Arizona", res: true, num_rep: 38 , num_dem: 22 , num_indie: 0},
	{state: "Nevada", res: false, num_rep: 27, num_dem: 15, num_indie:0 },
	{state: "Utah", res: true, num_rep: 62, num_dem: 13, num_indie: 0},
	{state: "Colorado", res: false, num_rep: 31, num_dem: 34, num_indie:0},
    {state: "New Mexico", res: false, num_rep: 37, num_dem: 33, num_indie: 0},
    {state: "Oregon", res: false, num_rep: 35, num_dem: 25, num_indie: 0},
    {state: "North Dakota", res: true, num_rep: 71, num_dem: 23, num_indie: 0},
    {state: "South Dakota", res: true, num_rep: 58, num_dem: 12, num_indie: 0},
    {state: "Nebraska", res: true, num_rep: 1, num_dem:1 , num_indie: 0},
    {state: "Iowa", res: false , num_rep:57 , num_dem: 43, num_indie: 0},
  	{state: "Mississippi", res: true, num_rep: 66, num_dem: 56, num_indie: 0},
    {state: "Indiana", res: true, num_rep: 71, num_dem: 29, num_indie: 0},
    {state: "Illinois", res: false, num_rep: 47, num_dem:71 , num_indie: 0},
    {state: "Minnesota", res: false, num_rep: 72, num_dem: 62, num_indie: 0},
    {state: "Wisconsin", res: false, num_rep: 63, num_dem: 36, num_indie: 0},
    {state: "Missouri", res: true, num_rep: 118, num_dem: 41, num_indie: 1},
	{state: "Arkansas", res: true , num_rep: 64, num_dem: 36, num_indie: 0},
    {state: "Oklahoma", res: true, num_rep: 72, num_dem: 29, num_indie: 0},
    {state: "Kansas", res: true, num_rep: 97, num_dem: 28, num_indie: 0},
    {state: "Louisiana", res: true , num_rep: 61 , num_dem: 42, num_indie: 2},
    {state: "Virginia", res: false, num_rep: 66, num_dem: 33, num_indie: 0},
 ];
var k = 0;
console.log(data.length)
function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
  return "<h4>"+n+"</h4><table>"+
	"<tr><td>Party</td><td>"+d.party+"</td></tr>"+
	"</table>";
}
var color_select = function(e){
  if(e){
    return "red";
  }
  return "blue";
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
    //big=data[i][2][0];
    //small=data[i][2][1];
    if(data[k].res){
      var party = "Republican";
    }else{
      var party = "Democrat";
    }
    k++
    sampleData[d]={party:party, majority:'maj',
		   minority:'min' , color:color_select(data[i].res)};
    console.log(this)
    i++;
});

/* draw states on id #statesvg */
uStates.draw("#statesvg", sampleData, tooltipHtml);
