let formCount = 0;

// Data ODP yang sudah dirapikan
const odpData = [
    "88", "AGRITAMA", "AGRO", "AKI LATIF", "AL MADANI", "ALUN-ALUN 2", "APANA", 
    "AREUY", "ASSALAM", "BABAKAN SUBANG", "BAP 4", "BAP 5", "BAP 6", "BAPANG 5", 
    "BAROKAH", "BATANG SUKAMELANG", "BCD", "BEMO", "BONGAS 3", "BONGAS 4", 
    "BONGAS 5", "BONGAS 8", "BONGAS 9", "BONGAS 10", "BONGAS 11", "BONGAS 12", 
    "BONGAS 13", "BONGAS 14", "BONGAS 15", "BONGAS 16", "BONGAS 17", "BONGAS 18", 
    "BOYLER", "BSR 8", "BSR 9", "BTN CIERENG 2", "BTN GEMBOR 1", "BTN GEMBOR 2", 
    "BTN GEMBOR 3", "BTN GEMBOR 4", "BUBUN", "CIBODAS 1", "CIBODAS 2", 
    "CIPACAR", "CISAGA 1", "CISAGA 2", "CISAGA 3", "CISAGA 4", "CISAGA 5", 
    "CISAGA 6", "CISAGA 7", "CISAGA 8", "CISAGA 9", "CISAGA 10", "CISAGA 11", 
    "CISAGA 12", "CISAGA 13", "CISAMPIH", "CISAMPIH 1", "CISAMPIH 2", 
    "CISAMPIH 3", "CISAMPIH 4", "CISAMPIH 5", "CISAMPIH 6", "CISAMPIH 7", 
    "CISAMPIH 8", "CISAMPIH 9", "CISUGIH 2", "CISUGIH 3", "CITRA", "CONTER 2", 
    "DANGIANG", "DAWUAN ONCOM", "DEDERUK", "DENJAKA", "DEPAN PPH", "DPI", 
    "DUSUN BABAKAN 3", "EFAB", "ETNIK", "FAVE", "GALURA", "GARAGE", 
    "GG CENDERAWASIH", "GG SERAM", "GG TARUNA 2", "GG SUKUN DEUI", 
    "GG. KALAPA", "GG. MAWAR 2", "GG. RAMBUTAN", "GG. TAWES", 
    "GG.SUKAGALIH 2", "GG.SUKAGALIH 3", "GG. TENGAH", "GOONG", 
    "GRIYA PUTRA RESIDENCE", "HERJHON", "HSH", "HJM", "IDI CAHDI 2", 
    "IPUL", "JAJA", "JATI", "JATI 2", "JL AYAN", "JL.DUKUH RAYA 2", 
    "JL. MARJAN 1", "JL. MARJAN 2", "JOYA", "KAMARUNG 1", "KAMARUNG 2", 
    "KAMARUNG 3", "KAMARUNG 4", "KAMARUNG 5", "KAMARUNG 6", "KAMARUNG 7", 
    "KAMARUNG 8", "KAMARUNG 9", "KAMARUNG 10", "KAMARUNG 11", "KAMARUNG 12", 
    "KAMARUNG 13", "KAMARUNG 14", "KAMARUNG 15", "KAMARUNG 16", "KAMARUNG 17", 
    "KANTOR DESA SUKAMELANG", "KANTOR DESA SUKAMELANG 2", "KAPIRARAY 3", 
    "KARYA DUCK", "KIA", "KIMIN", "KINANTI", "KITKYC", "KOMORO", "KUMENDUNG", 
    "KURKUR", "LAMOKOTS", "LANGKAP", "LAPANG SIDODADI", "LEBAK SIUH", 
    "LOBAK", "LURAH SUHIM", "MAN 1", "MARGANA", "MARSINU", "MAHKOTA 3", 
    "MAHKOTA 4", "MAHKOTA 5", "MDKK", "MEE", "MESJID AL JIHAD", 
    "MESJID AL MUKAROMAH", "MESJID BAITULHADI", "MESJID PAJAKARAN", 
    "MINUL", "MUSALA", "NANAS", "NGEBUL", "NUSA INDAH", "ODP BARGEDOS", 
    "ODP EPUL DEUI", "ODP MAKHOTA 6", "ODP PERDANA 2", "PAKUAN", "PASE 1", 
    "PASE 2", "PASE 3", "PASE 4", "PASE 5", "PASE 6", "PASE 7", "PASE 8", 
    "PASE 9", "PASE 10", "PDI", "PEJUANG", "PEKERTI", "PELANGI 1", 
    "PERIANGAN", "PERTIGAAN DAWUAN", "PERUM PESONA ALAM DAWUAN 1", 
    "PERUM PESONA ALAM DAWUAN 2", "PERUM PESONA ALAM DAWUAN 3", 
    "PERUM PONDOK GEDE", "PONDOK PESANTREN NURUL HUDA", "QREI", "RA KHOERUNNISA", 
    "RAFA 2", "RAFA 3", "RAJAB", "RANCA 1", "RANCA 2", "RANCA 3", "RANCA 4", 
    "RANCA 5", "RANCA 6", "RANCA 7", "RANCA 8", "RANCA 16", "RANGGADIPA", 
    "RECIH", "REMA", "RIDERS", "RIMBUN", "ROSEANNE", "SAGAYA", "SARADAN", 
    "SAVANA", "SD DAWUAN", "SELEDRI", "SHANKARA", "SILIWANGI", "SISI PRAMUKA", 
    "SISICAI 6", "SITU IJAN", "SMPN 6", "STIE", "SUGE", "SUKALAKSANA 2", 
    "SUKALAKSANA 3", "SURA", "SUSUKAN 1", "SUSUKAN 2", "SUSUKAN 3", "SUSUKAN 4", 
    "SYARIAH", "TANGKIL", "TAEKWANG 2", "TJOKRO 2", "TK AL AMIN", "TK SUKARA", 
    "TULA", "TUGU MARJAN", "WADEDE", "WATERBOOM", "ZILAL"
];

const dsData = [

    "FARID CAESAR AMANULLOH", "DENI WAHYUDIN", "LILI WARNALI", "MUHAMMAD JAKA NUGRAHA", 
    "AHMAD BUCHORI", "UCI SANUSI", "GEOVANI DWIKI SUPARLI", "APRLIA SANEZ",
    "RAYS SATRIA PERMADI", "GILANG BAHTIAR", "SHANIA VEGA DESTENY", "YAZID FAUZURROHMAN",
    "MOCHAMAD ALEK LESMANA", "ROMI KANTOMI", "KIKI ARISANDI", 
    "JENAR NURJANI", "IRFAN SUPIAN", 
    "ASEP RAHMAT", "ARI SURATMAN", "RAHMAT HIDAYAT", "TAUFIK RUSDIANA", 
    "CHANDIKA KUSUMA", "ARDEN ZUHDI", "DWI HARI PURNAMA", "MOCH RIZKY RAMADHAN", 
    "GANI MAULAMA", "NAZAR YAHYA", "SOLEH SUANDA", "FIRLI APRILIA KULSUM", 
    "RONI CAHYANI", "MIFTAHUDDIN ALI", "DEFAN KAHFI ADHIGUNA", "BAGAS PERMANA",  
    "NAUFAL AZHAR GUSTIANA TS SUBANG", "ILHAM RAMADHANI"

];

const namaData = [
    "NAUFAL AZHAR AGUSTIANA", "ANGGITO ABIMANYU", "ALBDUL LATIF", "ABDUL HAPID", 
    "RICKY ZAKARIA", "HANDIKA RAMADHANI", "MUHAMMAD SYAIFUL NUR RABANI", "TAUFIK",
    "SYAHID YUSUF TALAAT", "HENDRIK PERMANA SOPYAN", "ALVIN ALVINA",
    "GUGUN GUNAEDI", "HENDRYANA SISWANTO", "MUHAMMAD RAMDAN", "RIDHO SEPRIAN",
    "MUHAMMAD ADSA RABANI", "MUHAMAN RIDHO", "FIRMAN TEGAR", "HARYS HAQIM","ADRIAN MAULANA",
    "GELAR RAHIM", "DONI ARIA PURNAMA", "KOMARUDIN", "RAFLY", "REYFAL"
]
    

// Fungsi untuk update tanggal
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

// Template form terminate saja
const terminateTemplate = `
    <div class="form-header">
        <h3>TERMINATE</h3>
    </div>
    
    <label for="nama{id}">Nama</label>
    <input type="text" id="nama{id}" placeholder="Nama pelanggan">
    
    <label for="cid{id}">CID</label>
    <input type="number" id="cid{id}" inputmode="numeric" placeholder="Nomor CID">
    
       
        <div class="search-container">
            <label for="odp{id}">ODP</label>
            <input type="text" id="odp{id}" placeholder="Ketik untuk mencari ODP" oninput="searchData(this, 'odpResults{id}', odpData)">
            <div class="search-results" id="odpResults{id}"></div>
    </div
    

    <label for="port{id}">Port</label>
    <select id="port{id}">
        <option value="">-- Pilih Port --</option>
        ${Array.from({length: 16}, (_, i) => `<option value="${i + 1}">Port ${i + 1}</option>`).join('')}
    </select>
    
    <label for="sn_perangkat{id}">SN Perangkat</label>
    <input type="text" id="sn_perangkat{id}" placeholder="Serial number perangkat">
    
 
    <div class="search-container">
            <label for="ds{id}">DS</label>
            <input type="text" id="ds{id}" placeholder="Ketik untuk mencari DS" oninput="searchData(this, 'dsResults{id}', dsData)">
            <div class="search-results" id="dsResults{id}"></div>
        </div>
      

    <label for="keterangan{id}">Keterangan</label>
    <input type="text" id="keterangan{id}" value="Selesai">
`;


// Fungsi pencarian universal untuk ODP dan DS
function searchData(inputElement, resultsId, dataArray) {
    const searchTerm = inputElement.value.toLowerCase();
    const resultsContainer = document.getElementById(resultsId);
    
    if (searchTerm.length < 1) {
        resultsContainer.style.display = 'none';
        return;
    }
    
    const filteredData = dataArray.filter(item => 
        item.toLowerCase().includes(searchTerm)
    );
    
    if (filteredData.length > 0) {
        resultsContainer.innerHTML = filteredData.map(item => 
            `<div class="search-result-item" onclick="selectData('${inputElement.id}', '${item}')">${item}</div>`
        ).join('');
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.style.display = 'none';
    }
}

// Fungsi untuk memilih data dari hasil pencarian
function selectData(inputId, value) {
    document.getElementById(inputId).value = value;
    
    // Sembunyikan hasil pencarian
    if (inputId.includes('odp')) {
        document.getElementById(inputId.replace('odp', 'odpResults')).style.display = 'none';
    } else if (inputId.includes('ds')) {
        document.getElementById(inputId.replace('ds', 'dsResults')).style.display = 'none';
    }
}

// Tutup hasil pencarian ketika klik di luar
document.addEventListener('click', function(e) {
    if (!e.target.matches('.search-container input')) {
        const allResults = document.querySelectorAll('.search-results');
        allResults.forEach(result => {
            result.style.display = 'none';
        });
    }
});

// Tambahkan event listener untuk menutup dropdown ketika menekan Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const allResults = document.querySelectorAll('.search-results');
        allResults.forEach(result => {
            result.style.display = 'none';
        });
    }
});

// Tambah form terminate
function addForm() {
    formCount++;
    const div = document.createElement("div");
    div.className = "form";
    div.id = "form" + formCount;

    let formHTML = terminateTemplate.replace(/{id}/g, formCount);
    formHTML += `<button class="delete" onclick="deleteForm(${formCount})">Hapus Form</button>`;
    
    div.innerHTML = formHTML;
    document.getElementById("forms").appendChild(div);

    // Scroll ke form baru
    div.scrollIntoView({behavior: "smooth"});
}

// Hapus form
function deleteForm(id) {
    const form = document.getElementById("form" + id);
    if (form && confirm("Yakin ingin menghapus form ini?")) {
        form.remove();
    }
}

// Helper function untuk mendapatkan value
function getValue(id) {
    const element = document.getElementById(id);
    return element ? element.value.trim() : '';
}

// Generate laporan terminate
function generate() {
    const forms = document.querySelectorAll(".form");
    if (forms.length === 0) {
        alert("Tidak ada data terminate untuk dilaporkan! Tambahkan form terlebih dahulu.");
        return;
    }

    let judul = getValue("ket{id}") || "LAPORAN TERMINATE SUBANG";
    let tanggal = getValue("reportDate");
    let team = getValue("teamName");
    
    let laporan = `${judul}\n${tanggal}\n`;
    if (team) {
        laporan += `Team: ${team}\n\n`;
    } else {
        laporan += `\n`;
    }

    let terminateData = [];
    let nomor = 1;

    forms.forEach((form) => {
        let i = form.id.replace("form", "");
        
        let cid = getValue("cid" + i);
        let nama = getValue("nama" + i);
        
        // Hanya tambahkan jika ada CID dan Nama
        if (cid && nama) {
            terminateData.push({
                id: i,
                nomor: nomor++,
                nama: nama,
                cid: cid,
                odp: getValue("odp" + i),
                port: getValue("port" + i),
                sn: getValue("sn_perangkat" + i),
                ds: getValue("ds" + i),
                keterangan: getValue("keterangan" + i) || 'Selesai'
            });
        }
    });

    if (terminateData.length === 0) {
        alert("Data terminate tidak lengkap! Pastikan CID dan Nama sudah diisi.");
        return;
    }

    // Format laporan terminate
    terminateData.forEach(data => {
        laporan += `${data.nomor}. A/N : ${data.nama}\n`;
        laporan += `CID : ${data.cid}\n`;
        if (data.odp) laporan += `ODP : ${data.odp}\n`;
        if (data.port) laporan += `Port : ${data.port}\n`;
        if (data.sn) laporan += `SN : ${data.sn}\n`;
        if (data.ds) laporan += `DS : ${data.sn}\n`;
        laporan += `Keterangan : ${data.keterangan}\n\n`;
    });

    document.getElementById("output").innerText = laporan.trim();
}

// Kirim via WhatsApp
function sendWA() {
    let text = document.getElementById("output").innerText;
    if (!text) {
        alert("Buat laporan terminate dulu sebelum kirim ke WhatsApp!");
        return;
    }
    let url = "https://wa.me/?text=" + encodeURIComponent(text);
    window.open(url, "_blank");
}

// Reset laporan
function resetLaporan() {
    if (confirm("Yakin ingin menghapus semua data terminate?")) {
        document.getElementById("forms").innerHTML = "";
        document.getElementById("output").innerText = "";
        document.getElementById("teamName").value = "";
        document.getElementById("reportDate").value = "";
        formCount = 0;
        updateDate(); // Reset date to current date
    }
}

// Initialize saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    updateDate();
    
    // Set judul default
    document.getElementById("ket{id}").value = "LAPORAN TERMINATE SUBANG";
});