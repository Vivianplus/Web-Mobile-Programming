am4core.useTheme(am4themes_animated);

var map = am4core.createFromConfig({
    "geodata": am4geodata_hongKongHigh,
    "projection": "Mercator",
    "series": [{
        "type": "MapPolygonSeries",
        "useGeodata": true,
        "mapPolygons": {
            "tooltipText": "{name}{value}",
            "states": {
                "hover": {
                    "properties": {
                        "fill": "#191970"
                    }
                }
            }
        },
    },
    {
        "type": "MapImageSeries",
        "mapImages": {
            "children": [{
                "type": "Circle",
                "radius": 4,
                "stroke": "#B27799",
                "strokeWidth": 1,
                "nonScaling": true,
                "tooltipText": "{HKBU Staff Quarter}"
            }],
            "propertyFields": {
                "latitude": "latitude",
                "longitude": "longitude"
                // "longitude": "114.200934",
                // "latitude": "22.395601"
            },
            // "data": [{
            //     "latitude": 114.200934,
            //     "longitude": 22.395601,

            //     // "longitude": 114.200934,
            //     // "latitude": 22.395601,
            //     "title": "HKBU Staff Quarter"
            // }]
        },
        "data": [{
            "longitude": 114.200934,
            "latitude": 22.395601,
            "title": "HKBU Staff Quarter"
        }]
    }
    ],

    // "titles": [{
    //     // "text": "Abuse cases A&E attendance by District\n(per 100,000 population)",
    //     "fontFamily": "Impact",
    //     "fontSize": 25,
    //     "fill": "#191970",
    //     "align": "left",
    //     // "paddingTop": 50,
    //     // "paddingLeft": 150,
    // }],
    // "paddingTop": 50,
    // "paddingBottom": 50,
}, "mapdiv", am4maps.MapChart);