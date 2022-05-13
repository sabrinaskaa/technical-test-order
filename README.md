# technical-test-order
Technical Test Azura Labs
<br/><br/>
<b>Perintah:</b><br/>
Mengurutkan data array produk dengan prioritas:
<ol>
  <li>Harga terendah.</li>
  <li>Jika harga sama, maka urutkan berdasarkan rating tertinggi.</li>
  <li>Jika rating sama, maka urutkan berdasarkan likes terbanyak.</li>
</ol>
<br/><br/>

![Screenshot 2022-05-12 193120](https://user-images.githubusercontent.com/70563202/168075498-55142f34-4f7c-4c3d-a771-c90a018aaa7a.png)
<br /><br/>
Data di atas, sudah diurutkan berdasarkan perintah yang diberikan dengan menggunakan Javascript array sort() method. <br /><br />

```bash
  listData.sort(function (a, b) {
    if (a.harga === b.harga && a.rating > b.rating) {
      return b.rating - a.rating;
    } else if (a.rating === b.rating && a.likes > b.likes) {
      return b.likes - a.likes;
    } else {
      return a.harga - b.harga;
    }
  });
   ```
