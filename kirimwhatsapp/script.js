 function sendWA(){
      let phone = document.getElementById("phone").value.trim();
      let message = document.getElementById("message").value.trim();
      if(phone === ""){alert("Isi nomor dulu");return;}
      let url = "https://wa.me/" + phone;
      if(message !== "") url += "?text=" + encodeURIComponent(message);
      window.open(url,"_blank");
    }