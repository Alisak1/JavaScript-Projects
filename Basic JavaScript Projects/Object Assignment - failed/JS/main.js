let hat = {
  designer:"Halston",
  year:"1962",
  fabric:"velvet",
  color:"red",
  description: function() {
    return "This hat was made in " + this.year + " by " + this.designer + " and it is " this.color + this.fabric; 
  }
};
document.getElementById("Hat_Object").innerHTML = hat.description(); 