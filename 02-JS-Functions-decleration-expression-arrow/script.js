//! Daxil edilən arraydə təkrarlanan elementi silən və yeni array qaytaran funksiya yazın.
function deleteRepeate(arr) {
    return [...new Set(arr)];
  }

console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]))
console.log(deleteRepeate([1, 2, 3, 4, 5]))
console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5]))