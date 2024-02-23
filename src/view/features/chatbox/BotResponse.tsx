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
  let suggestion1:Array<string> = [
      "Since you have ",
      "With ingredients ",
      "With the following ingredients: ",
      "With ",
      "Knowing what you've got in the kitchen ",
      "Taking into account your available ingredients ",
      "Given what's on hand ",
      "Based on the ingredients "
  ]
  let suggestion2:Array<string> = [
    "I'd love to see you tackle the deliciousness of ",
    "think it's time to indulge in ",
    "I'd like to suggest you to cook ",
    "why not make a delicious ",
    "I recommend trying ",
    "Expand your Filipino food repertoire with ",
    "how about try cooking ",
    "you can cook ",
    "it'd be great to cook ",
    "try cooking ",
    "i suggest cooking "
  ]
  
  let bye:Array<string> = [
    "It was a pleasure! Good bye.",
    "I appreciate your time, have a wonderful day! ",
    "Thanks for chatting, best of luck with everything!",
    "Until next time, take care! ",
    "Cheers to you! Farewell.",
    "Lovely connecting with you, I'm off!",
    "It's been great, see you on the flip side!",
    "Delighted to chat, adieu for now! ",
    "Goodbye!",
    "Sayonara"
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
  
    let ingredients = []
  
    if(arrayUserMessage.includes("pork")){
    ingredients.push("pork")
    }
    if ( arrayUserMessage.includes("gata")){
      ingredients.push("gata")
    }
    if (arrayUserMessage.includes("sili")){
      ingredients.push("sili")
    }
    if (arrayUserMessage.includes("pepper")){
      ingredients.push("pepper")
    }
    if (arrayUserMessage.includes("coconut") && arrayUserMessage.includes("milk")){
      ingredients.push("coconut milk")
    }
    if(arrayUserMessage.includes("coconut") && arrayUserMessage.includes("cream")){
      ingredients.push("coconut cream")
    }
    if(arrayUserMessage.includes("chili") || arrayUserMessage.includes("sili")){
      ingredients.push("chili")
    }
    if(arrayUserMessage.includes("bagoong") || arrayUserMessage.includes("shrimp")){
      ingredients.push("shrimp/bagoong")
    }
    if(arrayUserMessage.includes("garlic") || arrayUserMessage.includes("bawang")){
      ingredients.push("garlic")
    }
    if(arrayUserMessage.includes("oil") || arrayUserMessage.includes("mantika")){
      ingredients.push("oil")
    }
    if(arrayUserMessage.includes("salt") || arrayUserMessage.includes("asin")){
      ingredients.push("salt")
    }
    if(arrayUserMessage.includes("gabi") || arrayUserMessage.includes("taro")){
      ingredients.push("taro leaves/Gabi")
    }
    if(arrayUserMessage.includes("lemon") && arrayUserMessage.includes("grass")){
      ingredients.push("lemon grass")
    }
    if(arrayUserMessage.includes("stingray") || arrayUserMessage.includes("pagi")){
      ingredients.push("stingray")
    }
    if(arrayUserMessage.includes("shark") || arrayUserMessage.includes("pating")){
      ingredients.push("shark meat")
    }
    if(arrayUserMessage.includes("moringa") || arrayUserMessage.includes("malunggay")){
      ingredients.push("moringa/malunggay")
    }
    if(arrayUserMessage.includes("vinegar") || arrayUserMessage.includes("suka")){
      ingredients.push("vinegar")
    }
    if(arrayUserMessage.includes("pork") && arrayUserMessage.includes("blood")){
      ingredients.push("pork blood")
    }
    if(arrayUserMessage.includes("bay") && arrayUserMessage.includes("leaves")){
      ingredients.push("bay leaves")
    }
    if(arrayUserMessage.includes("soy") && arrayUserMessage.includes("sauce")){
      ingredients.push("soy sauce")
    }
    if(arrayUserMessage.includes("toyo")){
      ingredients.push("toyo")
    }
    if(arrayUserMessage.includes("water")){
      ingredients.push("water")
    }
    if(arrayUserMessage.includes("tubig")){
      ingredients.push("tubig")
    }
    if(arrayUserMessage.includes("chicken") || arrayUserMessage.includes("manok")){
      ingredients.push("chicken")
    }
    if(arrayUserMessage.includes("santol") || arrayUserMessage.includes("cotton")){
      ingredients.push("cotton fruit/Santol")
    }
    if(arrayUserMessage.includes("langka")|| arrayUserMessage.includes("jackfruit")){
      ingredients.push("jackfruit")
    }
    if(arrayUserMessage.includes("tilapia")){
      ingredients.push("tilapia")
    }
    if(arrayUserMessage.includes("fish")){
      ingredients.push("fish")
    }
    if(arrayUserMessage.includes("tomato") || arrayUserMessage.includes("tomatoes") || arrayUserMessage.includes("kamatis")){
      ingredients.push("tomato")
    }
    if(arrayUserMessage.includes("bangus")){
      ingredients.push("bangus")
    }
    if(arrayUserMessage.includes("porkliver")){
      ingredients.push("porkliver")
    }
    if(arrayUserMessage.includes("porkblood")){
      ingredients.push("porkblood")
    }
    if(arrayUserMessage.includes("driedtaro")|| arrayUserMessage.includes("dried gabi")){
      ingredients.push("dried gabi")
    }
    if(arrayUserMessage.includes("onion")|| arrayUserMessage.includes("sibuyas")){
      ingredients.push("onion")
    }
    if(arrayUserMessage.includes("shrimp")){
      ingredients.push("shrimp")
    }
    //GREETINGS
    //initial response
    if( userMessage == ("hi")){
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
        message.response = suggestion1[randomNumber]+ingredients+" "+suggestion2[randomNumber]+"Bicol Express."
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
      }else if (arrayUserMessage.includes("asin")||arrayUserMessage.includes("salt") || arrayUserMessage.includes("asn")||arrayUserMessage.includes("slt")||arrayUserMessage.includes("garlic")){
        message.intent = "recipe: Adobo sa Asin(pork)"
        message.response = suggestion1[randomNumber]+ingredients+","+suggestion2[randomNumber]+"Adobo sa Asin.",
        message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/adobosaasin.jpg"
        message.title = "Adobo sa Asin"
        message.ingredients = [
          "INGREDIENTS",
          "Pork (preferably with fat) - 500 gram, cleaned and cut into cubes",
          "Water - 2 cups",
          "Garlic - 1 large, crushed",
          "Bay leaves - 2 pieces",
          "Vinegar - 1/2 cup",
          "Salt - 1 teaspoon",
          "Pepper (optional) - to taste",
          "Onion (optional) - to taste",
          "Chilli (optional) - to taste"
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
        message.response = suggestion1[randomNumber]+ingredients+" "+suggestion2[randomNumber]+"Dinuguan."
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
          "Long green pepper (siling haba) - 2 or 3 pieces",
          "Bay leaves - 2 pieces",
          "Salt - to taste",
          "Pepper - to taste",
          "Cooking oil - 3 tablespoons",
          "Sugar (optional) - 1 teaspoon to balance flavors"
        ]
        message.instruction = [
          "PROCEDURE",
          "Step 1 - Heat the cooking oil in a  large pot over medium hehat. Sauté the garlic and onion until the onion becomes translucent",
          "Step 2 - Add the pork belly pieces and cook until they start to brown.",
          "Step 3 - Pour in the vinegar and do not stir for a few minutes to allow the vinegar to cook off.",
          "Step 4 - Add the water, bay leaves, and bring to a boil. Lower the heat, cover, and simmer until the pork is tender, about 30-40 minutes",
          "Step 5 - Once the pork is tender, slowly pour in the strained pork blood while stirring continuously. Keep the heat on low to prevent the blood from curdling.",
          "Step 6 - Add the long green pepper, and continue to simmer the stew, stirring occasionally, until it thickens, about 10 - 15 minutes.",
          "Step 7 - Season with salt, pepper, and sugar(if using) to taste. The sugar helps balance the flavors, but it's optional.",
          "Step 8 - Cook for another 5 minutes after seasoning, then remove from heat.",
          "Step 9 - Serve your Dinuguan how with steamed rice or puto (steamed rice cake) for a traditional pairing."
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
      message.response = suggestion1[randomNumber]+ingredients+" "+suggestion2[randomNumber]+"Kinunot"
      message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/kinunot.jpg"
      message.title = "Kinunot" 
      message.ingredients = [
        "INGREDIENTS:",
        "Stingray or Shark meat (alternative: manta ray, tuna) - 500 grams, boild and flaked",
        "Coconut milk - 2 cups",
        "Coconut cream (kakang gata) - 1 cup",
        "Malunggay (Moringa) leaves - 2 cups, stripped from stems",
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
        "Step 3 - Add the flaked fish to the pan and cook for a few minutes until slightly browned.",
        "Step 4 - Pour in the coconut milk and bring to a simmer. Let it cook for about 10 minutes, stirring occasionally.",
        "Step 5 - Add the malunggay leaves and bird's eye chili. Continue to simmer until the leaves are wilted and the sauce thickens, about 5 minutes.",
        "Step 6 - Pour in the coconut cream and season with salt and pepper. Let the mixture simmer for another 5 minutes, or until the sauce is thickened to your liking. Adjust the seasoning as needed.",
        "Step 7 - Serve hot with steamed rice. Enjoy your delicious Kinunot, a taste of Bicol's rich culinary heritage!"
      ]
      message.fallback = ""
    }else if(arrayUserMessage.includes("pechay")|| arrayUserMessage.includes("pchay") || arrayUserMessage.includes("pchy") || arrayUserMessage.includes("cbbge")|| arrayUserMessage.includes("cabage") ||arrayUserMessage.includes("cabbage")){
      message.intent = "recipe: Picadillo"
      message.response = suggestion1[randomNumber]+ingredients+" "+suggestion2[randomNumber]+"Picadillo."
      message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/picadillofish.jpg"
      message.title = "Picadillo"
      message.ingredients = [
        "INGREDIENTS:",
        "Tilapia (or any firm white fish) - 4 pieces, cleaned, and scored",
        "Pechay or gabi leaves for wrapping",
        "Garlic - 4 cloves, minced",
        "Ginger - 1 inch pieace, sliced",
        "Onion - 1 medium, sliced",
        "Tomato - 2 medium, sliced",
        "Coconut Milk - 2 cups",
        "Lemongrass(optional) - 1 stalk, pounded",
        "Salt - to taste",
        "Pepper - to taste",
        "Green Chili (optional) for added heat"
      ]
      message.instruction = [
        "PROCEDURE:",
        "Step 1 - Lay a pechay or gabi leaf flat, place a piece of fish in the center, and top it with slices of garlic, ginger, onion, and tomato. Season with salt and pepper.",
        "Step 2 - Wrap the fish securely in the leaf and repeat with the remaining fish.",
        "Step 3 - In a pot, arrange the wrapped fish and add lemongrass (if using). Pour coconut milk over the fish.",
        "Step 4 - Cover and simmer for 20-30 minutes or until the fish is cooked through. Be careful not to let the coconut milk boil over.",
        "Step 5 - Add green chili towards the end of cooking for extra heat, if desired.",
        "Step 6 - Serve hot with rice."
      ]
      message.fallback = ""
    }else if(arrayUserMessage.includes("tomato")||arrayUserMessage.includes("tomatoes")||arrayUserMessage.includes("kamatis")||arrayUserMessage.includes("tomto") ||arrayUserMessage.includes("tomatoe")){
      message.intent = "recipe:Kusidong Isda"
      message.response = suggestion1[randomNumber]+ingredients+" "+suggestion2[randomNumber]+"Kusidong Isda."
      message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/kusidongisda.webp"
      message.title = "Kusidong Isda"
      message.ingredients = [
        "INGREDIENTS:",
        "Fish (tilapia, bangus or any preferred - 500 grams, cleaned and cut into serving pieces",
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
        "Step 1 - In a large pot, bring the water to a boil. Add the ginger, onion, and tomato. Simmer for about 5 minutes to release the flavors.",
        "Step 2 - Add the fish to the pot. Lower the heat and simmer gently until the fish is cooked through, about 10-15 minutes, depending on the size of the fish pieces. Avoid stirring too vigorously to prevent the fish from breaking apart.",
        "Step 3 - Once the fish is cooked, add the green leafy vegetables. Cook for an additional 2-3 minutes or until the vegetables are just wilted and bright green.",
        "Step 4 - Season the soup with salt or fish sauce and ground black pepper to taste. Let it simmer for another minute to blend the flavors.",
        "Step 5 - Carefully remove the soup from the heat to prevent overcooking the vegetables.",
        "Step 6 - Serve the Kusido hot, ideally with steamed rice on the side."
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
      message.response = suggestion1[randomNumber]+ingredients+" "+suggestion2[randomNumber]+"Bicol Express(Chicken)"
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
        "Long chili (siling haba) - 5 pieces, sliced",
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
    }else if(arrayUserMessage.includes("tanglad")|| arrayUserMessage.includes("lemongrass")) {
      message.intent = "recipe: Tinutungang Manok"
      message.response = suggestion1[randomNumber]+ingredients+" "+suggestion2[randomNumber]+"Tinutungang Manok"
      message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/tinutungang-manok.jpg"
      message.title = "Tinutungang Manok"  
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
        "Step 1 -Start by toasting the uncooked rice in a dry pan over medium heat. Stir continuously to prevent burning until the rice turns golden brown. Once toasted, let it cool and grind it into a fine powder using a food processor or mortar and pestle. Set aside.",
        "Step 2 -In a large pot, heat the cooking oil over medium heat. Sauté the garlic, onion, and ginger until the onion becomes translucent.",
        "Step 3 -Add the chicken pieces to the pot and cook until they start to brown slightly.",
        "Step 4 -Pour in the coconut milk (1st extract) and add the lemongrass. Bring to a boil, then reduce the heat to simmer. Cover and cook until the chicken is tender, about 30 minutes.",
        "Step 5 -Add the ground toasted rice to the pot and stir well. The sauce will start to thicken as the rice absorbs the coconut milk.",
        "Step 6 -Add the green chili (if using) and season with salt and pepper to taste. Simmer for another 5-10 minutes, or until the sauce reaches your desired consistency.",
        "Step 7 -Finally, pour in the coconut cream (kakang gata) and gently simmer for an additional 5 minutes, stirring occasionally. The sauce should be rich and creamy.",
        "Step 8 -Adjust the seasoning if necessary and remove the lemongrass before serving.",
        "Step 9 -Serve hot with steamed rice and enjoy your Tinutungang Manok!"
      ]
      message.fallback = ""
    }else{
      message.response = "Please add more ingredients. Input at least three(3) or more ingredients for better results. Thank you!"
    }
  }else if (arrayUserMessage.includes("santol") || arrayUserMessage.includes("sentul") || arrayUserMessage.includes("santul") || arrayUserMessage.includes("sntl") ||
    arrayUserMessage.includes("sntol") || arrayUserMessage.includes("cotton") || arrayUserMessage.includes("coton")){
    message.intent = "recipe: Ginataang Santol"
    message.response = suggestion1[randomNumber]+ingredients+" "+suggestion2[randomNumber]+"Ginataang Santol"
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
    message.response = suggestion1[randomNumber]+ingredients+" "+suggestion2[randomNumber]+"Jackfruit",
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/ginataanglangka.jpg"
    message.title = "Ginataang Langka"
    message.ingredients = [
      "INGREDIENTS:",
      "Unripe jackfruit - 500 grams, peeled and sliced into bite-size pieces",
      "Coconut milk - 2 cups",
      "Coconut cream (Kakang gata) - 1 cup for the final slimmer",
      "Pork belly/shrimp/crab - 200 grams, cut into small pieces(optional)",
      "Garlic - 5 cloves, minced",
      "Onion - 1 large, chopped",
      "Ginger - 1 inch piece, minced",
      "Green chili (siling haba) - 2 to 3 pieces, sliced",
      "Bird's eye chili (siling labuyo) - 2 pieces, chopped(optional for extra heat)",
      "Salt - to taste",
      "Pepper - to taste",
      "Oil - 2 tablespoon",
      "Water - 1 cup (if needed, to help cook the jackfruit)"
    ]
    message.instruction = [
      "PROCEDURE:",
      "Step 1 - In a large pot, heat the cooking oil over medium heat. Sauté the garlic, onion, and ginger until aromatic and the onion is translucent.",
      "Step 2 - If using pork, ddit to the pot and cook until it starts to brown. i using shrip, you will add it later to avoid overcooking.",
      "Step 3 - Add the sliced unripe jackfruit to th pot. Stir for a efw minutes to mix well with the aromatics.",
      "Step 4 - Pour in the coconut milk and add the green chillis. If the mixture seems too dry, add up to 1 cup of water to help cook the jackfruit until it becomes tender. Cover and  simmer for about 15 to 20 minutes, or until the jackfruit is almost tender.",
      "Step 5 - If using shrimp, add them now, and cook until they turn pink and are cooked through.",
      "Step 6 - Season the dish with salt and pepper. Add the bird's eye chili if you prefer a spicier dish.",
      "Step 7 - Finally, pour in the coconut cream and simmer for another 5-10 minutes, or until the sauce thickens slightly and the jackfruit is fully tender.",
      "Step 8 - Adjust the seasoning if necessary, then remove from heat.",
      "Step 8 - Serve hot with steamed rice."
    ]
    message.fallback = ""
  }else if (arrayUserMessage.includes("gabi")|| arrayUserMessage.includes("taro") || arrayUserMessage.includes("gbi") || arrayUserMessage.includes("taru") || arrayUserMessage.includes("gabe")){
    message.intent = "recipe: Pinangat"
    message.response = suggestion1[randomNumber]+ingredients+" "+suggestion2[randomNumber]+"Pinangat",
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/pinangat.jpg",
    message.ingredients = [
      "INGREDIENTS:",
      "Dried taro (gabi) leaves - 200 grams, thoroughly cleaned",
      "Coconut milk - 2 cups",
      "Coconut cream (kakang gata) - 1 cup for topping",
      "Dried fish or shrimp (optional) - 100 grams, soaked in water, then drained",
      "Shrimp paste (bagoong) - 1 tablespoon",
      "Bird's eye chili (siling labuyo) - 5-10 pieces, chopped (adjust based on spice preference)",
      "Lemon grass (tanglad) - 2 stalks, tied into knots",
      "Salt - to taste",
      "Pepper - to taste"
    ]
    message.instruction = [
      "PROCEDURE:",
      "Step 1 - Prepare the taro leaves by trimming away the thick stems and ensuring they are clean. If you're using large leaves, cut them into smaller pieces. Set aside.",
      "Step 2 - In a bowl, mix the dried fish or small shrimp with chopped bird's eye chili, a bit of salt, and shrimp paste. This mixture will be the filling for the pinangat.",
      "Step 3 - Take a piece of taro leaf, place a spoonful of the filling in the center, and fold the leaf over the filling, creating a packet. Repeat this process until all the filling is used.",
      "Step 4 - In a cooking pot, arrange the lemon grass at the bottom. This will prevent the pinangat from sticking to the pot and add aroma. Carefully stack the pinangat packets on top of the lemongrass.",
      "Step 5 - Pour the coconut milk over the pinangat packets in the pot. The coconut milk should just about cover the packets. Bring to a simmer over low heat, cover, and let it cook for about 20-30 minutes.",
      "Step 6 - After the pinangat packets have cooked and absorbed the coconut milk, gently pour the coconut cream over them. Continue to cook for another 10-15 minutes, allowing the cream to thicken slightly and the flavors to meld together.",
      "Step 7 - Season with salt and pepper to taste. Be gentle when stirring to avoid breaking the packets.",
      "Step 8 - Once the sauce has thickened to your liking and the pinangat packets are tender, remove from heat.",
      "Step 9 - Serve warm with rice. Enjoy your homemade Pinangat!"
    ]
    message.title = "Pinangat"
    message.fallback = ""
  } else if (arrayUserMessage.includes("liver") || arrayUserMessage.includes("porkliver")) {
    message.intent = "recipe: Igado"
    message.response = suggestion1[randomNumber]+ingredients+","+suggestion2[randomNumber]+"Igado",    
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/igado.jpg",
      message.ingredients = [
        "Ingredients:",
        "Pork - 500 grams, cut into strips",
        "Pork/Pork Liver - 500 grams, cut into strips",
        "Garlic - 6 cloves, minced",
        "Onion - 1 large, chopped",
        "Pea - 1 cup",
        "Bell pepper - 1, cut into strips",
        "Soy sauce - 1/2 cup",
        "Vinegar - 1/4 cup",
        "Bay leaves - 2",
        "Pepper to taste",
        "Water 1 cup (adjust as needed)",
        "Salt - to taste",
        "Oil - 3 tablespoons"
      ]
    message.instruction = [
      "Procedure:",
      "Step 1 - Heat oil in a pan over medium heat. Sauté garlic and onion until they become soft and fragrant.",
      "Step 2 - Add the pork tenderloin strips. Cook until they turn light brown.",
      "Step 3 - Pour in the soy sauce, vinegar, and add the bay leaves and pepper. Let it simmer for a few minutes without stirring to allow the flavors to meld.",
      "Step 4 - Add water just enough to cover the meat. Let it simmer until the pork is tender, about 20 minutes. Adjust the heat as necessary to maintain a gentle simmer and prevent the meat from drying out.",
      "Step 5- Once the pork is tender, add the pork liver. Cook for about 5 minutes, or until the liver is cooked through but not overcooked to keep it tender.",
      "Step 6 - Add the green peas and bell peppers. Cook for another 5 minutes or until the vegetables are cooked yet still crisp.",
      "Step 7 - Season with salt to taste. Adjust the seasoning if necessary, according to your preference.",
      "Step 8 - Serve hot with steamed rice."
    ]
  } else if (arrayUserMessage.includes("Porkblood") || arrayUserMessage.includes("porkblood")) {
    message.intent = "recipe: Kandingga"
    message.response = suggestion1[randomNumber]+ingredients+","+suggestion2[randomNumber]+"Kandingga",    
      message.ingredients = [
        "Ingredients:",
        "Pork (preferably with fat) - 500 grams, cut into small cubes",
        "Pork blood - 2 cups, stirred and strained",
        "Coconut milk -2 cups",
        "Coconut cream (kakang gata) - 1 cup",
        "Garlic - 5 cloves, minced",
        "Onion - 1 large, chopped",
        "Ginger - 2 inch piece, minced",
        "Green chili (siling haba) - 3-5 pieces, sliced",
        "Vinegar - 1/4 cup",
        "Bay leaves - 2",
        "Salt to taste",
        "Pepper to taste",
        "Cooking oil - 2 tablespoons"
      ]
    message.instruction = [
      "Procedure:",
      "Step 1 - Heat the cooking oil in a large pot over medium heat. Sauté the garlic, onion, and ginger until the onion is translucent and aromatic.",
      "Step 2 - Add the pork cubes to the pot. Cook until the pork is lightly browned on all sides.",
      "Step 3 - Pour in the vinegar and let it simmer for a few minutes without stirring to cook off the acidity.",
      "Step 4 - Add the bay leaves and coconut milk. Bring to a simmer, then lower the heat. Cover and let it cook for about 20-30 minutes, or until the pork is tender.",
      "Step 5 - Once the pork is tender, slowly stir in the pork blood. Keep stirring to prevent the blood from curdling. Add the green chili.",
      "Step 6 - Allow the mixture to simmer gently, stirring occasionally, until the sauce thickens, about 10-15 minutes.",
      "Step 7 - Pour in the coconut cream and season with salt and pepper. Continue to cook for another 5-10 minutes, until the sauce reaches your desired thickness.",
      "Step 8 - Adjust the seasoning if necessary, then turn off the heat.",
      "Step 9 - Serve the Kandingga hot with steamed rice.",
    ]
  } else if (arrayUserMessage.includes("driedtaro") || arrayUserMessage.includes("dried gabi")) {
    message.intent = "recipe: Laing"
    message.response = suggestion1[randomNumber]+ingredients+","+suggestion2[randomNumber]+"Laing",    
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/laing.jpg",
      message.ingredients = [
        "Ingredients:",
        "Dried taro leaves/Taro/Gabi - 200 grams, thoroughly cleaned",
        "Coconut milk - 4 cups",
        "Coconut cream - 1 cup",
        "Dried fish/Fish/Shrimp - 100 grams, soaked in water, then drained",
        "Shrimp/Bagoong - 2 tablespoons",
        "Garlic - 5 cloves, minced",
        "Onion - 1 large, chopped",
        "Ginger - 1 inch piece, minced",
        "Chili - 5 pieces, chopped (adjust based on spice preference)",
        "salt to taste",
        "pepper to taste",
        "2 tablespoons"
      ]
    message.instruction = [
      "Procedure:",
      "Step 1 - In a large pot, heat the cooking oil over medium heat. Sauté the garlic, onion, and ginger until the onion becomes soft and translucent.",
      "Step 2 - Add the shrimp paste and sauté for about 1 minute until aromatic.",
      "Step 3 - Pour in the coconut milk and bring to a simmer. Add the dried fish or shrimp if using, and stir well.",
      "Step 4 - Gently add the dried taro leaves. Do not stir. Let the leaves get soaked in the coconut milk. Cover and simmer for about 20 minutes. The taro leaves will slowly absorb the coconut milk and reduce in volume.",
      "Step 5 - Once the taro leaves are soft and have absorbed most of the coconut milk, add the bird's eye chili. Season with salt and pepper to taste.",
      "Step 6 - Pour in the coconut cream for a richer flavor and let it simmer for another 10 minutes or until the mixture is almost dry, stirring occasionally to prevent sticking at the bottom.",
      "Step 7 - Adjust the seasoning if necessary. The laing should be creamy and spicy with a slight hint of the shrimp paste's saltiness.",
      "Step 8 - Serve hot with rice. Enjoy your flavorful and spicy Laing!"
    ]
  }else if ( arrayUserMessage.includes("shark") || arrayUserMessage.includes("sharks")|| arrayUserMessage.includes("pating")){
    message.intent = "recipe:Kinunot"
    message.response = suggestion1[randomNumber]+ingredients+" "+suggestion2[randomNumber]+"Kinunot(shark)"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/kinunot.jpg"
    message.title = "Kinunot" 
    message.ingredients = [
      "INGREDIENTS:",
      "Stingray or Shark meat (alternative: manta ray, tuna) - 500 grams, boild and flaked",
      "Coconut milk - 2 cups",
      "Coconut cream (kakang gata) - 1 cup",
      "Malunggay (Moringa) leaves - 2 cups, stripped from stems",
      "Onion - 1 large, chopped",
      "Garlic - 5 cloves, minced",
      "Ginger - 2 inches piece, minced",
      "Bird's eye chili (siling labuyo) - 5 to 10 pieaces, sliced(adjust based on preference)",
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
    message.response = suggestion1[randomNumber]+ingredients+" "+suggestion2[randomNumber]+"Kinunot(stingray)"
    message.img = "https://debescawayancampusportal.com/kusina/bicolrecipe/kinunot.jpg"
    message.title = "Kinunot"  
    message.ingredients = [
      "INGREDIENTS:",
      "Stingray or Shark meat(alternative: manta ray, tuna) - 500 grams, boild and flaked",
      "Coconut milk - 2 cups",
      "Coconut cream (kakang gata) - 1 cup",
      "Malunggay (Moringa) leaves - 2 cups, stripped from stems",
      "Onion - 1 large, chopped",
      "Garlic - 5 cloves, minced",
      "Ginger - 2 inches piece, minced",
      "Bird's eye chili (siling labuyo) - 5 to 10 pieaces, sliced(adjust based on preference)",
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
    message.response = bye[randomNumber]
    message.fallback = ""
  }else{
    message.fallback = "Please make sure to spell correctly, or input sensible and commonly used ingredients in Bicol. I suggest to enter at least three(3) ingredients for better results.Thank you."
  }
    return message;
  }
  