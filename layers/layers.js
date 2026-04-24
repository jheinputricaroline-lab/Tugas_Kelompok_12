var wms_layers = [];

var format_Kabupaten_Kota_0 = new ol.format.GeoJSON();
var features_Kabupaten_Kota_0 = format_Kabupaten_Kota_0.readFeatures(json_Kabupaten_Kota_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kabupaten_Kota_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kabupaten_Kota_0.addFeatures(features_Kabupaten_Kota_0);
var lyr_Kabupaten_Kota_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kabupaten_Kota_0, 
                style: style_Kabupaten_Kota_0,
                popuplayertitle: 'Kabupaten_Kota',
                interactive: true,
                title: '<img src="styles/legend/Kabupaten_Kota_0.png" /> Kabupaten_Kota'
            });
var format_Total_1 = new ol.format.GeoJSON();
var features_Total_1 = format_Total_1.readFeatures(json_Total_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Total_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Total_1.addFeatures(features_Total_1);
var lyr_Total_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Total_1, 
                style: style_Total_1,
                popuplayertitle: 'Total',
                interactive: true,
    title: 'Total<br />\
    <img src="styles/legend/Total_1_0.png" /> 19 - 23,2<br />\
    <img src="styles/legend/Total_1_1.png" /> 23,2 - 27,4<br />\
    <img src="styles/legend/Total_1_2.png" /> 27,4 - 31,6<br />\
    <img src="styles/legend/Total_1_3.png" /> 31,6 - 35,8<br />\
    <img src="styles/legend/Total_1_4.png" /> 35,8 - 40<br />' });
var format_Male_2 = new ol.format.GeoJSON();
var features_Male_2 = format_Male_2.readFeatures(json_Male_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Male_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Male_2.addFeatures(features_Male_2);
var lyr_Male_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Male_2, 
                style: style_Male_2,
                popuplayertitle: 'Male',
                interactive: true,
    title: 'Male<br />\
    <img src="styles/legend/Male_2_0.png" /> 10 - 12,6<br />\
    <img src="styles/legend/Male_2_1.png" /> 12,6 - 15,2<br />\
    <img src="styles/legend/Male_2_2.png" /> 15,2 - 17,8<br />\
    <img src="styles/legend/Male_2_3.png" /> 17,8 - 20,4<br />\
    <img src="styles/legend/Male_2_4.png" /> 20,4 - 23<br />' });
var format_Female_3 = new ol.format.GeoJSON();
var features_Female_3 = format_Female_3.readFeatures(json_Female_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Female_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Female_3.addFeatures(features_Female_3);
var lyr_Female_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Female_3, 
                style: style_Female_3,
                popuplayertitle: 'Female',
                interactive: true,
    title: 'Female<br />\
    <img src="styles/legend/Female_3_0.png" /> 2 - 6<br />\
    <img src="styles/legend/Female_3_1.png" /> 6 - 10<br />\
    <img src="styles/legend/Female_3_2.png" /> 10 - 14<br />\
    <img src="styles/legend/Female_3_3.png" /> 14 - 18<br />\
    <img src="styles/legend/Female_3_4.png" /> 18 - 22<br />' });

lyr_Kabupaten_Kota_0.setVisible(true);lyr_Total_1.setVisible(true);lyr_Male_2.setVisible(true);lyr_Female_3.setVisible(true);
var layersList = [lyr_Kabupaten_Kota_0,lyr_Total_1,lyr_Male_2,lyr_Female_3];
lyr_Kabupaten_Kota_0.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten_Kota dan Jenis Kelamin, 2024_Laki-laki': 'Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten_Kota dan Jenis Kelamin, 2024_Laki-laki', 'Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten_Kota dan Jenis Kelamin, 2024_Perempuan': 'Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten_Kota dan Jenis Kelamin, 2024_Perempuan', 'Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten_Kota dan Jenis Kelamin, 2024_Total': 'Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten_Kota dan Jenis Kelamin, 2024_Total', });
lyr_Total_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Jumlah Anggota DPRD_Laki-laki': 'Jumlah Anggota DPRD_Laki-laki', 'Jumlah Anggota DPRD_Perempuan': 'Jumlah Anggota DPRD_Perempuan', 'Jumlah Anggota DPRD_Total': 'Jumlah Anggota DPRD_Total', });
lyr_Male_2.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Jumlah Anggota DPRD_Laki-laki': 'Jumlah Anggota DPRD_Laki-laki', 'Jumlah Anggota DPRD_Perempuan': 'Jumlah Anggota DPRD_Perempuan', 'Jumlah Anggota DPRD_Total': 'Jumlah Anggota DPRD_Total', });
lyr_Female_3.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Jumlah Anggota DPRD_Laki-laki': 'Jumlah Anggota DPRD_Laki-laki', 'Jumlah Anggota DPRD_Perempuan': 'Jumlah Anggota DPRD_Perempuan', 'Jumlah Anggota DPRD_Total': 'Jumlah Anggota DPRD_Total', });
lyr_Kabupaten_Kota_0.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten_Kota dan Jenis Kelamin, 2024_Laki-laki': 'Range', 'Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten_Kota dan Jenis Kelamin, 2024_Perempuan': 'Range', 'Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten_Kota dan Jenis Kelamin, 2024_Total': 'Range', });
lyr_Total_1.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Jumlah Anggota DPRD_Laki-laki': '', 'Jumlah Anggota DPRD_Perempuan': '', 'Jumlah Anggota DPRD_Total': '', });
lyr_Male_2.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Jumlah Anggota DPRD_Laki-laki': '', 'Jumlah Anggota DPRD_Perempuan': '', 'Jumlah Anggota DPRD_Total': '', });
lyr_Female_3.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Jumlah Anggota DPRD_Laki-laki': '', 'Jumlah Anggota DPRD_Perempuan': '', 'Jumlah Anggota DPRD_Total': '', });
lyr_Kabupaten_Kota_0.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'inline label - visible with data', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten_Kota dan Jenis Kelamin, 2024_Laki-laki': 'hidden field', 'Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten_Kota dan Jenis Kelamin, 2024_Perempuan': 'hidden field', 'Jumlah Anggota Dewan Perwakilan Rakyat Daerah Menurut Kabupaten_Kota dan Jenis Kelamin, 2024_Total': 'hidden field', });
lyr_Total_1.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Jumlah Anggota DPRD_Laki-laki': 'hidden field', 'Jumlah Anggota DPRD_Perempuan': 'hidden field', 'Jumlah Anggota DPRD_Total': 'inline label - visible with data', });
lyr_Male_2.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Jumlah Anggota DPRD_Laki-laki': 'inline label - visible with data', 'Jumlah Anggota DPRD_Perempuan': 'hidden field', 'Jumlah Anggota DPRD_Total': 'hidden field', });
lyr_Female_3.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Jumlah Anggota DPRD_Laki-laki': 'hidden field', 'Jumlah Anggota DPRD_Perempuan': 'inline label - visible with data', 'Jumlah Anggota DPRD_Total': 'hidden field', });
lyr_Female_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});