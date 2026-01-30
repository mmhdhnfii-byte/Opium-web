function toggleContent(id) {
  const box = document.getElementById(id);

  // Jika elemen tidak ditemukan (ID salah)
  if (!box) {
    console.error("ID tidak ditemukan:", id);
    return;
  }

  // Jika sudah muncul → sembunyikan
  if (box.style.display === "block") {
    box.style.display = "none";
  } 
  // Jika masih sembunyi → tampilkan
  else {
    box.style.display = "block";
  }
}
