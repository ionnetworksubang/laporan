let formCount = 0;

// Data lengkap odp bisa dilihat di bawah

const odpData = [
  "SUKALAKSANA 3","RAFA 3","GG SUKUN DEUI","CISAGA 8","CISAGA 7","CISAGA 6","SISI PRAMUKA",
  "BATANG SUKAMELANG","GG TARUNA 2","CISAGA 13","CISAGA 12","CISAGA 11","CISAGA 10","CISAGA 9",
  "CISAGA 5","CISAGA 4","CISAGA 3","CISAGA 2","CISAGA 1","BONGAS 18","BONGAS 17","BONGAS 16",
  "RANCA 6","RANCA 5","RANCA 4","RANCA 3","RANCA 2","RANCA 1","PASE 10","PASE 9","PASE 8",
  "PASE 7","PASE 6","PASE 5","PASE 4","PASE 3","PASE 2","PASE 1","BONGAS 15","BONGAS 14",
  "BONGAS 13","BONGAS 5","BONGAS 4","BONGAS 3","RANCA 8","RANCA 7","RANCA 16","BONGAS 12",
  "BONGAS 10","BONGAS 11","BONGAS 9","BONGAS 8","AKI LATIF","KAMARUNG 17","KAMARUNG 10",
  "KAMARUNG 9","KAMARUNG 8","KAMARUNG 7","GARAGE","SUSUKAN 4","SUSUKAN 3","SUSUKAN 2",
  "SUSUKAN 1","ZILAL","APANA","BAKTI ASIH","SAVANA","TK AL AMIN","BASUN","MESJID BAITULHADI",
  "QREI","SITU IJAN","SURA","MARGANA","GALURA","KAMARUNG 6","KAMARUNG 5","KAMARUNG 4",
  "KAMARUNG 3","KAMARUNG 2","KAMARUNG 1","MEE","MDKK","BALEBAT","BANGO","RANCABOGO",
  "MUSALA","HJM","SHANKARA","DENJAKA","TK SUKARA","KARYA DUCK","JATI 2","JATI",
  "LANGKAP","CIPACAR","SARADAN","PEKERTI","KAMARUNG 11","KAMARUNG 12","KAMARUNG 13",
  "KAMARUNG 14","KAMARUNG 15","KAMARUNG 16","REMA","BTN GEMBOR 4","BTN GEMBOR 3",
  "BTN GEMBOR 2","BTN GEMBOR 1","CISAMPIH","CISAMPIH 8","CISAMPIH 7","CISAMPIH 6",
  "CISAMPIH 9","BARGEDOS","GG UYUH 3","KELAPA RESIDANCE 2","DANGIANG",
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
  "ODP PERDANA 2","WATERBOOM","EPUL DEUI","RIMBUN","CONTER 2","DUSUN BABAKAN 3",
  "BAPANG 5","LAPANG SIDODADI","RANGGADIPA","SMJ","DODO","BAS","DT AQIQAH","OMLI",
  "LAPANG CIBAROLA","OKE 2","VOLLY 2","ARAB","ANGGUR XIV","PERDANA","JAKSA 3",
  "BABAKAN SUBANG 2","FLAMBOYAN 2","BLOK SAYUR 3","OFFICE SALES","GG MERAK 3","PUSAKA",
  "GG LASMANA","CENDRAWASIH 3","PHILIPS 2","GG. BUNGUR 2","PANGLEJAR 5","GG ASEM",
  "GG LIKA","SHOLEH","PALABUAN 2","YOSUDARSO","ABU","MAHKOTA 2",
  "POS 2","KOPRI","LETNAN UKI 4","TIKUKUR","MANSU 2","ABIMANYU","	BIMA SAKTI 3",
  "SRIKANDI 2","BTN CIERENG","NERAKO","KAPIRARAY 2","BOMBER","BLOK SAYUR 4","GG TONGKENG 2",
  "GG PISANG","KANJENG MAMIH","RASIDI 2","SAKINA","PESONA REGENCY","NCEP","GG SUNDARSO 5",
  "PAPUA","SISI CAI 3","SUNDARSO 4","GALATAMA 2","GG. ANGGUR 3","PASAR PUJASERA","AN NAJAH",
  "LEMBAH CIMERTA","TOWER","KARTINI 9","DEPAN GREEN SUBANG","DAWEY","NYIMPLUNG","JUSSY 3",
  "COSMOS","KARTINI 8","NENE UUR","CISUGIH","MEYER 2",
  "MAYKHA","GG. HUNI","GG BUNGBULANG 3","ODP BLOK D 2","GG HANJUANG","GG TAWES 2","BLOK E",
  "GG. BUAH 2","JL RA KARTINI 10","SKOTIS","FORTUN","BABAKAN UBAN 2","BABY JN",
  "NEPTUNE","FINPROS","TCC","SIKEMBAR","AMBU","BEIJING",
  "EDAN","BABAKAN CURUG","JL. RAYA TANJUNG WANGI","RENGKOLAN","FIRDAUS",
  "BANG TOYIB","LANDEUH","JL. GIMCHEON","PALASARI KIDUL","PALASARI","CIHERANG 6",
  "CIHERANG 5","CIHERANG 4","CIHERANG 3","SDN GUNUNG TUA","CIHERANG 2", "CIHERANG 1",
  "PUNIK","PIGO","SD GUNUNGSARI","SMP GUNUNG TUA","BABAKAN PUTU","ANUWANI",
  "PAMARIS 3","PAMARIS 2","PAMARIS 1","PITU","CIBAREGBEG 2",
  "CIBAREGBEG 1","NUSANTARA","KUJANG","BABAKAN BAROKAH","DUSUN PANGKALAN 4",
  "DUSUN PANGKALAN 3","DUSUN PANGKALAN 2","DUSUN PANGKALAN 1","SADANG 3","SADANG 2",
  "SADANG 1", "UWA TERE","PONPES PAGELARAN","KARYA","GUNA UTAMA 2","GUNA UTAMA 1",
  "NYINSO","CSN","UP","ATEP","	PARUNG 3","	PARUNG 2","	PARUNG",
  "OKTA","UJUNG PARUNG","AL MUBAROKAH","YOBA","SD PARUNG","SLAY",
  "DAMPIT","QOHAR","CIRANGKONG 1","HOLILUDIN","GONDRONG", "LAUK",
  "SINDANGPALAY","TK PELITA","ODP UP 2","GEWOR","FLASHER 2","AL HUDA 2",
  "INCUBETMEN 2","CARINGIN 2","CIHERANG 7","KHAYAL","ODP SORABI",
  "ODP PARUNG 4","KAMAJAYA","ABAH","ALLULA","SCORPIO","CISUSUH",
  "CIHERANG 12","	BALONG" ,"CIHERANG 11","CIHERANG 10","PONPES AL FAUZAN", "YANUSA",
  "IBTIDAIYAH","BAJAK","CIBAREGBEG 3","SPBU TAMBAK DAHAN","JL RAYA SIMPANG",
  "CITRA","CIHERANG 9","CIHERANG 8","BLOK SAYUR 2","BLOK SAYUR 1",
  "JL.SEROJA 1","JL.SEROJA 2","JL.SEROJA 3","JL.APEL RAYA 2","JL.APEL RAYA 1",
  "GG.KARANG KENDAL 1","PLAMBOYAN","GG. PISANG","JL.APEL RAYA 3","JL.JAKSA 2",
  "JL.SAWO 1","JL.DUKUH RAYA 1","JL.JAKSA 1","OTISTA","TUGU KOTA","GG TJ 1",
  "MASJID NURUL HALIM 1","TARAKAN 1","BUMIAWI 1","SAGARA 1","JL.ASMARANDANA 1","LTK 1",
  "JL.EMO 1","CIHEULEUT INDAH 1","JL.DIPONEGORO 1","	IDI CAHDI 1","GG.BUNGUR 1",
  "GG.TONGKENG 1","GG.PALABUAN 1","JL.PANGLEJAR 1","TANJUNG SIANG 1","UKONG SUTAMADJA 1",
  "PANGLEJAR 2","GG.SEJATI 1","GG.SUKAGALIH 1","JL.PEJUANG 2","MAYJEND SUTOYO 1",
  "JL.PEJUANG 1","PHILIPS 1","GG SUKUN 1","MASJID NURUL HALIM 3","GG SUNDARSO 2",
  "GG SUNDARSO 1","GG. ANGGUR 1","GG MERAK 1","TJOKRO 1","GG BUNGBULANG 1","GANESHA 1",
  "TKIT 1","KANCIL 2","KANCIL 1","JUSSY 1","GG.BAPANG 1","JL.BASKET 1","PERMATA HIJAU 2",
  "PERMATA HIJAU 1","BABAKAN UBAN","BLOK C","TAEKWANG","BLOK D","ABDUL GANI 1","GG.BUAH 1",
  "JL.RADEN AJENG KARTINI 5	","JL.RADEN AJENG KARTINI 4","JL.RADEN AJENG KARTINI 3",
  "JL.RADEN AJENG KARTINI 2","JL.RADEN AJENG KARTINI 1","	KIARA 3","GG.KIARA 2","GG.KIARA 1",
  "POS 1","SAWAH 1","MASJID NURUL HALIM 2","KINTAN 2","BENTENG 1","CIBAROLA 1",
  "KINTAN 1","LETNAN UKI 1","RA KARTINI 6","BAPANG 3","DUSUN BABAKAN 1","KP CONTO 1",
  "BAPANG 2","UNSUB 1","BWI 1","LETNAN UKI 2","KINTAN 3","JL METEOR 1",
  "KASERBA 1","PASIR KAREUMBI 1","JL. BILYAR 1","JL. VOLLY 1","JL. GOLF 1","DISDUKCAPIL",
  "MYGO","SMAN 4 SUBANG","BUMI ABDI PRAJA 3","BUMI ABDI PRAJA 1","BUMI ABDI PRAJA 2",
  "GG. ANGGUR 2","LTK2","GG KARTANINGSIH","CIKAWALI 2","CIKAWALI","MANSU","CIKALAPA",
  "SISI CAI","BSR 5","BSR 3","BSR 4","BSR 2","BSR 1","KARTINI 7",
  "BAROKAH","MEYER","ALUN ALUN","BULANSARI","PURNAMA","MALABAR",
  "GALATAMA","TUJI","KINTAN 5","JAPATI","GG CIUNG","GREEN SUBANG 1",
  "MAHKOTA 1","CONTER","KINTAN 4","BANGBANG KACA","JL. SOMPI","GG. BIDARA","GG PANGRANGO",
  "DARMAKUSUMAH","CANGAK","TANGKUBAN PERAHU","GG. ANGGREK","JL. RAYA SUKAMELANG 2",
  "JL. RAYA SUKAMELANG","GG. SALUYU 2","GG. MAWAR","GG. SALUYU","JL.PEJUANG 3","GG CEREME",
  "JAMBU SBG","RANGGAWULUNG","ANGGUR RAYA","TERMINAL 2","TERMINAL 1","ASAHI",
  "SUKALAKSANA","SUKAMAJU","JAYASENA","GG. CUAN","AL MU'MIN","JL. PANJI",
  "NOTO","SRIKANDI","SUKAWARNA","JETU","GG RASIDI 1","JUSSY 2",
  "DANGDEUR","GG UYUH 2","KELAPA RESIDENCE","GG UYUH","SADEWA","BIMA SAKTI 1","BIMA SAKTI 2",
  "GPS","GELORA","YONKO","QYANDA",
  "KENANGA","OKE","PANGKALAN","DUSUN BABAKAN 2","LETNAN UKI 3",
  "DELTA","BUMI KARTINI 2","BUMI KARTINI","PERMATA HIJAU 3","CIERENG","HENING",
  "DAWUAN","SITU SAEUR","BATANG KAPEH","GG. TARUNA","JL. PRAMUKA 3","JL. PRAMUKA 2",
  "JL. PRAMUKA 1","FLASHER","CARINGIN","AMANAH 2","AL HUDA","WARUNG KADU","GG. INCUBETMEN",
  "AMANAH","GG SUNDARSO 3","GG MERAK 2","SAGARA 2",
  "SISI CAI 2","LASKAR INDONESIA","DJUNG","BAPANG 4","KANCIL 3",
  "KINTAN 6","SAWARGI","ODP GG FILTER","ODP HIJAU","PONDOK INDAH","PALUGADA",
  "LANGENSARI","POLITEKNIK","KAPIRARAY","PARIKESIT","AS SALAM","RAFA",
  "KANAYA","SITRUN","GG. MELATI","CENDERAWASIH 2","KOISIWA","GG SUKUN 2","ATTAARUF",
  "PERUMNAS","GG. KITRI","TERANG","GG LEWO",
  "SUKARAHAYU","POLARIS","JERUK","KAFFA","GG BUNGBULANG 2",
  "BELITUNG","LAPANG SAMPEU","ALFOUR","ATREA","AKIMORA","JACE",
  "KIARA 5","GREEN SUBANG 2","GG.KIARA 4","KHAER","BAPE","PAHER",
  "BSR 7","BSR 6","KABOA","BANG KOMAR","PANGHEGAR","PAGADEN 1","PAGADEN 2",
  "PAGADEN 3","PAGADEN 4","ODP PEJUANG DALAM","POS 3","EPUL",
  "REDOORZ","KENANGA 2","TAMBAKDAHAN 1","TAMBAKDAHAN 2","TAMBAKDAHAN 3",
  "TAMBAKDAHAN 4","TAMBAKDAHAN 5","TAMBAKDAHAN 6","TAMBAKDAHAN 7",
  "DUREN MURAG","SAMS","LOLONG","PERTIGAAN MARJAN","KALIANGSANA 1","KALIANGSANA 2",
  "KALIANGSANA 3","TAMBAKDAHAN 10","BSR 10","JERUK 2","SAMES","TAMBAKDAHAN 11",
  "TAMBAKDAHAN 8","TAMBAKDAHAN 9","KALIANGSANA 6","KALIANGSANA 5","KALAIANGSANA 4",
  "BELENDUNG 1","BELENDUNG 2","BELENDUNG 3","BELENDUNG 4","TGC","BSR 11",
  "CISAMPIH 10","CISAMPIH 11","CISAMPIH 12","CISAMPIH 13","CISAMPIH 14",
  "PG 4","PG 5","BELENDUNG 5","BELENDUNG 6","BELENDUNG 7","CISAGA 14",
  "NYINSO 2","PG 6","TAMBAKDAHAN 12","MADANGKARA","RX KING",
  "MAJASARI","MAJASARI 2","MAJASARI 3","MAJASARI 4","MAJASARI 5","MAJASARI 6",
  "MAJASARI 7","TIKUKUR 2","CIKONDANG","SATRIA","TAMANSARI","MAJASARI 9",
  "CENDANA","CENDANA 2","KARANG KENDAL 3","GRAHA SUBANG KENCANA 1","GRAHA SUBANG KENCANA 2",
  "ASAHI 2","MAJASARI 9","MAJASARI 10","MAJASARI 11","MAJASARI 12","MAJASARI 13","MAJASARI 14",
  "HAUDH","SANAKERTA","KALIANGSANA 8","KALIANGSANA 9","KALIANGSANA 10","KALIANGSANA 11"
  ,"KALIANGSANA 12","KALIANGSANA 13","KALIANGSANA 14","KALIANGSANA 15","KALIANGSANA 16",
  "OJM","KLIN","FLAMBOYAN RESIDANCE","MAJASARI 19","MAJASARI 20","LAMPANG","RUSMAN",
]
// Fungsi toggle dengan animasi dan status aktif
function toggleSNForm(id) {
    const form = document.getElementById('snForm' + id);
    const btn = document.getElementById('snBtn' + id);
    
    if (form.style.display === 'none') {
        form.style.display = 'block';
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-exchange-alt"></i> Tutup Form Ganti Perangkat';
    } else {
        form.style.display = 'none';
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-exchange-alt"></i> Ganti Perangkat';
    }
}

function toggleODPForm(id) {
    const form = document.getElementById('odpForm' + id);
    const btn = document.getElementById('odpBtn' + id);
    
    if (form.style.display === 'none') {
        form.style.display = 'block';
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-arrows-alt-h"></i> Tutup Form Pindah ODP';
    } else {
        form.style.display = 'none';
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-arrows-alt-h"></i> Pindah ODP';
    }
}

// Fungsi untuk menampilkan/menyembunyikan form SN
function toggleSNForm(id) {
    const snForm = document.getElementById(`snForm${id}`);
    const toggleBtn = document.querySelector(`[onclick="toggleSNForm(${id})"]`);
    
    if (snForm.style.display === 'none') {
        snForm.style.display = 'block';
        toggleBtn.innerHTML = '<i class="fas fa-times"></i> Sembunyikan Form SN';
        toggleBtn.style.background = '#e0e0e0';
    } else {
        snForm.style.display = 'none';
        toggleBtn.innerHTML = '<i class="fas fa-exchange-alt"></i> Ganti Perangkat';
        toggleBtn.style.background = '#f0f0f0';
    }
}

// Fungsi untuk menampilkan/menyembunyikan form Pindah ODP
function toggleODPForm(id) {
    const odpForm = document.getElementById(`odpForm${id}`);
    const toggleBtn = document.querySelector(`[onclick="toggleODPForm(${id})"]`);
    
    if (odpForm.style.display === 'none') {
        odpForm.style.display = 'block';
        toggleBtn.innerHTML = '<i class="fas fa-times"></i> Sembunyikan Form ODP';
        toggleBtn.style.background = '#e0e0e0';
    } else {
        odpForm.style.display = 'none';
        toggleBtn.innerHTML = '<i class="fas fa-arrows-alt-h"></i> Pindah ODP';
        toggleBtn.style.background = '#f0f0f0';
    }
}

// Fungsi untuk menampilkan/menyembunyikan form Pindah ODP
function toggleODPForm(id) {
    const odpForm = document.getElementById(`odpForm${id}`);
    const toggleBtn = document.querySelector(`[onclick="toggleODPForm(${id})"]`);
    
    if (odpForm.style.display === 'none') {
        odpForm.style.display = 'block';
        toggleBtn.innerHTML = '<i class="fas fa-times"></i> Sembunyikan Form ODP';
        toggleBtn.style.background = '#e0e0e0';
    } else {
        odpForm.style.display = 'none';
        toggleBtn.innerHTML = '<i class="fas fa-arrows-alt-h"></i> Pindah ODP';
        toggleBtn.style.background = '#f0f0f0';
    }
}

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
  tambahinstalasi: `
    <div class="instalasi-form">
        <div class="form-header">
            <h3>INSTALASI</h3>
        </div>
        <input type="hidden" id="jenis{id}" value="Instalasi">
        
        <label for="nama{id}">Nama <span class="required-label">*</span></label>
        <input type="text" id="nama{id}" placeholder="Nama pelanggan">
        
        <label for="cid{id}">CID <span class="required-label">*</span></label>
        <input type="number" id="cid{id}" inputmode="numeric" placeholder="Nomor CID">

        <label for="passwordmemberarea{id}">Password Member Area <span class="required-label">*</span></label>
       <input type="number" id="passwordmemberarea{id}" inputmode="numeric" pattern="[0-9]*" placeholder="Password Member Area">

        
        <label for="email{id}">Email <span class="optional-label">
            <i class="fas fa-info-circle"></i> tidak wajib
        </span></label>
        <input type="email" id="email{id}" placeholder="Email pelanggan">
        
        <label for="olt{id}">OLT <span class="required-label">*</span></label>
        <select id="olt{id}">
            <option value="">-- Pilih OLT --</option>
            <option value="KALIJATI CDATA">KALIJATI CDATA</option>
            <option value="OFFICE SUBANG 1">OFFICE SUBANG 1</option>
            <option value="TAMBAKDAHAN SUBANG">TAMBAKDAHAN SUBANG</option>
            <option value="PEGADEN SUBANG">PEGADEN SUBANG</option>
            <option value="DAWUAN">DAWUAN</option>
            <option value="MESS SUBANG 2">MESS SUBANG 2</option>
            <option value="KALIJATI CDATA">KALIJATI CDATA</option>
            <option value="GUNUNG TUA">GUNUNG TUA</option>
            <option value="MESS SUBANG">MESS SUBANG</option>
            
        </select>
        
        <div class="form-grid">
            <div class="search-container">
                <label for="odp{id}">ODP <span class="required-label">*</span></label>
                <input type="text" id="odp{id}" placeholder="Ketik untuk mencari ODP" oninput="searchODP(this, 'odpResults{id}')">
                <div class="search-results" id="odpResults{id}"></div>
            </div>
            <div>
                <label for="port{id}">Port <span class="required-label">*</span></label>
                <select id="port{id}">
                    <option value="">-- Pilih Port --</option>
                    ${Array.from({length: 16}, (_, i) => `<option value="${i + 1}">Port ${i + 1}</option>`).join('')}
                </select>
            </div>
        </div>
        
        <label for="jenis_perangkat{id}">Jenis Perangkat <span class="required-label">*</span></label>
        <select id="jenis_perangkat{id}" onchange="updateSN('{id}')">
            <option value="">-- Pilih jenis perangkat --</option>
            <option value="C-DATA XPON ONU">C-DATA XPON ONU</option>
            <option value="C-DATA XPON DUAL-BAND ONU">C-DATA XPON DUAL-BAND ONU</option>
            <option value="RISECOME">RISECOME</option>
            <option value="RISECOME (DISMANTLE)">RISECOME (DISMANTLE)</option>
            <option value="C-DATA XPON ONU (DISMANTLE)">C-DATA XPON ONU (DISMANTLE)</option>
        </select>

        <label for="sn_perangkat{id}">SN Perangkat <span class="required-label">*</span></label>
        <input type="text" id="sn_perangkat{id}" placeholder="Serial number perangkat">
        
        <div class="form-grid">
            <div>
                <label for="dropcore{id}">Dropcore <span class="required-label">*</span></label>
                <select id="dropcore{id}">
                    <option value="">Pilih panjang</option>
                    <option value="50 Meter">50 Meter</option>
                    <option value="100 Meter">100 Meter</option>
                    <option value="150 Meter">150 Meter</option>
                    <option value="200 Meter" selected>200 Meter</option>
                    <option value="225 Meter">225 Meter</option>
                    <option value="250 Meter">250 Meter</option>
                    <option value="275 Meter">275 Meter</option>
                    <option value="300 Meter">300 Meter</option>
                    <option value="Kabel Terminate">Kabel Terminate</option>
                </select>
            </div>
            <div>
                <label for="patchcord{id}">Patchcord <span class="required-label">*</span></label>
                <select id="patchcord{id}">
                    <option value="">Pilih jumlah</option>
                    <option value="1 Pcs" selected>1 Pcs</option>
                    <option value="2 Pcs">2 Pcs</option>
                    <option value="3 Pcs">3 Pcs</option>
                </select>
            </div>
        </div>
        
        <label for="keterangan{id}">Keterangan <span class="required-label">*</span></label>
        <input type="text" id="keterangan{id}" value="Selesai">
    </div>
  `,
  
  jadwalulanginstalasi: `
    <div class="form-header">
      <h3>Jadwal Ulang Instalasi</h3>
    </div>
    <input type="hidden" id="jenis{id}" value="Jadwal Ulang Instalasi">
    <label for="nama{id}">Nama Pelanggan <span class="required-label">*</span></label>
    <input type="text" id="nama{id}" placeholder="Nama pelanggan">

     
    <label for="alasan{id}">Alasan Reschedule <span class="required-label">*</span></label>
    <select id="alasan{id}">
      <option value="">Pilih Alasan</option>
      <option value="Pelanggan minta di jawalkan ulang">Pelanggan minta di jawalkan ulang</option>
      <option value="Pelanggan minta di jawalkan ulang besok">Pelanggan minta di jadwalkan ulang besok</option>
      <option value="Pelanggan minta di jawalkan ulang minggu depan">Pelanggan minta di jadwalkan ulang minggu depan</option>
      <option value="Pelanggan minta di jawalkan ulang bulan depan">Pelanggan minta di jadwalkan ulang bulan depan</option>
      <option value="Pelanggan tidak ada di rumah">Pelanggan tidak ada di rumah</option>
      <option value="Pelanggan sedang sakit">Pelanggan sedang sakit</option>
      <option value="Pelanggan pindah alamat">Pelanggan pindah alamat</option>
      <option value="Pelanggan tidak bisa dihubungi">Pelanggan tidak bisa dihubungi</option>
      <option value="Pelanggan sedang bepergian">Pelanggan sedang bepergian</option>
      <option value="Instalasi ditunda karena pelanggan belum siap secara biaya">Instalasi ditunda karena pelanggan belum siap secara biaya</option>      
      <option value="Kendala listrik">Kendala listrik</option>
      <option value="Jarak terlalu jauh, menunggu pengembangan ODP">Jarak terlalu jauh, menunggu pengembangan ODP</option>
      <option value="Cuaca buruk">Cuaca buruk</option>
      <option value="Pemasangan malam hari sudah terlalu larut">Pemasangan malam hari sudah terlalu larut</option>
      <option value="Perlu izin RT/RW">Perlu izin RT/RW</option>
      <option value="ODP penuh, menunggu pengembangan ODP">ODP penuh, menunggu pegembagan ODP</option>
      <option value="Pelanggan sedang bekerja atau sibuk,">Pemilik rumah sedang kerja atau sibuk</option>
      <option value="Lainnya">Lainnya</option>
    </select>
    
    <label for="keterangan{id}">Keterangan Tambahan <span class="optional-label">
    <i class="fas fa-info-circle"></i> tidak wajib</label>
    <textarea id="keterangan{id}" placeholder="Penjelasan detail" rows="2"></textarea>
    
    <label for="jadwal{id}">Tanggal Request <span class="required-label">*</span></label>
    <input type="date" id="jadwal{id}">
  `,

 tambahmaintenance: `
    <div class="maintenance-form">
        <div class="form-header">
            <h3>Maintenance</h3>
        </div>
        <input type="hidden" id="jenis{id}" value="Maintenance">

        <!-- NAMA PELANGGAN -->
        <div class="form-group">
            <label for="nama{id}">Nama Pelanggan <span class="required-label">*</span></label>
            <input type="text" id="nama{id}" class="form-control required" 
                   placeholder="Nama pelanggan">
            <div class="error-message" id="nama{id}-error"></div>
        </div>

        <!-- CID -->
        <div class="form-group">
            <label for="cid{id}">CID <span class="required-label">*</span></label>
            <input type="number" id="cid{id}" class="form-control required" 
                   placeholder="Nomor CID">
            <div class="error-message" id="cid{id}-error"></div>
        </div>

        <!-- ODP -->
        <div class="search-container">
            <label for="odp{id}">ODP <span class="optional-label">
                <i class="fas fa-info-circle"></i> tidak wajib
            </span></label>
            <input type="text" id="odp{id}" placeholder="Ketik untuk mencari ODP" 
                   oninput="searchODP(this, 'odpResults{id}', odpData)">
            <div class="search-results" id="odpResults{id}"></div>
        </div>

        <!-- R. ODP -->
        <div class="form-group">
            <label for="rodp{id}">R. ODP <span class="optional-label">
                <i class="fas fa-info-circle"></i> tidak wajib
            </span></label>
            <input type="text" id="rodp{id}" placeholder="Redaman ODP">
        </div>

        <!-- R.C Before & After -->
        <div class="form-grid">
            <div class="form-group">
                <label for="rcbefore{id}">R.C Before <span class="optional-label">
                    <i class="fas fa-info-circle"></i> tidak wajib
                </span></label>
                <input type="text" id="rcbefore{id}" placeholder="Redaman odp sebelum">
            </div>
            <div class="form-group">
                <label for="rcafter{id}">R.C After <span class="optional-label">
                    <i class="fas fa-info-circle"></i> tidak wajib
                </span></label>
                <input type="text" id="rcafter{id}" placeholder="Redaman odp sesudah">
            </div>
        </div>

        <!-- KENDALA -->
        <div class="form-group">
            <label for="ken{id}">Kendala <span class="required-label">*</span></label>
            <input type="text" id="ken{id}" class="form-control required" 
                   placeholder="Masalah yang ditemukan">
            <div class="error-message" id="ken{id}-error"></div>
        </div>

        <!-- TINDAKAN -->
        <div class="form-group">
            <label for="tin{id}">Tindakan <span class="required-label">*</span></label>
            <input type="text" id="tin{id}" class="form-control required" 
                   placeholder="Tindakan perbaikan">
            <div class="error-message" id="tin{id}-error"></div>
        </div>

        <!-- Ganti Perangkat Section -->
        <div class="form-group">
            <label>Ganti Perangkat <span class="optional-label">
                <i class="fas fa-info-circle"></i> tidak wajib
            </span></label>
            <button type="button" class="toggle-btn" onclick="toggleSNForm({id})" id="snBtn{id}">
                <i class="fas fa-exchange-alt"></i> Ganti Perangkat
            </button>
        </div>

        <!-- Form SN -->
        <div id="snForm{id}" class="toggle-form" style="display: none;">
            <div class="form-grid">
                <div class="form-group">
                    <label for="snlama{id}">SN Lama</label>
                    <input type="text" id="snlama{id}" placeholder="Serial number lama">
                </div>
                <div class="form-group">
                    <label for="snbaru{id}">SN Baru</label>
                    <input type="text" id="snbaru{id}" placeholder="Serial number baru">
                </div>
            </div>
        </div>

        <!-- Pindah ODP Section -->
        <div class="form-group">
            <label>Pindah ODP <span class="optional-label">
                <i class="fas fa-info-circle"></i> tidak wajib
            </span></label>
            <button type="button" class="toggle-btn" onclick="toggleODPForm({id})" id="odpBtn{id}">
                <i class="fas fa-arrows-alt-h"></i> Pindah ODP
            </button>
        </div>

        <!-- Form Pindah ODP -->
        <div id="odpForm{id}" class="toggle-form" style="display: none;">
            <!-- ODP Lama -->
            <div class="search-container">
                <label for="odplama{id}">ODP Lama</label>
                <input type="text" id="odplama{id}" placeholder="Ketik untuk mencari ODP lama" 
                       oninput="searchODP(this, 'odplamaResults{id}', odpData)">
                <div class="search-results" id="odplamaResults{id}"></div>
            </div>

            <!-- ODP Baru -->
            <div class="search-container">
                <label for="odpbaru{id}">ODP Baru</label>
                <input type="text" id="odpbaru{id}" placeholder="Ketik untuk mencari ODP baru" 
                       oninput="searchODP(this, 'odpbaruResults{id}', odpData)">
                <div class="search-results" id="odpbaruResults{id}"></div>
            </div>
        </div>

        <!-- Dropcore & Patchcord -->
        <div class="form-grid">
            <div class="form-group">
                <label for="dropcore{id}">Dropcore <span class="optional-label">
                    <i class="fas fa-info-circle"></i> tidak wajib
                </span></label>
                <select id="dropcore{id}" class="optional-field">
                    <option value="">Pilih panjang</option>
                    <option value="10 Meter">10 Meter</option>
                    <option value="15 Meter">15 Meter</option>
                    <option value="20 Meter">20 Meter</option>
                    <option value="25 Meter">25 Meter</option>
                    <option value="30 Meter">30 Meter</option>
                    <option value="35 Meter">35 Meter</option>
                    <option value="40 Meter">40 Meter</option>
                    <option value="50 Meter">50 Meter</option>
                    <option value="60 Meter">60 Meter</option>
                    <option value="70 Meter">70 Meter</option>
                    <option value="75 Meter">75 Meter</option>
                    <option value="80 Meter">80 Meter</option>
                    <option value="90 Meter">90 Meter</option>
                    <option value="100 Meter">100 Meter</option>
                    <option value="110 Meter">110 Meter</option>
                    <option value="120 Meter">120 Meter</option>
                    <option value="130 Meter">130 Meter</option>
                    <option value="140 Meter">140 Meter</option>
                    <option value="150 Meter">150 Meter</option>
                    <option value="160 Meter">160 Meter</option>
                    <option value="170 Meter">170 Meter</option>
                    <option value="180 Meter">180 Meter</option>
                    <option value="190 Meter">190 Meter</option>
                    <option value="200 Meter">200 Meter</option>
                </select>
            </div>
            <div class="form-group">
                <label for="patchcord{id}">Patchcord <span class="optional-label">
                    <i class="fas fa-info-circle"></i> tidak wajib
                </span></label>
                <select id="patchcord{id}" class="optional-field">
                    <option value="">Pilih jumlah</option>
                    <option value="1 Pcs">1 Pcs</option>
                    <option value="2 Pcs">2 Pcs</option>
                    <option value="3 Pcs">3 Pcs</option>
                </select>
            </div>
        </div>

        <!-- Keterangan -->
        <div class="form-group">
            <label for="ket{id}">Keterangan <span class="required-label">*</span></label>
            <input type="text" id="ket{id}" value="Selesai">
        </div>
    </div>
`,

  jadwalulangmaintenance: `
    <div class="form-header">
      <h3>Jadwal Ulang Maintenance</h3>
    </div>
    <input type="hidden" id="jenis{id}" value="Jadwal Ulang Maintenance">
    <label for="nama{id}">Nama Pelanggan <span class="required-label">*</span></label>
    <input type="text" id="nama{id}" placeholder="Nama pelanggan">
    <label for="alasan{id}">Alasan Jadwal Ulang Maintenance <span class="required-label">*</span></label>
    <select id="alasan{id}">
      <option value="">Pilih Alasan</option>
      <option value="Cuaca Buruk">Cuaca buruk</option>
      <option value="Pelanggan tidak ada di rumah">Pelanggan tidak ada di rumah</option>
      <option value="Pelanggan minta di jawalkan ulang">Pelanggan minta di jawalkan ulang</option>
      <option value="Pelanggan minta di jawalkan ulang besok">Pelanggan minta di jawalkan ulang besok</option>
      <option value="Maintenance malam hari sudah terlalu larut">Maintenance malam hari sudah terlalu larut</option>
      <option value="Lainnya">Lainnya</option>
    </select>
    
    <label for="keterangan{id}">Keterangan Tambahan <span class="optional-label">
    <i class="fas fa-info-circle"></i> tidak wajib</label>
    <textarea id="keterangan{id}" placeholder="Penjelasan detail" rows="2"></textarea>

    <label for="jadwal{id}">Tanggal Request <span class="required-label">*</span></label>
    <input type="date" id="jadwal{id}">
  `,
  
  cancelinstalasi: `
    <div class="form-header">
      <h3>Cancel Instalasi</h3>
    </div>
    <input type="hidden" id="jenis{id}" value="Cancel">
    <label for="nama{id}">Nama Pelanggan <span class="required-label">*</span></label>
    <input type="text" id="nama{id}" placeholder="Nama pelanggan">

     
    <label for="alasan{id}">Alasan cancel pemasangan </label>
    <select id="alasan{id}">
      <option value="">Pilih Alasan</option>
      <option value="Berubah pikiran (tidak jadi pasang)">Berubah pikiran (tidak jadi pasang)</option>
      <option value="Sudah pasang provider lain">Sudah pasang provider lain</option>
      <option value="Tidak siap bayar">Tidak siap bayar</option>
      <option value="Tidak ada orang di rumah saat teknisi datang">Tidak ada orang di rumah saat teknisi datang</option>
      <option value="Gangguan teknis saat survey (akses rumah susah)">Gangguan teknis saat survey (akses rumah susah)</option>
      <option value="Gangguan teknis saat survey (jarak terlalu jauh)">Gangguan teknis saat survey (jarak terlalu jauh)</option>
      <option value="Kabel tidak memungkinkan untuk ditarik ke rumah pelanggan">Kabel tidak memungkinkan untuk ditarik ke rumah pelanggan</option>
      <option value="Jaringan tidak tersedia di lokasi">Jaringan tidak tersedia di lokasi</option>
      <option value="Lainnya">Lainnya</option>
    </select>
    
    <label for="keterangan{id}">Keterangan tambahan <span class="optional-label">
    <i class="fas fa-info-circle"></i> tidak wajib</label>
    <textarea id="keterangan{id}" placeholder="Penjelasan detail" rows="2"></textarea>
  `,
  
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

// Fungsi XPON ONU dan RISECOME
function updateSN(id) {
  const jenis = document.getElementById("jenis_perangkat" + id).value;
  const snField = document.getElementById("sn_perangkat" + id);

  if (jenis === "C-DATA XPON ONU") {
    // hanya kasih prefix, user bisa lanjut ngetik
    snField.value = "DF1D-";
    snField.focus();
    snField.setSelectionRange(snField.value.length, snField.value.length);
  } else if (jenis === "C-DATA XPON DUAL-BAND ONU") {
    snField.value = "DF51-";
    snField.focus();
    snField.setSelectionRange(snField.value.length, snField.value.length);
    } else if (jenis === "RISECOME") {
    snField.value = "RCMG";
    snField.focus();
    snField.setSelectionRange(snField.value.length, snField.value.length);
    } else if (jenis === "RISECOME (DISMANTLE)") {
    snField.value = "RCMG";
    snField.focus();
    snField.setSelectionRange(snField.value.length, snField.value.length);
     } else if (jenis === "C-DATA XPON ONU (DISMANTLE)") {
    snField.value = "DF1D-";
    snField.focus();
    snField.setSelectionRange(snField.value.length, snField.value.length);
  } else {
    snField.value = ""; // reset kalau pilih kosong
  }
}

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

  let judul = getValue("reportTitle") || "LAPORAN INSTALASI SUBANG";
  let tanggal = getValue("reportDate") || getDefaultDate();
  let team = getValue("teamName");
  
  let laporan = `${judul}\n${tanggal}\n\n`;
  if (team) {
    laporan += `Team : ${team}\n\n`;
  } else {
    laporan += `\n`;
  }

  let instalasiData = [];
  let jadwalulanginstalasiData = [];
  let maintenanceData = [];
  let jadwalulangmaintenanceData = [];
  let cancelinstalasiData = [];
  
  let isLaporanValid = true; // Flag untuk validasi

  forms.forEach((form) => {
    let i = form.id.replace("form", "");
    let jenis = getValue("jenis"+i);
    
    if (jenis === "Instalasi") instalasiData.push({ id: i });
    else if (jenis === "Jadwal Ulang Instalasi") jadwalulanginstalasiData.push({ id: i });
    else if (jenis === "Maintenance") maintenanceData.push({ id: i });
    else if (jenis === "Jadwal Ulang Maintenance") jadwalulangmaintenanceData.push({ id: i});
    else if (jenis === "Cancel") cancelinstalasiData.push({ id: i });
  });

  let nomorInstalasi = 1;
  let nomorJadwalUlangInstalasi = 1;
  let nomorMaintenance = 1;
  let nomorJadwalUlangMaintenance = 1;
  let nomorCancelInstalasi = 1;

  if (instalasiData.length > 0) {
    let instalasiLaporan = "";
    instalasiData.forEach(data => {
      let i = data.id;
      let cid = getValue("cid"+i);
      let nama = getValue("nama"+i);
      if (cid && nama) {
        instalasiLaporan += `${nomorInstalasi}. A/N : ${nama}\n`;
        instalasiLaporan += `CID : ${cid}\n`;
        instalasiLaporan += `Password Member Area : ${getValue("passwordmemberarea"+i)}\n`;
        instalasiLaporan += `Email : ${getValue("email"+i)}\n`;
        instalasiLaporan += `OLT : ${getValue("olt"+i)}\n`;
        instalasiLaporan += `ODP : ${getValue("odp"+i)}\n`;
        instalasiLaporan += `Port : ${getValue("port"+i)}\n`;
        instalasiLaporan += `Jenis Perangkat : ${getValue("jenis_perangkat"+i)}\n`;
        instalasiLaporan += `SN Perangkat : ${getValue("sn_perangkat"+i)}\n`;
        instalasiLaporan += `Dropcore : ${getValue("dropcore"+i)}\n`;
        instalasiLaporan += `Patchcord : ${getValue("patchcord"+i)}\n`;
        instalasiLaporan += `Keterangan : ${getValue("keterangan"+i) || 'Selesai'}\n\n`;
        nomorInstalasi++;
      }
    });
    if (instalasiLaporan) {
      laporan += `*INSTALASI*\n\n` + instalasiLaporan;
    }
  }

  if (jadwalulanginstalasiData.length > 0) {
    let jadwalulanginstalasiLaporan = "";
    // Menggunakan for...of loop agar bisa dihentikan di tengah jalan
    for (const data of jadwalulanginstalasiData) {
      let i = data.id;
      let nama = getValue("nama"+i);
      
      if (nama) {
        const jadwal = document.getElementById("jadwal"+i)?.value;
        
        // **VALIDASI:** Cek apakah tanggal sudah diisi
        if (!jadwal) {
            alert(`Tanggal request wajib diisi`);
            isLaporanValid = false; // Set flag menjadi tidak valid
            break; // Hentikan loop
        }

        jadwalulanginstalasiLaporan += `${nomorJadwalUlangInstalasi}. A/N: ${nama}\n`;
        
        const alasan = getValue("alasan"+i);
        if (alasan) jadwalulanginstalasiLaporan += `Alasan : ${alasan}\n`;

        const keterangan = getValue("keterangan"+i);
        if (keterangan) jadwalulanginstalasiLaporan += `Keterangan : ${keterangan}\n`;
        
        // **DIUBAH:** Menggunakan format tanggal baru dan label baru
        jadwalulanginstalasiLaporan += `Tanggal request: ${formatFullDate(jadwal)}\n\n`;
        
        nomorJadwalUlangInstalasi++;
      }
    }
    
    if (!isLaporanValid) return; // Hentikan fungsi jika laporan tidak valid

    if (jadwalulanginstalasiLaporan) {
        laporan += `*RESCHEDULE INSTALASI*\n\n` + jadwalulanginstalasiLaporan;
    }
  }

 
if (maintenanceData.length > 0) {
    let maintenanceLaporan = "";
    
    maintenanceData.forEach(data => {
      let i = data.id;
      
      let cid = getValue("cid"+i);
      let nama = getValue("nama"+i);
      let ken = getValue("ken"+i);
      let tin = getValue("tin"+i);

       // ✅ SKIP JIKA SEMUA FIELD WAJIB KOSONG
      const requiredFieldsFilled = cid || nama || ken || tin;
      if (!requiredFieldsFilled) {
        return; // skip form ini
      }

      // LANGSUNG BUAT LAPORAN
      maintenanceLaporan += `${nomorMaintenance}. A/N : ${nama}\n`;
      maintenanceLaporan += `CID : ${cid}\n`;

      const odp = getValue("odp"+i);
      if (odp) maintenanceLaporan += `ODP : ${odp}\n`;

      const rodp = getValue("rodp"+i);
      if (rodp) maintenanceLaporan += `R. ODP : ${rodp}\n`;
      
      const rcbefore = getValue("rcbefore"+i);
      if (rcbefore) maintenanceLaporan += `R.C Before : ${rcbefore}\n`;
      
      const rcafter = getValue("rcafter"+i);
      if (rcafter) maintenanceLaporan += `R.C After : ${rcafter}\n`;

      maintenanceLaporan += `Kendala : ${ken}\n`;
      maintenanceLaporan += `Tindakan : ${tin}\n`;
      
      const snLama = getValue("snlama"+i);
      const snBaru = getValue("snbaru"+i);
      const odplama = getValue("odplama"+i);
      const odpbaru = getValue("odpbaru"+i);

      if (snLama || snBaru) {
          maintenanceLaporan += `Ganti Perangkat :\n`;
          if (snLama) maintenanceLaporan += `SN Lama : ${snLama}\n`;
          if (snBaru) maintenanceLaporan += `SN Baru : ${snBaru}\n`;
          maintenanceLaporan += ``;
      }

      if (odplama || odpbaru) {
          maintenanceLaporan += `Pindah ODP :\n`;
          if (odplama) maintenanceLaporan += `ODP Lama : ${odplama}\n`;
          if (odpbaru) maintenanceLaporan += `ODP Baru : ${odpbaru}\n`;
          maintenanceLaporan += ``;
      }
      
      const dropcore = getValue("dropcore"+i);
      if (dropcore && dropcore !== "") maintenanceLaporan += `Dropcore : ${dropcore}\n`;
      
      const patchcord = getValue("patchcord"+i);
      if (patchcord && patchcord !== "") maintenanceLaporan += `Patchcord : ${patchcord}\n`;

      const ket = getValue("ket"+i);
      if (ket) maintenanceLaporan += `Keterangan : ${ket || 'Selesai'}\n\n`;
      
      nomorMaintenance++;
    });
    
    if (maintenanceLaporan) {
        laporan += `*MAINTENANCE*\n\n` + maintenanceLaporan;
    }
}

   if (jadwalulangmaintenanceData.length > 0) {
    let jadwalulangmaintenanceLaporan = "";
    // Menggunakan for...of loop agar bisa dihentikan di tengah jalan
    for (const data of jadwalulangmaintenanceData) {
      let i = data.id;
      let nama = getValue("nama"+i);
      
      if (nama) {
        const jadwal = document.getElementById("jadwal"+i)?.value;
        
        // **VALIDASI:** Cek apakah tanggal sudah diisi
        if (!jadwal) {
            alert(`Tanggal request wajib diisi`);
            isLaporanValid = false; // Set flag menjadi tidak valid
            break; // Hentikan loop
        }

        jadwalulangmaintenanceLaporan += `${nomorJadwalUlangMaintenance} .A/N : ${nama}\n`;
        
        const alasan = getValue("alasan"+i);
        if (alasan) jadwalulangmaintenanceLaporan += `Alasan : ${alasan}\n`;

        const keterangan = getValue("keterangan"+i);
        if (keterangan) jadwalulangmaintenanceLaporan += `Keterangan : ${keterangan}\n`;
        
        // **DIUBAH:** Menggunakan format tanggal baru dan label baru
        jadwalulangmaintenanceLaporan += `Tanggal request : ${formatFullDate(jadwal)}\n\n`;
        
        nomorJadwalUlangMaintenance++;
      }
    }
    
    if (!isLaporanValid) return; // Hentikan fungsi jika laporan tidak valid

    if (jadwalulangmaintenanceLaporan) {
        laporan += `*RESCHEDULE MAINTENANCE*\n\n` + jadwalulangmaintenanceLaporan;
    }
  }

   if (cancelinstalasiData.length > 0) {
    let cancelinstalasiLaporan = "";
    // Menggunakan for...of loop agar bisa dihentikan di tengah jalan
    for (const data of cancelinstalasiData) {
      let i = data.id;
      let nama = getValue("nama"+i);
      if (nama) {
        

         cancelinstalasiLaporan += `${nomorCancelInstalasi}. A/N : ${nama}\n`;
      
        
        const alasan = getValue("alasan"+i);
        if (alasan) cancelinstalasiLaporan += `Alasan : ${alasan}\n`;

        const keterangan = getValue("keterangan"+i);
        if (keterangan) cancelinstalasiLaporan += `Keterangan : ${keterangan}\n`;
        
        
        nomorCancelInstalasi++;
      }
    }
    
    if (!isLaporanValid) return; // Hentikan fungsi jika laporan tidak valid

    if (cancelinstalasiLaporan) {
        laporan += `*CANCEL INSTALASI*\n\n` + cancelinstalasiLaporan;
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
    document.getElementById("reportTitle").value = "LAPORAN INSTALASI SUBANG";
    document.getElementById("reportDate").value = "";
    formCount = 0;
    updateDate(); // Reset date to current date
  }
}

// Initialize the date display on page load
document.addEventListener('DOMContentLoaded', updateDate);
