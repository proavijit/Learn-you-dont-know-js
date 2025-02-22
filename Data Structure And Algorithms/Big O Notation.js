// Complexity	Performance (Best to Worst)
// O(1)	🔥 সবচেয়ে ভালো
// O(log n)	✅ খুব ভালো
// O(n)	😐 গ্রহণযোগ্য
// O(n log n)	😐 মাঝারি
// O(n²)	❌ ধীর
// O(2ⁿ)	❌❌ খুব ধীর
// O(n!)	🚫 সবচেয়ে খারাপ

// ✅ সংক্ষেপে মূল বিষয়গুলো
// ✔ Big O বলতে বোঝায় একটি অ্যালগরিদম কত দ্রুত চলে।
// ✔ সেরা Complexity হলো O(1) & O(log n), আর সবচেয়ে খারাপ হলো O(n!)।
// ✔ Sorting, Searching ও Recursive সমস্যাগুলোতে Big O অনেক গুরুত্বপূর্ণ।



// function sumOfAll(n){
//   let total = 0;
//   for(let i = 0; i < n; i++){
//     total += i
//   }
//   return total
// }

// console.log(sumOfAll(10));


// function binarySearch(arr, target){
//   let  left = 0, right = arr.length - 1;
//   while(left <= right){
//     let mid = Math.floor((let + right) /2);
//     if(arr[mid] ===  target) return mid;
//     else if(arr[mid] < target) left = mid + 1;
//     else right = mid - 1
//   }
//   return -1;