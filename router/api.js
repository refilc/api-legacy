// imports
const express = require('express');
const axios = require('axios');

// init app
const app = express();

// routes
app.get('/', async (req, res, next) => {
    res.status(200).json({'type':'success', 'code':200, 'message':'reFilc API is running!', 'name':'OK'});
});

app.get('/v1', async (req, res, netxt) => {
    res.status(200).json({'type':'success', 'code':200, 'message':'reFilc API v1 is running!', 'name':'OK', 'data':{'version':'1.0.0', 'codename':'refilc_api_1', 'base_url':'https://api.refilc.hu/v1'}});
});
app.get('/latest', async (req, res, netxt) => {
    res.status(200).json({'type':'success', 'code':200, 'message':'reFilc API v1 is running!', 'name':'OK', 'data':{'version':'1.0.0', 'codename':'refilc_api_1', 'base_url':'https://api.refilc.hu/v1'}});
});

app.get('/v1/public/school-list', async (req, res, netxt) => {
    //const {data} = await axios.get('https://kretaglobalmobileapi2.ekreta.hu/api/v3/Institute', {headers: {
    //    'apiKey': '7856d350-1fda-45f5-822d-e1a2f3f1acf0'
    //}});
    //res.status(200).json(data);
    const data = require('../school_list.json');
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
});
app.get('/v1/public/news', async (req, res, netxt) => {
    const news = [
        {
            "title": "Vége a Filc-nek? Közel sem!",
            "content": "Elérhetővé vált a reFilc alkalmazás, mely egy folyamatosan fejlesztett és karbantartott Filc Napló fork. Használjátok egészséggel!",
            "link": "https://refilc.hu",
            "open_label": "WEBOLDAL",
            "platform": "all"
        },
    ];
    res.status(200).json(news);
});
app.get('/v1/public/supporters', async (req, res, netxt) => {
    const supporters = {
        "github":[
            // {
            //     "name": "",
            //     "price": 0,
            //     "type": "monthly"
            // },
        ],
        "patreon":[
            //
        ],
    };
    res.status(200).json({"percentage":0, "target":100, "description":"Támogasd a reFilc-et, és szerezz cserébe pár jutalmat az app-ban!", "sponsors":supporters});
});

app.get('/v1/public/client/version/latest/name', async (req, res, netxt) => {
    //const {data} = await axios.get('https://api.github.com/repos/refilc/naplo/releases/latest', {headers: {
    //    'X-GitHub-Api-Version': '2022-11-28'
    //}});
    //res.status(200).json(data);
    res.status(200).send('4.1.0-beta');
});
app.get('/v1/public/client/version/all', async (req, res, netxt) => {
    const versions = [];
    //const {data} = await axios.get('https://api.github.com/repos/refilc/naplo/releases', {headers: {
    //    'X-GitHub-Api-Version': '2022-11-28'
    //}});
    //for (var i; i<data.lenght; i++) {
    //    const dl_a = data[i]['assets'][0]['browser_download_url'];
    //    const dl_i = data[i]['assets'][1]['browser_download_url'];
    //    const v = data[i]['tag_name'];
    //    var ne = '';
    //    if (v == '4.0.0') {
    //        ne = [
    //                'Egyelőre a cél az, hogy működő klienst hozzunk létre, ezért sok újdonság nincs.',
    //                'Ha kétszer kattintasz a profilképedre, váltogathatsz a profilok között.',
    //                'Új Flutter verziót használunk (a kompatibilitás érdekében)',
    //                'Néhány behind-the-scenes dolog, ami nem olyan fontos :D',
    //                'Új színek (hogy ne kezdj el pánikolni a matek egyestől)',
    //        ];
    //    }
    //    const l = v == '4.0.0' ? true : false;
    //    var json_ver = {
    //        "version": v,
    //        "is_latest": l,
    //        "new": ne,
    //        "download_url": {
    //            "android": dl_a,
    //            "ios": dl_i
    //        }
    //    };
    //    versions.push(json_ver);
    //}
    //res.status(200).json(versions);
    var json_ver6 = {
        "version": "4.1.1-beta",
        "is_latest": true,
        "new": [
            'Ez a kiadás még béta, így egyes funkciói tartalmazhatnak hibákat!',
            'Néhány apróbb illetve nagyobb stílus és funkcionalitási hibát is javítottunk (pl. a dőlt betűs egyedi tantárgynév beállítás már ténylegesen elmentődik).',
            'Végre mindenki számára elérhető az év végi összegzés funkció, melyben áttekinthetitek, hogy milyen is volt a tanévetek, valami hogy az app milyen személyiségűnek lát titeket a jegyeitek, hiányzásaitok alapján. (Az év végi összegzés még BÉTA, így tartalmazhat esetleges hibákat, vagy pontatlanságot!)',
        ],
        "download_url": {
            "android": "https://github.com/refilc/naplo/releases/download/4.1.1-beta/refilc-v4.1.1.apk",
            "ios": "https://testflight.apple.com/join/ZDxpcKqD"
        }
    };
    versions.push(json_ver6);
    var json_ver5 = {
        "version": "4.1.0-beta",
        "is_latest": false,
        "new": [
            'Ez a kiadás még béta, így egyes funkciói tartalmazhatnak hibákat!',
            'A teljes képernyős órarend mostantól nem nyílik meg, ha üres az órarend az adott hétre.',
            'Javítva lett néhány kinézeti hiba, illetve fordítás.',
            'Az "új jegyek"-nél a főoldalon már nem írja többes számban, hogy "nyisd ki őket", ha csak 1 jegyet kaptál.',
            'A beállítások alján helyesen írja a verziószámot és nem "v?"-et jelenít meg.',
            'Néhány link és szöveg át lett írva pár markdown fájlban (pl. README.md) GitHub-on.',
            'Mostantól a felhasználó állíthatja, hogy az átnevezett tantárgyak a többivel megegyezően, vagy dőlt betűkkel jelenjenek meg.',
            'Végre bekerültek az új jegyekről kapott értesítések. (A funkció még béta, így lehetnek benne hibák!)',
            'Halad a tanév-végi összefoglalás funkció, amelyben (a Spotify Wrapped-hez hasonlóan) minden év végén megtekinthetitek, hogy milyen jegyeket szereztetek, mennyit késtetek és milyen személyiségűnek lát titeket a reFilc.',
        ],
        "download_url": {
            "android": "https://github.com/refilc/naplo/releases/download/4.1.0-beta/refilc-v4.1.0.apk",
            "ios": "https://testflight.apple.com/join/ZDxpcKqD"
        }
    };
    versions.push(json_ver5);
    var json_ver4 = {
        "version": "4.0.4",
        "is_latest": false,
        "new": [
            'Javítva lett az automatikus frissítés.',
            'Javítva lett a Live Activity-vel kapcsolatos hiba, miszerint ha letiltottad beállításokban, crash-elt az app.',
            'Javítottunk még néhány láthatatlan hibát, illetve fordításokkal kapcsolatos dolgokat.',
            'Megoldottuk a teljes képernyős órarend hibát.',
        ],
        "download_url": {
            "android": "https://github.com/refilc/naplo/releases/download/4.0.4/refilc-v4.0.4.apk",
            "ios": "https://testflight.apple.com/join/ZDxpcKqD"
        }
    };
    versions.push(json_ver4);
    var json_ver3 = {
        "version": "4.0.3",
        "is_latest": false,
        "new": [
            'Javítottunk jónéhány kinézetbeli hibát. (összemosódások, csúnya átmenetek, stb.)',
            'Megoldottuk az eKRÉTA által okozott bejelentkezés problémákat. (Most már nem kell szóközt rakni a felhasználónév mögé!)',
            'Javítottunk pár fordítás hibát.',
            'Javítva lett a hibás osztályátlag kimutatási hiba is.',
            'Elkezdtünk dolgozni egy szuper menő funkción, az év végi összegzésen, melyhez a Spotify Wrapped-ből merítettünk ötletet.',
            'Bekerült a már sokak által Filc-ből vagy egyéb appokból ismert Material You témájú indítóikon Android 12 platform felett.',
            'Visszakerült a Filc-es Live Activity iOS és Android platformokra is, ennek a színe a későbbiekben igazodni fog az alkalmazás színeihez.',
            'Le lettek fordítva az értékelések nevei (Jeles, Jó, Közepes, Elégséges, Elégtelen) mindkét nyelvre (angol, német).',
        ],
        "download_url": {
            "android": "https://github.com/refilc/naplo/releases/download/4.0.3/refilc-v4.0.3.apk",
            "ios": "https://testflight.apple.com/join/ZDxpcKqD"
        }
    };
    versions.push(json_ver3);
    var json_ver2 = {
        "version": "4.0.2",
        "is_latest": false,
        "new": [
            'Az Andoird-os app gyorsgombok színét is kicseréltük reFilc kék színre.',
            'Egy-két helyen javítva lettek a hiányzó fordítások.',
            'Az átnevezett tantárgyak neve már nem dőlt betűvel jelenik meg, erre később lesz egy opció a beállításokban.',
            'Az átnevezett tantárgyak mostmár minden létező helyen át vannak nevezve, ahol csak lehetséges.',
            'Javítva lett a teljes képernyős órarendből való kilépés gomb hiánya.',
            'Elkezdtük implementálni a https://github.com/fiwc Filc fork-ot UwU mód néven.',
        ],
        "download_url": {
            "android": "https://github.com/refilc/naplo/releases/download/4.0.2/refilc-v4.0.2.apk",
            "ios": "https://testflight.apple.com/join/ZDxpcKqD"
        }
    };
    versions.push(json_ver2);
    var json_ver1 = {
        "version": "4.0.1",
        "is_latest": false,
         "new": [
            'A beállítások színek menüpontja is teljesen le van fordítva mostantól mindhárom elérhető nyelvre.',
            'Az alsó navigációs sávról el lettek tűntetve a csúnya, nem odaillő animációk.',
            'Frissítettük az iskolalistát bejelentkezésnél, így mostantól minden eKréta-t használó iskola közül lehet választani.',
            'Megoldottuk azt a problémát, miszerint sokak nem tudtak bejelentkezni.',
            'Át lett írva a "package name" Android-on, `hu.refilc.app`-ra, így mostantól nem fog nyafogni telepítéskor, ha fent volt az eredeti Filc Napló.',
            'Normálisabb lett az Android-os indító icon.',
        ],
        "download_url": {
            "android": "https://github.com/refilc/naplo/releases/download/4.0.1/refilc-v4.0.1.apk",
            "ios": "https://testflight.apple.com/join/ZDxpcKqD"
        }
    };
    versions.push(json_ver1);
        // var json_ver = {
        //     "version": "4.0.0",
        //     "is_latest": false,
        //     "new": [
        //         'Egyelőre a cél az, hogy működő klienst hozzunk létre, ezért sok újdonság nincs.',
        //         'Ha kétszer kattintasz a profilképedre, váltogathatsz a profilok között.',
        //         'Új Flutter verziót használunk (a kompatibilitás érdekében)',
        //         'Néhány behind-the-scenes dolog, ami nem olyan fontos :D',
        //         'Új színek (hogy ne kezdj el pánikolni a matek egyestől)',
        //     ],
        //     "download_url": {
        //         "android": "https://github.com/refilc/naplo/releases/download/4.0.0/refilc-v4.0.0.apk",
        //         "ios": "about:blank"
        //     }
        // };
        // versions.push(json_ver);
    res.status(200).json(versions);
});

app.get('/v1/private/config', async (req, res, netxt) => {
    res.status(200).json({"user_agent":"hu.ekreta.tanulo/$0/$1/$2"});
});
app.post('/v1/private/crash-report', async (req, res, netxt) => {
    const os = req.body.os ?? null;
    const v = req.body.version ?? null;
    const err = req.body.error ?? null;
    const st = req.body.stack ?? null;
    if (!os || !v || !err || !st) {
        res.status(400).json({'type':'error', 'name':'Bad Request', 'code':400, 'message':'Invalid request body.'});
        return;
    }
    const {data} = await axios.get('https://discord.com/api/webhooks/haha/elhitted', {content: `**Hiba jelentés**\n- OS: \`${os}\`\n- Version: \`${v}\`\n- Error: \`${err}\`\n- Stack trace: (below)\n\`\`\`${st}\`\`\``});
    res.status(200).json(data);
});

// export app
exports.app = app;
