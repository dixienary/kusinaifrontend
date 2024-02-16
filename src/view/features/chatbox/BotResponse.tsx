//this component contains the model which determines the response to return

export const BotResponse = (userMessage:string):object => {

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
  //template
  let message = {
    intent:"",
    response:"",
    img:"",
    title:"",
    instruction:"",
    fallback:""
  }
  //TOKENIZE: deletion, filtering, format
  //holds an Array of string, the sentence is split by blank space  
  userMessage = userMessage.toLowerCase();
  userMessage = userMessage.replaceAll(/,\s*/g, " ");
  let arrayUserMessage = userMessage.split(" ");

  //GREETINGS
  //initial response
  if( userMessage == "hi"){
    message.intent = "greeting:hi"
    message.response ="Hello! "+intro[randomNumber];
    message.fallback = ""
  }else if(userMessage == "hello" || userMessage == "Hello" || userMessage == "ello" || userMessage == "Helo"){
    message.intent = "greeting:hello"
    message.response = "Hi! "+intro[randomNumber];
    message.fallback = " "
  }else if (userMessage.includes("afternoon") || userMessage.includes("good afternoon") || userMessage.includes("good afternoon!") || userMessage.includes("afternoon!") ||
  arrayUserMessage.includes("noon") || arrayUserMessage.includes("afti") || arrayUserMessage.includes("aftrn")){
    message.intent = "greeting: good afternoon"
    message.response = "Good afternoon! "+intro[randomNumber]
    message.fallback = ""
  }else if (userMessage.includes("morning")){
    message.intent = "greeting: good morning"
    message.response = "Good morning! "+intro[randomNumber]
    message.fallback = ""
  }else if (userMessage.includes("evening") || userMessage.includes("eve") || userMessage.includes("evenin") || userMessage.includes("evnng") || userMessage.includes("Evening")){
    message.intent = "greeting: good evening"
    message.response = "Good evening! "+intro[randomNumber]
    message.fallback = ""
  }else if (arrayUserMessage.includes("pork") || arrayUserMessage.includes("baboy") || arrayUserMessage.includes("prk") || arrayUserMessage.includes("bboy")){
  //key ingredients
  if (arrayUserMessage.includes("gata") || arrayUserMessage.includes("coconut") || arrayUserMessage.includes("milk") || arrayUserMessage.includes("kakang") || arrayUserMessage.includes("gta")
  || arrayUserMessage.includes("shrimp") || arrayUserMessage.includes("bagoong")){
    message.intent = "recipe: Bicol Express (pork)"
    message.response = "I suggest  bicol express(pork) recipe. Note that some ingredients you input might be incompatible. However, you can always have your own unique dish.",
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/porkbicolexpress.jpg"
    message.title = "bicol express"
    message.fallback = ""
  }else if (arrayUserMessage.includes("asin")||arrayUserMessage.includes("salt") || arrayUserMessage.includes("asn")||arrayUserMessage.includes("slt")){
    message.intent = "recipe: Adobo sa Asin(pork)"
    message.response = "I suggest pork adobo sa asin",
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/adobosaasin.jpg"
    message.title = "Adobo sa asin"
    message.fallback = ""
  }else if (arrayUserMessage.includes("blood")|| arrayUserMessage.includes("dugo")){
    message.intent = "recipe: Dinuguan"
    message.response = " I suggest Dinuguan"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/dinuguan.jpg"
    message.title = "Dinuguan"
    message.fallback = " "
  }
  else{
    message.intent = "generic result: pork"
    message.response =`Pwde:
    -adobo,bicol express or inihaw`
    message.fallback = ""
  }
}else if (arrayUserMessage.includes("fish") || arrayUserMessage.includes("isda") || arrayUserMessage.includes("fesh") || arrayUserMessage.includes("esda")){
  if(arrayUserMessage.includes("malunggay")|| arrayUserMessage.includes("malungay") || arrayUserMessage.includes("malunngay") || arrayUserMessage.includes("mlngay")|| arrayUserMessage.includes("moringa") 
    || arrayUserMessage.includes("morinnga") || arrayUserMessage.includes("moringga") || arrayUserMessage.includes("mrnga")){
    message.intent = "recipe:Kinunot(fish)"
    message.response = "I suggest kinunot"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/kinunot.jpg"
    message.title = "Kinunot" 
    message.fallback = ""
  }else if(arrayUserMessage.includes("pechay")|| arrayUserMessage.includes("pchay") || arrayUserMessage.includes("pchy") || arrayUserMessage.includes("cbbge")|| arrayUserMessage.includes("cabage") ||arrayUserMessage.includes("cabbage")){
    message.intent = "recipe: Picadillo"
    message.response = "I suggest pechay"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/picadillofish.jpg"
    message.title = "Picadillo"
    message.fallback = ""
  }else if(arrayUserMessage.includes("tomato")||arrayUserMessage.includes("tomatoes")||arrayUserMessage.includes("kamatis")||arrayUserMessage.includes("tomto") ||arrayUserMessage.includes("tomatoe")){
    message.intent = "recipe:Kusidong Isda"
    message.response = "I suggest Kusidong Isda"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/kusidongisda.webp"
    message.title = "Kusidong Isda"
    message.fallback = ""
  }else{
    message.intent = "generic result:fish"
    message.response = "Generic Result: pwede kinunot, picadillo, kusidong isda"
    message.fallback = ""
  }
}else if (arrayUserMessage.includes("chicken") || arrayUserMessage.includes("manok") || arrayUserMessage.includes("manek") || arrayUserMessage.includes("cheken") || arrayUserMessage.includes("chcken")||
  arrayUserMessage.includes("chckn") || arrayUserMessage.includes("chikin")){
  if(arrayUserMessage.includes("shrimp")|| arrayUserMessage.includes("bagoong") ||arrayUserMessage.includes("hipon")){
    message.intent = "recipe: Bicol Express(Chicken)"
    message.response = "I suggest Chicken Bicol Express"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/chickenbicolexpress.jpg"
    message.title = "Chicken Bicol Express" 
    message.fallback = ""
  }else if(arrayUserMessage.includes("tanglad")){
    message.intent = "recipe: Tinungtungang Manok"
    message.response = "I suggest Tinungtungang Manok"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/tinutungang-manok.jpg"
    message.title = "Tinungtungang Manok"  
    message.fallback = ""
  }else{
    message.response = "There can be many ways to cook a chicken, pick one from the following: Chicken adobo, chicken bicol express, tinungtungang manok "
  }
}else if (arrayUserMessage.includes("santol") || arrayUserMessage.includes("sentul") || arrayUserMessage.includes("santul") || arrayUserMessage.includes("sntl") ||
  arrayUserMessage.includes("sntol") || arrayUserMessage.includes("cotton") || arrayUserMessage.includes("coton")){
  message.intent = "recipe: Ginataang Santol"
  message.response = "I suggest Ginataang Santol"
  message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/ginataangsantol.jpg"
  message.title = "Ginataang Santol"
  message.fallback = ""
}else if (arrayUserMessage.includes("langka") || arrayUserMessage.includes("lngka") || arrayUserMessage.includes("langk") || arrayUserMessage.includes("jackfruit")||
 arrayUserMessage.includes("jckfrut") || arrayUserMessage.includes("jakfrut")|| arrayUserMessage.includes("jakfruet") || arrayUserMessage.includes("jkfrut")){
  message.intent = "recipe: Ginataang Langka"
  message.response = "I'd like to recommend Ginataang Langka",
  message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/ginataanglangka.jpg"
  message.title = "Ginataang Langka"
  message.fallback = ""
}else if (arrayUserMessage.includes("gabi")|| arrayUserMessage.includes("taro") || arrayUserMessage.includes("gbi") || arrayUserMessage.includes("taru") || arrayUserMessage.includes("gabe")){
  message.intent = "recipe: Pinangat"
  message.response = "I'd like to recommend Pinangat",
  message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/pinangat.jpg"
  message.title = "Pinangat"
  message.fallback = ""
}else if ( arrayUserMessage.includes("shark") || arrayUserMessage.includes("sharks")|| arrayUserMessage.includes("pating")){
  message.intent = "recipe:Kinunot(shark)"
  message.response = "I suggest kinunot"
  message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/kinunot.jpg"
  message.title = "Kinunot" 
  message.fallback = ""
}else if ( arrayUserMessage.includes("stingray")){
  message.intent = "recipe: Kinunot(stingray)"
  message.response = "I suggest Kinunot"
  message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/kinunot.jpg"
  message.title = "Kinunot"  
  message.fallback = ""
}else if(arrayUserMessage.includes("bye")|| arrayUserMessage.includes("goodbye") || arrayUserMessage.includes("babye")){
  message.intent = "bye"
  message.response = "Thank you. Goodbye!"
  message.fallback = ""
}else{
  message.fallback = "Please make sure to spell correctly, or input sensible and commonly used ingredients in Bicol. I suggest to enter at least three(3) ingredients for better results.Thank you."
}
  return message;
}
