function generateTruth() {
    let isi = document.getElementById("content")
    const truth = [`Acara tv apa yang paling kamu benci? Berikan alasannya!
    `,`Apa baju yang (menurutmu) paling jelek yang pernah kamu pakai, dan kapan kamu memakainya?
    `,`Apa hal paling buruk (gosip) yang pernah kamu bilang tentang temenmu?
    `,`Apa hal paling memalukan dari dirimu?
    `,`Apa hal paling memalukan dari temanmu?
    `,`Apa hal pertama yang kamu lihat saat kamu melihat orang lain (lawan jenis)?
    `,`Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?
    `,`Apa hal terbodoh yang pernah kamu lakukan?
    `,`Apa hal terbodoh yang pernah kamu lakukan?
    `,`Apa ketakutan terbesar kamu?
    `,`Apa mimpi terburuk yang pernah kamu alami?
    `,`Apa mimpi terkonyol yang sampai sekarang kamu kamu ingat?
    `,`Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi?
    `,`Apa sifat terburukmu menurut kamu?
    `,`Apa sifat yang ingin kamu rubah dari dirimu?
    `,`Apa sifat yang ingin kamu rubah dari temanmu?
    `,`Apa yang akan kamu lakuin bila pacarmu bilang hidung atau jarimu jelek?
    `,`Apa yang kamu fikirkan sebelum kamu tidur? ex: menghayal tentang jodoh,dll.
    `,`Apakah hal yang menurutmu paling menonjol dari dirimu?
    `,`Bagian tubuh temanmu mana yang paling kamu sukai dan ingin kamu punya?
    `,`Bagian tubuhmu mana yang paling kamu benci?
    `,`Dari semua kelas yang ada di sekolah, kelas mana yang paling ingin kamu masuki dan kelas mana yang paling ingin kamu hindari?
    `,`Deksripsikan teman terdekat mu!
    `,`Deskripsikan dirimu dalam satu kata!
    `,`Film dan lagu apa yang pernah membuat kamu menangis?
    `,`Hal apa yang kamu rahasiakan sampe sekarang dan gak ada satu orangpun yang tau?
    `,`Hal paling romantis apa yang seseorang (lawan jenis) pernah lakuin atau kasih ke kamu?
    `,`Hal-hal menjijikan apa yang pernah kamu alami?
    `,`Jika kamu lahir kembali dan harus jadi salah satu dari temanmu, siapa yang akan kamu pilih untuk jadi dia?
    `,`Jika punya kekuatan super/ super power ingin melakukan apa?
    `,`Jika sebentar lagi kiamat, apa yang kamu lakukan?
    `,`Kalo kamu disuruh operasi plastik dengan contoh wajah dari teman sekelasmu, wajah siapa yang akan kamu tiru?
    `,`Kamu pernah mencuri sesuatu gak?
    `,`Apakah kamu takut mati? kenapa?
    `,`Kapan terakhir kali kamu menangis dan mengapa?
    `,`Apa kemampuan spesial kamu apa?
    `,`Kok bisa suka sama orang yang kamu sukai?
    `,`Menurutmu, apa sifat baik teman terdekatmu yang nggak dia sadari?
    `,`Orang seperti apa yang ingin kamu nikahi suatu saat nanti?
    `,`Pekerjaan paling ngenes apa yang menurutmu cocok untuk teman yang sedang duduk di sebelahmu? Dan kenapa?
    `,`Pengen tukeran hidup sehari dengan siapa? (teman terdekat yang kalian sama-sama tahu) dan mengapa?
    `,`Pernahkah kamu diam-diam berharap hubungan seseorang dengan pacarnya putus? Siapa?
    `,`Pilih PACAR atau TEMAN? why?
    `,`Quote apa yang paling kamu ingat dan kamu suka?
    `,`Rahasia apa yang belum pernah kamu katakan sampai sekarang kepada teman mu?
    `,`Siapa panutan yang benar-benar menjadi panutanmu?
    `,`Siapa di antara temanmu yang kamu pikir matre?
    `,`Siapa di antara teman-temanmu yang menurutmu potongan rambutnya paling nggak banget?
    `,`Siapa diantara temen-temenmu yang paling NGGAK fotogenik dan kalo difoto lagi ketawa mukanya jelek banget?
    `,`Siapa mantan terindah mu? dan mengapa kalian putus?!
    `,`Siapa nama artis yang pernah kamu bucinin diam-diam?
    `,`Siapa nama guru cowok yang pernah kamu sukai dulu?
    `,`Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?
    `,`Siapa nama orang (lawan jenis) yang menurutmu akan asyik bila dijadikan pacar?
    `,`Siapa nama orang yang kamu benci, tapi kamu rasa orang itu suka sama kamu (nggak harus lawan jenis)?
    `,`Siapa nama orang yang pernah kamu kepoin diam-diam?
    `,`Siapa orang (lawan jenis) yang paling sering terlintas di pikiranmu?
    `,`Siapa orang yang paling menjengkelkan di antara teman teman mu? alasannya!
    `,`Siapa sebenernya di antara teman-temanmu yang kamu pikir harus di make-over?
    `,`Siapa yang paling mendekati tipe pasangan idealmu di sini?`]
    let randomTruth = truth[Math.floor(Math.random()*truth.length)]
    isi.innerText = randomTruth
    return randomTruth
}
function generateDare() {
    let isi = document.getElementById("content")
    const dare = [`Ajak orang yang tidak kamu kenal untuk selfie berdua dengan mu lalu upload ke snapgram
    `,`Ambil beberapa nomor dari kontakmu secara acak dan kirim sms "Aku hamil" sama mereka.
    `,`Ambil minuman apa saja yang ada didekat mu lalu campurkan dengan cabai dan minum!
    `,`Ambil nomor secara acak dari kontakmu, telepon dia, dan bilang "Aku mencintaimu"
    `,`Beli makanan paling murah di kantin (atau beli sebotol aqua) dan bilang sambil tersedu-sedu pada teman sekelasmu "Ini.adalah makanan yang paling mahal yang pernah kubeli"
    `,`Beli satu botol coca cola dan siram bunga dengan coca cola itu di depan orang banyak.
    `,`Berdiri deket kulkas, tutup mata, pilih makanan secara acak didalemnya, pas makanpun mata harus tetep ditutup.
    `,`Berdiri di tengah lapangan basket dan berteriak, "AKU MENCINTAIMU PANGERANKU/PUTRIKU"
    `,`Beri hormat pada seseorang di kelas, lalu bilang "Hamba siap melayani Anda, Yang Mulia."
    `,`Berjalan sambil bertepuk tangan dan menyanyi lagu "Selamat Ulang Tahun" dari kelas ke koridor.
    `,`Berlutut satu kaki dan bilang "Marry me?" sama orang pertama yang masuk ke ruangan.
    `,`Bikin hiasan kepala absurd dari tisu, apapun itu, terus suruh pose didepan kamera, terus upload
    `,`Bilang "KAMU CANTIK/GANTENG BANGET NGGAK BOHONG" sama cewek yang menurutmu paling cantik di kelas ini
    `,`Bilang pada seseorang di kelas, "Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling serius yang pernah aku katakan."
    `,`Buang buku catatan seseorang ke tempat sampah, di depan matanya, sambil bilang "Buku ini isinya tidak ada yang bisa memahami"
    `,`Cabut bulu kaki mu sendiri sebanyak 3 kali!
    `,`Chat kedua orangtuamu, katakan bahwa kamu kangen dengan mereka lengkap dengan emoticon sedih.
    `,`Coba searcing google mengenai hal-hal yang mengerikan atau menggelikan seperti trypophobia, dll.
    `,`Duduk relaks di tengah lapangan basket sambil berpura-pura itu adalah pantai untuk berjemur.
    `,`isi mulut penuh dengan air dan harus tahan hingga dua putaranJika tertawa dan tumpah atau terminum, maka harus ngisi ulang dan ditambah satu putaran lagi.
    `,`Salamanlah dengan orang pertama yang masuk ke ruangan ini dan bilang "Selamat datang di Who Wants To Be a Millionaire!"
    `,`.Kirim sms pada orangtuamu "Hai, bro! Aku baru beli majalah Playboy edisi terbaru!"
    `,`Kirim sms pada orangtuamu, "Ma, Pa, aku sudah tahu bahwa aku adalah anak adopsi dari Panti Asuhan. Jangan menyembunyikan hal ini lagi."
    `,`Kirim sms pada tiga nomor acak di kontakmu dan tulis "Aku baru saja menjadi model majalah Playboy."
    `,`Makan satu sendok makan kecap manis dan kecap asin!
    `,`Makan sesuatu tapi gak pake tangan.
    `,`Marah-marahi ketemen kamu yang gak dateng padahal udah janjian mau main "truth or dare" bareng"
    `,`Pecahkan telur menggunakan kepala!
    `,`Makanlah makanan yang sudah dicampur-campur dan rasanya pasti aneh, namun pastikan bahwa makanan itu tidak berbahaya untuk kesehatan jangka panjang maupun jangka pendek.
    `,`Menari ala Girls' Generation untuk cowok di depan kelas, atau menari ala Super Junior untuk cewek.
    `,`Mengerek tiang bendera tanpa ada benderanya.
    `,`Menggombali orang yang ditaksir, sahabat terdekat, lawan jenis yang tidak dikenal sama sekali dan  sejenisnya.
    `,`Meniru style rambut semua temen kamu.
    `,`Menyanyikan lagu HAI TAYO di depan banyak orang sambil menari
    `,`Menyanyikan lagu Baby Shark dengan keras di ruang kelas.
    `,`Minjem sesuatu ke tetangga
    `,`Minta tandatangan pada seorang guru yang paling paling galak sambil bilang "Anda benar-benar orang yang paling saya kagumi di dunia."
    `,`Minta uang pada seseorang (random/acak) di jalan sambil bilang "Saya tidak punya uang untuk naik angkot."
    `,`Minum sesuatu yang udah dibuat/disepakatin, tapi pastiin gak berbahaya, bisa kayak minum sirup yang digaremin terus ditambah kecap.
    `,`Ngomong ke gebetannya emoticon-Takut, ngobrol ngalurngidul apapun lah boleh ,via manapun juga bisa.
    `,`Nyanyi-nyanyi lagu favorit difilm disney diluar rumah sambil teriak-teriak.
    `,`Nyebutin 1 biru sampai 20 biru dengan cepat dan tidak boleh melakukan kesalahan. Jika salah maka harus diulang dari awal.
    `,`Pakai mahkota tiruan dari kertas buku dan bilang sama setiap orang di ruangan "BERI PENGHORMATAN PADA YANG MULIA RAJA" sambil menunjuk setiap orang dengan penggaris.
    `,`Pake celana kebalik sampe besok paginya.
    `,`Peluk orang yang NGGAK kamu sukai di kelas dan bilang, "Terimakasih banyak kamu sudah bersedia menjadi orang paling baik untukku."
    `,`Pergi ke lapangan yang luas, lalu berlari sekencang kencangnya sambil mengatakan “aku gila aku gila”
    `,`Petik  bunga lalu tancapkan bunga itu ke orang yang tidak kamu kenal (harus lawan jenis ya)
    `,`Pilih orang secara acak di jalan, lalu bilang "You don't know you're beautiful" (ala One Direction)
    `,`Pura pura kerasukan ex: kerasukan macan dll
    `,`Suruh bersiul pas mulutnya lagi penuh dijejelin makanan.
    `,`Suruh jadi pelayan buat ngelayanin kamu sama temen-temen kamu buat makan siang.
    `,`Suruh pake kaos kaki buat dijadiin sarung tangan.
    `,`Suruh pake topi paling aneh/helm paling absurd selama  putaraann kedepan.
    `,`Telpon mama kamu dan bilang “ma, aku mau nikah secepatnya”
    `,`Telpon mantan kamu dan bialng “aku rindu kamu”
    `,`Tuker baju sama orang terdekat sampe ronde berikutnya.
    `,`Update status di BBM, Line, WA, atau apapun itu dengan kata kata yang semuanya berawalan "S"
    `,`Upload video nyanyi ke youtube yang lagi nyanyiin lagu-lagu populer
    `,`Warnain kuku kaki dan tangan tapi dengan warna berbeda-beda buat seminggu.`]
    let randomDare = dare[Math.floor(Math.random()*dare.length)]
    isi.innerText = randomDare

    return randomDare
}

let tes = document.getElementById("content")

let truthBtn = document.getElementById('btntruth')
let dareBtn = document.getElementById('btndare')
let isibox = document.getElementById('box')
let tombolBox = document.getElementById('tombol')
let backBtn = document.getElementById('btnback')


truthBtn.addEventListener('click',function(){
    for(let i=0; i<15; i++){
        for (let i = 0; i < 10; i++) {
            setTimeout(function () {
                tes = generateTruth()
            }, i * 80)
        }
    }
    tombolBox.style.display = "none"
    backBtn.style.display = "block"
})

dareBtn.addEventListener('click',function(){
    for (let i = 0; i < 15; i++) {
        setTimeout(function () {
            tes = generateDare()
        }, i * 80)
    }
    tombolBox.style.display = "none"
    backBtn.style.display = "block"
})
backBtn.addEventListener('click',function(){
    document.location.reload()
})
