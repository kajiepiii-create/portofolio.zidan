#!/usr/bin/env bash
# Memulihkan aset foto asli (Google Photos milik Zidan) lalu mengoptimasinya.
# Dipakai bila folder src/assets ter-reset oleh sandbox.
set -e
cd "$(dirname "$0")"

mkdir -p src/assets
cd src/assets

echo ">> Mengunduh foto asli…"
curl -sL -o profile.jpg "https://lh3.googleusercontent.com/pw/AP1GczMT678eJbU1ppiSI3kCzZRESz33YTiygrK4bAb81Z-Un344BPcM3ljAIoADfef_-Gya8oBxlDzqydMyrKbUxTan-4fwOwEUCHNgNuwR8eOqrjEfPx4=w1086"
curl -sL -o work-01.jpg "https://lh3.googleusercontent.com/pw/AP1GczOHEQjmyZRDqD79TcYjCFWIMNI4E6EuD9FIdEwzwB5KhMG4hu7JhW-O-a56FGfavL7gXDGRlBd2dR55Pwch1Xs3HEqjn_fiTNvjQZWkVVn8NeQDpZg=w1300"
curl -sL -o work-02.jpg "https://lh3.googleusercontent.com/pw/AP1GczOiDr3-bVYjLqJYSjGjOlNiDajgXaL1CPC-GCLOcRnzcH4ovXqRFlFUR8lhK28RdPG1l7KetcV31nthiner9O5n33K6fY-Da_cIdckXsSQ9zOZYJ4M=w1000"
curl -sL -o work-03.jpg "https://lh3.googleusercontent.com/pw/AP1GczNPfrOJurQ5pdlXlOsC0UX6kLymHTiJD57erkHAf-VAY3r_AcP8z2jEWwQVHn6--3nEpqrXPs1v3NJb2avB-Nrp_jHUd9OeEy5n-sQje6PI2fw80nA=w1000"
# Video motion graphics — parameter "=dv" menghasilkan MP4 Full HD langsung
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36"
curl -sL "https://lh3.googleusercontent.com/pw/AP1GczONq-koq6qTCXXeH8haKZeo4yUihEdU2kN4gzVXh6ueJxe05VZaiRFgw8qqNOfTbcsriRc6yfeFq9d6oCE-fuCPXGejkLhRenO2eOMgrQmLt0zQosU=dv" \
  -A "$UA" -o motion.mp4 -w "motion.mp4  %{size_download} bytes  %{content_type}\n"

# Video profil (reel vertikal) — disimpan ke public/ agar tidak di-inline bundle
mkdir -p ../public
curl -sL "https://lh3.googleusercontent.com/pw/AP1GczMgtaIuusqul20Ulz1SPpVfiidSr2FD8f73wTTl1XDFOXvxuTAmelfg-OmtMQbEDFCpDxhsJZxcSTYgi89wRCuIxYbEpkhpiIPA-f-oyUHgUUDz1Kk=m18" \
  -A "$UA" -o ../public/profile-reel.mp4 -w "profile-reel.mp4  %{size_download} bytes  %{content_type}\n"

echo ">> Mengoptimasi (resize + mozjpeg)…"
node -e "
const sharp=require('sharp'),fs=require('fs');
const plan=[['profile.jpg',1086,1448,78],['work-01.jpg',1300,867,72],['work-02.jpg',1000,667,72],['work-03.jpg',1000,667,72]];
(async()=>{
  for(const [f,w,h,q] of plan){
    const buf=await sharp(f).resize({width:w,height:h,fit:'cover'}).jpeg({quality:q,progressive:true,mozjpeg:true}).toBuffer();
    fs.writeFileSync(f,buf); console.log('  ',f.padEnd(14), w+'x'+h, (buf.length/1024).toFixed(0)+' KB');
  }
  let t=0; for(const x of fs.readdirSync('.').filter(n=>n.endsWith('.jpg'))) t+=fs.statSync(x).size;
  console.log('  TOTAL:',(t/1024).toFixed(0)+' KB');
})();
"
echo ">> Selesai."
