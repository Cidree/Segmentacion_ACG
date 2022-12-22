var wms_layers = [];


        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri.Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_Distanciaacanalesm_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Distancia a canales (m)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Distanciaacanalesm_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557459.364142, 4397032.012641, -549408.190651, 4405216.085867]
                            })
                        });
var lyr_Orientaciones_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Orientaciones",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Orientaciones_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557459.364142, 4397032.012641, -549408.190651, 4405216.085867]
                            })
                        });
var lyr_Densidadpinsapopiesha_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densidad pinsapo (pies/ha)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Densidadpinsapopiesha_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557459.364142, 4397032.012641, -549408.190651, 4405216.085867]
                            })
                        });
var lyr_IndicedeShannon_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Indice de Shannon",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IndicedeShannon_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557459.364142, 4397032.012641, -549408.190651, 4405216.085867]
                            })
                        });
var lyr_Rastervirtual_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Raster virtual",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Rastervirtual_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557459.364185, 4397032.012587, -549408.190694, 4405216.085813]
                            })
                        });
var format_Segmentacion1500_6 = new ol.format.GeoJSON();
var features_Segmentacion1500_6 = format_Segmentacion1500_6.readFeatures(json_Segmentacion1500_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Segmentacion1500_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segmentacion1500_6.addFeatures(features_Segmentacion1500_6);
var lyr_Segmentacion1500_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Segmentacion1500_6, 
                style: style_Segmentacion1500_6,
                interactive: false,
                title: '<img src="styles/legend/Segmentacion1500_6.png" /> Segmentacion (1500)'
            });
var format_Segmentacion2000_7 = new ol.format.GeoJSON();
var features_Segmentacion2000_7 = format_Segmentacion2000_7.readFeatures(json_Segmentacion2000_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Segmentacion2000_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segmentacion2000_7.addFeatures(features_Segmentacion2000_7);
var lyr_Segmentacion2000_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Segmentacion2000_7, 
                style: style_Segmentacion2000_7,
                interactive: false,
                title: '<img src="styles/legend/Segmentacion2000_7.png" /> Segmentacion (2000)'
            });
var format_Segmentacion2500_8 = new ol.format.GeoJSON();
var features_Segmentacion2500_8 = format_Segmentacion2500_8.readFeatures(json_Segmentacion2500_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Segmentacion2500_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segmentacion2500_8.addFeatures(features_Segmentacion2500_8);
var lyr_Segmentacion2500_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Segmentacion2500_8, 
                style: style_Segmentacion2500_8,
                interactive: false,
                title: '<img src="styles/legend/Segmentacion2500_8.png" /> Segmentacion (2500)'
            });
var format_Yunquera_9 = new ol.format.GeoJSON();
var features_Yunquera_9 = format_Yunquera_9.readFeatures(json_Yunquera_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yunquera_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yunquera_9.addFeatures(features_Yunquera_9);
var lyr_Yunquera_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yunquera_9, 
                style: style_Yunquera_9,
                interactive: false,
                title: '<img src="styles/legend/Yunquera_9.png" /> Yunquera'
            });

lyr_EsriImagery_0.setVisible(true);lyr_Distanciaacanalesm_1.setVisible(true);lyr_Orientaciones_2.setVisible(true);lyr_Densidadpinsapopiesha_3.setVisible(true);lyr_IndicedeShannon_4.setVisible(true);lyr_Rastervirtual_5.setVisible(true);lyr_Segmentacion1500_6.setVisible(true);lyr_Segmentacion2000_7.setVisible(true);lyr_Segmentacion2500_8.setVisible(true);lyr_Yunquera_9.setVisible(true);
var layersList = [lyr_EsriImagery_0,lyr_Distanciaacanalesm_1,lyr_Orientaciones_2,lyr_Densidadpinsapopiesha_3,lyr_IndicedeShannon_4,lyr_Rastervirtual_5,lyr_Segmentacion1500_6,lyr_Segmentacion2000_7,lyr_Segmentacion2500_8,lyr_Yunquera_9];
lyr_Segmentacion1500_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Segmentacion2000_7.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Segmentacion2500_8.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Yunquera_9.set('fieldAliases', {'qc_id': 'qc_id', 'nombre': 'nombre', 'codigo_ja': 'codigo_ja', 'shape_area': 'shape_area', 'shape_len': 'shape_len', });
lyr_Segmentacion1500_6.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_Segmentacion2000_7.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_Segmentacion2500_8.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_Yunquera_9.set('fieldImages', {'qc_id': '', 'nombre': '', 'codigo_ja': '', 'shape_area': '', 'shape_len': '', });
lyr_Segmentacion1500_6.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Segmentacion2000_7.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Segmentacion2500_8.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Yunquera_9.set('fieldLabels', {'qc_id': 'no label', 'nombre': 'no label', 'codigo_ja': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', });
lyr_Yunquera_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});