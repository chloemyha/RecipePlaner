use recipes;

db.dropDatabase();

db.recipes.insertMany([
  {
    name: "Balmoral Chicken",
    ingredients: "chicken breasts,haggis,rashes of bacon,olive oil,butter",
    method:
      "1. Preheat oven to 180°C. 2. Slice down the side of each chicken breast, making a pocket. 3. Slice the haggis into small chunks and squidge (technical term) into the chicken pocket. 4. Wrap each breast in a rasher of bacon and secure with a toothpick if necessary. 5. Heat the oil and butter in a non-stick frying pan, sear the bacon wrapped around the chicken breasts. Give 2 minutes on each side. 6. Place in an oven proof dish and transfer to the oven for 35-40 minutes or until cooked through & piping hot. 7. Serve with the peppercorn sauce and a selection of vegetables and/ or mash potato.",
    image:
      "https://www.carolinescooking.com/wp-content/uploads/2022/01/haggis-stuffed-chicken-Balmoral-featured-pic-sq.jpg",
    category: "dinner",
  },

  {
    name: "Beef Burger",
    ingredients:
      "beef mince, onion,garlic clove,dijon mustard,Worcestershire sauce,small handful of chopped fresh flatleaf parsley, large dill pickle, finely chopped, large dill pickle, finely chopped, eggs, rolls ",

    method:
      "Place all the ingredients for the burgers in a large bowl. Season and mix well. Cover and chill in the fridge for 1 hour. Using wet hands, shape the mixture into 8 burgers. If you want to cook them straight away skip to step 4. If you are freezing them; place flat between sheets of baking paper in a rigid freezerproof container. Freeze for up to 3 months. When ready to use, defrost the burgers completely in the fridge; this will take 3-4 hours. Heat a griddle pan or barbecue to hot. Brush both sides of the burgers with oil and cook for 3-4 minutes each side or until well browned and cooked. Meanwhile, preheat the grill to medium hot. Top each burger with a slice of cheese and grill for 2 minutes until bubbling. Toast the burger buns until lightly golden. Mix the mayonnaise with the mustard and spread over the base of each bun. Add some tomato, lettuce and avocado slices, then the burger, red onion slices and the other half of the bun. Serve with a small bowl of ketchup and fries, if you like.",
    image:
      "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/905610-1-eng-GB_burger-768x960.jpg",
    category: "dinner",
  },

  {
    name: "Buffalo Wings with Blue Cheese Sauce",
    ingredients:
      " flour,garlic powder, cayenne pepper, paprika, chicken wings, hot sauce, runny honey,blue cheese,, sour cream ",

    method:
      "Mix the flour, garlic powder, cayenne pepper, paprika and a large pinch of salt in a large bowl. Add the chicken and toss to coat, then cover and chill for 30 minutes. For the buffalo sauce, mix all the ingredients in a small pan over a medium heat, stirring often, until smooth. Bring to a simmer, then set aside to cool. For the blue cheese sauce, melt the butter in a medium pan, then add the flour and cook, stirring, for 1 minute. Add the milk gradually, stirring, until smooth and thickened. Bring to a simmer, stirring, then remove from the heat and crumble in the cheese. Stir until smooth. Stir in the soured cream, then season to taste and leave to cool. Light the barbecue so the coals are glowing (and not directly underthe food) or the gas is on medium. Cook the wings for 10-15 minutes with the lid closed, turning from time to time. Transfer the wings to a large bowl and toss with the buffalo sauce, then return to the barbecue and cook for 10-15 minutes more, turning and basting with leftover buffalo sauce, until charred and cooked through. Serve the wings hot, with the cheese sauce and an apple and celery salad, if you like.",
    image:
      "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/06/01.Delicious-BBQ-buffalo-wings-960-768x960.jpg",
    category: "dinner",
  },

  {
    name: "Ultimate Grilled Cheese Sandwich",
    ingredients: "crusty white bread slices,cheddar,gruyere ,mozzarella",
    method:
      "Lightly toast the bread, then cool slightly. Spread butter on both sides of each slice, then divide the cheeses between them. Heat a splash of oil in the pan over a medium heat. Add both slices of bread, cheese-side up, then cover with the lid to help the cheese start to melt. After 2 minutes, remove the lid and continue frying until the underside of the bread is golden and the cheese looks melty. Carefully and quickly sandwich the 2 slices together so all the cheeses are in the middle, then gently press down with a spatula/fish slice and continue cooking until the cheese has melted and the bread is deep golden – it’s best to turn the sandwich every minute or so. Slice, then serve straightaway with gherkins and pickle/chutney.",
    image:
      "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/01/02.Delicious-January-2020-cheese-sandwich-768x960.jpg",
    category: "lunch",
  },

  {
    name: "Triple Chocolate Cookies",
    ingredients:
      "salted butter, golden caste sugar, dark muscovado sugar, vanilla bean paste, medium egg, milk , cocoa powder",
    method:
      "Put the butter and both sugars in a large mixing bowl (or in the bowl of a food processor fitted with a paddle beater) and beat until soft, lightly and creamy (about 7-10 minutes). Stir in the vanilla bean paste. Mix the egg and milk together in a jug, then add to the bowl with the butter/sugar and mix until smooth. Add the flour, cocoa and chocolate chunks and beat to form a smooth dough. Heat the oven to 180ºC/160ºC fan/gas 4. Divide the dough into 14 equal amounts, then roll into rough balls (see tip). Space the balls out over the baking sheets, leaving room for them to spread as they bake. Chill the cookie balls for 30 minutes. Bake the cookies for 12-15 minutes, then remove from the oven. Working with one baking sheet at a time, give the baking sheet a short, sharp bang on the work surface (this knocks out any air in the puffed cookies and gives them the desired ripple effect). Repeat with the other baking sheet. Set both sheets on a wire rack to cool for 5 minutes. Lift the baking paper sheets and cookies onto the wire rack until the biscuits are cool enough to eat.",
    image:
      "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/09/triple-chocolate-cookies-768x960.jpg",
    category: "sweet",
  },

  {
    name: "Eggs Benedict",
    ingredients:
      "bacon slices, white wine vinegar, english muffins, chive, unsalted butter, eggs, juice of half a lemon, pinch of cayenne pepper",

    method:
      "Put the bacon on the grill tray ready for cooking. Half-fill a large pan with water and bring to the boil. Add the vinegar and a pinch of salt. Split the muffins and line a baking tray with kitchen paper. Next, poach the eggs in 2 batches of four. Turn the vinegar water to a very gentle simmer (a few bubbles at the base of the pan, but no more). Break an egg into a teacup, then slide it into the pan. Repeat 3 times, then cook for 3 minutes. Carefully lift out the eggs with a slotted spoon onto the lined baking tray. Repeat with the other 4 eggs. Cover the poached eggs with cling film (or with a large upturned bowl) and set aside. Leave the water on a gentle simmer. For the hollandaise sauce, put the butter in a small pan and leave over a very low heat until melted. Carefully skim off any foam from the surface, then pour the clear melted butter into a small bowl, leaving behind the milky liquid that will have settled on the base of the pan. Discard the milky liquid, wipe the pan clean, then return the clear melted butter to the pan and put over a low heat. Fill a medium pan with about 5cm water and bring to a simmer. Sit a medium heatproof glass bowl over the pan without the base touching the water. Add the egg yolks and 2 tbsp cold water and whisk by hand or with an electric hand mixer until thick and mousse-like - it needs to feel warm when you dip in your little finger. Heat the grill to high. Increase the heat under the pan of clarified butter until it’s gently bubbling and hot. Remove the bowl containing the egg yolks from over the pan and very gradually drizzle in the hot clarified butter, whisking all the time, until the mixture becomes thick and glossy. Whisk in the lemon juice, cayenne pepper and salt to taste. Cover the bowl with cling film, sit it back over the pan of hot water and set aside off the heat. Toast the muffins until golden. Meanwhile, grill the bacon for 1-2 minutes until just cooked through but not crisp. Slide the poached eggs back into the just-simmering water and leave for 30 seconds. Reline the baking tray with kitchen paper, then lift out the eggs onto the tray and leave to drain briefly. Put 2 muffin halves on each of 4 warmed plates, spread with a little butter and top each half with a bacon rasher and a poached egg. Spoon some of the hollandaise sauce over each egg, sprinkle with chives and a little extra cayenne pepper and serve straightaway.",
    image:
      "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/eggs-benedict-768x960.jpg",
    category: "breakfast",
  },

  {
    name: "Vegan Pesto Spaghetti",
    ingredients:
      "olive oil , small onion ,garlic cloves, courgette, vegetable stock, spaghetti, broad beans, runner beans",
    method:
      "Heat 1 tbsp of the oil in a large pan over a medium heat. Add the chopped onion and cook for 5 minutes until softening. Add the garlic and cook for a further minute. Add the remaining 1 tbsp oil to the pan, then stir in the courgette and fry for 5 minutes until the edges are charred and the courgette slices are lightly coloured. Pour in the stock, stirring to combine, then bring to a simmer and add the spaghetti, broad beans, runner beans and lemon wedges. Simmer on a medium-high heat for 10 minutes or until the pasta is tender (al denté). Once the pasta has cooked and the stock has reduced, add the green olives and pesto, tossing everything together gently to combine. Serve with the lemon zest and juice, an extra drizzle of olive oil and, if you like, and basil leaves.",
    image:
      "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/08/960_ONE_PAN_PESTO_SPAGHETTI_LEMON_COURGETTES-768x960.jpg",
    category: "dinner",
    dietary: "vegan",
  },
  {
    name: "Orzo with Roasted Veg Sauce",
    ingredients:
      "large red onion, large red pepper, large yellow pepper, garlic cloves, plum tomatoes, balsamic vinegar, orzo, vegan vegetable stock, handful of basil leaves",

    method: `Heat the oven to 180°C fan/gas 6. Put the onion, peppers and garlic in a roasting tin, drizzle with a little olive oil and add a good pinch of salt. Roast for about 20 minutes. Add the tomatoes and balsamic vinegar and stir. Return the vegetables to the oven and roast for a further 25-30 minutes. At this stage there should be a lovely concentrated sauce in the bottom of the roasting tin. Transfer everything to a food processor and whizz. Pour the sauce into a saucepan, add the orzo and simmer gently for about 10 minutes until the sauce has thickened and reduced and the orzo is starting to soften. Add the vegetable stock in small increments – you probably won’t need all of it. What you’re aiming for is a risotto-like texture, where the orzo is cooked al dente and the sauce is thick and rich. Garnish with basil leaves before serving.`,
    image:
      "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/06/960-Orzo-with-roasted-vegetable-sauce-768x960.jpg",
    category: "dinner",
    dietary: "vegan",
  },

  {
    name: "Spiced carrot and lentil soup",
    ingredients:
      "cumin seeds, chili flakes,carrot,red lentil, hot vegetable stock, milk",
    method:
      "STEP 1Heat a large saucepan and dry-fry 2 tsp cumin seeds and a pinch of chilli flakes for 1 min, or until they start to jump around the pan and release their aromas.STEP 2Scoop out about half with a spoon and set aside. Add 2 tbsp olive oil, 600g coarsely grated carrots, 140g split red lentils, 1l hot vegetable stock and 125ml milk to the pan and bring to the boil. STEP 3Simmer for 15 mins until the lentils have swollen and softened. STEP 4 Whizz the soup with a stick blender or in a food processor until smooth (or leave it chunky if you prefer). STEP 5 Season to taste and finish with a dollop of plain yogurt and a sprinkling of the reserved toasted spices. Serve with warmed naan breads.",
    image:
      "https://elizabethchloe.com/wp-content/uploads/2020/11/Spicy-Carrot-and-Lentil-Soup-Thumbnail-2.jpg",
    dietary: "gluten-free",
    category: "dinner",
  },

  {
    name: "Gluten-free Brownies",
    ingredients:
      "eggs, unsalted butter, dark chocolate, caster sugar, vanilla extract, gluten-free plain flour, cocoa powder, sea salt, milk chocolate",

    category: "snack",

    method: "Method Goes Here",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gluten-free-brownies-4be63ff.jpg",
  },
  {
    name: "Chocolate, cardamom & hazelnut torte",
    ingredients:
      "green cardamom pods, hazelnuts, dark chocolate, butter, egg, caster sugar, cocoa powder, creme fraiche",

    category: "sweet",
    method: "Method Goes Here",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chocolate-torte-d56ded1.jpg",
  },
  {
    name: "Egg & tomato baps",
    ingredients:
      "tomato, olive oil, egg, parsley, garlic clove, wholewheat baps",
    category: "breakfast",
    method: "Method Goes Here",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/eggtomatobap_5639-223e135.jpg",
  },

  {
    name: "Tuna & tomato pasta bake",
    ingredients:
      "pasta, tuna, milk, flour, mature cheddar, mustard powder, sweetcorn, tomato",
    category: "dinner",
    method: "Method Goes Here",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tuna-tomato-pasta-bake-2e58450.jpg",
  },

  {
    name: "Simple White Cake",
    ingredients:
      "white sugar, butter, egg, vanilla extract, baking powder, milk",
    method:
      "Step 1 Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x9 inch pan or line a muffin pan with paper liners. Step 2 In a medium bowl, cream together the sugar and butter. Beat in the eggs, one at a time, then stir in the vanilla. Combine flour and baking powder, add to the creamed mixture and mix well. Finally stir in the milk until batter is smooth. Pour or spoon batter into the prepared pan.Step 3 Bake for 30 to 40 minutes in the preheated oven. For cupcakes, bake 20 to 25 minutes. Cake is done when it springs back to the touch.",
    image:
      "https://www.nelliebellie.com/wp-content/uploads/2014/11/homemade-white-cake-recipe.png",
    category: "sweet",
    servings: 12,
  },
  {
    name: "Cheese and Broccoli Bake",
    ingredients:
      "macaroni, tenderstem broccoli, olive oil, onion, plain flour, semi-skimmed milk",

    method:
      "Bring a large pan of salted water to the boil over a high heat. Add the macaroni and cook for 8 minutes or until it still has some bite (al dente). For the last 2 minutes add the broccoli, then drain and rinse under cold water to refresh. Cover with damp kitchen paper. Meanwhile in another large deep saucepan, warm the olive oil over a medium heat. Add the onion and gently fry for 10 minutes or until soft. Add the flour, turn up the heat slightly and cook for 2-3 minutes, stirring, until the flour turns a little darker and smells biscuity. Heat the oven to 200°C/ 180°C fan/gas 6. Turn the heat to low, then slowly add the milk, whisking all the time with a balloon whisk. Turn the heat to medium and stir until the mix thickens and boils gently. Add the spinach and half the grated cheeses. Stir until the spinach wilts and the cheese melts. Add the pasta and broccoli, season to taste, then pour into a 1.5 litre ovenproof dish (see make ahead). Mix the rest of the cheese with the breadcrumbs, then use to top the macaroni. Bake for 20-25 minutes until the top is deep golden brown and the sauce is bubbling. Serve with a sharply dressed green salad, if you like.",
    image:
      "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/612151-1-eng-GB_delicious_midweekbible_nov15_19015_maccheesespinachbroccoli-768x960.jpg",
    category: "dinner",
    dietary: "vegetarian",
  },
  {
    name: "Granola",
    ingredients:
      "rolled oats, almonds, pumpkin seeds, cinnamon,salt, maple syrup",

    category: "breakfast",

    method:
      " 1.Preheat the oven to 325°F and line a baking sheet with parchment paper. 2. In a large bowl, add the rolled oats, almonds, pumpkin seeds, cinnamon and salt and stir to combine. 3. In a small bowl, add the melted coconut oil, maple syrup and vanilla extract and whisk to combine. 4. Drizzle the wet ingredients over the dry ingredients and mix until everything is well coated. 5. Pour the granola onto a parchment paper-lined baking sheet and use a spatula or spoon to spread it into an even layer. 6. Transfer the baking sheet to the oven for 20 minutes, remove it from the oven and give it stir on the baking sheet, then return it to the oven for a final 10-15 minutes until golden brown. 7. Once baked, remove it from the oven, add flaked coconut and raisins, then allow to cool completely. (If you want the granola to be extra chunky, add an extra drizzle of maple syrup over the top of the warm granola to help it stick together as it cools.) 8. Once cooled, the granola can be stored in an air-tight container in the cupboard for up to a week or frozen for up to 3 months.",
    image:
      "https://www.thelastfoodblog.com/wp-content/uploads/2020/07/granola-close-up-2.jpg",
  },
  {
    name: "Garlic Butter Steak",
    ingredients:
      "ribeye steak, olive oil, butter, garlic, rosemary sprig, thyme spring",
    category: "dinner",
    method:
      "1. Preheat oven to 200°F (95°C).2. Generously season all sides of the steak with salt and pepper.3. Transfer to a wire rack on top of a baking sheet, then bake for about 45 minutes to an hour until the internal temperature reads about 125°F (51° C) for medium-rare. Adjust the bake time based on if you like your steak more rare or more well-done (you monster).4. Heat the canola oil in a pan over high heat until smoking. Do not use olive oil, as its smoke point is significantly lower than that of canola oil and will smoke before reaching the desired cooking temperature.5. Sear the steak for 30 seconds on the first side, then flip.6. Add the butter, garlic, rosemary, and thyme and swirl around the pan.7. Transfer the garlic and herbs on top of the steak and baste the steak with the butter using a large spoon.8. Baste for about 30 seconds, then flip and baste the other side for about 15 seconds.9. Turn the steak on its side and cook to render off any excess fat.10. Rest the steak on a cutting board or wire rack for about 10 minutes. Slicing the steak before the resting period has finished will result in a lot of the juices leaking out, which may not be desirable. 11. Slice the steak into 0.5 -inch (1 cm) strips, then fan out the slices and serve.",
    image:
      "https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4-500x500.jpg",
  },
  {
    name: "Saucy bean baked eggs",
    ingredients:
      "cherry tomatoes(canned), mixed beans(canned),spinach, eggs, ham",

    method:
      "STEP 1 Tip the tomatoes and bean salad into an ovenproof frying pan or shallow flameproof casserole dish. Simmer for 10 mins, or until reduced. Stir in the spinach and cook for 5 mins more until wilted. STEP 2 Heat the grill to medium. Make four indentations in the mixture using the back of a spoon, then crack one egg in each. Nestle the ham in the mixture, then grill for 4-5 mins, or until the whites are set and the yolks runny. Serve with rye bread, if you like.",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/saucy-bean-baked-eggs-d582e18.jpg",

    category: "lunch",
  },
]);
