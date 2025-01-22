try {
  undefined(); // অবৈধ অপারেশন, ব্যতিক্রম তৈরির জন্য!
}
catch (err) {
  console.log(err); // কাজ করে!
}
console.log(err); // ReferenceError: `err` পাওয়া যায়নি
