ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.998754, -8.233803, 110.875818, -7.535534]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LuasAreaPadiSawah_1 = new ol.format.GeoJSON();
var features_LuasAreaPadiSawah_1 = format_LuasAreaPadiSawah_1.readFeatures(json_LuasAreaPadiSawah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LuasAreaPadiSawah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuasAreaPadiSawah_1.addFeatures(features_LuasAreaPadiSawah_1);
var lyr_LuasAreaPadiSawah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LuasAreaPadiSawah_1, 
                style: style_LuasAreaPadiSawah_1,
                popuplayertitle: 'Luas Area Padi Sawah',
                interactive: true,
    title: 'Luas Area Padi Sawah<br />\
    <img src="styles/legend/LuasAreaPadiSawah_1_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/LuasAreaPadiSawah_1_1.png" /> Rendah<br />\
    <img src="styles/legend/LuasAreaPadiSawah_1_2.png" /> Sedang<br />\
    <img src="styles/legend/LuasAreaPadiSawah_1_3.png" /> Tinggi<br />\
    <img src="styles/legend/LuasAreaPadiSawah_1_4.png" /> Sangat Tinggi<br />' });
var format_IndeksPotensiDigitalisasiYogyakarta_2 = new ol.format.GeoJSON();
var features_IndeksPotensiDigitalisasiYogyakarta_2 = format_IndeksPotensiDigitalisasiYogyakarta_2.readFeatures(json_IndeksPotensiDigitalisasiYogyakarta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndeksPotensiDigitalisasiYogyakarta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndeksPotensiDigitalisasiYogyakarta_2.addFeatures(features_IndeksPotensiDigitalisasiYogyakarta_2);
var lyr_IndeksPotensiDigitalisasiYogyakarta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndeksPotensiDigitalisasiYogyakarta_2, 
                style: style_IndeksPotensiDigitalisasiYogyakarta_2,
                popuplayertitle: 'Indeks Potensi Digitalisasi Yogyakarta',
                interactive: true,
    title: 'Indeks Potensi Digitalisasi Yogyakarta<br />\
    <img src="styles/legend/IndeksPotensiDigitalisasiYogyakarta_2_0.png" /> 0.17 - 0.36<br />\
    <img src="styles/legend/IndeksPotensiDigitalisasiYogyakarta_2_1.png" /> 0.36 - 0.49<br />\
    <img src="styles/legend/IndeksPotensiDigitalisasiYogyakarta_2_2.png" /> 0.49 - 0.66<br />\
    <img src="styles/legend/IndeksPotensiDigitalisasiYogyakarta_2_3.png" /> 0.66 - 0.85<br />\
    <img src="styles/legend/IndeksPotensiDigitalisasiYogyakarta_2_4.png" /> 0.85 - 1<br />' });
var format_IndeksPotensiTanamanPanganYogyakarta_3 = new ol.format.GeoJSON();
var features_IndeksPotensiTanamanPanganYogyakarta_3 = format_IndeksPotensiTanamanPanganYogyakarta_3.readFeatures(json_IndeksPotensiTanamanPanganYogyakarta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndeksPotensiTanamanPanganYogyakarta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndeksPotensiTanamanPanganYogyakarta_3.addFeatures(features_IndeksPotensiTanamanPanganYogyakarta_3);
var lyr_IndeksPotensiTanamanPanganYogyakarta_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndeksPotensiTanamanPanganYogyakarta_3, 
                style: style_IndeksPotensiTanamanPanganYogyakarta_3,
                popuplayertitle: 'Indeks Potensi Tanaman Pangan Yogyakarta',
                interactive: true,
    title: 'Indeks Potensi Tanaman Pangan Yogyakarta<br />\
    <img src="styles/legend/IndeksPotensiTanamanPanganYogyakarta_3_0.png" /> 0.004 - 0.119<br />\
    <img src="styles/legend/IndeksPotensiTanamanPanganYogyakarta_3_1.png" /> 0.119 - 0.312<br />\
    <img src="styles/legend/IndeksPotensiTanamanPanganYogyakarta_3_2.png" /> 0.312 - 0.409<br />\
    <img src="styles/legend/IndeksPotensiTanamanPanganYogyakarta_3_3.png" /> 0.409 - 0.514<br />\
    <img src="styles/legend/IndeksPotensiTanamanPanganYogyakarta_3_4.png" /> 0.514 - 0.629<br />' });
var format_IndeksPotensiEkonomiYogyakarta_4 = new ol.format.GeoJSON();
var features_IndeksPotensiEkonomiYogyakarta_4 = format_IndeksPotensiEkonomiYogyakarta_4.readFeatures(json_IndeksPotensiEkonomiYogyakarta_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndeksPotensiEkonomiYogyakarta_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndeksPotensiEkonomiYogyakarta_4.addFeatures(features_IndeksPotensiEkonomiYogyakarta_4);
var lyr_IndeksPotensiEkonomiYogyakarta_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndeksPotensiEkonomiYogyakarta_4, 
                style: style_IndeksPotensiEkonomiYogyakarta_4,
                popuplayertitle: 'Indeks Potensi Ekonomi Yogyakarta',
                interactive: true,
    title: 'Indeks Potensi Ekonomi Yogyakarta<br />\
    <img src="styles/legend/IndeksPotensiEkonomiYogyakarta_4_0.png" /> 0.015 - 0.112<br />\
    <img src="styles/legend/IndeksPotensiEkonomiYogyakarta_4_1.png" /> 0.112 - 0.234<br />\
    <img src="styles/legend/IndeksPotensiEkonomiYogyakarta_4_2.png" /> 0.234 - 0.344<br />\
    <img src="styles/legend/IndeksPotensiEkonomiYogyakarta_4_3.png" /> 0.344 - 0.564<br />\
    <img src="styles/legend/IndeksPotensiEkonomiYogyakarta_4_4.png" /> 0.564 - 1<br />' });
var format_KlasterPotensiYogyakarta_5 = new ol.format.GeoJSON();
var features_KlasterPotensiYogyakarta_5 = format_KlasterPotensiYogyakarta_5.readFeatures(json_KlasterPotensiYogyakarta_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KlasterPotensiYogyakarta_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlasterPotensiYogyakarta_5.addFeatures(features_KlasterPotensiYogyakarta_5);
var lyr_KlasterPotensiYogyakarta_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlasterPotensiYogyakarta_5, 
                style: style_KlasterPotensiYogyakarta_5,
                popuplayertitle: 'Klaster Potensi Yogyakarta',
                interactive: true,
    title: 'Klaster Potensi Yogyakarta<br />\
    <img src="styles/legend/KlasterPotensiYogyakarta_5_0.png" /> Potensi Tanaman Pangan Tinggi, Ekonomi Sangat Tinggi, Digitalisasi Tinggi<br />\
    <img src="styles/legend/KlasterPotensiYogyakarta_5_1.png" /> Potensi Tanaman Pangan Sangat Tinggi, Ekonomi Sangat Rendah, Digitalisasi Sangat Rendah<br />\
    <img src="styles/legend/KlasterPotensiYogyakarta_5_2.png" /> Potensi Tanaman Pangan Sangat Rendah, Ekonomi Tinggi, Digitalisasi Sangat Tinggi<br />\
    <img src="styles/legend/KlasterPotensiYogyakarta_5_3.png" /> Potensi Tanaman Pangan Rendah, Ekonomi Rendah, Digitalisasi Rendah<br />' });
var format_BatasKabupatenKota_6 = new ol.format.GeoJSON();
var features_BatasKabupatenKota_6 = format_BatasKabupatenKota_6.readFeatures(json_BatasKabupatenKota_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasKabupatenKota_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupatenKota_6.addFeatures(features_BatasKabupatenKota_6);
var lyr_BatasKabupatenKota_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupatenKota_6, 
                style: style_BatasKabupatenKota_6,
                popuplayertitle: 'Batas Kabupaten/Kota',
                interactive: false,
                title: '<img src="styles/legend/BatasKabupatenKota_6.png" /> Batas Kabupaten/Kota'
            });

lyr_OSMStandard_0.setVisible(true);lyr_LuasAreaPadiSawah_1.setVisible(false);lyr_IndeksPotensiDigitalisasiYogyakarta_2.setVisible(false);lyr_IndeksPotensiTanamanPanganYogyakarta_3.setVisible(false);lyr_IndeksPotensiEkonomiYogyakarta_4.setVisible(false);lyr_KlasterPotensiYogyakarta_5.setVisible(true);lyr_BatasKabupatenKota_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LuasAreaPadiSawah_1,lyr_IndeksPotensiDigitalisasiYogyakarta_2,lyr_IndeksPotensiTanamanPanganYogyakarta_3,lyr_IndeksPotensiEkonomiYogyakarta_4,lyr_KlasterPotensiYogyakarta_5,lyr_BatasKabupatenKota_6];
lyr_LuasAreaPadiSawah_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'Kabupaten': 'Kabupaten/Kota', 'Provinsi': 'Provinsi', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', '_count': '_count', 'Luas Area Padi Sawah': 'Luas Area Padi Sawah (meter persegi)', '_mean': '_mean', });
lyr_IndeksPotensiDigitalisasiYogyakarta_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDBBPS': 'Kode BPS Kabupaten/Kota', 'KDCBPS': 'Kode BPS Kecamatan/Distrik', 'KDCPUM': 'Kode PUM Kecamatan/Distrik', 'KDPBPS': 'Kode BPS Provinsi', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'TIPADM': 'Tipe Administrasi', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'Provinsi', 'UUPP': 'Referensi Peraturan', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'digitalisasi_BTS': 'Skor BTS', 'digitalisasi_Kekuatan internet': 'Skor Kekuatan Internet', 'digitalisasi_sarana komunikasi': 'Skor Sarana Komunikasi', 'digitalisasi_indeks_digital': 'Indeks Potensi Digitalisasi', });
lyr_IndeksPotensiTanamanPanganYogyakarta_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDBBPS': 'Kode BPS Kabupaten/Kota', 'KDCBPS': 'Kode BPS Kecamatan/Distrik', 'KDCPUM': 'Kode PUM Kecamatan/Distrik', 'KDPBPS': 'Kode BPS Provinsi', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'TIPADM': 'Tipe Administrasi', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'Provinsi', 'UUPP': 'Referensi Peraturan', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'tanamanpangan_n_rtup_padi_sawah': 'Jumlah RTUP Padi Sawah', 'tanamanpangan_n_rtup_palawija_jagung': 'Jumlah RTUP Jagung', 'tanamanpangan_n_rtup_palawija_ubi_kayu': 'Jumlah RTUP Ubi Kayu', 'tanamanpangan_indeks_pangan': 'Indeks Potensi Tanaman Pangan', });
lyr_IndeksPotensiEkonomiYogyakarta_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDBBPS': 'Kode BPS Kabupaten/Kota', 'KDCBPS': 'Kode BPS Kecamatan/Distrik', 'KDCPUM': 'Kode PUM Kecamatan/Distrik', 'KDPBPS': 'Kode BPS Provinsi', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'TIPADM': 'Tipe Administrasi', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'Provinsi', 'UUPP': 'Referensi Peraturan', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'ekonomi_jumlah sarana perdagangan': 'Jumlah Sarana Perdagangan', 'ekonomi_jumlah sarana akomodasi': 'Jumlah Sarana Akomodasi', 'ekonomi_jumlah lembaga keuangan': 'Jumlah Lembaga Keuangan', 'ekonomi_indeks_ekonomi': 'Indeks Potensi Ekonomi', });
lyr_KlasterPotensiYogyakarta_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDBBPS': 'Kode BPS Kabupaten/Kota', 'KDCBPS': 'Kode BPS Kecamatan/Distrik', 'KDCPUM': 'Kode PUM Kecamatan/Distrik', 'KDPBPS': 'Kode BPS Provinsi', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'TIPADM': 'Tipe Administrasi', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten/Kota', 'WADMPR': 'Provinsi', 'UUPP': 'Referensi Peraturan', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'digitalisasi_BTS': 'digitalisasi_BTS', 'digitalisasi_Kekuatan internet': 'digitalisasi_Kekuatan internet', 'digitalisasi_sarana komunikasi': 'digitalisasi_sarana komunikasi', 'Indeks Potensi Digitalisasi': 'Indeks Potensi Digitalisasi', 'ekonomi_jumlah sarana perdagangan': 'ekonomi_jumlah sarana perdagangan', 'ekonomi_jumlah sarana akomodasi': 'ekonomi_jumlah sarana akomodasi', 'ekonomi_jumlah lembaga keuangan': 'ekonomi_jumlah lembaga keuangan', 'Indeks Potensi Ekonomi': 'Indeks Potensi Ekonomi', 'tanamanpangan_n_rtup_padi_sawah': 'tanamanpangan_n_rtup_padi_sawah', 'tanamanpangan_n_rtup_palawija_jagung': 'tanamanpangan_n_rtup_palawija_jagung', 'tanamanpangan_n_rtup_palawija_ubi_kayu': 'tanamanpangan_n_rtup_palawija_ubi_kayu', 'Indeks Potensi Tanaman Pangan': 'Indeks Potensi Tanaman Pangan', 'Klaster': 'Klaster', 'dist_': 'dist_', });
lyr_BatasKabupatenKota_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'digitalisasi_BTS': 'digitalisasi_BTS', 'digitalisasi_Kekuatan internet': 'digitalisasi_Kekuatan internet', 'digitalisasi_sarana komunikasi': 'digitalisasi_sarana komunikasi', 'Indeks Potensi Digitalisasi': 'Indeks Potensi Digitalisasi', 'ekonomi_jumlah sarana perdagangan': 'ekonomi_jumlah sarana perdagangan', 'ekonomi_jumlah sarana akomodasi': 'ekonomi_jumlah sarana akomodasi', 'ekonomi_jumlah lembaga keuangan': 'ekonomi_jumlah lembaga keuangan', 'Indeks Potensi Ekonomi': 'Indeks Potensi Ekonomi', 'tanamanpangan_n_rtup_padi_sawah': 'tanamanpangan_n_rtup_padi_sawah', 'tanamanpangan_n_rtup_palawija_jagung': 'tanamanpangan_n_rtup_palawija_jagung', 'tanamanpangan_n_rtup_palawija_ubi_kayu': 'tanamanpangan_n_rtup_palawija_ubi_kayu', 'Indeks Potensi Tanaman Pangan': 'Indeks Potensi Tanaman Pangan', 'Klaster': 'Klaster', 'dist_': 'dist_', });
lyr_LuasAreaPadiSawah_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', '_count': 'TextEdit', 'Luas Area Padi Sawah': 'TextEdit', '_mean': 'TextEdit', });
lyr_IndeksPotensiDigitalisasiYogyakarta_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'digitalisasi_BTS': 'TextEdit', 'digitalisasi_Kekuatan internet': 'TextEdit', 'digitalisasi_sarana komunikasi': 'TextEdit', 'digitalisasi_indeks_digital': 'TextEdit', });
lyr_IndeksPotensiTanamanPanganYogyakarta_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'tanamanpangan_n_rtup_padi_sawah': 'Range', 'tanamanpangan_n_rtup_palawija_jagung': 'Range', 'tanamanpangan_n_rtup_palawija_ubi_kayu': 'Range', 'tanamanpangan_indeks_pangan': 'TextEdit', });
lyr_IndeksPotensiEkonomiYogyakarta_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'ekonomi_jumlah sarana perdagangan': 'Range', 'ekonomi_jumlah sarana akomodasi': 'Range', 'ekonomi_jumlah lembaga keuangan': 'Range', 'ekonomi_indeks_ekonomi': 'TextEdit', });
lyr_KlasterPotensiYogyakarta_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'digitalisasi_BTS': 'TextEdit', 'digitalisasi_Kekuatan internet': 'TextEdit', 'digitalisasi_sarana komunikasi': 'TextEdit', 'Indeks Potensi Digitalisasi': 'TextEdit', 'ekonomi_jumlah sarana perdagangan': 'Range', 'ekonomi_jumlah sarana akomodasi': 'Range', 'ekonomi_jumlah lembaga keuangan': 'Range', 'Indeks Potensi Ekonomi': 'TextEdit', 'tanamanpangan_n_rtup_padi_sawah': 'Range', 'tanamanpangan_n_rtup_palawija_jagung': 'Range', 'tanamanpangan_n_rtup_palawija_ubi_kayu': 'Range', 'Indeks Potensi Tanaman Pangan': 'TextEdit', 'Klaster': 'Range', 'dist_': 'TextEdit', });
lyr_BatasKabupatenKota_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'digitalisasi_BTS': 'TextEdit', 'digitalisasi_Kekuatan internet': 'TextEdit', 'digitalisasi_sarana komunikasi': 'TextEdit', 'Indeks Potensi Digitalisasi': 'TextEdit', 'ekonomi_jumlah sarana perdagangan': 'Range', 'ekonomi_jumlah sarana akomodasi': 'Range', 'ekonomi_jumlah lembaga keuangan': 'Range', 'Indeks Potensi Ekonomi': 'TextEdit', 'tanamanpangan_n_rtup_padi_sawah': 'Range', 'tanamanpangan_n_rtup_palawija_jagung': 'Range', 'tanamanpangan_n_rtup_palawija_ubi_kayu': 'Range', 'Indeks Potensi Tanaman Pangan': 'TextEdit', 'Klaster': 'Range', 'dist_': 'TextEdit', });
lyr_LuasAreaPadiSawah_1.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'Desa': 'inline label - visible with data', 'Kabupaten': 'inline label - visible with data', 'Provinsi': 'inline label - visible with data', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', '_count': 'hidden field', 'Luas Area Padi Sawah': 'inline label - visible with data', '_mean': 'hidden field', });
lyr_IndeksPotensiDigitalisasiYogyakarta_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'UUPP': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'digitalisasi_BTS': 'inline label - visible with data', 'digitalisasi_Kekuatan internet': 'inline label - visible with data', 'digitalisasi_sarana komunikasi': 'inline label - visible with data', 'digitalisasi_indeks_digital': 'inline label - visible with data', });
lyr_IndeksPotensiTanamanPanganYogyakarta_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'UUPP': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'tanamanpangan_n_rtup_padi_sawah': 'inline label - visible with data', 'tanamanpangan_n_rtup_palawija_jagung': 'inline label - visible with data', 'tanamanpangan_n_rtup_palawija_ubi_kayu': 'inline label - visible with data', 'tanamanpangan_indeks_pangan': 'inline label - visible with data', });
lyr_IndeksPotensiEkonomiYogyakarta_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'UUPP': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'ekonomi_jumlah sarana perdagangan': 'inline label - visible with data', 'ekonomi_jumlah sarana akomodasi': 'inline label - visible with data', 'ekonomi_jumlah lembaga keuangan': 'inline label - visible with data', 'ekonomi_indeks_ekonomi': 'inline label - visible with data', });
lyr_KlasterPotensiYogyakarta_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'UUPP': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'digitalisasi_BTS': 'hidden field', 'digitalisasi_Kekuatan internet': 'hidden field', 'digitalisasi_sarana komunikasi': 'hidden field', 'Indeks Potensi Digitalisasi': 'inline label - visible with data', 'ekonomi_jumlah sarana perdagangan': 'hidden field', 'ekonomi_jumlah sarana akomodasi': 'hidden field', 'ekonomi_jumlah lembaga keuangan': 'hidden field', 'Indeks Potensi Ekonomi': 'inline label - visible with data', 'tanamanpangan_n_rtup_padi_sawah': 'hidden field', 'tanamanpangan_n_rtup_palawija_jagung': 'hidden field', 'tanamanpangan_n_rtup_palawija_ubi_kayu': 'hidden field', 'Indeks Potensi Tanaman Pangan': 'inline label - visible with data', 'Klaster': 'inline label - visible with data', 'dist_': 'hidden field', });
lyr_BatasKabupatenKota_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'UUPP': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'digitalisasi_BTS': 'no label', 'digitalisasi_Kekuatan internet': 'no label', 'digitalisasi_sarana komunikasi': 'no label', 'Indeks Potensi Digitalisasi': 'no label', 'ekonomi_jumlah sarana perdagangan': 'no label', 'ekonomi_jumlah sarana akomodasi': 'no label', 'ekonomi_jumlah lembaga keuangan': 'no label', 'Indeks Potensi Ekonomi': 'no label', 'tanamanpangan_n_rtup_padi_sawah': 'no label', 'tanamanpangan_n_rtup_palawija_jagung': 'no label', 'tanamanpangan_n_rtup_palawija_ubi_kayu': 'no label', 'Indeks Potensi Tanaman Pangan': 'no label', 'Klaster': 'no label', 'dist_': 'no label', });
lyr_BatasKabupatenKota_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
