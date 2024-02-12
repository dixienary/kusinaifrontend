//this component contains the model which determines the response to return


export const BotResponse = (userMessage:string):string => {

//dictate which part of conversation: 0 = intro, 1 = next step etc.
let level:number = 0; 

//introductory phrases
  let intro:Array<string> = [ "Welcome to KUSIN-AI. If you're hungry for a Bicolano main dish, just share your ingredients, and I'll create a mouthwatering recipe for you.",
 " Ready to dive into the delicious world of Bicol Cuisine? Tell me what ingredients you have, and I'll whip up a fantastic main dish recipe for you!",
 "Bicol's culinary wonders await you. Share the ingredients you have, and let's cook up something amazing together!",
 "Ready to explore the flavors of Bicol? Let me know what ingredients you have, and I'll suggest a fantastic main dish for you.",
]
  //generate random number
  const min = 0;
  const max = intro.length - 1;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  //this variable holds the string/message to return
  let botMessage:string = ""; 
  //holds an Array of string, the sentence is split by blank space  
  userMessage = userMessage.toLowerCase();
  userMessage = userMessage.replaceAll(/,\s*/g, " ");
  let arrayUserMessage = userMessage.split(" ");


  //GREETINGS
  //initial response
  if( userMessage == "hi"){
    botMessage ="Hello! "+intro[randomNumber];
  }else if(userMessage == "hello" || userMessage == "Hello" || userMessage == "ello" || userMessage == "Helo"){
    botMessage = "Hi! "+intro[randomNumber];
  }
  

  if (userMessage.includes("afternoon") || userMessage.includes("good afternoon") || userMessage.includes("good afternoon!") || userMessage.includes("afternoon!") ||
  arrayUserMessage.includes("noon") || arrayUserMessage.includes("afti") || arrayUserMessage.includes("aftrn")){
    botMessage = "Good afternoon! "+intro[randomNumber]
  }else if (userMessage.includes("morning")){
    botMessage = "Good morning! "+intro[randomNumber]
  }else if (userMessage.includes("evening") || userMessage.includes("eve") || userMessage.includes("evenin") || userMessage.includes("evnng") || userMessage.includes("Evening")){
    botMessage = "Good evening! "+intro[randomNumber]
  }

 //INGREDIENTS
 if (arrayUserMessage.includes("pork")){
  if (arrayUserMessage.includes("gata")){
    botMessage = "bicol express(pork)"
  }else if (arrayUserMessage.includes("toyo")){
    botMessage = "pork adobo"
  }else{
    botMessage =`Pwde:
    -adobo,bicol express or inihaw`
  }
}else if (userMessage.includes("fish")){
  botMessage = "kinunot"
}else if (userMessage.includes("chicken")){
  botMessage = "fried chicken"
}
  

 
  console.log(arrayUserMessage)

  return botMessage;
  
}
