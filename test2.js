console.log("test2.js");

var mapOptions = {
  zoom: 15, // 拡大倍率
  center: { lat: 35.45216977054224, lng: 138.7300826551757 }, // 緯度・経度
};
// マップオブジェクト作成
var map = new google.maps.Map(
  document.getElementById("map"), // マップを表示する要素
  mapOptions // マップオプション
);
//　マップにマーカーを表示する
var marker = new google.maps.Marker({
  map: map, // 対象の地図オブジェクト
  position: { lat: 35.45216977054224, lng: 138.7300826551757 }, // 緯度・経度
});
