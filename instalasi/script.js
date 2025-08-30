let laporanList = [];
let headerData = { tanggal: "", tim: "" };

// isi dropdown port
window.onload = function() {
  const portSelect = document.getElementById("port");
  for (let i = 1; i <= 16; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    portSelect.appendChild(opt);
  }
};

// validasi header
function okHeader() {
  const tanggal = document.getElementById("tanggal").value;
  const tim = document.getElementById("tim").value;

  if (!tanggal || !tim) {
    alert("Tanggal dan Tim wajib diisi!");
    return;
  }

  headerData.tanggal = tanggal;
  headerData.tim = tim;

  document.getElementById("header-section").style.display = "none";
  document.getElementById("form-section").style.display = "block";
}

// tambah laporan
function tambahLaporan() {
  const nama = document.getElementById("nama").value.trim();
  const cid = document.getElementById("cid").value.trim();
  const email = document.getElementById("email").value.trim();
  const olt = document.getElementById("olt").value;
  const odp = document.getElementById("odp").value.trim();
  const port = document.getElementById("port").value;
  const jenis = document.getElementById("jenis").value;
  const sn = document.getElementById("sn").value.trim();

  if (!nama || !cid || !email || !olt || !odp || !port || !jenis || !sn) {
    alert("Semua field wajib diisi!");
    return;
  }

  // validasi unik
  for (let lap of laporanList) {
    if (lap.cid === cid || lap.email === email || lap.sn === sn || lap.nama === nama) {
      alert("Nama, CID, Email, dan SN tidak boleh sama dengan laporan sebelumnya!");
      return;
    }
  }

  // validasi SN
  if (jenis === "Raisecom" && !sn.startsWith("RCM")) {
    alert("SN Raisecom wajib diawali 'RCM'");
    return;
  }
  if ((jenis.includes("CData")) && !sn.startsWith("DF1D-")) {
    alert("SN CData wajib diawali 'DF1D-'");
    return;
  }

  let laporan = {
    no: laporanList.length + 1,
    nama, cid, email, olt, odp, port, jenis, sn
  };
  laporanList.push(laporan);

  alert("Laporan berhasil ditambahkan!");
  document.getElementById("form-section").reset;
  document.getElementById("nama").value = "";
  document.getElementById("cid").value = "";
  document.getElementById("email").value = "";
  document.getElementById("odp").value = "";
  document.getElementById("sn").value = "";
}

// selesai laporan
function selesaiLaporan() {
  if (laporanList.length === 0) {
    alert("Belum ada laporan ditambahkan!");
    return;
  }

  let hasil = `Laporan Instalasi Subang\nTanggal: ${headerData.tanggal}\nTim: ${headerData.tim}\n\n`;

  laporanList.forEach(lap => {
    hasil += `*Instalasi ${lap.no}*\n`;
    hasil += `A/N: ${lap.nama}\nCID: ${lap.cid}\nEmail: ${lap.email}\nOLT: ${lap.olt}\nODP: ${lap.odp}\nPort: ${lap.port}\nJenis Perangkat: ${lap.jenis}\nSN: ${lap.sn}\nDropcore: 200 meter\nPaschord: 1 pcs\nKeterangan: Selesai dikerjakan\n\n`;
  });

  document.getElementById("form-section").style.display = "none";
  document.getElementById("hasil-section").style.display = "block";
  document.getElementById("hasil").textContent = hasil;
}

// salin laporan
function salinLaporan() {
  let text = document.getElementById("hasil").textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Laporan berhasil disalin!");
  });
}

// kirim ke WhatsApp
function kirimWhatsApp() {
  let text = document.getElementById("hasil").textContent;
  let url = "https://wa.me/?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}
