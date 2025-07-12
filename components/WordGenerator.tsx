'use client';

import { useState } from 'react';
import { wordsData, difficultyLabels, Difficulty } from '@/data/words';

export default function WordGenerator() {
  const [currentWord, setCurrentWord] = useState<string>('Click to generate a word');
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');
  const [usedWords, setUsedWords] = useState<string[]>([]);

  const generateWord = () => {
    let availableWords: string[] = [];
    
    // Get words based on difficulty selection
    if (difficulty === 'all') {
      availableWords = [...wordsData.easy, ...wordsData.medium, ...wordsData.hard];
    } else {
      availableWords = wordsData[difficulty];
    }
    
    // Filter out used words
    const unusedWords = availableWords.filter(word => !usedWords.includes(word));
    
    if (unusedWords.length === 0) {
      // Reset used words list when all words are used
      setUsedWords([]);
      setCurrentWord('All words used! Click again to restart');
      return;
    }
    
    // Select random word
    const randomIndex = Math.floor(Math.random() * unusedWords.length);
    const selectedWord = unusedWords[randomIndex];
    
    setCurrentWord(selectedWord);
    setUsedWords(prev => [...prev, selectedWord]);
  };

  const resetGame = () => {
    setUsedWords([]);
    setCurrentWord('Click to generate a word');
  };

  const getTotalWords = () => {
    if (difficulty === 'all') {
      return wordsData.easy.length + wordsData.medium.length + wordsData.hard.length;
    }
    return wordsData[difficulty].length;
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Difficulty Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Choose Difficulty:
        </label>
        <select 
          value={difficulty} 
          onChange={(e) => setDifficulty(e.target.value as Difficulty | 'all')}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All Difficulties</option>
          <option value="easy">{difficultyLabels.easy}</option>
          <option value="medium">{difficultyLabels.medium}</option>
          <option value="hard">{difficultyLabels.hard}</option>
        </select>
      </div>

      {/* Word Display */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl text-center mb-6 border border-blue-100">
        <h2 className="text-3xl font-bold text-blue-800 min-h-[3rem] flex items-center justify-center">
          {currentWord}
        </h2>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button 
          onClick={generateWord}
          className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Generate New Word
        </button>
        <button 
          onClick={resetGame}
          className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-colors"
        >
          Reset Game
        </button>
      </div>

      {/* Statistics */}
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <p className="text-gray-600">
          <span className="font-semibold">Words used:</span> {usedWords.length} / {getTotalWords()}
        </p>
        {difficulty !== 'all' && (
          <p className="text-sm text-gray-500 mt-1">
            Current difficulty: {difficultyLabels[difficulty]}
          </p>
        )}
      </div>
    </div>
  );
} 