const recipes = [
  {
    id: "1",
    title: "Masala Maggi",
    description: "Quick and spicy comfort food.",
    steps: [
      { type: "text", content: "Boil 1.5 cups of water." },
      { type: "text", content: "Add Maggi noodles and tastemaker." },
      { type: "timer", duration: 3 },
      { type: "text", content: "Cook until water reduces." },
    ],
  },
  {
    id: "2",
    title: "Boiled Eggs",
    description: "Simple protein-rich meal.",
    steps: [
      { type: "text", content: "Place eggs in water." },
      { type: "timer", duration: 600 },
      { type: "text", content: "Cool and peel eggs." },
    ],
  },
  {
    id: "3",
    title: "Paneer Tikka",
    description: "Grilled marinated cottage cheese cubes.",
    steps: [
      { type: "text", content: "Marinate paneer with yogurt and spices." },
      { type: "timer", duration: 1800 },
      { type: "text", content: "Skewer and grill until charred." },
    ],
    
  },
  {
    id: "4",
    title: "Classic Bruschetta",
    description: "Toasted bread topped with fresh tomatoes and basil.",
    steps: [
      { type: "text", content: "Toast bread slices with olive oil." },
      { type: "text", content: "Top with chopped tomatoes, garlic, and basil." },
      { type: "timer", duration: 300 },
      { type: "text", content: "Drizzle with balsamic glaze and serve." },
    ],
  },
  {
    id: "5",
    title: "Vegetable Pulao",
    description: "Fragrant rice cooked with mixed vegetables.",
    steps: [
      { type: "text", content: "Sauté whole spices and veggies in a pressure cooker." },
      { type: "text", content: "Add soaked rice and water." },
      { type: "timer", duration: 900 },
      { type: "text", content: "Pressure cook for 2 whistles and fluff." },
    ],
  },
  {
    id: "6",
    title: "Avocado Toast",
    description: "Trendy and healthy breakfast staple.",
    steps: [
      { type: "text", content: "Toast your favorite sourdough bread." },
      { type: "text", content: "Mash avocado with salt, lime, and chili flakes." },
      { type: "timer", duration: 60 },
      { type: "text", content: "Spread on toast and top with seeds." },
    ],
  },
  {
    id: "7",
    title: "Hummus & Pita",
    description: "Creamy chickpea dip with warm bread.",
    steps: [
      { type: "text", content: "Blend chickpeas, tahini, lemon, and garlic." },
      { type: "text", content: "Warm the pita bread in an oven." },
      { type: "timer", duration: 180 },
      { type: "text", content: "Serve with a drizzle of olive oil." },
    ],
  },
  {
    id: "8",
    title: "Aloo Paratha",
    description: "Indian flatbread stuffed with spiced potatoes.",
    steps: [
      { type: "text", content: "Prepare potato stuffing and wheat dough." },
      { type: "text", content: "Stuff dough balls and roll into flatbreads." },
      { type: "timer", duration: 300 },
      { type: "text", content: "Cook on a tawa with ghee until golden brown." },
    ],
  },
  {
    id: "9",
    title: "Greek Salad",
    description: "Refreshing salad with feta and olives.",
    steps: [
      { type: "text", content: "Chop cucumbers, tomatoes, and red onions." },
      { type: "text", content: "Add olives and feta cheese cubes." },
      { type: "timer", duration: 300 },
      { type: "text", content: "Toss with olive oil and dried oregano." },
    ],
  },
  {
    id: "10",
    title: "Garlic Mushroom Stir-fry",
    description: "Quick buttery mushrooms with herbs.",
    steps: [
      { type: "text", content: "Sauté minced garlic in butter." },
      { type: "text", content: "Add sliced mushrooms and high heat." },
      { type: "timer", duration: 420 },
      { type: "text", content: "Garnish with parsley and black pepper." },
    ],
  },
  {
  id: "11",
  title: "Chocolate Mug Cake",
  description: "Quick microwave dessert.",
  steps: [
    { type: "text", content: "Mix flour, cocoa, sugar, and milk in a mug." },
    { type: "timer", duration: 90 },
    { type: "text", content: "Let it cool slightly and enjoy." },
  ],
  },
  {
    id: "12",
    title: "Grilled Cheese Sandwich",
    description: "Crispy, cheesy goodness.",
    steps: [
      { type: "text", content: "Butter bread and place cheese between slices." },
      { type: "timer", duration: 300 },
      { type: "text", content: "Grill until golden brown on both sides." },
    ],
  },
  {
    id: "13",
    title: "Banana Smoothie",
    description: "Healthy and refreshing drink.",
    steps: [
      { type: "text", content: "Add banana, milk, and honey to blender." },
      { type: "timer", duration: 60 },
      { type: "text", content: "Blend until smooth and serve chilled." },
    ],
  },
  {
    id: "14",
    title: "Tomato Soup",
    description: "Warm and comforting classic.",
    steps: [
      { type: "text", content: "Boil tomatoes with garlic and onion." },
      { type: "timer", duration: 600 },
      { type: "text", content: "Blend and simmer with seasoning." },
    ],
  },
  {
    id: "15",
    title: "Omelette",
    description: "Quick protein breakfast.",
    steps: [
      { type: "text", content: "Beat eggs with salt and pepper." },
      { type: "timer", duration: 180 },
      { type: "text", content: "Cook in pan and fold." },
    ],
  },
  {
    id: "16",
    title: "French Fries",
    description: "Crispy golden potato fries.",
    steps: [
      { type: "text", content: "Cut potatoes into strips." },
      { type: "timer", duration: 600 },
      { type: "text", content: "Deep fry until golden and crispy." },
    ],
  },
  {
    id: "17",
    title: "Pancakes",
    description: "Fluffy breakfast pancakes.",
    steps: [
      { type: "text", content: "Mix flour, milk, egg, and sugar." },
      { type: "timer", duration: 300 },
      { type: "text", content: "Cook on pan and flip when bubbles form." },
    ],
  },
  {
    id: "18",
    title: "Fruit Salad",
    description: "Fresh mix of seasonal fruits.",
    steps: [
      { type: "text", content: "Chop assorted fruits." },
      { type: "timer", duration: 120 },
      { type: "text", content: "Mix with honey and lemon juice." },
    ],
  },
  {
    id: "19",
    title: "Chicken Stir Fry",
    description: "Quick protein-packed meal.",
    steps: [
      { type: "text", content: "Cook chicken with garlic and soy sauce." },
      { type: "timer", duration: 600 },
      { type: "text", content: "Add veggies and stir fry on high heat." },
    ],
  },
  {
    id: "20",
    title: "Cold Coffee",
    description: "Chilled coffee drink.",
    steps: [
      { type: "text", content: "Blend coffee, milk, sugar, and ice." },
      { type: "timer", duration: 60 },
      { type: "text", content: "Serve chilled with foam." },
    ],
  },
  {
    id: "21",
    title: "Veg Sandwich",
    description: "Simple and quick snack.",
    steps: [
      { type: "text", content: "Layer veggies and chutney between bread." },
      { type: "timer", duration: 180 },
      { type: "text", content: "Grill or serve fresh." },
    ],
  },
  {
    id: "22",
    title: "Fried Rice",
    description: "Classic Indo-Chinese dish.",
    steps: [
      { type: "text", content: "Sauté veggies and garlic." },
      { type: "text", content: "Add cooked rice and sauces." },
      { type: "timer", duration: 300 },
      { type: "text", content: "Stir fry on high heat." },
    ],
  },
  {
    id: "23",
    title: "Spaghetti Aglio e Olio",
    description: "Garlic olive oil pasta.",
    steps: [
      { type: "text", content: "Cook spaghetti." },
      { type: "text", content: "Sauté garlic in olive oil." },
      { type: "timer", duration: 300 },
      { type: "text", content: "Mix pasta and garnish with chili flakes." },
    ],
  },
  {
    id: "24",
    title: "Corn Chaat",
    description: "Spicy Indian street snack.",
    steps: [
      { type: "text", content: "Boil sweet corn." },
      { type: "timer", duration: 300 },
      { type: "text", content: "Mix with spices, onion, and lemon." },
    ],
  },
  {
    id: "25",
    title: "Milkshake",
    description: "Thick creamy drink.",
    steps: [
      { type: "text", content: "Blend milk, ice cream, and flavoring." },
      { type: "timer", duration: 60 },
      { type: "text", content: "Serve chilled." },
    ],
  },
  {
    id: "26",
    title: "Egg Fried Rice",
    description: "Rice tossed with eggs and veggies.",
    steps: [
      { type: "text", content: "Scramble eggs in a pan." },
      { type: "text", content: "Add rice and vegetables." },
      { type: "timer", duration: 300 },
      { type: "text", content: "Stir fry with sauces." },
    ],
  },
  {
    id: "27",
    title: "Veg Noodles",
    description: "Quick stir-fried noodles.",
    steps: [
      { type: "text", content: "Boil noodles." },
      { type: "text", content: "Stir fry veggies with sauces." },
      { type: "timer", duration: 300 },
      { type: "text", content: "Mix noodles and toss well." },
    ],
  },
  {
    id: "28",
    title: "Peanut Butter Toast",
    description: "Quick energy snack.",
    steps: [
      { type: "text", content: "Toast bread." },
      { type: "timer", duration: 120 },
      { type: "text", content: "Spread peanut butter and serve." },
    ],
  },
  {
    id: "29",
    title: "Lemonade",
    description: "Refreshing citrus drink.",
    steps: [
      { type: "text", content: "Mix lemon juice, sugar, and water." },
      { type: "timer", duration: 60 },
      { type: "text", content: "Serve chilled with ice." },
    ],
  },
  {
    id: "30",
    title: "Cheese Quesadilla",
    description: "Mexican cheesy snack.",
    steps: [
      { type: "text", content: "Place cheese between tortillas." },
      { type: "timer", duration: 300 },
      { type: "text", content: "Cook until crispy and slice." },
    ],
  }
];

export default recipes;