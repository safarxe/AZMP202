//! Daxil edilən arraydə təkrarlanan elementi silən və yeni array qaytaran funksiya yazın.
function deleteRepeate(arr) {
    return [...new Set(arr)];
  }

console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]))
console.log(deleteRepeate([1, 2, 3, 4, 5]))
console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5]))

//! Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın.

function countWords(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            count++;
        }
    }

    return count;
}
console.log(countWords("hello  my friend"));

