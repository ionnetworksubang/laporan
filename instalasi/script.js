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
  "PAGADEN 3","PAGADEN 4","PEJUANG DALAM","POS 3","EPUL",
]

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
      <h3>INSTALASI</h3>
    </div>
    <input type="hidden" id="jenis{id}" value="Instalasi">
    
    <label for="nama{id}">Nama</label>
    <input type="text" id="nama{id}" placeholder="Nama pelanggan">
    
    <label for="cid{id}">CID</label>
    <input type="number" id="cid{id}" inputmode="numeric" placeholder="Nomor CID">
    
    <label for="email{id}">Email</label>
    <input type="email" id="email{id}" placeholder="Email pelanggan">
    
    <label for="olt{id}">OLT</label>
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
        <label for="odp{id}">ODP</label>
        <input type="text" id="odp{id}" placeholder="Ketik untuk mencari ODP" oninput="searchODP(this, 'odpResults{id}')">
        <div class="search-results" id="odpResults{id}"></div>
      </div>
      <div>
        <label for="port{id}">Port</label>
        <select id="port{id}">
          <option value="">-- Pilih Port --</option>
          ${Array.from({length: 16}, (_, i) => `<option value="${i + 1}">Port ${i + 1}</option>`).join('')}
        </select>
      </div>
    </div>
    
    <label for="jenis_perangkat{id}">Jenis Perangkat</label>
<select id="jenis_perangkat{id}" onchange="updateSN('{id}')">
  <option value="">-- Pilih --</option>
  <option value="C-DATA ONU">C-DATA ONU</option>
  <option value="RISECOME">RISECOME</option>
</select>

<label for="sn_perangkat{id}">SN Perangkat</label>
<input type="text" id="sn_perangkat{id}" placeholder="Serial number perangkat">

    
    <div class="form-grid">
      <div>
        <label for="dropcore{id}">Dropcore</label>
        <select id="dropcore{id}">
          <option value="">Pilih panjang</option>
          <option value="50 Meter">50 Meter</option>
          <option value="100 Meter">100 Meter</option>
          <option value="150 Meter">150 Meter</option>
          <option value="200 Meter" selected>200 Meter</option>
        </select>
      </div>
      <div>
        <label for="patchcord{id}">Patchcord</label>
        <select id="patchcord{id}">
          <option value="">Pilih jumlah</option>
          <option value="1 Pcs" selected>1 Pcs</option>
          <option value="2 Pcs">2 Pcs</option>
          <option value="3 Pcs">3 Pcs</option>
        </select>
      </div>
    </div>
    
    <label for="keterangan{id}">Keterangan</label>
    <input type="text" id="keterangan{id}" value="Selesai">
  `,
  
  reschedule: `
    <div class="form-header">
      <h3>Reschedule</h3>
    </div>
    <input type="hidden" id="jenis{id}" value="Reschedule">
    <label for="nama{id}">Nama Pelanggan</label>
    <input type="text" id="nama{id}" placeholder="Nama pelanggan (Wajib diisi)">

     <label for="cid{id}">CID</label>
    <input type="number" id="cid{id}" inputmode="numeric" placeholder="Nomor CID (Wajib diisi)">
    <label for="alasan{id}">Alasan Reschedule</label>
    <select id="alasan{id}">
      <option value="">Pilih Alasan</option>
      <option value="Tidak ada orang di rumah">Tidak ada orang di rumah</option>
      <option value="Kendala listrik">Kendala listrik</option>
      <option value="Jarak terlalu jauh, menunggu pengembangan ODP">Jarak terlalu jauh, menunggu pengembangan ODP</option>
      <option value="Hujan deras / cuaca buruk">Hujan deras / cuaca buruk</option>
      <option value="Pemasangan malam hari sudah terlalu larut">Pemasangan malam hari sudah terlalu larut</option>
      <option value="Perlu izin RT/RW">Perlu izin RT/RW</option>
      <option value="ODP penuh, menunggu pengembangan ODP">ODP penuh, menunggu pegembagan ODP</option>
      <option value="Pemilik rumah sedang kerja / sibuk">Pemilik rumah sedang kerja / sibuk</option>
      <option value="Lainnya">Lainnya</option>
    </select>
    
    <label for="keterangan{id}">Keterangan Tambahan</label>
    <textarea id="keterangan{id}" placeholder="Penjelasan detail (opsional)" rows="2"></textarea>
    
    <label for="jadwal{id}">Tanggal Request (Wajib diisi)</label>
    <input type="date" id="jadwal{id}">
  `,
  
  cancel: `
    <div class="form-header">
      <h3>Reschedule</h3>
    </div>
    <input type="hidden" id="jenis{id}" value="Cancel">
    <label for="nama{id}">Nama Pelanggan</label>
    <input type="text" id="nama{id}" placeholder="Nama pelanggan (Wajib diisi)">

     <label for="cid{id}">CID</label>
    <input type="number" id="cid{id}" inputmode="numeric" placeholder="Nomor CID (Wajib diisi)">
    <label for="alasan{id}">Alasan Cancel</label>
    <select id="alasan{id}">
      <option value="">Pilih Alasan</option>
      <option value="Berubah pikiran (tidak jadi pasang)">Berubah pikiran (tidak jadi pasang).</option>
      <option value="Sudah pasang provider lain">Sudah pasang provider lain.</option>
      <option value="Tidak siap bayar">Tidak siap bayar</option>
      <option value="Tidak ada orang di rumah saat teknisi datang">Tidak ada orang di rumah saat teknisi datang</option>
      <option value="Gangguan teknis saat survey (akses rumah susah)">Gangguan teknis saat survey (akses rumah susah)</option>
      <option value="Gangguan teknis saat survey (jarak terlalu jauh)">Gangguan teknis saat survey (jarak terlalu jauh)</option>
      <option value="Kabel tidak memungkinkan untuk ditarik ke rumah pelanggan">Kabel tidak memungkinkan untuk ditarik ke rumah pelanggan</option>
      <option value="Jaringan tidak tersedia di lokasi">Jaringan tidak tersedia di lokasi</option>
      <option value="Lainnya">Lainnya</option>
    </select>
    
    <label for="keterangan{id}">Keterangan Tambahan</label>
    <textarea id="keterangan{id}" placeholder="Penjelasan detail (opsional)" rows="2"></textarea>
  `,

  maintenance: `
    <div class="form-header">
      <h3>Maintenance</h3>
    </div>
    <input type="hidden" id="jenis{id}" value="Maintenance">

    <label for="nama{id}">Nama Pelanggan</label>
    <input type="text" id="nama{id}" placeholder="Nama pelanggan (Wajib diisi)">

    <label for="cid{id}">CID</label>
    <input type="number" id="cid{id}" inputmode="numeric" placeholder="Nomor CID (Wajib diisi)">
    
    <div class="search-container">
            <label for="odp{id}">ODP</label>
            <input type="text" id="odp{id}" placeholder="Ketik untuk mencari ODP (opsional)" 
            oninput="searchODP(this, 'odpResults{id}', odpData)">
            <div class="search-results" id="odpResults{id}"></div>
    </div>

    <label for="rodp{id}">R. ODP</label>
    <input type="text" id="rodp{id}" placeholder="Redaman ODP (opsional)">

    <div class="form-grid">
      <div>
        <label for="rcbefore{id}">R.C Before</label>
        <input type="text" id="rcbefore{id}" placeholder="Redaman odp sebelum (opsional)">
      </div>
      <div>
        <label for="rcafter{id}">R.C After</label>
        <input type="text" id="rcafter{id}" placeholder="Redaman odp sesudah (opsional)">
      </div>
    </div>

    <label for="ken{id}">Kendala</label>
    <input type="text" id="ken{id}" placeholder="Masalah yang ditemukan (opsional)">

    <label for="tin{id}">Tindakan</label>
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

// Fungsi XPON ONU dan RISECOME
function updateSN(id) {
  const jenis = document.getElementById("jenis_perangkat" + id).value;
  const snField = document.getElementById("sn_perangkat" + id);

  if (jenis === "C-DATA ONU") {
    // hanya kasih prefix, user bisa lanjut ngetik
    snField.value = "DF1D-";
    snField.focus();
    snField.setSelectionRange(snField.value.length, snField.value.length);
  } else if (jenis === "RISECOME") {
    snField.value = "RCMG";
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
  let cancelData = [];
  let maintenanceData = [];
  
  let isLaporanValid = true; // Flag untuk validasi

  forms.forEach((form) => {
    let i = form.id.replace("form", "");
    let jenis = getValue("jenis"+i);
    
    if (jenis === "Instalasi") instalasiData.push({ id: i });
    else if (jenis === "Reschedule") rescheduleData.push({ id: i });
    else if (jenis === "Cancel") cancelData.push({ id: i });
    else if (jenis === "Maintenance") maintenanceData.push({ id: i });
  });

  let nomorInstalasi = 1;
  let nomorReschedule = 1;
  let nomorCancel = 1;
  let nomorMaintenance = 1;

  if (instalasiData.length > 0) {
    let instalasiLaporan = "";
    instalasiData.forEach(data => {
      let i = data.id;
      let cid = getValue("cid"+i);
      let nama = getValue("nama"+i);
      if (cid && nama) {
        instalasiLaporan += `${nomorInstalasi}. A/N : ${nama}\n`;
        instalasiLaporan += `CID : ${cid}\n`;
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
      laporan += `*INSTALASI*\n` + instalasiLaporan;
    }
  }

  if (rescheduleData.length > 0) {
    let rescheduleLaporan = "";
    // Menggunakan for...of loop agar bisa dihentikan di tengah jalan
    for (const data of rescheduleData) {
      let i = data.id;
      let nama = getValue("nama"+i);
      let cid = getValue("cid"+i);
      if (nama && cid) {
        const jadwal = document.getElementById("jadwal"+i)?.value;
        
        // **VALIDASI:** Cek apakah tanggal sudah diisi
        if (!jadwal) {
            alert(`Tanggal request wajib diisi untuk Reschedule CID: ${cid}`);
            isLaporanValid = false; // Set flag menjadi tidak valid
            break; // Hentikan loop
        }

         rescheduleLaporan += `A/N: ${nama}\n`;
        rescheduleLaporan += `CID: ${cid}\n`;
        
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
        laporan += `*RESCHEDULE*\n` + rescheduleLaporan;
    }
  }

  if (cancelData.length > 0) {
    let cancelLaporan = "";
    // Menggunakan for...of loop agar bisa dihentikan di tengah jalan
    for (const data of cancelData) {
      let i = data.id;
      let nama = getValue("nama"+i);
      let cid = getValue("cid"+i);
      if (nama && cid) {
        const jadwal = document.getElementById("jadwal"+i)?.value;
        

         cancelLaporan += `${nomorCancel}. A/N: ${nama}\n`;
        cancelLaporan += `CID: ${cid}\n`;
        
        const alasan = getValue("alasan"+i);
        if (alasan) cancelLaporan += `Alasan: ${alasan}\n`;

        const keterangan = getValue("keterangan"+i);
        if (keterangan) cancelLaporan += `Keterangan: ${keterangan}\n`;
        
        
        nomorCancel++;
      }
    }
    
    if (!isLaporanValid) return; // Hentikan fungsi jika laporan tidak valid

    if (cancelLaporan) {
        laporan += `*CANCEL*\n` + cancelLaporan;
    }
  }

  if (maintenanceData.length > 0) {
    let maintenanceLaporan = "";
    maintenanceData.forEach(data => {
      let i = data.id;
      let cid = getValue("cid"+i);
      let nama = getValue("nama"+i);
      if (cid && nama) {
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

        const ken = getValue("ken"+i);
        if (ken) maintenanceLaporan += `Kendala : ${ken}\n`;

        const tin = getValue("tin"+i);
        if (tin) maintenanceLaporan += `Tindakan : ${tin}\n`;
        
        const snlama = getValue("snlama"+i);
        if (snlama) maintenanceLaporan += `SN Lama : ${snlama}\n`;
        
        const snbaru = getValue("snbaru"+i);
        if (snbaru) maintenanceLaporan += `SN Baru : ${snbaru}\n`;

        const dropcore = getValue("dropcore"+i);
        if (dropcore) maintenanceLaporan += `Dropcore : ${dropcore}\n`;
        
        const patchcord = getValue("patchcord"+i);
        if (patchcord) maintenanceLaporan += `Patchcord : ${patchcord}\n`;

        const ket = getValue("ket"+i);
        if (ket) maintenanceLaporan += `Keterangan : ${ket || 'SELESAI'}\n\n`;
        
        nomorMaintenance++;
      }
    });
    if (maintenanceLaporan) {
        laporan += `*MAINTENANCE*\n` + maintenanceLaporan;
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
