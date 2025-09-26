let formCount = 0;

// Data ODP diperbaiki
const odpData = [
  "SUKALAKSANA 3","RAFA 3","GG SUKUN DEUI","CISAGA 8","CISAGA 7",
  "CISAGA 6","SISI PRAMUKA","BATANG SUKAMELANG","GG TARUNA 2","CISAGA 13",
  "CISAGA 12","CISAGA 11","CISAGA 10","CISAGA 9","CISAGA 5","CISAGA 4",
  "CISAGA 3","CISAGA 2","CISAGA 1","BONGAS 18","BONGAS 17","BONGAS 16",
  "RANCA 6","RANCA 5","RANCA 4","RANCA 3","RANCA 2","RANCA 1","PASE 10",
  "PASE 9","PASE 8","PASE 7","PASE 6","PASE 5","PASE 4","PASE 3","PASE 2",
  "PASE 1","BONGAS 15","BONGAS 14","BONGAS 13","BONGAS 5","BONGAS 4","BONGAS 3",
  "RANCA 8","RANCA 7","RANCA 16","BONGAS 12","BONGAS 10","BONGAS 11","BONGAS 9",
  "BONGAS 8","AKI LATIF","KAMARUNG 17","KAMARUNG 10","KAMARUNG 9","KAMARUNG 8",
  "KAMARUNG 7","GARAGE","SUSUKAN 4","SUSUKAN 3","SUSUKAN 2","SUSUKAN 1","ZILAL",
  "APANA","BAKTI ASIH","SAVANA","TK AL AMIN","BASUN","MESJID BAITULHADI","QREI",
  "SITU IJAN","SURA","MARGANA","GALURA","KAMARUNG 6","KAMARUNG 5","KAMARUNG 4",
  "KAMARUNG 3","KAMARUNG 2","KAMARUNG 1","MEE","MDKK","BALEBAT","BANGO","RANCABOGO",
  "MUSALA","HJM","SHANKARA","DENJAKA","TK SUKARA","KARYA DUCK","JATI 2","JATI",
  "LANGKAP","CIPACAR","SARADAN","PEKERTI","KAMARUNG 11","KAMARUNG 12","KAMARUNG 13",
  "KAMARUNG 14","KAMARUNG 15","KAMARUNG 16","REMA","BTN GEMBOR 4","BTN GEMBOR 3",
  "BTN GEMBOR 2","BTN GEMBOR 1","CISAMPIH","CISAMPIH 8","CISAMPIH 7","CISAMPIH 6",
  "CISAMPIH 9","ODP BARGEDOS","GG UYUH 3","KELAPA RESIDANCE 2","DANGIANG",
  "PERUM PONDOK GEDE","WADEDE","MARSINU","CISAMPIH 5","CISAMPIH 4","CISAMPIH 3",
  "CISAMPIH 2","CISAMPIH 1","TUGU MARJAN","BAROKAH","PONDOK PESANTREN NURUL HUDA",
  "JL. MARJAN 2","JL. MARJAN 1","CIBODAS 2","CIBODAS 1","BUMI GEMILANG","KURKUR",
  "PERTIGAAN DAWUAN","JOYA","SD DAWUAN","RECIH","ROSEANNE","RA KHOERUNNISA","CITRA",
  "IPUL","KINANTI","BEMO","KUMENDUNG","MINUL","DAWUAN ONCOM","ASSALAM","RAJAB",
  "KOMORO","88","KITKYC","SAGAYA","PAKUAN","AGRO","MESJID AL JIHAD","LEBAK SIUH",
  "LURAH SUHIM","PERIANGAN","MESJID PAJAKARAN","MESJID AL MUKAROMAH","PELANGI 1",
  "AGRITAMA","HSH","KIA","DPI","GOONG","JAJA","PERUM PESONA ALAM DAWUAN 3",
  "PERUM PESONA ALAM DAWUAN 2","PERUM PESONA ALAM DAWUAN 1","TAEKWANG 2","RAFA 2",
  "GG. TAWES","KANTOR DESA SUKAMELANG 2","RIDERS","KIMIN","KANTOR DESA SUKAMELANG",
  "BTN CIERENG 2","KAPIRARAY 3","LAMOKOTS","ALUN-ALUN 2","EFAB","BUBUN","SUGE","TULA",
  "GG CENDERAWASIH","GG.SUKAGALIH 3","GG.SUKAGALIH 2","GG. KALAPA","SILIWANGI",
  "PANGLEJAR 4","PANGLEJAR 3","IDI CAHDI 2","STIE","TJOKRO 2","SISICAI 6","BSR 9",
  "DEPAN PPH","GRIYA PUTRA RESIDENCE","BSR 8","MAHKOTA 5","MAHKOTA 4","AREUY",
  "ETNIK","FAVE","SMPN 6","HERJHON","BOYLER","GG. MAWAR 2","GG. RAMBUTAN",
  "BABAKAN SUBANG","TANGKIL","LOBAK","PDI","KARANG KENDAL 2","BAP 5","BAP 4",
  "PANGLEJAR 6","PEJUANG","NUSA INDAH","BAP 6","JL AYAN","GG. TENGAH","ODP MAKHOTA 6",
  "BCD","MAHKOTA 3","GG SERAM","DEDERUK","CISUGIH 3","CISUGIH 2","SELEDRI",
  "JL.DUKUH RAYA 2","NANAS","MAN 1","SUKALAKSANA 2","NGEBUL","AL MADANI","SYARIAH",
  "ODP PERDANA 2","WATERBOOM","ODP EPUL DEUI","RIMBUN","CONTER 2","DUSUN BABAKAN 3",
  "BAPANG 5","LAPANG SIDODADI","RANGGADIPA"
];

// Fungsi untuk update tanggal (hanya hari, tanggal, bulan, tahun)
function updateDate() {
  const now = new Date();
  const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  
  const hariStr = hari[now.getDay()];
  const tanggal = now.getDate();
  const bulanStr = bulan[now.getMonth()];
  const tahun = now.getFullYear();
  
  const dateString = `${hariStr}, ${tanggal} ${bulanStr} ${tahun}`;
  document.getElementById('currentDate').textContent = dateString;
  
  // Set nilai default untuk tanggal laporan jika kosong
  if (!document.getElementById('reportDate').value) {
    document.getElementById('reportDate').value = dateString;
  }
}

// Format tanggal untuk placeholder
function getDefaultDate() {
  const now = new Date();
  const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  
  const hariStr = hari[now.getDay()];
  const tanggal = now.getDate();
  const bulanStr = bulan[now.getMonth()];
  const tahun = now.getFullYear();
  
  return `${hariStr}, ${tanggal} ${bulanStr} ${tahun}`;
}

const formTemplates = {
  instalasi: `
    <div class="form-header">
      <h3>Instalasi Baru</h3>
    </div>
    <input type="hidden" id="jenis{id}" value="Instalasi">
    
    <label for="nama{id}">Nama:</label>
    <input type="text" id="nama{id}" placeholder="Nama pelanggan">
    
    <label for="cid{id}">CID:</label>
    <input type="number" id="cid{id}" inputmode="numeric" placeholder="Nomor CID">
    
    <label for="email{id}">Email:</label>
    <input type="email" id="email{id}" placeholder="Email pelanggan">
    
    <label for="olt{id}">OLT:</label>
    <select id="olt{id}">
      <option value="">-- Pilih OLT --</option>
      <option value="OFFICE SUBANG RAISECOM">OFFICE SUBANG RAISECOM</option>
      <option value="TAMBAKDAHAN SUBANG">TAMBAKDAHAN SUBANG</option>
      <option value="PEGADEN SUBANG">PEGADEN SUBANG</option>
      <option value="DAWUAN">DAWUAN</option>
      <option value="MESS SUBANG 2">MESS SUBANG 2</option>
      <option value="GUNUNG TUA">GUNUNG TUA</option>
      <option value="MESS SUBANG"> MESS SUBANG</option>
    </select>
    
    <div class="form-grid">
      <div class="search-container">
        <label for="odp{id}">ODP:</label>
        <input type="text" id="odp{id}" placeholder="Ketik untuk mencari ODP" oninput="searchODP(this, 'odpResults{id}')">
        <div class="search-results" id="odpResults{id}"></div>
      </div>
      <div>
        <label for="port{id}">Port:</label>
        <select id="port{id}">
          <option value="">-- Pilih Port --</option>
          ${Array.from({length: 16}, (_, i) => `<option value="${i + 1}">Port ${i + 1}</option>`).join('')}
        </select>
      </div>
    </div>
    
    <label for="jenis_perangkat{id}">Jenis Perangkat:</label>
    <select id="jenis_perangkat{id}">
      <option value="">-- Pilih --</option>
      <option value="XPON ONU">XPON ONU</option>
      <option value="RISECOME">RISECOME</option>
    </select>
    
    <label for="sn_perangkat{id}">SN Perangkat:</label>
    <input type="text" id="sn_perangkat{id}" placeholder="Serial number perangkat">
    
    <div class="form-grid">
      <div>
        <label for="dropcore{id}">Dropcore:</label>
        <select id="dropcore{id}">
          <option value="">Pilih panjang</option>
          <option value="50 meter">50 meter</option>
          <option value="100 meter">100 meter</option>
          <option value="150 meter">150 meter</option>
          <option value="200 meter" selected>200 meter</option>
          <option value="250 meter">250 meter</option>
          <option value="300 meter">300 meter</option>
        </select>
      </div>
      <div>
        <label for="patchcord{id}">Patchcord:</label>
        <select id="patchcord{id}">
          <option value="">Pilih jumlah</option>
          <option value="1 pcs" selected>1 pcs</option>
          <option value="2 pcs">2 pcs</option>
          <option value="3 pcs">3 pcs</option>
        </select>
      </div>
    </div>
    
    <label for="keterangan{id}">Keterangan:</label>
    <input type="text" id="keterangan{id}" value="Selesai">
  `,
  
  reschedule: `
    <div class="form-header">
      <h3>Reschedule</h3>
    </div>
    <input type="hidden" id="jenis{id}" value="Reschedule">
    
    <label for="cid{id}">CID</label>
    <input type="number" id="cid{id}" inputmode="numeric" placeholder="Nomor CID (Wajib diisi)">
    
    <label for="nama{id}">Nama Pelanggan</label>
    <input type="text" id="nama{id}" placeholder="Nama pelanggan (Wajib diisi)">
    
    <label for="alasan{id}">Alasan Reschedule</label>
    <select id="alasan{id}">
      <option value="">Pilih Alasan</option>
      <option value="Pelanggan tidak ada di tempat">Pelanggan tidak ada di tempat</option>
      <option value="Kendala teknis">Kendala teknis</option>
      <option value="Cuaca buruk">Cuaca buruk</option>
      <option value="Lainnya">Lainnya</option>
    </select>
    
    <label for="keterangan{id}">Keterangan Tambahan</label>
    <textarea id="keterangan{id}" placeholder="Penjelasan detail (opsional)" rows="2"></textarea>
    
    <label for="jadwal{id}">Tanggal Request (Wajib diisi)</label>
    <input type="date" id="jadwal{id}">
  `,
  
  maintenance: `
    <div class="form-header">
      <h3>Maintenance</h3>
    </div>
    <input type="hidden" id="jenis{id}" value="Maintenance">

    <label for="cid{id}">CID</label>
    <input type="number" id="cid{id}" inputmode="numeric" placeholder="Nomor CID (Wajib diisi)">

    <label for="nama{id}">Nama Pelanggan</label>
    <input type="text" id="nama{id}" placeholder="Nama pelanggan (Wajib diisi)">

    <label for="rodp{id}">R. ODP</label>
    <input type="text" id="rodp{id}" placeholder="Referensi ODP (opsional)">

    <div class="form-grid">
      <div>
        <label for="rcbefore{id}">R.C BEFORE</label>
        <input type="text" id="rcbefore{id}" placeholder="Reading sebelum (opsional)">
      </div>
      <div>
        <label for="rcafter{id}">R.C AFTER</label>
        <input type="text" id="rcafter{id}" placeholder="Reading sesudah (opsional)">
      </div>
    </div>

    <label for="ken{id}">KEN (Kendala)</label>
    <input type="text" id="ken{id}" placeholder="Masalah yang ditemukan (opsional)">

    <label for="tin{id}">TIN (Tindakan)</label>
    <input type="text" id="tin{id}" placeholder="Tindakan perbaikan (opsional)">

    <div class="form-grid">
      <div>
        <label for="snlama{id}">SN Lama</label>
        <input type="text" id="snlama{id}" placeholder="Serial number lama (opsional)">
      </div>
      <div>
        <label for="snbaru{id}">SN Baru</label>
        <input type="text" id="snbaru{id}" placeholder="Serial number baru (opsional)">
      </div>
    </div>

    <div class="form-grid">
      <div>
        <label for="dropcore{id}">Dropcore</label>
        <input type="text" id="dropcore{id}" placeholder="Panjang dropcore (opsional)">
      </div>
      <div>
        <label for="patchcord{id}">Patchcord</label>
        <input type="text" id="patchcord{id}" placeholder="Jumlah patchcord (opsional)">
      </div>
    </div>

    <label for="odp{id}">ODP</label>
    <input type="text" id="odp{id}" placeholder="Kode ODP (opsional)">

    <label for="ket{id}">Keterangan</label>
    <input type="text" id="ket{id}" value="SELESAI">
  `
};

// Fungsi pencarian ODP
function searchODP(inputElement, resultsId) {
  const searchTerm = inputElement.value.toLowerCase();
  const resultsContainer = document.getElementById(resultsId);
  
  if (searchTerm.length < 1) {
    resultsContainer.style.display = 'none';
    return;
  }
  
  const filteredODP = odpData.filter(odp => 
    odp.toLowerCase().includes(searchTerm)
  );
  
  if (filteredODP.length > 0) {
    resultsContainer.innerHTML = filteredODP.map(odp => 
      `<div class="search-result-item" onclick="selectODP('${inputElement.id}', '${odp}')">${odp}</div>`
    ).join('');
    resultsContainer.style.display = 'block';
  } else {
    resultsContainer.style.display = 'none';
  }
}

function selectODP(inputId, odpValue) {
  document.getElementById(inputId).value = odpValue;
  document.getElementById(inputId.replace('odp', 'odpResults')).style.display = 'none';
}

document.addEventListener('click', function(e) {
  if (!e.target.matches('.search-container input')) {
    const allResults = document.querySelectorAll('.search-results');
    allResults.forEach(result => {
      result.style.display = 'none';
    });
  }
});

function addForm(type) {
  if (!formTemplates[type]) {
    alert('Jenis form tidak dikenali!');
    return;
  }
  
  formCount++;
  const div = document.createElement("div");
  div.className = "form";
  div.id = "form" + formCount;

  let formHTML = formTemplates[type].replace(/{id}/g, formCount);
  formHTML += `<button class="delete" onclick="deleteForm(${formCount})">Hapus Form</button>`;
  
  div.innerHTML = formHTML;
  document.getElementById("forms").appendChild(div);

  div.scrollIntoView({behavior: "smooth"});
}

function deleteForm(id) {
  const form = document.getElementById("form" + id);
  if (form && confirm("Yakin ingin menghapus form ini?")) {
    form.remove();
  }
}

// **BARU:** Fungsi untuk format tanggal panjang (Senin, 20 Januari 2025)
function formatFullDate(inputDate) {
    if (!inputDate) return '';
    
    const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                   'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    // Menambahkan T00:00:00 untuk menghindari masalah timezone
    const date = new Date(inputDate + 'T00:00:00');
    
    const hariStr = hari[date.getDay()];
    const tanggal = date.getDate();
    const bulanStr = bulan[date.getMonth()];
    const tahun = date.getFullYear();

    return `${hariStr}, ${tanggal} ${bulanStr} ${tahun}`;
}

// Helper function to get trimmed value from an element
function getValue(id) {
    const element = document.getElementById(id);
    return element ? element.value.trim() : '';
}

function generate() {
  const forms = document.querySelectorAll(".form");
  if (forms.length === 0) {
    alert("Tidak ada data untuk dilaporkan! Tambahkan form terlebih dahulu.");
    return;
  }

  let judul = getValue("reportTitle") || "LAPORAN KEGIATAN SUBANG";
  let tanggal = getValue("reportDate") || getDefaultDate();
  let team = getValue("teamName");
  
  let laporan = `${judul}\n${tanggal}\n`;
  if (team) {
    laporan += `Team : ${team}\n\n`;
  } else {
    laporan += `\n`;
  }

  let instalasiData = [];
  let rescheduleData = [];
  let maintenanceData = [];
  
  let isLaporanValid = true; // Flag untuk validasi

  forms.forEach((form) => {
    let i = form.id.replace("form", "");
    let jenis = getValue("jenis"+i);
    
    if (jenis === "Instalasi") instalasiData.push({ id: i });
    else if (jenis === "Reschedule") rescheduleData.push({ id: i });
    else if (jenis === "Maintenance") maintenanceData.push({ id: i });
  });

  let nomorInstalasi = 1;
  let nomorReschedule = 1;
  let nomorMaintenance = 1;

  if (instalasiData.length > 0) {
    let instalasiLaporan = "";
    instalasiData.forEach(data => {
      let i = data.id;
      let cid = getValue("cid"+i);
      let nama = getValue("nama"+i);
      if (cid && nama) {
        instalasiLaporan += `${nomorInstalasi}. Nama: ${nama}\n`;
        instalasiLaporan += `CID: ${cid}\n`;
        instalasiLaporan += `Email: ${getValue("email"+i)}\n`;
        instalasiLaporan += `OLT: ${getValue("olt"+i)}\n`;
        instalasiLaporan += `ODP: ${getValue("odp"+i)}\n`;
        instalasiLaporan += `Port: ${getValue("port"+i)}\n`;
        instalasiLaporan += `Jenis Perangkat: ${getValue("jenis_perangkat"+i)}\n`;
        instalasiLaporan += `SN Perangkat: ${getValue("sn_perangkat"+i)}\n`;
        instalasiLaporan += `Dropcore: ${getValue("dropcore"+i)}\n`;
        instalasiLaporan += `Patchcord: ${getValue("patchcord"+i)}\n`;
        instalasiLaporan += `Keterangan: ${getValue("keterangan"+i) || 'Selesai'}\n\n`;
        nomorInstalasi++;
      }
    });
    if (instalasiLaporan) {
      laporan += `INSTALASI BARU:\n` + instalasiLaporan;
    }
  }

  if (rescheduleData.length > 0) {
    let rescheduleLaporan = "";
    // Menggunakan for...of loop agar bisa dihentikan di tengah jalan
    for (const data of rescheduleData) {
      let i = data.id;
      let cid = getValue("cid"+i);
      let nama = getValue("nama"+i);
      if (cid && nama) {
        const jadwal = document.getElementById("jadwal"+i)?.value;
        
        // **VALIDASI:** Cek apakah tanggal sudah diisi
        if (!jadwal) {
            alert(`Tanggal request wajib diisi untuk Reschedule CID: ${cid}`);
            isLaporanValid = false; // Set flag menjadi tidak valid
            break; // Hentikan loop
        }

        rescheduleLaporan += `${nomorReschedule}. CID: ${cid}\n`;
        rescheduleLaporan += `A/N: ${nama}\n`;
        
        const alasan = getValue("alasan"+i);
        if (alasan) rescheduleLaporan += `Alasan: ${alasan}\n`;

        const keterangan = getValue("keterangan"+i);
        if (keterangan) rescheduleLaporan += `Keterangan: ${keterangan}\n`;
        
        // **DIUBAH:** Menggunakan format tanggal baru dan label baru
        rescheduleLaporan += `Tanggal request: ${formatFullDate(jadwal)}\n\n`;
        
        nomorReschedule++;
      }
    }
    
    if (!isLaporanValid) return; // Hentikan fungsi jika laporan tidak valid

    if (rescheduleLaporan) {
        laporan += `RESCHEDULE:\n` + rescheduleLaporan;
    }
  }

  if (maintenanceData.length > 0) {
    let maintenanceLaporan = "";
    maintenanceData.forEach(data => {
      let i = data.id;
      let cid = getValue("cid"+i);
      let nama = getValue("nama"+i);
      if (cid && nama) {
        maintenanceLaporan += `${nomorMaintenance}. CID: ${cid}\n`;
        maintenanceLaporan += `A/N: ${nama}\n`;

        const rodp = getValue("rodp"+i);
        if (rodp) maintenanceLaporan += `R. ODP: ${rodp}\n`;
        
        const rcbefore = getValue("rcbefore"+i);
        if (rcbefore) maintenanceLaporan += `R.C BEFORE: ${rcbefore}\n`;
        
        const rcafter = getValue("rcafter"+i);
        if (rcafter) maintenanceLaporan += `R.C AFTER: ${rcafter}\n`;

        const ken = getValue("ken"+i);
        if (ken) maintenanceLaporan += `KEN: ${ken}\n`;

        const tin = getValue("tin"+i);
        if (tin) maintenanceLaporan += `TIN: ${tin}\n`;
        
        const snlama = getValue("snlama"+i);
        if (snlama) maintenanceLaporan += `SN LAMA: ${snlama}\n`;
        
        const snbaru = getValue("snbaru"+i);
        if (snbaru) maintenanceLaporan += `SN BARU: ${snbaru}\n`;

        const dropcore = getValue("dropcore"+i);
        if (dropcore) maintenanceLaporan += `DROPCORE: ${dropcore}\n`;
        
        const patchcord = getValue("patchcord"+i);
        if (patchcord) maintenanceLaporan += `PATCHCORD: ${patchcord}\n`;
        
        const odp = getValue("odp"+i);
        if (odp) maintenanceLaporan += `ODP: ${odp}\n`;

        const ket = getValue("ket"+i);
        if (ket) maintenanceLaporan += `KET: ${ket || 'SELESAI'}\n\n`;
        
        nomorMaintenance++;
      }
    });
    if (maintenanceLaporan) {
        laporan += `MAINTENANCE:\n` + maintenanceLaporan;
    }
  }

  document.getElementById("output").innerText = laporan.trim();
}

function sendWA() {
  let text = document.getElementById("output").innerText;
  if (!text) {
    alert("Buat laporan dulu sebelum kirim ke WhatsApp!");
    return;
  }
  let url = "https://wa.me/?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}

function resetLaporan() {
  if (confirm("Yakin ingin menghapus semua data?")) {
    document.getElementById("forms").innerHTML = "";
    document.getElementById("output").innerText = "";
    document.getElementById("teamName").value = "";
    document.getElementById("reportTitle").value = "LAPORAN KEGIATAN SUBANG";
    document.getElementById("reportDate").value = "";
    formCount = 0;
    updateDate(); // Reset date to current date
  }
}

// Initialize the date display on page load
document.addEventListener('DOMContentLoaded', updateDate);
