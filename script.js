
const SUPABASE_URL = "https://sgwapelypjffoszajpta.supabase.co";

const SUPABASE_KEY = "sb_publishable_o4wGW-o6U3NwOZP0QCMNuA_xRoWviMd";



document.addEventListener("DOMContentLoaded", () => {
    
/* O GÜNÜN HİKÂYESİ */

const historyYear = document.getElementById("historyYear");
const historyText = document.getElementById("historyText");
const historySource = document.getElementById("historySource");


const historyToggle = document.getElementById("historyToggle");
const historyContent = document.getElementById("historyContent");

historyToggle.addEventListener("click", () => {
    const isOpen = !historyContent.hidden;

    historyContent.hidden = isOpen;

    historyToggle.textContent = isOpen
        ? "Tarihçeyi Oku"
        : "Tarihçeyi Kapat";

    historyToggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
    );
});


const historyEvents = {
    2004: {
        text: "28 Mayıs 2004'te Irak Yönetim Konseyi, İyad Allavi'yi geçici hükümetin başbakanı olarak seçti. Dünya yeni bir siyasi döneme hazırlanıyordu.",
        source: "https://en.wikipedia.org/wiki/May_28"
    },

    2005: {
        text: "28 Mayıs 2005'te ABD'nin Atlanta kentinde, bir vincin üzerinde üç gün geçiren ve cinayet şüphelisi olarak aranan Carl Edward Roland polis tarafından indirildi.",
        source: "https://www.history.com/this-day-in-history/may-28"
    },

    2006: {
        text: "28 Mayıs 2006'da beyzbolcu Barry Bonds, kariyerinin 715. sayı vuruşunu yaparak Babe Ruth'u tüm zamanların listesinde geride bıraktı.",
        source: "https://www.history.com/this-day-in-history/may-28"
    },

    2008: {
        text: "28 Mayıs 2008'de Nepal'de monarşi resmen sona erdi. Ülke cumhuriyet ilan edilerek yaklaşık 240 yıllık Şah Hanedanı yönetimine son verdi.",
        source: "https://en.wikipedia.org/wiki/May_28"
    },

    2010: {
        text: "28 Mayıs 2010'da Hindistan'ın Batı Bengal eyaletinde Jnaneswari Express treninin raydan çıkması ve başka bir trenle çarpışması büyük bir felakete yol açtı.",
        source: "https://en.wikipedia.org/wiki/May_28"
    },

  
2011: [
    {
        text: "28 Mayıs 2011'de Barcelona, Londra'daki Wembley Stadyumu'nda Manchester United'ı 3-1 mağlup ederek UEFA Şampiyonlar Ligi şampiyonu oldu. Barcelona'nın gollerini Pedro, Lionel Messi ve David Villa attı.",
        source: "https://fbref.com/en/matches/09f93bb8/Barcelona-Manchester-United-May-28-2011-Champions-League"
    },
    {
        text: "28 Mayıs 2011'de Formula 1 Monaco Grand Prix sıralama turlarında Sebastian Vettel, Red Bull aracıyla pole pozisyonunu kazandı. Bu, Vettel'in sezonun ilk altı yarışındaki beşinci pole pozisyonuydu.",
        source: "https://www.racefans.net/2011/05/28/2011-monaco-grand-prix-qualifying-report/"
    },
    {
        text: "28 Mayıs 2011'de Monaco Grand Prix sıralama turlarında Sergio Pérez, tünel çıkışında ağır bir kaza geçirdi. Sıralama turları durduruldu. Hastaneye kaldırılan Pérez'in ciddi bir kırık yaşamadığı açıklandı.",
        source: "https://www.racefans.net/2011/05/28/perez-crash-halts-qualifying-monaco/"
    }
],

    2012: {
        text: "28 Mayıs 2012'de Kazakistan'daki Arkankergen sınır karakolunda yaşanan olayda 15 kişi hayatını kaybetti.",
        source: "https://en.wikipedia.org/wiki/May_28"
    },

    2013: {
        text: "28 Mayıs 2013'te İstanbul'da Gezi Parkı'ndaki ağaçların korunmasına yönelik protestolar başladı. Sonraki günlerde gösteriler Türkiye'nin birçok şehrine yayıldı.",
        source: "https://en.wikipedia.org/wiki/May_28"
    },

   
2016: [
    {
        text: "28 Mayıs 2016'da Real Madrid, Milano'daki Şampiyonlar Ligi finalinde Atlético Madrid ile 1-1 berabere kaldı. Penaltılarda 5-3 kazanarak 11. Avrupa şampiyonluğunu elde etti. Son penaltıyı Cristiano Ronaldo gole çevirdi.",
        source: "https://www.uefa.com/uefachampionsleague/news/022d-0e957c5979eb-37493cb53cd0-1000--spot-on-real-madrid-defeat-atletico-in-final-again/"
    },
    {
        text: "28 Mayıs 2016'da ABD'deki Cincinnati Hayvanat Bahçesi'nde küçük bir çocuk goril alanına düştü. Yetkililer çocuğun hayatını korumak amacıyla Harambe adlı gorili vurarak öldürdü. Olay dünya çapında büyük tartışmalara yol açtı.",
        source: "https://cincinnatizoo.org/media-update-gorilla-world/"
    }
],


    2017: {
        text: "28 Mayıs 2017'de Takuma Sato, Indianapolis 500 yarışını kazanan ilk Japon pilot olarak motor sporları tarihine geçti.",
        source: "https://en.wikipedia.org/wiki/May_28"
    },

   
2022: [
    {
        text: "28 Mayıs 2022'de Real Madrid, Liverpool'u 1-0 yenerek UEFA Şampiyonlar Ligi'nde 14. kez Avrupa şampiyonu oldu. Maçın tek golünü Vinícius Júnior attı.",
        source: "https://www.uefa.com/news/0275-15415a62aaf0-36d3e17d7404-1000--report-real-madrid-win-champions-league/"
    },
    {
        text: "28 Mayıs 2022'de 75. Cannes Film Festivali'nin Altın Palmiye ödülü, Ruben Östlund'un yönettiği Triangle of Sadness filmine verildi.",
        source: "https://www.festival-cannes.com/presse/communiques/le-palmares-du-75e-festival-de-cannes/"
    }
],

    
    2007: {
        text: "28 Mayıs 2007'de Meksiko'da düzenlenen Kâinat Güzellik Yarışması'nı Japonya'dan Riyo Mori kazandı. Japonya, 48 yıl sonra yeniden bu unvana kavuştu.",
        source: "https://en.wikipedia.org/wiki/Miss_Universe_2007"
    },

    2014: {
        text: "28 Mayıs 2014'te Amerikalı şair, yazar ve insan hakları savunucusu Maya Angelou, 86 yaşında hayatını kaybetti. Eserleri dünya edebiyatında önemli bir iz bıraktı.",
        source: "https://en.wikipedia.org/wiki/Maya_Angelou"
    },

    2015: {
        text: "28 Mayıs 2015'te FIFA, yolsuzluk soruşturmaları kapsamında bazı futbol yöneticilerine yönelik uzaklaştırma kararlarını duyurdu. Dünya futbolu büyük bir yönetim krizi yaşıyordu.",
        source: "https://www.brainyhistory.com/days/may_28.html"
    },

    2019: {
        text: "28 Mayıs 2019'da Japonya'nın Kawasaki kentinde okul servisini bekleyen çocukların ve yetişkinlerin hedef alındığı bıçaklı saldırı yaşandı. Olay ülke genelinde büyük üzüntü yarattı.",
        source: "https://en.wikipedia.org/wiki/Kawasaki_stabbings"
    },

    2020: {
        text: "28 Mayıs 2020'de ABD'nin Minneapolis ve Saint Paul kentlerinde George Floyd'un ölümünün ardından büyüyen protestolar nedeniyle olağanüstü hâl ilan edildi.",
        source: "https://en.wikipedia.org/wiki/George_Floyd_protests"
    },

    2021: {
        text: "28 Mayıs 2021'de ABD Senatosunda, 6 Ocak Kongre Binası saldırısını araştıracak bağımsız komisyon kurulmasına yönelik yasa tasarısı gerekli desteği alamadı.",
        source: "https://en.wikipedia.org/wiki/January_6_commission"
    },

    2023: {
        text: "28 Mayıs 2023'te Türkiye'de cumhurbaşkanlığı seçiminin ikinci turu gerçekleştirildi. Recep Tayyip Erdoğan, ikinci tur sonucunda yeniden cumhurbaşkanı seçildi.",
        source: "https://en.wikipedia.org/wiki/2023_Turkish_presidential_election"
    },


};



let currentHistoryEvents = [];
let currentHistoryIndex = 0;

const historyPrevEvent = document.getElementById("historyPrevEvent");
const historyNextEvent = document.getElementById("historyNextEvent");
const historyEventCounter = document.getElementById("historyEventCounter");

function showHistoryEvent() {
    const event = currentHistoryEvents[currentHistoryIndex];

    if (!event) {
        historyText.textContent = "Bu yıl için henüz doğrulanmış bir olay eklenmedi.";
        historySource.hidden = true;
        historyEventCounter.textContent = "";
        return;
    }

    historyText.textContent = event.text;
    historySource.href = event.source;
    historySource.hidden = !event.source;

    historyEventCounter.textContent =
        `${currentHistoryIndex + 1} / ${currentHistoryEvents.length}`;

    historyPrevEvent.disabled = currentHistoryEvents.length < 2;
    historyNextEvent.disabled = currentHistoryEvents.length < 2;
}

function updateHistoryCard(year) {
    const selectedYear = String(year);
    historyYear.textContent = selectedYear;

    historyContent.hidden = true;
    historyToggle.textContent = "Tarihçeyi Oku";
    historyToggle.setAttribute("aria-expanded", "false");

    const events = historyEvents[selectedYear];

    currentHistoryEvents = events
        ? (Array.isArray(events) ? [...events] : [events])
        : [];

    // Olayları rastgele sırala
    for (let i = currentHistoryEvents.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentHistoryEvents[i], currentHistoryEvents[j]] =
            [currentHistoryEvents[j], currentHistoryEvents[i]];
    }

    currentHistoryIndex = 0;
    showHistoryEvent();
}

historyPrevEvent.addEventListener("click", () => {
    if (currentHistoryEvents.length < 2) return;

    currentHistoryIndex =
        (currentHistoryIndex - 1 + currentHistoryEvents.length)
        % currentHistoryEvents.length;

    showHistoryEvent();
});

historyNextEvent.addEventListener("click", () => {
    if (currentHistoryEvents.length < 2) return;

    currentHistoryIndex =
        (currentHistoryIndex + 1) % currentHistoryEvents.length;

    showHistoryEvent();
});




    
/* Burç kartını tıklayınca büyüt / kapat */

const horoscopeCard = document.getElementById("horoscopeCard");
const horoscopeClose = document.getElementById("horoscopeClose");

horoscopeCard.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;

    horoscopeCard.classList.add("expanded");
});

horoscopeClose.addEventListener("click", (event) => {
    event.stopPropagation();
    horoscopeCard.classList.remove("expanded");
});

    
/* =========================================
   GÜNLÜK İKİZLER BURCU YORUMU
========================================= */

const horoscopeDate = document.getElementById("horoscopeDate");
const horoscopeText = document.getElementById("horoscopeText");
const horoscopeSource = document.getElementById("horoscopeSource");

let lastHoroscopeDay = "";

function getHoroscopeDay() {
    const now = new Date();

    return [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0")
    ].join("-");
}


async function loadDailyHoroscope() {

    const today = getHoroscopeDay();

    // Aynı gün başarılı şekilde yüklenmişse tekrar çekme
    if (lastHoroscopeDay === today) return;

    horoscopeDate.textContent =
        new Date().toLocaleDateString("tr-TR", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    horoscopeText.textContent =
        "Bugünün yorumu yükleniyor...";

    try {

        const response = await fetch(
            "https://aysel-gunluk-burc.kazimkzn2.workers.dev/"
        );

        if (!response.ok) {
            throw new Error("Worker yanıtı: " + response.status);
        }

        const data = await response.json();

        if (!data.success || !data.horoscope) {
            throw new Error(data.error || "Günlük yorum bulunamadı.");
        }

        // Worker'dan gelen gerçek, Türkçeye çevrilmiş yorum
        horoscopeText.textContent = data.horoscope;

        // Yalnızca bugünün yorumunu başarılıysa kaydet
        if (data.date === today) {
            lastHoroscopeDay = today;
        }

        // Eski Sigastra bağlantısını kaldır
        horoscopeSource.href = "https://freehoroscopeapi.com/";
        horoscopeSource.textContent = "Kaynak: Free Horoscope API";

    } catch (error) {

        console.error("Burç yorumu hatası:", error);

        horoscopeText.textContent =
            "Bugünün yorumu şu anda yüklenemedi. Biraz sonra tekrar deneyebilirsin.";
    }
}


// Takvimden bağımsız olarak ilk açılışta yükle
loadDailyHoroscope();

// Site açıkken gün değişimini kontrol et
setInterval(() => {
    if (lastHoroscopeDay !== getHoroscopeDay()) {
        loadDailyHoroscope();
    }
}, 60 * 1000);

// Sekmeye geri dönünce güncel tarihi kontrol et
document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        loadDailyHoroscope();
    }
});

    
/* =========================================
   SANA Bİ ŞEY DİCEM - 35 ÖZEL NOT
========================================= */

const loveNotes = [

    // Senin ilk yazdığın 4 mesaj
    "örtmenim atan da artık ben özel öğrenci olarak hala bekliyorum gelmeyii",
    "inanır mısın şu an seni özlüyorum, bana bi öpücük göndersene",
    "napsam acaba şimdi rizeye yola çıkıp yanına mı gelsem, ya da her nerdeysen :)",
    "tak tak tak örtmenim ben geldim beni çağırmışsınız.",

    // Örtmenim muhabbetleri
    "örtmenim bugün konumuz ne, ben yine sizi düşünmekten konuyu kaçırdım",
    "örtmenim bi şey sorcam ama kızmayın, insan bi öğrencisini bu kadar özletir mi",
    "örtmenim, aklım da kalbim de sizde",
    "örtmenim bugün ders çalışmadım, çünkü bütün gün sizi düşündüm",
    "odadan herkes çıksın ben örtmenimle biraz daha konuşcam",
    "örtmenim bi kere gülün de bugünlük bütün derslerim iyi geçsin",
    "örtmenim sizin dersiniz kaçta başlıyo ben sabahın köründen beri bekliyorum",
    "hocam kalbimi evde unutmuşum galiba sizde kalmış olabilir mi",

    // Özledim ama biraz da şımarıyorum
    "şu an napıyosun bilmiyorum ama ben seni özlemekle meşgulüm haberin olsun",
    "bugün de seni düşündüm, şaşırdın mı? ben de şaşırmadım",
    "bi öpücük hakkım vardı benim onu ne zaman kullanabiliyorum acaba",
    "senin yanına ışınlanma özelliği ne zaman gelcek ya çok ihtiyacım var",
    "acaba şu an seni arayıp sadece sesini dinlesem kızar mısın",
    "ben seni bi beş dakika görsem yeter diyodum ama biliyorum yetmez",

    // Biraz komik, biraz tatlı
    "önemli bi açıklama yapcam, seni çok seviyorum. açıklama bitmiştir",
    "seni sevmeyi bırakmayı düşündüm ama yaklaşık 0.2 saniye sürdü",
    "bi şey dicem sen neden bu kadar tatlısın bunun bi açıklaması var mı",
    "sana kızgınmış gibi yapabilirim ama sarılınca bütün planım bozulur",
    "seni bi kere öpsem sonra bi kere daha öpmek istesem bu açgözlülük mü oluyo",
    "seninle konuşurken zaman çok hızlı geçiyo bi şikayet dilekçesi yazmam lazım",
    "bi gün kapını çalıp sürpriz yaparsam şaşırmış gibi davran tamam mı",
    "bence bugün bana sarılman gerekiyo, nedenini bilmiyorum ama çok mantıklı",

    // Biraz daha içten
    "keşke bazı günlerine daha önce yetişebilseydim, ama bundan sonrakilerde yanında olmak istiyorum",
    "seni tanımadan önceki yıllarını da merak ediyorum, küçükken nasıl gülerdin mesela",
    "seninle daha yaşayacağımız o kadar çok şey var ki düşününce mutlu oluyorum",
    "bazen hiç bi şey yapmadan sadece yanında oturmak istiyorum",
    "umarım bi gün bu siteye beraber bakıp ne kadar güzel günler yaşamışız deriz",
    "seni sadece mutlu olduğunda değil canın sıkkınken de yanımda istiyorum",
    "bi gün çok yorulursan gel yanıma, konuşmak zorunda da değilsin",
    "seninle sıradan bi gün geçirmek bile bana çok güzel geliyo",
    "geçmişe gidebilsem sana daha erken merhaba demek isterdim"
];

const loveNoteText = document.getElementById("loveNoteText");
const loveNoteNext = document.getElementById("loveNoteNext");

let lastLoveNoteIndex = -1;

function showRandomLoveNote() {
    let index;

    do {
        index = Math.floor(Math.random() * loveNotes.length);
    } while (
        loveNotes.length > 1 &&
        index === lastLoveNoteIndex
    );

    lastLoveNoteIndex = index;

    loveNoteText.textContent = loveNotes[index];

    loveNoteText.classList.remove("note-appear");

    void loveNoteText.offsetWidth;

    loveNoteText.classList.add("note-appear");
}

loveNoteNext.addEventListener("click", showRandomLoveNote);

// Siteye ilk girişte rastgele not göster
showRandomLoveNote();

/* =========================================
   BİZİM MÜZİK ÇALARIMIZ
========================================= */

const songs = [
    {
        title: "Apocalypse",
        artist: "Cigarettes After Sex",
        file: "music/Apocalypse - Cigarettes After Sex.mp3"
    },
    {
        title: "Baby I'm Yours",
        artist: "Arctic Monkeys",
        file: "music/Baby I'm Yours.mp3"
    },
    {
        title: "Sparks",
        artist: "Coldplay",
        file: "music/Coldplay - Sparks.mp3"
    },
    {
        title: "Heavenly",
        artist: "Cigarettes After Sex",
        file: "music/Heavenly - Cigarettes After Sex.mp3"
    },
    {
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        file: "music/I Wanna Be Yours.mp3"
    },
    {
        title: "K.",
        artist: "Cigarettes After Sex",
        file: "music/K. - Cigarettes After Sex.mp3"
    },
    {
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        file: "music/Stephen Sanchez - Until I Found You (Official Music Video).mp3"
    },
    {
        title: "Sweet",
        artist: "Cigarettes After Sex",
        file: "music/Sweet - Cigarettes After Sex.mp3"
    },
    {
        title: "About You",
        artist: "The 1975",
        file: "music/The 1975 - About You.mp3"
    }
];

const musicPlayer = document.getElementById("musicPlayer");
const musicToggle = document.getElementById("musicToggle");
const musicClose = document.getElementById("musicClose");
const musicAudio = document.getElementById("backgroundMusic");

const musicTitle = document.getElementById("musicTitle");
const musicArtist = document.getElementById("musicArtist");
const musicPlay = document.getElementById("musicPlay");
const musicPrev = document.getElementById("musicPrev");
const musicNext = document.getElementById("musicNext");
const musicProgress = document.getElementById("musicProgress");
const musicCurrentTime = document.getElementById("musicCurrentTime");
const musicDuration = document.getElementById("musicDuration");
const musicVolume = document.getElementById("musicVolume");

let currentSongIndex = Math.floor(Math.random() * songs.length);
let previousSongIndex = -1;

// Süre biçimi: 0:00
function formatMusicTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remaining = Math.floor(seconds % 60);

    return `${minutes}:${String(remaining).padStart(2, "0")}`;
}

// Şarkı yükleme
function loadSong(index) {
    currentSongIndex = index;

    const song = songs[currentSongIndex];

    musicTitle.textContent = song.title;
    musicArtist.textContent = song.artist;

    musicAudio.src = encodeURI(song.file);
    musicAudio.load();

    musicProgress.value = 0;
    musicCurrentTime.textContent = "0:00";
    musicDuration.textContent = "0:00";
    musicPlay.textContent = "▶";
}

// Şarkıyı oynat
async function playSong() {
    try {
        await musicAudio.play();
        musicPlay.textContent = "❚❚";
    } catch (error) {
        musicPlay.textContent = "▶";
        console.warn("Müzik başlatılamadı:", error);
    }
}

// Rastgele başka bir şarkı seç
function playRandomSong() {
    if (songs.length === 0) return;

    previousSongIndex = currentSongIndex;

    let nextIndex;

    do {
        nextIndex = Math.floor(Math.random() * songs.length);
    } while (
        songs.length > 1 &&
        nextIndex === currentSongIndex
    );

    loadSong(nextIndex);
    playSong();
}

// İlk açılışta rastgele şarkı yükle
musicAudio.volume = 0.5;
loadSong(currentSongIndex);

// Paneli aç / kapat
musicToggle.addEventListener("click", () => {
    musicPlayer.classList.toggle("music-closed");
});

musicClose.addEventListener("click", () => {
    musicPlayer.classList.add("music-closed");
});

// Oynat / duraklat
musicPlay.addEventListener("click", () => {
    if (musicAudio.paused) {
        playSong();
    } else {
        musicAudio.pause();
    }
});

// Sonraki şarkı
musicNext.addEventListener("click", playRandomSong);

// Önceki şarkı
musicPrev.addEventListener("click", () => {
    if (previousSongIndex === -1) {
        musicAudio.currentTime = 0;
        return;
    }

    const index = previousSongIndex;
    previousSongIndex = currentSongIndex;

    loadSong(index);
    playSong();
});

// Şarkı bitince rastgele devam et
musicAudio.addEventListener("ended", playRandomSong);

// İlerleme çubuğu
musicAudio.addEventListener("timeupdate", () => {
    if (!Number.isFinite(musicAudio.duration) || musicAudio.duration <= 0) return;

    musicProgress.value =
        (musicAudio.currentTime / musicAudio.duration) * 100;

    musicCurrentTime.textContent =
        formatMusicTime(musicAudio.currentTime);
});

// Şarkının toplam süresi
musicAudio.addEventListener("loadedmetadata", () => {
    musicDuration.textContent =
        formatMusicTime(musicAudio.duration);
});

// İlerleme çubuğundan şarkıyı sar
musicProgress.addEventListener("input", () => {
    if (!Number.isFinite(musicAudio.duration) || musicAudio.duration <= 0) return;

    musicAudio.currentTime =
        (Number(musicProgress.value) / 100) * musicAudio.duration;
});

// Ses ayarı
musicVolume.addEventListener("input", () => {
    musicAudio.volume = Number(musicVolume.value) / 100;
});

// Oynatıcı durumunu güncelle
musicAudio.addEventListener("play", () => {
    musicPlay.textContent = "❚❚";
});

musicAudio.addEventListener("pause", () => {
    musicPlay.textContent = "▶";
});

// Dosya yükleme hatası
musicAudio.addEventListener("error", () => {
    console.error("Şarkı dosyası yüklenemedi:", musicAudio.src);
    musicTitle.textContent = "Şarkı yüklenemedi";
});


    
/* SON SAHNE */

const endingScreen = document.getElementById("endingScreen");
const showEndingBtn = document.getElementById("showEndingBtn");
const restartStoryBtn = document.getElementById("restartStoryBtn");

showEndingBtn.addEventListener("click", () => {
  showScreen(endingScreen);
});

restartStoryBtn.addEventListener("click", () => {
  currentYear = 2004;
  updateCalendar(false);
  showScreen(calendar);
});

    
/* MOUSE TAKİP EDEN YILDIZLAR */

let lastStarTime = 0;

const starSymbols = ["✦", "✧", "⋆", "✶"];
const starColors = [
  "#d98ba5",
  "#f0c98a",
  "#e8a8c0",
  "#ffffff"
];

document.addEventListener("pointermove", (event) => {
  // Sadece mouse hareketinde çalışsın
  if (event.pointerType !== "mouse") return;

  // Hareket hassasiyeti için
  const now = performance.now();

  if (now - lastStarTime < 35) return;
  lastStarTime = now;

  if (window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches) return;

  const star = document.createElement("span");

  star.className = "cursor-star";

  star.textContent =
    starSymbols[Math.floor(Math.random() * starSymbols.length)];

  star.style.color =
    starColors[Math.floor(Math.random() * starColors.length)];

  star.style.fontSize =
    `${10 + Math.random() * 11}px`;

  star.style.left = `${event.clientX}px`;
  star.style.top = `${event.clientY}px`;

  star.style.setProperty(
    "--star-x",
    `${Math.random() * 60 - 30}px`
  );

  star.style.setProperty(
    "--star-y",
    `${-15 - Math.random() * 45}px`
  );

  document.body.appendChild(star);

  star.addEventListener("animationend", () => {
    star.remove();
  }, { once: true });
});

    
/* 2026 - FİNAL */

const finalGift = document.getElementById("finalGift");
const finalGiftBtn = document.getElementById("finalGiftBtn");
const finalLetter = document.getElementById("finalLetter");

const finalReveal = document.getElementById("finalReveal");

function createFinalPetals() {
  if (window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches) {
    return;
  }

  for (let i = 0; i < 28; i++) {
    const petal = document.createElement("span");

    petal.className = "final-petal";

    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.background = [
      "#eaa3ba",
      "#f4c5d2",
      "#d986a5",
      "#f7dce4"
    ][i % 4];

    petal.style.setProperty(
      "--duration",
      `${5 + Math.random() * 4}s`
    );

    petal.style.setProperty(
      "--drift",
      `${Math.random() * 180 - 90}px`
    );

    petal.style.animationDelay = `${Math.random() * 2}s`;

    document.body.appendChild(petal);

    petal.addEventListener("animationend", () => {
      petal.remove();
    }, { once: true });
  }
}


function resetFinalGift() {
  finalGift.hidden = true;
  finalLetter.hidden = true;
  finalReveal.hidden = true;

  finalGiftBtn.textContent = "Geçmişe Dönemem Ama...";

  document.querySelectorAll(".final-petal")
    .forEach(petal => petal.remove());
}


finalGiftBtn.addEventListener("click", () => {
  const isOpen = finalLetter.hidden;

  finalLetter.hidden = !isOpen;
  finalReveal.hidden = !isOpen;

  finalGiftBtn.textContent = isOpen
    ? "Mektubu Kapat"
    : "Geçmişe Dönemem Ama...";

  if (isOpen) {
    createFinalPetals();
  } else {
    document.querySelectorAll(".final-petal")
      .forEach(petal => petal.remove());
  }
});


    
/* 2022 - 18. YAŞ HEDİYESİ */

const birthdayGift = document.getElementById("birthdayGift");
const birthdayGiftBtn = document.getElementById("birthdayGiftBtn");
const birthdayGiftBtnText = document.getElementById("birthdayGiftBtnText");
const birthdayGiftLetter = document.getElementById("birthdayGiftLetter");

function resetBirthdayGift() {
  birthdayGift.hidden = true;
  birthdayGift.classList.remove("open");
  birthdayGiftLetter.hidden = true;
  birthdayGiftBtnText.textContent = "Hediyeni Aç";
  birthdayGiftBtn.setAttribute("aria-expanded", "false");
}

birthdayGiftBtn.addEventListener("click", () => {
  const isOpen = birthdayGift.classList.toggle("open");

  birthdayGiftLetter.hidden = !isOpen;
  birthdayGiftBtnText.textContent =
    isOpen ? "Hediyeyi Kapat" : "Hediyeni Aç";

  birthdayGiftBtn.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});

    
/* 2018 DİLEK SİSTEMİ */

const wishGift = document.getElementById("wishGift");
const wishSky = document.getElementById("wishSky");
const wishInput = document.getElementById("wishInput");
const wishForm = document.getElementById("wishForm");
const wishResult = document.getElementById("wishResult");
const sendWishBtn = document.getElementById("sendWishBtn");
const resetWishBtn = document.getElementById("resetWishBtn");

function resetWishGift() {
  wishGift.hidden = true;
  wishForm.hidden = false;
  wishResult.hidden = true;
  wishInput.value = "";
  wishSky.classList.remove("wish-sent");

  sendWishBtn.disabled = false;
  sendWishBtn.textContent = "Dileğimi Yıldızlara Gönder";
}

sendWishBtn.addEventListener("click", async () => {
  const wish = wishInput.value.trim();

  if (!wish) {
    wishInput.focus();
    return;
  }

  if (wish.length > 200) {
    alert("Dileğin en fazla 200 karakter olabilir.");
    return;
  }

  sendWishBtn.disabled = true;
  sendWishBtn.textContent = "Dileğin gönderiliyor...";

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/aysel_dilekler`,
      {
        method: "POST",
        headers: {
          "apikey": SUPABASE_KEY,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({
          dilek: wish
        })
      }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    // Veritabanına başarıyla kaydedildi
    wishSky.classList.add("wish-sent");
    wishForm.hidden = true;
    wishResult.hidden = false;

  } catch (error) {
    console.error("Dilek gönderme hatası:", error);

    alert(
      "Dileğin kaydedilemedi. Lütfen tekrar dene."
    );

  } finally {
    sendWishBtn.disabled = false;
    sendWishBtn.textContent = "Dileğimi Yıldızlara Gönder";
  }
});

resetWishBtn.addEventListener("click", () => {
  resetWishGift();
  wishGift.hidden = false;
});

    
    
const heartGift = document.getElementById("heartGift");
const heartGrid = document.getElementById("heartGrid");
const heartNote = document.getElementById("heartNote");
const heartProgress = document.getElementById("heartProgress");
const heartComplete = document.getElementById("heartComplete");

const heartMessages = [
  "Gülüşün hep çok güzel kalsın.",
  "Hayallerin hiç küçülmesin.",
  "Her yeni yaş sana mutluluk getirsin.",
  "Küçük sevinçlerini hiç kaybetme.",
  "Kalbin hep benimle dolsun.",
  "Dünyayı merak etmekten vazgeçme.",
  "Güzel anılarımız birlikte çoğalsın.",
  "Kendin olmaktan hiç korkma.",
  "Her doğum gününde yeni bir dileğin olsun.",
  "İyi ki doğdun, Canımın Cananı."
];

const openedHearts = new Set();

function resetHeartGift() {
  openedHearts.clear();
  heartGrid.innerHTML = "";
  heartNote.hidden = true;
  heartComplete.hidden = true;
  heartProgress.textContent = "0 / 10 kalp açıldı";

  heartMessages.forEach((message, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "heart-item";
    button.textContent = "♡";
    button.setAttribute(
      "aria-label",
      `${index + 1}. kalbi aç`
    );

    button.addEventListener("click", () => {
      openedHearts.add(index);
      button.classList.add("opened");
      button.textContent = "♥";

      heartNote.textContent = message;
      heartNote.hidden = false;

      heartProgress.textContent =
        `${openedHearts.size} / 10 kalp açıldı`;

      if (openedHearts.size === 10) {
        heartComplete.hidden = false;
      }
    });

    heartGrid.appendChild(button);
  });
}

    
const specialGift = document.getElementById("specialGift");
const openFlowerBtn = document.getElementById("openFlowerBtn");
const flower = document.querySelector(".flower");
const flowerMessage = document.getElementById("flowerMessage");

/* 2004 - ÇİÇEK AÇMA SİSTEMİ */

openFlowerBtn.addEventListener("click", () => {
  flower.classList.toggle("open");

  const isOpen = flower.classList.contains("open");

  flowerMessage.hidden = !isOpen;

  openFlowerBtn.textContent = isOpen
    ? "Çiçeği Kapat"
    : "Çiçeğini Aç";
});


    
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseLetter = document.getElementById("surpriseLetter");
const letterTitle = document.getElementById("letterTitle");
const letterMessage = document.getElementById("letterMessage");

const surpriseNotes = [
  "O gün yanında olabilseydim, dünyaya gelişini kutlamak için sana küçücük bir çiçek bırakmak isterdim.",
  "Bir yaşındaki Aysel'e kocaman bir oyuncak ayı hediye etmek....",
  "İki yaşındaki gülüşünü görebilmek için bütün fotoğraf albümlerini karıştırırdım.",
  "Üç yaşındaki sana rengârenk balonlar getirirdim.",
  "Dört yaşındaki Aysel'e masallarla dolu bir kitap hediye ederdim.",
  "Beşinci yaş gününde seninle birlikte kocaman bir pasta kesmek isterdim.",
  "Altı yaşındaki sana en sevdiğin oyuncağı alabilmeyi isterdim.",
  "Yedi yaşındaki Aysel'e bir kutu dolusu renkli kalem getirirdim.",
  "Sekiz yaşındaki sana yıldızlarla dolu bir geceyi anlatırdım.",
  "Dokuzuncu yaş gününde senin için güzel bir dilek tutardım.",
  "On yaşındaki Aysel'e küçük bir hatıra kutusu hazırlardım.",
  "On bir yaşındaki sana ileride açman için bir mektup bırakırdım.",
  "On iki yaşındaki hayallerini dinlemek isterdim.",
  "On üç yaşındaki sana her şeyin zamanla güzelleşebileceğini söylerdim.",
  "On dört yaşındaki Aysel'e en sevdiği çiçeklerden bir buket verirdim.",
  "On beş yaşındaki sana unutamayacağın küçük bir sürpriz hazırlardım.",
  "On altı yaşındaki Aysel'e uzaktan da olsa iyi ki doğdun demek isterdim.",
  "On yedi yaşındaki sana hayallerinden vazgeçmemeni söylerdim.",
  "On sekizinci yaş gününde sana yeni başlangıçların için bir mektup yazardım.",
  "On dokuz yaşındaki Aysel'e gelecekteki güzel günlerden söz ederdim.",
  "Yirmi yaşındaki sana geçmişin bütün güzel anılarını saklayacağın bir kutu verirdim.",
  "Yirmi bir yaşındaki Aysel'e yakın gelecekte yaşayacağımız anılardan bahsederdim.",
  "Bugün geçmişteki bütün doğum günlerini tek tek kutlamak istiyorum. İyi ki doğdun Güzelim."
];



surpriseBtn.addEventListener("click", () => {
  const age = currentYear - startYear;

  // Mektubun içeriğini güncelle
  letterTitle.textContent = `${currentYear} yılından sana`;
  letterMessage.textContent = surpriseNotes[age];

  // Zarfı aç veya kapat
  surpriseLetter.hidden = !surpriseLetter.hidden;

  const isOpen = !surpriseLetter.hidden;

  surpriseBtn.querySelector("small").textContent =
    isOpen ? "Kapatmak için dokun" : "Açmak için dokun";

  // 2004 yılına özel çiçek
  specialGift.hidden = !(currentYear === 2004 && isOpen);


  // Yıllara özel sürprizleri göster veya gizle
  specialGift.hidden = !(currentYear === 2004 && isOpen);
  heartGift.hidden = !(currentYear === 2014 && isOpen);
  wishGift.hidden = !(currentYear === 2018 && isOpen);
  birthdayGift.hidden = !(currentYear === 2022 && isOpen);
  finalGift.hidden = !(currentYear === 2026 && isOpen);

  if (isOpen && currentYear === 2014) {
    resetHeartGift();
  }

  if (isOpen && currentYear === 2018) {
    resetWishGift();
    wishGift.hidden = false;
  }

  if (isOpen && currentYear === 2022) {
    resetBirthdayGift();
    birthdayGift.hidden = false;
  }

  if (isOpen && currentYear === 2026) {
    resetFinalGift();
    finalGift.hidden = false;
  }
});





  const welcome = document.getElementById("welcome");
  const calendar = document.getElementById("calendar");

  const startBtn = document.getElementById("startBtn");
  const backBtn = document.getElementById("backBtn");

  const prevBtn = document.getElementById("prevYear");
  const nextBtn = document.getElementById("nextYear");

  const paper = document.getElementById("calendarPaper");

  const yearText = document.getElementById("calendarYear");
  const weekdayText = document.getElementById("calendarWeekday");
  const ageText = document.getElementById("calendarAge");
  const messageText = document.getElementById("calendarMessage");
  const storyTitle = document.getElementById("calendarStoryTitle");
const storyBox = document.getElementById("calendarStory");
  const counterText = document.getElementById("calendarCounter");

  const startYear = 2004;
  const endYear = 2026;

  let currentYear = startYear;

  const weekdays = [
    "PAZAR",
    "PAZARTESİ",
    "SALI",
    "ÇARŞAMBA",
    "PERŞEMBE",
    "CUMA",
    "CUMARTESİ"
  ];

  // Her yaş için geçici mesajlar
  // Daha sonra bunları özel sürprizlerle değiştireceğiz.

 
const stories = [
  {
    title: "Bir hikâyenin ilk cümlesi",
    message: "28 Mayıs 2004... O gün dünya senin için ilk kez dönmeye başladı. Ben henüz seni tanımıyordum ama bir gün hayatımın en güzel tesadüfü olacaktın."
  },
  {
    title: "İlk doğum günün",
    message: "Bugün ilk mumunu üflediğin gün. Belki hiçbir şeyin farkında değildin ama seni seven herkes için kocaman bir mutluluktun. Keşke o küçücük ellerini tutabilseydim."
  },
  {
    title: "Küçücük bir dünya",
    message: "İki yaşındaydın. Dünyan oyuncaklardan, küçük adımlardan ve kocaman gülümsemelerden ibaretti. Keşke o gülüşlerinden birini görebilseydim."
  },
  {
    title: "Üç küçük mum",
    message: "Bugün pastanda üç mum vardı. Kim bilir neye sevinmiş, neye kahkahalar atmıştın. O günlerden bir fotoğrafın olsaydı, saatlerce bakabilirdim."
  },
  {
    title: "Minik bir mucize",
    message: "Dört yaşına girdin. Hayatın en masum, en renkli zamanlarından birindeydin. Keşke o gün sana kocaman bir hediye paketi verebilseydim."
  },
  {
    title: "Beş yaşındaki Aysel",
    message: "Bugün beş yaşındaydın. Belki pastanın üzerindeki mumları sayıyor, hediyelerini açmak için sabırsızlanıyordun. Keşke o heyecanına ortak olabilseydim."
  },
  {
    title: "Küçük hayaller",
    message: "Altı yaşına girdin. Hayallerinin ne olduğunu bilmiyorum ama eminim gözlerinde keşfedilmeyi bekleyen kocaman bir dünya vardı."
  },
  {
    title: "Yedi yaşındaki gülüşün",
    message: "Bir 28 Mayıs daha... Yedi yaşına girdin. O gün nasıl bir çocuk olduğunu, en çok neye güldüğünü bilmek isterdim. Küçük Aysel'i tanımak ne güzel olurdu."
  },
  {
    title: "Sekiz mum, binlerce hayal",
    message: "Sekiz yaşındaydın. Belki en sevdiğin oyuncak değişmişti, belki yeni hayaller kuruyordun. Keşke o gün sana ne dilediğini sorabilseydim."
  },
  {
    title: "Dokuzuncu baharın",
    message: "Bugün dokuz yaşına girdin. Bir gün yollarımızın kesişeceğini bilmeden büyüyordun. Ben de henüz hayatımda ne kadar güzel bir yerin olacağını bilmiyordum."
  },
  {
    title: "İlk on yılın",
    message: "Tam on yaşındaydın. Kocaman bir on yıl geride kalmıştı. Keşke o gün karşına çıkıp sana ne kadar özel olduğunu söyleyebilseydim."
  },
  {
    title: "Yeni bir sayfa",
    message: "On bir yaşına girdin. Çocukluğunun anıları birikiyor, sen her geçen gün biraz daha büyüyordun. Ben o anıları dinleyebileceğim günü henüz bilmiyordum."
  },
  {
    title: "On iki yaşındaki sen",
    message: "Bir başka doğum günü, bir başka 28 Mayıs... O gün neler yaptığını bilmiyorum. Ama keşke sen anlatırken dinleyebileceğim bütün o anıların içinde biraz olsun yerim olsaydı."
  },
  {
    title: "Büyümek denen yolculuk",
    message: "On üç yaşına girdin. Artık çocuklukla gençlik arasında yeni bir yolculuktaydın. O zamanki hayallerini, korkularını ve mutluluklarını tanımayı isterdim."
  },
  {
    title: "Henüz tanışmamışken",
    message: "On dört yaşındaydın. Belki bir günün çok güzel, bir günün biraz zor geçiyordu. Keşke zor günlerinde yanında olabilseydim, güzel günlerinde seninle gülebilseydim."
  },
  {
    title: "Bir dilek daha",
    message: "Bugün on beşinci yaş günündü. Pastanın başında ne dilediğini bilmiyorum. Ama umarım o gün kalbinden geçen güzel şeylerin birçoğu gerçekleşmiştir."
  },
  {
    title: "Uzaklardan bir doğum günü",
    message: "On altı yaşına girdin. Dünya için de alışılmadık bir yıldı. O doğum gününün nasıl geçtiğini bilmiyorum. Keşke sana uzaktan da olsa güzel bir sürpriz hazırlayabilseydim."
  },
  {
    title: "On yedi yaşındaki Aysel",
    message: "Bir yaş daha büyüdün. Hayatın sana neler öğrettiğini bilmiyorum ama bugün tanıdığım insanın içinde o günkü Aysel'den de bir parça olduğunu biliyorum."
  },
  {
    title: "Yeni bir başlangıç",
    message: "On sekiz yaşına girdin. Hayatında yepyeni bir dönem başlıyordu. Keşke o gün sana kocaman bir çiçek buketiyle gelip bütün güzel başlangıçlarını kutlayabilseydim."
  },
  {
    title: "Biraz daha yaklaşırken",
    message: "On dokuz yaşındaydın. Benim henüz bilmediğim nice hikâyen vardı. Bir gün oturup bütün bu yılları senden dinlemek, kaçırdığım anları sesinden öğrenmek isterim."
  },
  {
    title: "Yirmi yıllık bir hikâye",
    message: "Tam yirmi yaşına girdin. Yirmi yıl boyunca güldün, ağladın, öğrendin ve büyüdün. Keşke o gün seni tanıyor olsaydım da bu güzel yolculuğun yeni yaşını seninle kutlasaydım."
  },
  {
    title: "Keşke daha önce",
    message: "Yirmi bir yaşına girdin. Geçmişini değiştiremem, kaçırdığım doğum günlerine gerçekten dönemem. Ama şimdi bütün o günlere seninle birlikte küçük birer hatıra bırakmak istiyorum."
  },
  {
    title: "İyi ki doğdun, Aysel",
    message: "Yirmi iki yıl... Yirmi üç tane 28 Mayıs. Hepsinde yanında değildim. Ama bugün geçmişteki bütün o günlere dönüp sana tek bir şey söylemek istiyorum: İyi ki doğdun, iyi ki bu dünyaya geldin ve iyi ki seni tanıdım."
  }
];


 
function showScreen(screen) {
  welcome.classList.remove("active");
  calendar.classList.remove("active");
  endingScreen.classList.remove("active");

  welcome.hidden = true;
  calendar.hidden = true;
  endingScreen.hidden = true;

  screen.hidden = false;
  screen.classList.add("active");

  window.scrollTo(0, 0);
}


  function updateCalendar(animate = true) {

    const age = currentYear - startYear;
    surpriseLetter.hidden = true;
specialGift.hidden = true;

flower.classList.remove("open");
flowerMessage.hidden = true;

openFlowerBtn.textContent = "Çiçeğini Aç";

surpriseBtn.querySelector("small").textContent = "Açmak için dokun";
resetHeartGift();
heartGift.hidden = true;

resetWishGift();
resetBirthdayGift();
resetFinalGift();
    // Yerel saat diliminden bağımsız tarih hesaplama
    const date = new Date(
      Date.UTC(currentYear, 4, 28)
    );

    const weekday = weekdays[date.getUTCDay()];

    yearText.textContent = currentYear;
    weekdayText.textContent = weekday;

    ageText.textContent =
      age === 0
        ? "Dünyaya geldiğin gün"
        : `${age}. yaş günün`;

    storyTitle.textContent = stories[age].title;
messageText.textContent = stories[age].message;

storyBox.classList.remove("story-change");
void storyBox.offsetWidth;
storyBox.classList.add("story-change");

    counterText.textContent =
      `${age + 1} / ${endYear - startYear + 1}`;

    prevBtn.disabled = currentYear === startYear;
    nextBtn.disabled = currentYear === endYear;

 
if (animate) {
  paper.classList.remove("page-turn");

  // Animasyonu yeniden başlat
  void paper.offsetWidth;

  paper.classList.add("page-turn");
}

// Hikâyeyi ilk açılışta ve her yıl değişiminde güncelle
updateHistoryCard(currentYear);

  }

  startBtn.addEventListener("click", () => {
    currentYear = startYear;
    updateCalendar(false);
    showScreen(calendar);
  });

  backBtn.addEventListener("click", () => {
    showScreen(welcome);
  });

  prevBtn.addEventListener("click", () => {
    if (currentYear > startYear) {
      currentYear--;
      updateCalendar();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentYear < endYear) {
      currentYear++;
      updateCalendar();
    }
  });

  updateCalendar(false);

});


/* =========================================
   SEKME DEĞİŞTİRİNCE BAŞLIK DEĞİŞSİN
========================================= */

const originalTitle = document.title;

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = "Nereye gittin? Beni yalnız bırakma... ♡";
    } else {
        document.title = originalTitle;
    }
});


/* =========================================
   AYSEL - GECE MODU VE SAATLİ MESAJLAR
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const messageBox = document.getElementById("timeMessage");
    const messageTitle = document.getElementById("timeMessageTitle");
    const messageText = document.getElementById("timeMessageText");
    const messageClose = document.getElementById("timeMessageClose");

    const timeMessages = {
        morning: [
            "Günaydın güzelim. Umarım bugün yüzünü güldürecek bir sürü şey olur.",
            "Yeni bir gün başladı örtmenim. Ben yine seni düşünerek başladım.",
            "Günaydın Aysel. Bugün de iyi ki varsın demek istedim."
        ],

        afternoon: [
            "Günün nasıl geçiyor balım? Umarım kendine biraz vakit ayırıyorsundur.",
            "Örtmenim, günün ortasında küçük bir yoklama alıyorum. Gülümsedin mi?",
            "Bugün de aklıma geldin. Gerçi sen ne zaman çıkıyorsun ki?"
        ],

        evening: [
            "Akşam olmuş güzelim. Umarım bugün seni fazla yormamıştır.",
            "Bir gün daha bitiyor. Keşke şu an yanında olsam.",
            "Günün nasıl geçti bilmiyorum ama umarım sonu güzel olur."
        ],

        night: [
            "Gece oldu balım. Ekranın ışığını biraz kıstım, gözlerin yorulmasın.",
            "Herkes uykuya hazırlanırken ben sana küçük bir iyi geceler bırakıyorum.",
            "Gece sessizleşti örtmenim. Keşke şimdi yanında olup sana sarılabilsem.",
            "Saat geç oldu güzelim. Kendine dikkat et, uykunu ihmal etme."
        ],

        lateNight: [
            "Hâlâ burada mısın balım? Uykun geldiyse biraz dinlen.",
            "Gecenin bu saatinde bile sana söyleyecek bir şeyim var: İyi ki varsın.",
            "Örtmenim, gece mesaisi mi yapıyoruz? Kendini çok yorma olur mu?"
        ]
    };

    let hideMessageTimer = null;
    let lastPeriod = null;
    let lastMessageIndex = {};

    function getTimePeriod(hour) {
        if (hour >= 7 && hour < 12) return "morning";
        if (hour >= 12 && hour < 18) return "afternoon";
        if (hour >= 18 && hour < 22) return "evening";
        if (hour >= 22 || hour < 1) return "night";
        return "lateNight";
    }

    function pickMessage(period) {
        const messages = timeMessages[period];
        let index;

        do {
            index = Math.floor(Math.random() * messages.length);
        } while (
            messages.length > 1 &&
            index === lastMessageIndex[period]
        );

        lastMessageIndex[period] = index;
        return messages[index];
    }

    function showTimeMessage(period) {
        const titles = {
            morning: "Günaydın Aysel ♡",
            afternoon: "Küçük Bir Hatırlatma ♡",
            evening: "İyi Akşamlar Güzelim ♡",
            night: "Geceye Küçük Bir Not ♡",
            lateNight: "Uyumadın mı Örtmenim? ♡"
        };

        messageTitle.textContent = titles[period];
        messageText.textContent = pickMessage(period);

        messageBox.classList.add("show");

        clearTimeout(hideMessageTimer);

        hideMessageTimer = setTimeout(() => {
            messageBox.classList.remove("show");
        }, 7500);
    }

    function updateTimeTheme() {
        const now = new Date();
        const hour = now.getHours();

        // 22.00 - 06.59 arası gece modu
        const isNight = hour >= 22 || hour < 7;

        document.body.classList.toggle("night-mode", isNight);

        const period = getTimePeriod(hour);

        // İlk girişte ve saat dilimi değiştiğinde mesaj
        if (period !== lastPeriod) {
            lastPeriod = period;
            showTimeMessage(period);
        }
    }

    messageClose.addEventListener("click", () => {
        messageBox.classList.remove("show");
        clearTimeout(hideMessageTimer);
    });

    // Site açıldığında çalıştır
    updateTimeTheme();

    // Site açıkken her dakika kontrol et
    setInterval(updateTimeTheme, 60 * 1000);

    // Sekmeye geri dönüldüğünde tekrar kontrol et
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
            updateTimeTheme();
        }
    });

});



/* GECE YILDIZLARINI OLUŞTUR */

document.addEventListener("DOMContentLoaded", () => {
    const nightStars = document.getElementById("nightStars");

    if (!nightStars) return;

    const starCount = 45;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("span");

        star.className = "night-star";

        star.style.setProperty("--star-x", `${Math.random() * 100}%`);
        star.style.setProperty("--star-y", `${Math.random() * 100}%`);
        star.style.setProperty("--star-size", `${1 + Math.random() * 2}px`);
        star.style.setProperty("--star-duration", `${3 + Math.random() * 5}s`);
        star.style.setProperty("--star-delay", `${Math.random() * -8}s`);

        nightStars.appendChild(star);
    }
});

/* AYSEL - ANONİM ZİYARET KAYDI */

document.addEventListener("DOMContentLoaded", async () => {
    const SUPABASE_URL = "https://sgwapelypjffoszajpta.supabase.co";
    const SUPABASE_KEY = "sb_publishable_o4wGW-o6U3NwOZP0QCMNuA_xRoWviMd";

    try {
        let visitorId = localStorage.getItem("aysel_visitor_id");

        if (!visitorId) {
            visitorId = crypto.randomUUID();
            localStorage.setItem("aysel_visitor_id", visitorId);
        }

        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/site_visits`,
            {
                method: "POST",
                headers: {
                    "apikey": SUPABASE_KEY,
                    "Content-Type": "application/json",
                    "Prefer": "return=minimal"
                },
                body: JSON.stringify({
                    visitor_id: visitorId
                })
            }
        );

        if (!response.ok) {
            console.error("Ziyaret kaydı başarısız:", response.status);
        }
    } catch (error) {
        console.error("Ziyaret kaydı hatası:", error);
    }
});
