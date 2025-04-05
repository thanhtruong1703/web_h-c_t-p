// Kết nối đến IndexedDB và lấy dữ liệu từ bảng 'rank'
function displayRankingFromDB() {
  const dbName = "FileStorageDB"; // Tên cơ sở dữ liệu
  const storeName = "rank";      // Tên bảng

  const request = indexedDB.open(dbName);

  request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);

      const data = [];
      store.openCursor().onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
              // Đẩy dữ liệu từ từng hàng vào mảng
              data.push(cursor.value);
              cursor.continue();
          } else {
              // Sắp xếp dữ liệu theo điểm số giảm dần
              data.sort((a, b) => b.score - a.score);
              renderRanking(data); // Hiển thị lên bảng
          }
      };

      transaction.onerror = (event) => {
          console.error("Lỗi khi lấy dữ liệu:", event.target.error);
      };
  };

  request.onerror = (event) => {
      console.error("Lỗi kết nối IndexedDB:", event.target.error);
  };
}

// Hiển thị dữ liệu lên bảng HTML
function renderRanking(data) {
    const rankTable = document.getElementById("rank");
    rankTable.innerHTML = ""; // Xóa nội dung cũ

    data.forEach((item, index) => {
        const row = document.createElement("tr");

        // Thêm class cho top 3
        if (index === 0) {
            row.classList.add("top1");
        } else if (index === 1) {
            row.classList.add("top2");
        } else if (index === 2) {
            row.classList.add("top3");
        }

        // Cột Xếp Hạng (có icon nếu trong top 3)
        const rankCell = document.createElement("td");
        if (index === 0) {
            rankCell.innerHTML = "🥇";
        } else if (index === 1) {
            rankCell.innerHTML = "🥈";
        } else if (index === 2) {
            rankCell.innerHTML = "🥉";
        } else {
            rankCell.textContent = index + 1;
        }
        row.appendChild(rankCell);

        // Cột Tên
        const nameCell = document.createElement("td");
        nameCell.textContent = item.name || "Không tên";
        row.appendChild(nameCell);

        // Cột Điểm
        const scoreCell = document.createElement("td");
        scoreCell.textContent = item.score || 0;
        row.appendChild(scoreCell);

        rankTable.appendChild(row);
    });
}

// Gọi hàm để hiển thị bảng xếp hạng khi tải trang
window.onload = () => {
  displayRankingFromDB();
};
// Lấy dữ liệu từ IndexedDB và sắp xếp
function getAndSortRanking() {
  const dbName = "FileStorageDB"; // Tên cơ sở dữ liệu
  const storeName = "rank";      // Tên bảng

  const request = indexedDB.open(dbName);

  request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);

      const data = [];
      store.openCursor().onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
              // Đẩy dữ liệu từ bảng vào mảng
              data.push(cursor.value);
              cursor.continue();
          } else {
              // Khi hoàn tất, sắp xếp mảng theo điểm giảm dần
              data.sort((a, b) => b.score - a.score);
              console.log("Dữ liệu đã sắp xếp:", data); // Debug: Kiểm tra dữ liệu sắp xếp
              renderRanking(data); // Hiển thị lên bảng HTML
          }
      };

      transaction.onerror = (event) => {
          console.error("Lỗi khi truy cập IndexedDB:", event.target.error);
      };
  };

  request.onerror = (event) => {
      console.error("Lỗi kết nối IndexedDB:", event.target.error);
  };
}

// Hiển thị dữ liệu lên bảng HTML
function renderRanking(data) {
  const rankTable = document.getElementById("rank");
  rankTable.innerHTML = ""; // Xóa nội dung cũ

  data.forEach((item, index) => {
      const row = document.createElement("tr");

      const rankCell = document.createElement("td");
      rankCell.textContent = index + 1;
      row.appendChild(rankCell);

      const nameCell = document.createElement("td");
      nameCell.textContent = item.name || "Không tên";
      row.appendChild(nameCell);

      const scoreCell = document.createElement("td");
      scoreCell.textContent = item.score || 0;
      row.appendChild(scoreCell);

      rankTable.appendChild(row);
  });
}

// Gọi hàm khi tải trang
window.onload = () => {
  getAndSortRanking();
};
