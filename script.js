var pinyin1 = document.getElementById("pinyin1");
var pinyin2 = document.getElementById("pinyin2");
var pinyin3 = document.getElementById("pinyin3");
var pinyin4 = document.getElementById("pinyin4");

var phraseChinese1 = document.getElementById("phraseChinese1");
var phraseChinese2 = document.getElementById("phraseChinese2");
var phraseChinese3 = document.getElementById("phraseChinese3");
var phraseChinese4 = document.getElementById("phraseChinese4");

var phraseEnglish = document.getElementById("phraseEnglish");

var button = document.getElementById("button");
var random = Math.random();

// Arrays for pinyin and Chinese characters
var p1 = [
	"xīn",
	"gōng",
	"gōng",
	"wàn",
	"nián",
	"shēn",
	"xīn",
	"gōng"
];

var p2 = [
	"nián",
	"xǐ",
	"bù",
	"shì",
	"nián",
	"tǐ",
	"xiǎng",
	"hè"
];

var p3 = [
	"kuài",
	"fā",
	"táng",
	"rú",
	"yǒu",
	"jiàn",
	"shì",
	"xīn"
];

var p4 = [
	"lè",
	"cái",
	"juān",
	"yì",
	"yú",
	"kāng",
	"chéng",
	"xǐ"
];

var phrasesC1 = [
	"新",
	"恭",
	"功",
	"萬",
	"年",
	"身",
	"心",
	"恭"
];

var phrasesC2 = [
	"年",
	"喜",
	"不",
	"事",
	"年",
	"體",
	"想",
	"賀"
];

var phrasesC3 = [
	"快",
	"發",
	"唐",
	"如",
	"有",
	"健",
	"事",
	"新"
];

var phrasesC4 = [
	"樂",
	"財",
	"捐",
	"意",
	"餘",
	"康",
	"成",
	"禧"
];

// English phrases
// Translations taken from here: http://www.travelsintranslation.com/2014/01/cantonese-chinese-new-year-phrases/
var phrasesE = [
	"我们并非在年复一年地变老，而是日复一日地焕然一新。",
	"昨日虚浮终有别，明朝新益智财升。",
	"日拱一卒无有尽，功不唐捐终入海",
	"四季冗长，万事顺意。",
	"年年尽有余，岁岁皆无疾。",
	"万物更新，旧疾当愈，长安常安。",
	"愿新春以后，吉吉利利，百事都如意。",
	"历添新岁月，春满旧山河。"
];

// Sets text content as random phrase from arrays
pinyin1.textContent = p1[Math.floor(random * p1.length)];
pinyin2.textContent = p2[Math.floor(random * p2.length)];
pinyin3.textContent = p3[Math.floor(random * p3.length)];
pinyin4.textContent = p4[Math.floor(random * p4.length)];
phraseChinese1.textContent = phrasesC1[Math.floor(random * phrasesC1.length)];
phraseChinese2.textContent = phrasesC2[Math.floor(random * phrasesC2.length)];
phraseChinese3.textContent = phrasesC3[Math.floor(random * phrasesC3.length)];
phraseChinese4.textContent = phrasesC4[Math.floor(random * phrasesC4.length)];
phraseEnglish.textContent = phrasesE[Math.floor(random * phrasesE.length)];

var onClick = function() {
	var random = Math.random();

	pinyin1.textContent = p1[Math.floor(random * p1.length)];
	pinyin2.textContent = p2[Math.floor(random * p2.length)];
	pinyin3.textContent = p3[Math.floor(random * p3.length)];
	pinyin4.textContent = p4[Math.floor(random * p4.length)];
	phraseChinese1.textContent = phrasesC1[Math.floor(random * phrasesC1.length)];
	phraseChinese2.textContent = phrasesC2[Math.floor(random * phrasesC2.length)];
	phraseChinese3.textContent = phrasesC3[Math.floor(random * phrasesC3.length)];
	phraseChinese4.textContent = phrasesC4[Math.floor(random * phrasesC4.length)];
	phraseEnglish.textContent = phrasesE[Math.floor(random * phrasesE.length)];
}

// Sets text content as random phrase when button is clicked
button.addEventListener("click", onClick);