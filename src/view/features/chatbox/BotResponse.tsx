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
    ingredients:[""],
    instruction:[""],
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
    || arrayUserMessage.includes("shrimp") || arrayUserMessage.includes("bagoong") ){
      message.intent = "recipe: Bicol Express (pork)"
      message.response = "I suggest  bicol express(pork) recipe. Note that some ingredients you input might be incompatible. However, you can always have your own unique dish.",
      message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/porkbicolexpress.jpg"
      message.ingredients = [
        "INGREDIENTS:",
        "Pork belly(cut into cubes) - 500 grams",
        "Coconut milk - 2 cups",
        "Coconut cream(kakang gata) - 1 cup",
        "Chilli/ Bird's eye chill(siling labuyo - 10 pieces sliced( or adjust quantity based on preference)",
        "Shrimp paste(bagoong) - 2 tablespoons",
        "Garlic - 4 cloves, minced",
        "Onion - 1 medium chopped",
        "Ginger - 1 inch piece, minced",
        "Cooking oil - 2 tablespoons",
        "Salt - to taste",
        "Pepper - to taste"
      ]
      message.instruction = [
        "PROCEDURE:",
        "Step 1 - Heat the cooking oil in a pan over medium heat. Sauté the garlic, onion, and ginger until the onion becomes translucent.",
        "Step 2 - Add the pork belly strips to the pan. Cook until the pork turns light brown.",
        "Step 3 - Stir in the shrimp paste and cook for another 1-2 minutes.",
        "Step 4 - Pour in the coconut milk. Bring to a simmer, then lower the heat. Cover and let it cook for about 20 minutes or until the pork is tender.",
        "Step 5 - Add the sliced bird's eye chili and long chili. Continue to simmer for another 10 minutes to let the flavors meld together.",
        "Step 6 -  Pour in the coconut cream and season with salt and pepper to taste. Simmer for an additional 5 minutes or until the sauce thickens to your desired consistency."
        ]
      message.title = "Bicol Express"
    
      message.fallback = ""
    }else if (arrayUserMessage.includes("asin")||arrayUserMessage.includes("salt") || arrayUserMessage.includes("asn")||arrayUserMessage.includes("slt")){
      message.intent = "recipe: Adobo sa Asin(pork)"
      message.response = "I suggest pork adobo sa asin",
      message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/adobosaasin.jpg"
      message.title = "Adobo sa asin"
      message.ingredients = [
        "INGREDIENTS",
        "Pork(preferably with fat) - 500 gram, cleaned and cut into cubes",
        "Water - 2 cups",
        "Garlic - 1 large, crushed",
        "Bay leaves - 2 pieces",
        "Vinegar - 1/2 cup",
        "Salt - 1 teaspoon",
        "Pepper (optional) - to taste",
        "Onion(optional) - to taste",
        "Chilli(optional) - to taste"
      ]
      message.instruction = [
        "PROCEDURE",
        "Step 1 - In a pan, arrange pork and add water. Bring to boil until the meat is tender. Add water if needed.",
        "Step 2 - Pour vinegar, garlic, bay leaves, pork broth cubes and salt.",
        "Step 3 - Continue cooking until all the liquid is absorbed.",
        "Step 4 - Adjust seasoning according to taste.",
        "Step 5 - Cook until the garlic turns to brown and the pork starts to render oil.",
        "Step 6 - Remove from heat and transfer serving plate then serve!"
      ]
      message.fallback = ""
    }else if (arrayUserMessage.includes("blood")|| arrayUserMessage.includes("dugo")){
      message.intent = "recipe: Dinuguan"
      message.response = " I suggest Dinuguan"
      message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/dinuguan.jpg"
      message.title = "Dinuguan"
      message.ingredients = [
        "INGREDIENTS:",
        "Pork belly - 500 grams, cut into bite-size pieces",
        "Pork blood - 2 cups, stirred, and strained",
        "Garlic - 6 cloves, minced",
        "Onion - 1 large, chopped",
        "Vinegar - 1/2 cup",
        "Water - 2 cups",
        "Long green pepper(siling haba) - 2 or 3 pieces",
        "Bay leaves - 2 pieces",
        "Salt - to taste",
        "Pepper - to taste",
        "Cooking oil - 3 tablespoons",
        "Sugar(optional) - 1 teaspoon to balance flavors"
      ]
      message.instruction = [
        "PROCEDURE",
        "Step 1 - Heat the cooking oil in a  large pot over medium hehat. Sauté the garlic and onion until the onion becomes translucent",
        "Add the pork belly pieces and cook until they start to brown.",
        "Pour in the vinegar and do not stir for a few minutes to allow the vinegar to cook off.",
        "Add the water, bay leaves, and bring to a boil. Lower the heat, cover, and simmer until the pork is tender, about 30-40 minutes",
        "Once the pork is tender, slowly pour in the strained pork blood while stirring continuously. Keep the heat on low to prevent the blood from curdling.",
        "Add the long green pepper, and continue to simmer the stew, stirring occasionally, until it thickens, about 10 - 15 minutes.",
        "Season with salt, pepper, and sugar(if using) to taste. The sugar helps balance the flavors, but it's optional.",
        "Cook for another 5 minutes after seasoning, then remove from heat.",
        "Serve your Dinuguan how with steamed rice or puto (steamed rice cake) for a traditional pairing."
      ]
      message.fallback = " "
    }
    else{
      message.intent = "lacking ingredients"
      message.response ="Please add more ingredients. Input at least three(3) ingredients. Thank you!"
          message.fallback = ""
    }
}else if (arrayUserMessage.includes("fish") || arrayUserMessage.includes("isda") || arrayUserMessage.includes("fesh") || arrayUserMessage.includes("esda")){
  if(arrayUserMessage.includes("malunggay")|| arrayUserMessage.includes("malungay") || arrayUserMessage.includes("malunngay") || arrayUserMessage.includes("mlngay")|| arrayUserMessage.includes("moringa") 
    || arrayUserMessage.includes("morinnga") || arrayUserMessage.includes("moringga") || arrayUserMessage.includes("mrnga")){
    message.intent = "recipe:Kinunot(fish)"
    message.response = "I suggest kinunot"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/kinunot.jpg"
    message.title = "Kinunot" 
    message.ingredients = [
      "INGREDIENTS:",
      "Stingray or Shark meat(alternative: manta ray, tuna) - 500 grams, boild and flaked",
      "Coconut milk - 2 cups",
      "Coconut cream(kakang gata) - 1 cup",
      "Malunggay(Moringa) leaves - 2 cups, stripped from stems",
      "Onion - 1 large, chopped",
      "Garlic - 5 cloves, minced",
      "Ginger - 2 inches piece, minced",
      "Bird's eye chili(siling labuyo) - 5 to 10 pieaces, sliced(adjust based on preference)",
      "Salt - to taste",
      "Pepper - to taste",
      "Vinegar - 1 tablespoon (optional for cleaning the fish)"
    ]
    message.instruction= [
      "PROCEDURE:",
      "Step 1 - Clean the stingray or shark meat with water and vinegar (if using) to remove any impurities. Boil the meat in water until tender, about 20-30 minutes. Once cooked, allow it to cool and then flake the meat into small pieces. Set aside.",
      "Step 2 - In a large pan, sauté the garlic, onion, and ginger in a little oil until the onion becomes translucent.",
      "Add the flaked fish to the pan and cook for a few minutes until slightly browned.",
      "Pour in the coconut milk and bring to a simmer. Let it cook for about 10 minutes, stirring occasionally.",
      "Add the malunggay leaves and bird's eye chili. Continue to simmer until the leaves are wilted and the sauce thickens, about 5 minutes.",
      "Pour in the coconut cream and season with salt and pepper. Let the mixture simmer for another 5 minutes, or until the sauce is thickened to your liking. Adjust the seasoning as needed.",
      "Serve hot with steamed rice. Enjoy your delicious Kinunot, a taste of Bicol's rich culinary heritage!"
    ]
    message.fallback = ""
  }else if(arrayUserMessage.includes("pechay")|| arrayUserMessage.includes("pchay") || arrayUserMessage.includes("pchy") || arrayUserMessage.includes("cbbge")|| arrayUserMessage.includes("cabage") ||arrayUserMessage.includes("cabbage")){
    message.intent = "recipe: Picadillo"
    message.response = "I suggest pechay"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/picadillofish.jpg"
    message.title = "Picadillo"
    message.ingredients = [
      "INGREDIENTS:",
      "Tilapia(or any firm white fish) - 4 pieces, cleaned, and scored",
      "Pechay or gabi leaves for wrapping",
      "Garlic - 4 cloves, minced",
      "Ginger - 1 inch pieace, sliced",
      "Onion - 1 medium, sliced",
      "Tomato - 2 medium, sliced",
      "Coconut Milk - 2 cups",
      "Lemongrass(optional) - 1 stalk, pounded",
      "Salt - to taste",
      "Pepper - to taste",
      "Green Chili(optional) for added heat"
    ]
    message.instruction = [
      "PROCEDURE:",
      "Lay a pechay or gabi leaf flat, place a piece of fish in the center, and top it with slices of garlic, ginger, onion, and tomato. Season with salt and pepper.",
      "Wrap the fish securely in the leaf and repeat with the remaining fish.",
      "In a pot, arrange the wrapped fish and add lemongrass (if using). Pour coconut milk over the fish.",
      "Cover and simmer for 20-30 minutes or until the fish is cooked through. Be careful not to let the coconut milk boil over.",
      "Add green chili towards the end of cooking for extra heat, if desired.",
      "Serve hot with rice."
    ]
    message.fallback = ""
  }else if(arrayUserMessage.includes("tomato")||arrayUserMessage.includes("tomatoes")||arrayUserMessage.includes("kamatis")||arrayUserMessage.includes("tomto") ||arrayUserMessage.includes("tomatoe")){
    message.intent = "recipe:Kusidong Isda"
    message.response = "I suggest Kusidong Isda"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/kusidongisda.webp"
    message.title = "Kusidong Isda"
    message.ingredients = [
      "INGREDIENTS:",
      "Fish(tilapia, bangus or any preferred - 500 grams, cleaned and cut into serving pieces",
      "Water - 6 cups",
      "Tomato - 2 medium, quartered",
      "Onion - 1 large, quartered",
      "Ginger - 1 inch piece, sliced thinly",
      "Green leafy vegetables - 2 cups",
      "Salt/fish sauce - to taste",
      "Pepper - to taste"
    ]
    message.instruction = [
      "PROCEDURE:",
      "In a large pot, bring the water to a boil. Add the ginger, onion, and tomato. Simmer for about 5 minutes to release the flavors.",
      "Add the fish to the pot. Lower the heat and simmer gently until the fish is cooked through, about 10-15 minutes, depending on the size of the fish pieces. Avoid stirring too vigorously to prevent the fish from breaking apart.",
      "Once the fish is cooked, add the green leafy vegetables. Cook for an additional 2-3 minutes or until the vegetables are just wilted and bright green.",
      "Season the soup with salt or fish sauce and ground black pepper to taste. Let it simmer for another minute to blend the flavors.",
      "Carefully remove the soup from the heat to prevent overcooking the vegetables.",
      "Serve the Kusido hot, ideally with steamed rice on the side."
    ]
    message.fallback = ""
  }else{
    message.intent = "Lacking ingredients"
    message.response = "Please add more ingredients. Input at least three(3) ingredients for better results. Thank you!"
    message.fallback = ""
  }
}else if (arrayUserMessage.includes("chicken") || arrayUserMessage.includes("manok") || arrayUserMessage.includes("manek") || arrayUserMessage.includes("cheken") || arrayUserMessage.includes("chcken")||
  arrayUserMessage.includes("chckn") || arrayUserMessage.includes("chikin")){
  if(arrayUserMessage.includes("shrimp")|| arrayUserMessage.includes("bagoong") ||arrayUserMessage.includes("hipon")){
    message.intent = "recipe: Bicol Express(Chicken)"
    message.response = "I suggest Chicken Bicol Express"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/chickenbicolexpress.jpg"
    message.title = "Chicken Bicol Express" 
    message.ingredients = [
      "INGREDIENTS",
      "Chicken (things or beast) - 1kg, cut into bite-size pieces",
      "Coconut milk - 2 cups",
      "Coconut cream(kakang gata) - 1 cup",
      "Shrimp paste/Bagoong - 2 tablespoon",
      "Garlic - 6 cloves, minced",
      "Onion - 1 large, chopped",
      "Ginger - 1 inch piece, minced",
      "Bird's eye chili (siling labuyo) - 10 pieaces, sliced (adjust based on preference)",
      "Long chili(siling haba) - 5 pieces, sliced",
      "Cooking oil - 2 tablespoon",
      "Salt - to taste",
      "Pepper - to taste"
    ]
    message.instruction = [
      "PROCEDURE:",
      "Step 1 -Heat the cooking oil in a large pan over medium heat. Sauté the garlic, onion, and ginger until the onion becomes translucent.",
      "Step 2 - Add the chicken pieces to the pan. Cook until they turn light brown.",
      "Step 3 - Stir in the shrimp paste and cook for another 1-2 minutes.",
      "Step 4 - Pour in the coconut milk. Bring to a simmer, then lower the heat. Cover and let it cook for about 20 minutes, or until the chicken is tender.",
      "Step 5 - Add the sliced bird's eye chili and long chili. Continue to simmer for another 10 minutes to let the flavors meld together.",
      "Step 6 - Pour in the coconut cream and season with salt and pepper to taste. Simmer for an additional 5 minutes or until the sauce thickens to your desired consistency.",
      "Step 7 - Adjust the seasoning if necessary.",
      "Step 8 - Serve hot with rice."     
    ]
    message.fallback = ""
  }else if(arrayUserMessage.includes("tanglad")){
    message.intent = "recipe: Tinungtungang Manok"
    message.response = "I suggest Tinungtungang Manok"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/tinutungang-manok.jpg"
    message.title = "Tinungtungang Manok"  
    message.ingredients = [
      "INGREDIENTS:",
      "Chicken preferably free-range or native chicken - 1 kg, cut into serving pieces",
      "Coconut milk - 2 cups",
      "Coconut cream(kakang gata) - 1 cup",
      "Uncooked rice - 1/4 cup, toasted until brown and then ground",
      "Garlic - 6 cloves, minced",
      "Onion - 1 large, chopped",
      "Ginger - 1 inch piece, sliced",
      "Lemongrass(tanglad) - 1 stalk, pounded and tied into a knot",
      "Green chili(siling haba) - 2 to 3 pieces, sliced (optional for extra heat)",
      "Salt - to taste",
      "Pepper - to taste",
      "Cookil oil - 2 tablespoon"
    ]
    message.instruction = [
      "PROCEDURE:",
      "Start by toasting the uncooked rice in a dry pan over medium heat. Stir continuously to prevent burning until the rice turns golden brown. Once toasted, let it cool and grind it into a fine powder using a food processor or mortar and pestle. Set aside.",
      "In a large pot, heat the cooking oil over medium heat. Sauté the garlic, onion, and ginger until the onion becomes translucent.",
      "Add the chicken pieces to the pot and cook until they start to brown slightly.",
      "Pour in the coconut milk (1st extract) and add the lemongrass. Bring to a boil, then reduce the heat to simmer. Cover and cook until the chicken is tender, about 30 minutes.",
      "Add the ground toasted rice to the pot and stir well. The sauce will start to thicken as the rice absorbs the coconut milk.",
      "Add the green chili (if using) and season with salt and pepper to taste. Simmer for another 5-10 minutes, or until the sauce reaches your desired consistency.",
      "Finally, pour in the coconut cream (kakang gata) and gently simmer for an additional 5 minutes, stirring occasionally. The sauce should be rich and creamy.",
      "Adjust the seasoning if necessary and remove the lemongrass before serving.",
      "Serve hot with steamed rice and enjoy your Tinutungang Manok!"
    ]
    message.fallback = ""
  }else{
    message.response = "Please add more ingredients. Input at least three(3) or more ingredients for better results. Thank you!"
  }
}else if (arrayUserMessage.includes("santol") || arrayUserMessage.includes("sentul") || arrayUserMessage.includes("santul") || arrayUserMessage.includes("sntl") ||
  arrayUserMessage.includes("sntol") || arrayUserMessage.includes("cotton") || arrayUserMessage.includes("coton")){
  message.intent = "recipe: Ginataang Santol"
  message.response = "I suggest Ginataang Santol"
  message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/ginataangsantol.jpg"
  message.title = "Ginataang Santol"
  message.ingredients = [
    "INGREDIENTS:",
    "Santol (cotton fruit) - 3 large, peeled, grated, and seeds removed",
    "Coconut milk - 2 cups",
    "Coconut cream (kakang gata) - 1 cup",
    "Shrimp or pork (optional) - 200 grams, cleaned, or cut into bite-size pieces",
    "Garlic - 4 cloves, minced",
    "Onion - 1 medium, chopped"
  ]
  message.instruction = [
    "PROCEDURE:",
    "Step 1 - Heat the cooking oil in a pan over medium heat. Sauté the garlic, onion, and ginger until the onion becomes translucent.",
    "Step 2 - If using pork, add it to the pan and cook until lightly browned. For shrimp, you'll add it later to avoid overcooking.",
    "Step 3 - Add the grated santol to the pan and cook for about 5 minutes, stirring occasionally.",
    "Step 4 - Pour in the coconut milk and bring to a simmer. Let it cook for about 10-15 minutes, or until the santol is soft and the flavors have melded together.",
    "Step 5 - If using shrimp, add it at this point along with the green chili. Cook for another 5 minutes, or until the shrimp turns pink and is cooked through.",
    "Step 6 - Season the dish with fish sauce or salt according to your taste. Add bird's eye chili if you prefer a spicier dish.",
    "Step 7 - Lastly, pour in the coconut cream and let the dish simmer for another 5 minutes, or until the sauce thickens slightly.",
    "Step 8 - Adjust the seasoning if necessary, then remove from heat.",
    "Step 9 - Serve hot with rice.",
  ]
  message.fallback = ""
}else if (arrayUserMessage.includes("langka") || arrayUserMessage.includes("lngka") || arrayUserMessage.includes("langk") || arrayUserMessage.includes("jackfruit")||
 arrayUserMessage.includes("jckfrut") || arrayUserMessage.includes("jakfrut")|| arrayUserMessage.includes("jakfruet") || arrayUserMessage.includes("jkfrut")){
  message.intent = "recipe: Ginataang Langka"
  message.response = "I'd like to recommend Ginataang Langka",
  message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/ginataanglangka.jpg"
  message.title = "Ginataang Langka"
  message.ingredients = [
    "INGREDIENTS:",
    "Unripe jackfruit - 500 grams, peeled and sliced into bite-size pieces",
    "Coconut milk - 2 cups",
    "Coconut cream(Kakang gata) - 1 cup for the final slimmer",
    "Pork belly/shrimp/crab - 200 grams, cut into small pieces(optional)",
    "Garlic - 5 cloves, minced",
    "Onion - 1 large, chopped",
    "Ginger - 1 inch piece, minced",
    "Green chili(siling haba) - 2 to 3 pieces, sliced",
    "Bird's eye chili(siling labuyo) - 2 pieces, chopped(optional for extra heat)",
    "Salt - to taste",
    "Pepper - to taste",
    "Oil - 2 tablespoon",
    "Water - 1 cup (if needed, to help cook the jackfruit)"
  ]
  message.instruction = [
    "PROCEDURE:",
    "In a large pot, heat the cooking oil over medium heat. Sauté the garlic, onion, and ginger until aromatic and the onion is translucent.",
    "If using pork, ddit to the pot and cook until it starts to brown. i using shrip, you will add it later to avoid overcooking.",
    "Add the sliced unripe jackfruit to th pot. Stir for a efw minutes to mix well with the aromatics.",
    "Pour in the coconut milk and add the green chillis. If the mixture seems too dry, add up to 1 cup of water to help cook the jackfruit until it becomes tender. Cover and  simmer for about 15 to 20 minutes, or until the jackfruit is almost tender.",
  ]
  message.fallback = ""
}else if (arrayUserMessage.includes("gabi")|| arrayUserMessage.includes("taro") || arrayUserMessage.includes("gbi") || arrayUserMessage.includes("taru") || arrayUserMessage.includes("gabe")){
  message.intent = "recipe: Pinangat"
  message.response = "I'd like to recommend Pinangat",
  message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/pinangat.jpg",
  message.ingredients = [
    "INGREDIENTS:",
    "Dried taro(gabi) leaves - 200 grams, thoroughly cleaned",
    "Coconut milk - 2 cups",
    "Coconut cream (kakang gata) - 1 cup for topping",
    "Dried fish or shrimp (optional) - 100 grams, soaked in water, then drained",
    "Shrimp paste(bagoong) - 1 tablespoon",
    "Bird's eye chili(siling labuyo) - 5-10 pieces, chopped (adjust based on spice preference)",
    "Lemon grass(tanglad) - 2 stalks, tied into knots",
    "Salt - to taste",
    "Pepper - to taste"
  ]
  message.instruction = [
    "PROCEDURE:",
    "Prepare the taro leaves by trimming away the thick stems and ensuring they are clean. If you're using large leaves, cut them into smaller pieces. Set aside.",
    "In a bowl, mix the dried fish or small shrimp with chopped bird's eye chili, a bit of salt, and shrimp paste. This mixture will be the filling for the pinangat.",
    "Take a piece of taro leaf, place a spoonful of the filling in the center, and fold the leaf over the filling, creating a packet. Repeat this process until all the filling is used.",
    "In a cooking pot, arrange the lemon grass at the bottom. This will prevent the pinangat from sticking to the pot and add aroma. Carefully stack the pinangat packets on top of the lemongrass.",
    "Pour the coconut milk over the pinangat packets in the pot. The coconut milk should just about cover the packets. Bring to a simmer over low heat, cover, and let it cook for about 20-30 minutes.",
    "After the pinangat packets have cooked and absorbed the coconut milk, gently pour the coconut cream over them. Continue to cook for another 10-15 minutes, allowing the cream to thicken slightly and the flavors to meld together.",
    "Season with salt and pepper to taste. Be gentle when stirring to avoid breaking the packets.",
    "Once the sauce has thickened to your liking and the pinangat packets are tender, remove from heat.",
    "Serve warm with rice. Enjoy your homemade Pinangat!"
  ]
  message.title = "Pinangat"
  message.fallback = ""
}else if ( arrayUserMessage.includes("shark") || arrayUserMessage.includes("sharks")|| arrayUserMessage.includes("pating")){
  message.intent = "recipe:Kinunot"
  message.response = "I suggest kinunot"
  message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/kinunot.jpg"
  message.title = "Kinunot" 
  message.ingredients = [
    "INGREDIENTS:",
    "Stingray or Shark meat(alternative: manta ray, tuna) - 500 grams, boild and flaked",
    "Coconut milk - 2 cups",
    "Coconut cream(kakang gata) - 1 cup",
    "Malunggay(Moringa) leaves - 2 cups, stripped from stems",
    "Onion - 1 large, chopped",
    "Garlic - 5 cloves, minced",
    "Ginger - 2 inches piece, minced",
    "Bird's eye chili(siling labuyo) - 5 to 10 pieaces, sliced(adjust based on preference)",
    "Salt - to taste",
    "Pepper - to taste",
    "Vinegar - 1 tablespoon (optional for cleaning the fish)"    
  ]
  message.instruction = [
    "PROCEDURE:",
    "Step 1 - Clean the stingray or shark meat with water and vinegar (if using) to remove any impurities. Boil the meat in water until tender, about 20-30 minutes. Once cooked, allow it to cool and then flake the meat into small pieces. Set aside.",
    "Step 2 - In a large pan, sauté the garlic, onion, and ginger in a little oil until the onion becomes translucent.",
    "Step 3 - Add the flaked fish to the pan and cook for a few minutes until slightly browned.",
    "Step 4 - Pour in the coconut milk and bring to a simmer. Let it cook for about 10 minutes, stirring occasionally.",
    "Step 5 - Add the malunggay leaves and bird's eye chili. Continue to simmer until the leaves are wilted and the sauce thickens, about 5 minutes.",
    "Step 6 - Pour in the coconut cream and season with salt and pepper. Let the mixture simmer for another 5 minutes, or until the sauce is thickened to your liking. Adjust the seasoning as needed.",
    "Step 7 - Serve hot with steamed rice. Enjoy your delicious Kinunot, a taste of Bicol's rich culinary heritage!"
  ]
  message.fallback = ""
}else if ( arrayUserMessage.includes("stingray")){
  message.intent = "recipe: Kinunot"
  message.response = "I suggest Kinunot"
  message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/kinunot.jpg"
  message.title = "Kinunot"  
  message.ingredients = [
    "INGREDIENTS:",
    "Stingray or Shark meat(alternative: manta ray, tuna) - 500 grams, boild and flaked",
    "Coconut milk - 2 cups",
    "Coconut cream(kakang gata) - 1 cup",
    "Malunggay(Moringa) leaves - 2 cups, stripped from stems",
    "Onion - 1 large, chopped",
    "Garlic - 5 cloves, minced",
    "Ginger - 2 inches piece, minced",
    "Bird's eye chili(siling labuyo) - 5 to 10 pieaces, sliced(adjust based on preference)",
    "Salt - to taste",
    "Pepper - to taste",
    "Vinegar - 1 tablespoon (optional for cleaning the fish)"    
  ]
  message.instruction = [
    "PROCEDURE:",
    "Step 1 - Clean the stingray or shark meat with water and vinegar (if using) to remove any impurities. Boil the meat in water until tender, about 20-30 minutes. Once cooked, allow it to cool and then flake the meat into small pieces. Set aside.",
    "Step 2 - In a large pan, sauté the garlic, onion, and ginger in a little oil until the onion becomes translucent.",
    "Step 3 - Add the flaked fish to the pan and cook for a few minutes until slightly browned.",
    "Step 4 - Pour in the coconut milk and bring to a simmer. Let it cook for about 10 minutes, stirring occasionally.",
    "Step 5 - Add the malunggay leaves and bird's eye chili. Continue to simmer until the leaves are wilted and the sauce thickens, about 5 minutes.",
    "Step 6 - Pour in the coconut cream and season with salt and pepper. Let the mixture simmer for another 5 minutes, or until the sauce is thickened to your liking. Adjust the seasoning as needed.",
    "Step 7 - Serve hot with steamed rice. Enjoy your delicious Kinunot, a taste of Bicol's rich culinary heritage!"
  ]
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
