var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07907047850748583,
          "pitch": 0.4474364256128336,
          "rotation": 0,
          "target": "1-pdms"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pdms",
      "name": "PDMS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.63785598513277,
        "pitch": 0.1903798817617659,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.7462663581706455,
          "pitch": 0.4757831270099757,
          "rotation": 0,
          "target": "2-dark-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dark-room",
      "name": "dark room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.0642812462370035,
        "pitch": 0.18187435650780515,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.620656903865326,
          "pitch": 0.36619638865501614,
          "rotation": 0,
          "target": "3-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-center",
      "name": "center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.13438325483353,
        "pitch": 0.503828597568841,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.7883584996135973,
          "pitch": 0.41328799743320843,
          "rotation": 0,
          "target": "4-pcr"
        },
        {
          "yaw": 0.5229277237174585,
          "pitch": 0.026916933585454217,
          "rotation": 0,
          "target": "2-dark-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pcr",
      "name": "pcr",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.251180278115921,
        "pitch": 0.32281722198185037,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.7615683377616378,
          "pitch": 0.5002195593398326,
          "rotation": 0,
          "target": "5-cell-culture"
        },
        {
          "yaw": 2.27626162468591,
          "pitch": 0.5872141036040777,
          "rotation": 0,
          "target": "6-microscope"
        },
        {
          "yaw": 0.694345232108244,
          "pitch": 0.48696285973082176,
          "rotation": 0,
          "target": "3-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cell-culture",
      "name": "cell culture",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.8178300294486718,
        "pitch": 0.5079175098947069,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.004601008084826219,
          "pitch": 0.5919802330526984,
          "rotation": 0,
          "target": "4-pcr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-microscope",
      "name": "microscope",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.11710247440085908,
        "pitch": 0.4401169424567932,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.3908844935912157,
          "pitch": 0.6871780053966869,
          "rotation": 0,
          "target": "4-pcr"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ZidaLab - Lab Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
