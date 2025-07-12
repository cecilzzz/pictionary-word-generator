export const wordsData = {
  easy: [
    "cat", "dog", "sun", "car", "house", "book", "pen", "cup", 
    "chair", "bed", "tree", "flower", "fish", "bird", "apple",
    "ball", "door", "window", "table", "phone", "hat", "shoe",
    "hand", "eye", "mouth", "nose", "ear", "hair", "smile",
    "star", "moon", "cloud", "rain", "snow", "fire", "water",
    "bread", "milk", "egg", "cake", "pizza", "banana", "orange",
    "red", "blue", "green", "yellow", "black", "white", "big",
    "small", "happy", "sad", "hot", "cold", "fast", "slow"
  ],
  medium: [
    "elephant", "bicycle", "rainbow", "birthday cake", "swimming", "dancing",
    "singing", "shopping", "traveling", "picnic", "cinema", "library",
    "computer", "television", "refrigerator", "airplane", "helicopter", "motorcycle",
    "sandwich", "hamburger", "spaghetti", "chocolate", "ice cream", "coffee",
    "guitar", "piano", "violin", "camera", "painting", "drawing",
    "running", "jumping", "climbing", "flying", "cooking", "reading",
    "writing", "studying", "working", "sleeping", "dreaming", "laughing",
    "crying", "thinking", "listening", "watching", "playing", "teaching",
    "doctor", "teacher", "police", "firefighter", "chef", "artist",
    "mountain", "ocean", "forest", "desert", "island", "bridge"
  ],
  hard: [
    "friendship", "love", "freedom", "peace", "dream", "hope",
    "nervous", "excited", "nostalgic", "graduation ceremony", "wedding",
    "democracy", "philosophy", "psychology", "mathematics", "physics",
    "photosynthesis", "evolution", "gravity", "electricity", "magnetism",
    "architecture", "engineering", "medicine", "literature", "journalism",
    "entrepreneurship", "leadership", "creativity", "innovation", "inspiration",
    "meditation", "spirituality", "consciousness", "enlightenment", "wisdom",
    "procrastination", "perfectionism", "ambition", "determination", "perseverance",
    "empathy", "compassion", "generosity", "humility", "integrity",
    "globalization", "sustainability", "artificial intelligence", "virtual reality"
  ]
};

export const difficultyLabels = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard'
};

export type Difficulty = keyof typeof wordsData; 