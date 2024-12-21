// 'categories' öğesini seçiyoruz.
const categories = document.querySelector("#categories");

// Kategoriler üzerinde işlem yapmak için .item sınıfına sahip tüm öğeleri seçiyoruz.
const categoryItems = categories.querySelectorAll(".item");

// Toplam kategori sayısını yazdırıyoruz.
console.log("Total number of categories: " + categoryItems.length);

// Her bir kategori için başlık ve öğe sayısını yazdırıyoruz.
categoryItems.forEach((category) => {
  // Kategori başlığını almak için h2 etiketini seçiyoruz.
  const categoryTitle = category.querySelector("h2").textContent;

  // Kategorinin altındaki .item-list öğesini seçiyoruz.
  const itemsList = category.querySelector(".item-list");

  // .item-list içindeki öğe sayısını alıyoruz.
  const itemCount = itemsList ? itemsList.children.length : 0;

  // Kategori başlığı ve öğe sayısını yazdırıyoruz.
  console.log(`${categoryTitle}: ${itemCount} items`);
});
