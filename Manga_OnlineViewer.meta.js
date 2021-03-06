// ==UserScript==
// @name Manga OnlineViewer
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: Batoto, ComiCastle, ReadComicsOnline, Dynasty-Scans, EatManga, Easy Going Scans, FoOlSlide, KissManga, MangaDoom, MangaFox, MangaGo, MangaHere, MangaInn, MangaLyght, MangaPark, MangaReader,MangaPanda, MangaStream, MangaTown, NineManga, ReadManga Today, SenManga(Raw), TenManga, TheSpectrum, MangaDeep, Funmanga, UnionMangas, MangaHost, Hoc Vien Truyen Tranh, JaiminisBox, MangaDex, HatigarmScans, MangaRock
// @version 13.56.0
// @license MIT
// @date 2018-09-22
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @connect *
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.5/sweetalert2.all.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.0/color-scheme.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/ramda/0.24.1/ramda.min.js
// @include /https?:\/\/(www.)?bato.to\/chapter.*/
// @include /https?:\/\/(www.)?comicastle.org\/comic\/.+\/[0-9]+.*/
// @include /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/[0-9]*/
// @include /https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/
// @include /https?:\/\/(www.)?eatmanga.me\/Manga-Scan\/.+\/.+\//
// @include /https?:\/\/read.egscans.com\/.+/
// @include /^(?!.*jaiminisbox).*\/read\/.+/
// @include /https?:\/\/(www.)?kissmanga.com\/Manga\/.+\/.+?id=[0-9]+/
// @include /https?:\/\/(www.)?mngdoom.com\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?(mangafox.la|fanfox.net)\/manga\/.+\/.+\//
// @include /https?:\/\/(www.)?mangago.me\/read-manga\/.+\/.+/
// @include /https?:\/\/(www.)?mangahere.cc\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?mangainn.net\/.+\/[0-9]+(\/[0-9]*)?/
// @include /https?:\/\/manga.lyght.net\/series\/.+\.html/
// @include /https?:\/\/(www.)?mangapark.me\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?(mangareader|mangapanda)(.net|.com)\/.+\/.+/
// @include /https?:\/\/(www.)?(mangastream|readms)(.net|.com)\/r.*\/.+/
// @include /https?:\/\/(www.)?mangatown.com\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/
// @include /https?:\/\/(www.)?readmng.com\/.+\/[0-9.]+(\/[0-9]*)?/
// @include /https?:\/\/raw.senmanga.com\/.+\/.+\/?/
// @include /https?:\/\/(www.)?tenmanga.com\/chapter\/.+/
// @include /https?:\/\/view.thespectrum.net\/.+/
// @include /https?:\/\/(www.)?(mangadeep).com\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?funmanga.com\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?unionmangas.net\/leitor\/.+\/.+/
// @include /https?:\/\/(www.)?mangahost.net\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?hocvientruyentranh.com\/chapter\/.+\/.+/
// @include /https?:\/\/(www.)?jaiminisbox.com\/reader\/read\/.+/
// @include /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/
// @include /https?:\/\/(www.)?hatigarmscans.net\/manga\/.+\/.+(\/[0-9]*)?/
// @include /https?:\/\/(www.)?mangarock.com\/manga\/.+\/chapter\/.+/
// @exclude /https?:\/\/(www.)?tsumino.com\/.+/
// @exclude /https?:\/\/(www.)?pururin.us\/.+/
// @exclude /https?:\/\/hentai.cafe\/.+/
// ==/UserScript==