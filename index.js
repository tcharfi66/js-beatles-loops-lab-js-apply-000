// add solution here

function theBeatlesPlay(mus, inst){
  
  var list = [] 
  
  for(var i=0; i< mus.length; i++){
    list.push(mus[i] + " plays " + inst[i])
    
  }
  return list 
  
}

function johnLennonFacts(facts){
  var ctr = 0
  while( ctr< facts.length){
    facts[ctr] += '!!!';
    ctr++
  } 
  
  return facts;
}

function iLoveTheBeattles(num){
  
  var list = []
  
  
  do{
    
    list += "I love the Beatles!"
    
    num ++
  }while(num < 15);
  
  
  return list 
}






