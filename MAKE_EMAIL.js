import { promises as fs } from 'fs';

const FMLK_shipname = 	['PAN IVY', 'PAN SPIRIT', 'PAN UNITY', 'PAN EMERALD', 'GRAND ACE7']	
const FMLK_email = ['panivy@sea-one.com', 'pan-spirit@sea-one.com', 'panunity@panocean.com', 'panemerald@panocean.com', 'grandace7@panocean.com']

const GFSM_shipname =	['THAI CHEMI', 'ONSAN CHEMI', 'DAESAN CHEMI', 'BANGKOK CHEMI']	
const GFSM_email = ['thaichemi@sea-one.com', 'onsanchemi@sea-one.com', 'daesanchemi@arionmail.com', 'bangkokchemi@sea-one.com']

const GLOVIS_shipname =	['GLOVIS CARDINAL', 'GLOVIS COMPANION', 'GLOVIS SILVER', 'GLOVIS SONIC', 'VL BREEZE', 'GLOVIS SUNLIGHT', 'GLOVIS SUNRISE']	
const GLOVIS_email = ['g_cardinal@glovis.sea-one.com', '?g_companion@glovis.sea-one.com', 'g_silver@glovis.sea-one.com?', '?g_sonic@glovis.sea-one.com', 'vl_breeze@glovis.sea-one.com', '?g_sunlight@glovis.sea-one.com', '']

const HMM_shipname=	['HMM PROMISE', 'HMM BLESSING']	
const HMM_email = ['hpromise@hmms.co.kr', 'hblessing@hmms.co.kr']

const HOS_shipname = ['VL BRILLIANT']	
const HOS_email = ['vl_brilliant@glovis.sea-one.com']

const KLCSM_shipname =	['ADONIS', 'GLOBAL BRAVE', 'GLOBAL FRONTIER', 'GLOBAL GENESIS', 'GLOBAL HOPE', 'K.ACACIA', 'K.ASIAN BEAUTY', 'K.ASTER', 'K.DAPHNE', 'K.FREESIA', 'K.JASMINE', 'K.MUGUNGWHA', 'LAVENDER', 'ROSEMARY', 'SM CHALLENGER', 'SM DIAMOND', 'SM DONGHAE', 'SM DONGHAE 2', 'SM DRAGON', 'SM EAGLE', 'SM EMERALD', 'SM FALCON', 'SM GEMINI 1', 'SM GEMINI2', 'SM HARMONY1', 'SM HARMONY2', 'SM HEDLAND', 'SM JEJU LNG1', 'SM JEJU LNG2', 'SM LION', 'SM NAVIGATOR', 'SM NEWORLEANS', 'SM OSPREY', 'SM PUMA', 'SM ROBERTS BANK', 'SM SAMCHEONPO', 'SM SANTOS', 'SM SEAHAWK', 'SM TIGER', 'SM VENUS1', 'SM VENUS2', 'SM VISION', 'SM WHITE WHALE 1', 'SM WHITE WHALE 2', 'WHITE ROSE']
const KLCSM_email = ['adonis@sea-one.com', 'globalbrave@sea-one.com', 'globalfrontier@sea-one.com', 'globalgenesis@sea-one.com', 'globalhope@sea-one.com', 'acacia@sea-one.com', 'kasb@sea-one.com', 'k.aster@sea-one.com', 'k.daphne@sea-one.com', 'freesia@sea-one.com', 'jasmine@sea-one.com', 'mugungwha@sea-one.com', 'lavender@sea-one.com', 'rosemary@sea-one.com', 'smchallenger@sea-one.com', 'smdiamond@sea-one.com', 'smdonghae2@sea-one.com', 'smdonghae@sea-one.com', 'smdragon@sea-one.com', 'eagle@sea-one.com', 'smemerald@sea-one.com', 'smfalcon@sea-one.com', 'smgemini1@sea-one.com', 'smgemini2@sea-one.com', 'smharmony1@sea-one.com', 'smharmony2@sea-one.com', 'smhedland@sea-one.com', 'smjejulng1@sea-one.com', 'smjejulng2@sea-one.com', 'smlion@sea-one.com', 'smnavigator@sea-one.com', 'smneworleans@sea-one.com', 'smosprey@sea-one.com', 'smpuma@sea-one.com', 'smrobertsbank@sea-one.com', 'smsamcheonpo@sea-one.com', 'smsantos@sea-one.com', 'seahawk@sea-one.com', 'smtiger@sea-one.com', 'smvenus1@sea-one.com', 'smvenus2@sea-one.com', 'smvision@sea-one.com', 'smwhitewhale1@sea-one.com', 'smwhitewhale2@sea-one.com', 'whiterose@sea-one.com']

const KSM_shipname = ['NOEL', 'DAEWOO DIAMOND', 'CS ONSAN', 'SEA CRYSTAL']	
const KSM_email = ['noel@sea-one.com', 'daewoodiamond@sea-one.com', 'csonsan@sea-one.com', '3fbd4@sea-one.com']

const KSS_shipname = ['GAS QUANTUM', 'GAS UTOPIA', 'GAS VENUS', 'GAS YOUNG', 'GAS ZENITH', 'GAS GABRIELA', 'GAS GALA', 'GAS GHAZI', 'GAS JUSTESEN', 'GAS FRIEND', 'GAS POWER', 'GAS STAR', 'GAS SUMMIT', 'GAS WISDOM', 'GAS ARES', 'GAS BARBAROSSA', 'GAS IVORY', 'GAS KAISERIN', 'HARMONY CHEMIST', 'SAVONETTA SUN', 'JOY CHEMIST', 'LUCKY CHEMIST']	
const KSS_email = ['gtqu@kssfleet.com', 'gtut@kssfleet.com', 'gtve@kssfleet.com', 'gtyo@kssfleet.com', 'gtze@kssfleet.com', 'gtgb@kssfleet.com', 'gtgl@kssfleet.com', 'gtgh@kssfleet.com', 'gtju@kssfleet.com', 'gtfr@kssfleet.com', 'gtpo@kssfleet.com', 'gtst@kssfleet.com', 'gtsu@kssfleet.com', 'gtwi@kssfleet.com', 'gtar@kssfleet.com', 'gtba@kssfleet.com', 'gtiv@kssfleet.com', 'gtka@kssfleet.com', 'cthc@kssfleet.com', 'ctss@kssfleet.com', 'ctjc@kssfleet.com', 'ctlc@kssfleet.com']

const NJSM_shipname =	['JN IRIS', 'JN CAMELLIA', 'JN EMERALD', 'JN NEPTUNE']	
const NJSM_email = ['jniris@sea-one.com', 'jncamellia@sea-one.com', 'jnemerald@sea-one.com', 'jnneptune@sea-one.com']

const PANBULK_shipname =	['RIPLEY PIONEER', 'RIPLEY PROSPERITY', 'RIPLEY PRIDE', 'RIPLEY PROGRESS']	
const PANBULK_email = ['rpioneer@sunavfleet.com', 'rprosperity@sunavfleet.com', 'rpride@sunavfleet.com', 'master.ripleyprogress@stationsatcommail.com']

const PIL_shipname = ['KOTA ANGGUN', 'KOTA AZAM', 'KOTA CABAR', 'KOTA CAHAYA', 'KOTA CANTIK', 'KOTA CARUM', 'KOTA CEMPAKA', 'KOTA CEPAT', 'KOTA DAHLIA', 'KOTA DUNIA', 'KOTA DUTA', 'KOTA GABUNG', 'KOTA GADANG', 'KOTA GANDING', 'KOTA GAYA', 'KOTA HAKIM', 'KOTA HALUS', 'KOTA HANDAL', 'KOTA HAPAS', 'KOTA HARUM', 'KOTA HENING', 'KOTA HIDAYAH', 'KOTA JAYA', 'KOTA JOHAN', 'KOTA KAMIL', 'KOTA KARIM', 'KOTA KAYA', 'KOTA LAGU', 'KOTA LAMBAI', 'KOTA LAMBANG', 'KOTA LARIS', 'KOTA LAWA', 'KOTA LAYANG', 'KOTA LEGIT', 'KOTA LEKAS', 'KOTA LEMBAH', 'KOTA LESTARI', 'KOTA LIHAT', 'KOTA LIMA', 'KOTA LOCENG', 'KOTA LUKIS', 'KOTA LUMAYAN', 'KOTA LUMBA', 'KOTA MACHAN', 'KOTA MAKMUR', 'KOTA MANIS', 'KOTA MANZANILLO', 'KOTA MEGAH', 'KOTA NABIL', 'KOTA NAGA', 'KOTA NALURI', 'KOTA NANHAI', 'KOTA NASRAT', 'KOTA NAZAR', 'KOTA NAZIM', 'KOTA NEBULA', 'KOTA NEKAD', 'KOTA NILAM', 'KOTA NIPAH', 'KOTA PAHLAWAN', 'KOTA PELANGI', 'KOTA PEONY', 'KOTA PRIMROSE', 'KOTA PURI', 'KOTA PUSAKA', 'KOTA RAHMAT', 'KOTA RAJA', 'KOTA RAJIN', 'KOTA RAKAN', 'KOTA RAKYAT', 'KOTA RANCAK', 'KOTA RATNA', 'KOTA RATU', 'KOTA RESTU', 'KOTA RIA', 'KOTA RUKUN', 'KOTA SABAS', 'KOTA SAHABAT', 'KOTA SALAM', 'KOTA SANTOS', 'KOTA SATRIA', 'KOTA SEGAR', 'KOTA SEJARAH', 'KOTA SEJATI', 'KOTA SELAMAT', 'KOTA SEMPENA', 'KOTA SETIA', 'KOTA SINGA', 'KOTA SURIA', 'KOTA TEMA', 'KOTA TENAGA', 'MATSON MAUI', 'SALAM MAJU', 'SELATAN DAMAI']	
const PIL_email = ['master.kotaanggun@orillamail.com', 'master.kotaazam@orillamail.com ', 'master.kotacabar@fleetmail.inmarsat.com', 'master.kotacahaya@fleetmail.inmarsat.com', 'master.kotacantik@fleetmail.inmarsat.com', 'master.kotacarum@fleetmail.inmarsat.com', 'master.kotacempaka@fleetmail.inmarsat.com', 'master.kotacepat@fleetmail.inmarsat.com', 'master.kotadahlia@fleetmail.inmarsat.com ', 'master.kotadunia@orillamail.com', 'master.kotaduta@orillamail.com', 'kotagabung@fleetmail.inmarsat.com', 'master.kotagadang@fleetmail.inmarsat.com', 'master.kotaganding@fleetmail.inmarsat.com', 'master.kotagaya@fleetmail.inmarsat.com> ', 'master.kotahakim@fleetmail.inmarsat.com', 'master.kotahalus@orillamail.com', 'master.kotahandal@fleetmail.inmarsat.com', 'master.kotahapas@fleetmail.inmarsat.com', 'master.kotaharum@orillamail.com', 'master.kotahening@fleetmail.inmarsat.com', 'master.kotahidayah@fleetmail.inmarsat.com', 'master.kotajaya@fleetmail.inmarsat.com', 'master.kotajohan@fleetmail.inmarsat.com', 'master.kotakamil@orillamail.com', 'master.kotakarim@fleetmail.inmarsat.com', 'master.kotakaya@fleetmail.inmarsat.com', 'master.kotalagu@fleetmail.inmarsat.com', 'master.kotalambai@orillamail.com', 'master.kotalambang@fleetmail.inmarsat.com', 'master.kotalaris@fleetmail.inmarsat.com', 'master.kotalawa@orillamail.com', 'master.kotalayang@orillamail.com', 'master.kotalegit@fleetmail.inmarsat.com', 'master.kotalekas@fleetmail.inmarsat.com', 'master.kotalembah@orillamail.com', 'master.kotalestari@fleetmail.inmarsat.com', 'master.kotalihat@fleetmail.inmarsat.com', 'vsl_127@danaos.gr', 'master.kotaloceng@fleetmail.inmarsat.com', 'master.kotalukis@fleetmail.inmarsat.com', 'master.kotalumayan@orillamail.com', 'master.kotalumba@fleetmail.inmarsat.com', 'master.kotamachan@orillamail.com', 'master.kotamakmur@fleetmail.inmarsat.com', 'master.kotamanis@fleetmail.inmarsat.com', 'vsl_134@danaos.gr', 'master.kotamegah@orillamail.com', 'master.kotanabil@fleetmail.inmarsat.com', 'master.kotanaga@fleetmail.inmarsat.com ', 'master.kotanaluri@fleetmail.inmarsat.com ', 'master.kotananhai@orillamail.com ', 'master.kotanasrat@fleetmail.inmarsat.com ', 'master.kotanazar@fleetmail.inmarsat.com', 'master.kotanazim@fleetmail.inmarsat.com ', 'master.kotanebula@fleetmail.inmarsat.com', 'master.kotanekad@orillamail.com', 'master.kotanilam@fleetmail.inmarsat.com', 'master.kotanipah@orillamail.com ', 'master.kotapahlawan@orillamail.com', 'master.kotapelangi@orillamail.com', 'vsl_111@danaos.gr', 'vsl_112@danaos.gr', 'master.kotapuri@orillamail.com', 'master.kotapusaka@orillamail.com', 'master.kotarahmat@orillamail.com', 'master.kotaraja@orillamail.com', 'master.kotarajin@orillamail.com', 'master.kotarakan@fleetmail.inmarsat.com', 'master.kotarakyat@orillamail.com', 'master.kotarancak@orillamail.com', 'master.kotaratna@orillamail.com', 'master.kotaratu@orillamail.com', 'master.kotarestu@orillamail.com', 'master.kotaria@orillamail.com', 'master.kotarukun@orillamail.com', 'master.kotasabas@fleetmail.inmarsat.com', 'master.kotasahabat@fleetmail.inmarsat.com', 'master.kotasalam@fleetmail.inmarsat.com', 'vsl_132@danaos.gr', 'master.kotasatria@orillamail.com', 'master.kotasegar@fleetmail.inmarsat.com', 'master.kotasejarah@orillamail.com', 'master.kotasejati@orillamail.com', 'master.kotaselamat@orillamail.com', 'master.kotasempena@orillamail.com', 'master.kotasetia@orillamail.com', 'master.kotasinga@orillamail.com', 'master.kotasuria@fleetmail.inmarsat.com', 'kota.tema@rclfleet.com', 'master.kotatenaga@orillamail.com', 'master.matsonmaui@fleetmail.inmarsat.com', 'master.salammaju@orillamail.com', 'master.selatandamai@orillamail.com']

const POLARIS_shipname = ['POLAR ACE', 'POLAR BRIGHT', 'SAO DIANA', 'SAO EBBA', 'SAO FABIAN', 'SAO GRACE', 'SAO HEAVEN', 'SAO INDIGO', 'SAO JOY', 'SAO KAREN', 'SAO QUIXOTE', 'SAO ROSE OF SHARON', 'SAO SABIA', 'SAO TITAN', 'SAO UNISON', 'SOLAR DOLPHIN', 'SOLAR FRONTIER', 'SOLAR GLORY', 'SOLAR HOPE', 'SOLAR ICON', 'SOLAR LEGEND', 'SOLAR MAJESTY', 'SOLAR NOVA', 'SOLAR OAK', 'SOLAR PRIDE', 'SOLAR QUANTUM', 'STELLAR ACE', 'STELLAR CROWN', 'STELLAR VENTURE', 'STELLAR WAY', 'STELLAR YOUNG']	
const POLARIS_email = ['POLARACE@polaris-ship.com', 'POLARBRIGHT@polaris-ship.com', 'SAODIANA@polaris-ship.com', 'SAOEBBA@polaris-ship.com', 'SAOFABIAN@polaris-ship.com', 'SAOGRACE@polaris-ship.com', 'SAOHEAVEN@polaris-ship.com', 'SAOINDIGO@polaris-ship.com', 'SAOJOY@polaris-ship.com', 'SAOKAREN@polaris-ship.com', 'SAOQUIXOTE@polaris-ship.com', 'SAOROSEOFSHARON@polaris-ship.com', 'SAOSABIA@polaris-ship.com', 'SAOTITAN@polaris-ship.com', 'SAOUNISON@polaris-ship.com', 'SOLARDOLPHIN@polaris-ship.com', 'SOLARFRONTIER@polaris-ship.com', 'SOLARGLORY@polaris-ship.com', 'SOLARHOPE@polaris-ship.com', 'SOLARICON@polaris-ship.com', 'SOLARLEGEND@polaris-ship.com', 'SOLARMAJESTY@polaris-ship.com', 'SOLARNOVA@polaris-ship.com', 'SOLAROAK@polaris-ship.com', 'SOLARPRIDE@polaris-ship.com', 'SOLARQUANTUM@polaris-ship.com', 'STELLARACE@polaris-ship.com', 'STELLARCROWN@polaris-ship.com', 'STELLARVENTURE@polaris-ship.com', 'STELLARWAY@polaris-ship.com', 'STELLARYOUNG@polaris-ship.com']

const POSSM_shipname = ['ARBORELLA', 'BRASSIANA', 'BUM SHIN', 'BUM YOUNG', 'CITRIODORA', 'CS BREEZE', 'CS CRANE', 'CS HANA', 'CS SUMMER', 'DELICATA', 'DUNNII', 'GRAND ACE1', 'GRAND ACE10', 'GRAND ACE11', 'GRAND ACE12', 'GRAND ACE5', 'GRAND ACE6', 'GRAND ACE9', 'GRAND AMBITION', 'GRAND BONANZA', 'GRAND WINNER 1', 'GRAND WINNER 2', 'GRAND WINNER 3', 'GRAND WINNER 5', 'GRANDIS', 'HALOPHYLA', 'HL MIDLAND', 'LNG KOLT', 'NEW APEX', 'PAN ACACIA', 'PAN ADVANCE', 'PAN AMBER', 'PAN BICORN', 'PAN BONA', 'PAN BONITA', 'PAN CERES', 'PAN CHAMPION', 'PAN CLOVER', 'PAN COSMOS', 'PAN DANGJIN', 'PAN DELIGHT', 'PAN DREAM', 'PAN ENERGEN', 'PAN EPIC', 'PAN FALCON', 'PAN FLOWER', 'PAN FORTUNE', 'PAN FREEDOM', 'PAN FREESIA', 'PAN GLOBAL', 'PAN GRACE', 'PAN HARVEST', 'PAN HOPE', 'PAN HORIZON', 'PAN IMPERIAL', 'PAN IRIS', 'PAN JOY', 'PAN KOMIPO', 'PAN KRISTINE', 'PAN MAJESTY', 'PAN MARGARET', 'PAN MUTIARA', 'PAN NAVIGATOR', 'PAN NOVA', 'PAN OPTIMUM', 'PAN POSEIDON', 'PAN QUEEN', 'PAN QUEST', 'PAN RAPIDO', 'PAN REGINA', 'PAN TOPAZ', 'PAN VIVA', 'POS BANGKOK', 'POS HOCHIMINH', 'POS SHANGHAI', 'POS TOKYO', 'POS YOKOHAMA', 'ROBUSTA', 'SALIGNA', 'SEA BEIJING', 'SEA CAOFEIDIAN', 'SEA ESPIRITO SANTO', 'SEA FUJIYAMA', 'SEA GUAIBA', 'SEA INDONESIA', 'SEA MARANHAO', 'SEA PONTA DA MADEIRA', 'SEA QINGDAO', 'SEA RIO DE JANEIRO', 'SEA SHANGHAI', 'SEA TUBARAO', 'SEA VICTORIA', 'SEA ZHOUSHAN', 'SUN ORCHID', 'SUN RISE', 'SUN SHINE', 'SUPER EASTERN', 'SUPER FORTE', 'SUPER HERO', 'SUPER INFINITY', 'UROPHYLLA', 'PAN ORION', 'PAN PEGASUS', 'PAN QUANTUM', 'POS QINGDAO', 'POS GUANGZHOU', 'PAN GOLD', 'POS LAEMCHABANG', 'POS SINGAPORE', 'PAN CONCORD']	
const POSSM_email = ['ARBORELLA@panocean.com', 'BRASSIANA@panocean.com', 'BUMSHIN@panocean.com', 'BUMYOUNG@panocean.com', 'CITRIODORA@panocean.com', 'CSBREEZE@sea-one.com', 'CSCRANE@sea-one.com', 'CSHANA@sea-one.com', 'CSSUMMER@sea-one.com', 'DELICATA@panocean.com', 'DUNNII@panocean.com', 'GRANDACE1@panocean.com', 'GRANDACE10@panocean.com', 'GRANDACE11@panocean.com', 'GRANDACE12@panocean.com', 'GRANDACE5@panocean.com', 'GRANDACE6@panocean.com', 'GRANDACE9@panocean.com', 'GRANDAMBITION@panocean.com', 'GRANDBONANZA@panocean.com', 'GRANDWINNER1@panocean.com', 'GRANDWINNER2@panocean.com', 'GRANDWINNER3@panocean.com', 'GRANDWINNER5@panocean.com', 'GRANDIS@panocean.com', 'HALOPHYLA@panocean.com', 'hlmidland@sea-one.com', 'LNGKOLT@panocean.com', 'NEWAPEX@panocean.com', 'PANACACIA@panocean.com', 'PANADVANCE@panocean.com', 'PANAMBER@panocean.com', 'PANBICORN@panocean.com', 'PANBONA@panocean.com', 'PANBONITA@panocean.com', 'PANCERES@panocean.com', 'PANCHAMPION@panocean.com', 'PANCLOVER@panocean.com', 'PANCOSMOS@panocean.com', 'PANDANGJIN@panocean.com', 'PANDELIGHT@panocean.com', 'PANDREAM@panocean.com', 'PANENERGEN@panocean.com', 'PANEPIC@panocean.com', 'PANFALCON@panocean.com', 'PANFLOWER@panocean.com', 'PANFORTUNE@panocean.com', 'PANFREEDOM@panocean.com', 'PANFREESIA@panocean.com', 'PANGLOBAL@panocean.com', 'PANGRACE@panocean.com', 'PANHARVEST@panocean.com', 'PANHOPE@panocean.com', 'PANHORIZON@panocean.com', 'PANIMPERIAL@panocean.com', 'PANIRIS@panocean.com', 'PANJOY@panocean.com', 'PANKOMIPO@panocean.com', 'PANKRISTINE@panocean.com', 'PANMAJESTY@panocean.com', 'PANMARGARET@panocean.com', 'PANMUTIARA@panocean.com', 'PANNAVIGATOR@panocean.com', 'PANNOVA@panocean.com', 'PANOPTIMUM@panocean.com', 'PANPOSEIDON@panocean.com', 'PANQUEEN@panocean.com', 'PANQUEST@panocean.com', 'PANRAPIDO@panocean.com', 'PANREGINA@panocean.com', 'PANTOPAZ@panocean.com', 'PANVIVA@panocean.com', 'POSBANGKOK@panocean.com', 'POSHOCHIMINH@panocean.com', 'POSSHANGHAI@panocean.com', 'POSTOKYO@panocean.com', 'POSYOKOHAMA@panocean.com', 'ROBUSTA@panocean.com', 'SALIGNA@panocean.com', 'SEABEIJING@panocean.com', 'SEACAOFEIDIAN@panocean.com', 'SEAESPIRITOSANTO@panocean.com', 'SEAFUJIYAMA@panocean.com', 'SEAGUAIBA@panocean.com', 'SEAINDONESIA@panocean.com', 'SEAMARANHAO@panocean.com', 'SEAPONTADAMADEIRA@panocean.com', 'SEAQINGDAO@panocean.com', 'SEARIODEJANEIRO@panocean.com', 'SEASHANGHAI@panocean.com', 'SEATUBARAO@panocean.com', 'SEAVICTORIA@panocean.com', 'SEAZHOUSHAN@panocean.com', 'SUNORCHID@panocean.com', 'SUNRISE@panocean.com', 'SUNSHINE@panocean.com', 'SUPEREASTERN@panocean.com', 'SUPERFORTE@panocean.com', 'SUPERHERO@panocean.com', 'SUPERINFINITY@panocean.com', 'UROPHYLLA@panocean.com', 'panorion@panocean.com', 'panpegasus@panocean.com', 'PANQUANTUM@PANOCEAN.COM', 'posqingdao@panocean.com', 'posguangzhou@panocean.com', 'pangold@panocean.com', 'poslaemchabang@panocean.com', 'possingapore@panocean.com', 'master.panconcord@fleetmail.inmarsat.com']

const SK_SHIPPING_shipname	= ['C. GLORY', 'C. DIGNITY', 'K. HOPE']	
const SK_SHIPPING_email = ['', 'Cdignity@SkyFile.com', 'Khope@SkyFile.com']

const SN_GLOBAL_shipname=	['SN OPAL', 'SN SERENITY']	
const SN_GLOBAL_email = ['snopal@sea-one.com', 'snserenity@sea-one.com']

const SONGA_shipname = ['SONGA PUMA', 'SONGA SAPPHIRE']	
const SONGA_email = ['master.songa-puma@songaship.com', 'master.songa-sapphire@songaship.com']

const STX_shipname=	['ULTRA ALPHA', 'DL OLIVE', 'DL LAVENDER', 'DL ACACIA', 'DL TULIP', 'DL MARIGOLD', 'DL ADONIS', 'DL JASMINE', 'DL LILAC', 'DL PANSY', 'INWANG', 'DL DAHLIA', 'MINERAL CHINA', 'ORIENTAL STAR', 'ORIENTAL FRONTIER', 'ORIENTAL NAVIGATOR', 'DONGBANG GIANT NO.8', 'DONGBANG GIANT NO.6', 'DONGBANG GIANT NO.3', 'DONGBANG GIANT NO.7', 'MEGA CARAVAN', 'MEGA CARAVAN 2', 'ORIENTAL ENTERPRISE', 'ORIENTAL LEADER', 'SEA FUTURE', 'SEA HONESTY', 'SHINSUNG CLEVER', 'CS GLORY']	
const STX_email = ['UTA@amosconnect.com', 'dlolive@bluewavemail.com', 'dllavender@bluewavemail.com', 'dlacacia@sea-one.com', 'dltulip@sea-one.com', 'dlmarigold@sea-one.com', 'dladonis@bluewavemail.com', 'dljasmine@sea-one.com', 'dllilac@sea-one.com', 'dlpansy@sea-one.com', 'inwang@bluewavemail.com', 'dldahlia@sea-one.com', 'mineralchina@sea-one.com', 'orientalstar@sea-one.com', 'orientalfrontier@sea-one.com', 'orientalnavigator@sea-one.com', 'dongbang.giant8@sea-one.com', 'dongbang.giant6@sea-one.com', 'dongbang-giant3@sea-one.com', 'dongbang.giant7@sea-one.com', 'megacaravan@megavessel.co.kr', 'megacaravan2@megavessel.co.kr', 'orientalenterprise@sea-one.com', 'orientalleader@sea-one.com', 'seafuture@sea-one.com', 'seahonesty@sea-one.com', 's.clever@bluewavemail.com', 'csglory@bluewavemail.com']

const TMS_shipname =	['GNS HARMONY', 'GNS HARVEST', 'GNS HOPE']	
const TMS_email = ['gnsharmony@arionmail.com', 'gnsharvest@bluewavemail.com', '']

const YOUHA_MARINE_shipname =	['CS SUMMER', 'CS BREEZE', 'CS HANA']	
const YOUHA_MARINE_email = ['CSSUMMER@sea-one.com', 'CSBREEZE@sea-one.com', 'CSHANA@sea-one.com']

const WOCEAN_shipname=	['WOOHYUN SKY', 'WOOHYUN GREEN', 'WOOHYUN HOPE', 'WOOHYUN STAR']	
const WOCEAN_email = ['whsky@woohyunshpg.co.kr', 'whgreen@woohyunshpg.co.kr', 'whhope@woohyunshpg.co.kr', 'whstar@woohyunshpg.co.kr']

const DORIKO_shipname =	['AH SHIN', 'CRYSTAL OCEAN', 'G POSEIDON', 'GMT ASTRO', 'HAE SHIN', 'SANG SHIN', 'SEA COEN', 'SEA GRACE', 'SJ ASIA', 'SOO SHIN', 'YOUNG SHIN', 'CHANG SHIN']	
const DORIKO_email = ['asn@skyfile.com', 'cro@amosconnect.com', 'gpo@sksat.kr', 'GMA@amosconnect.com', 'hae@skyfile.com', 'master.ssh@skyfile.com', 'sco@sksat.kr', 'seagrace@sksat.kr', 'sja@amosconnect.com', 'master.son@skyfile.com', 'ysh@skyfile.com', 'master.csh@skyfile.com']

const LEESHIPPING_shipname =	['RABIGH SUNSHINE', 'BUENA CONFIANZA']	
const LEESHIPPING_email = ['r.sunshine@sea-one.com', 'b.confianza@sea-one.com']

const BEOMJOO_shipname= ['PANCON CHAMPION', 'PANCON GLORY', 'PANCON SUCCESS', 'PANCON VICTORY', 'PANCON SUNSHINE', 'PANCON HARMONY', 'PANCON BRIDGE']	
const BEOMJOO_email = ['pchm@panconship.co.kr', 'pglo@panconship.co.kr', 'psuc@panconship.co.kr', 'pvic@panconship.co.kr', 'psun@panconship.co.kr', 'phar@panconship.co.kr', 'pbrg@panconship.co.kr']

const SEONGHO_shipname =	['SH OLIVIA', 'SH VENUS', 'SEONGHO ACE', 'NEW STAR', 'NEW SILVER', 'NEW GLOBAL', 'NEW HARMONY', 'SEONGHO GALAXY', 'SEONGHO PIOCE']	
const SEONGHO_email = ['sh.olivia@sea-one.com', 'sh.venus@sea-one.com', 's.ace@arionmail.com', 'n.star@arionmail.com', 'n.silver@arionmail.com', 'n.global@arionmail.com', 'n.harmony@arionmail.com', 's.galaxy@arionmail.com', 's.pioce@arionmail.com']

const SINOKOR_shipname=	['SAWASDEE SUNRISE', 'OCEAN CARRIER', 'BALTIC WEST']	
const SINOKOR_email = ['sawasdeesunrise@sea-one.com', 'oceancarrier@sea-one.com', 'balticwest@amosconnect.com']

const CIDO_shipname=	['DREAM ANGEL', 'DREAM BEAUTY', 'DREAM DIAMOND', 'DREAM ORCHID', 'FORTUNE BELL', 'FORTUNE TIGER', 'FORTUNE VIOLET', 'FORTUNE WING', 'GRAND AURORA', 'GRAND CHAMPION', 'GRAND DAHLIA', 'GRAND DOLPHIN', 'GRAND DUKE', 'GRAND LEGACY', 'GRAND NEPTUNE', 'GRAND ORION', 'GRAND PAVO', 'GOLD ESTRELLA', 'GRAND PHOENIX', 'GRAND VEGA', 'GRAND VICTORY', 'GREAT NAVIGATOR', 'MODERN LINK', 'DREAM JASMINE', 'GRAND CHOICE', 'GRAND COSMO', 'GRAND DIAMOND', 'GRAND EAGLE', 'GRAND HERO', 'GRAND MARK', 'GRAND MERCURY', 'GRAND QUEST', 'GRAND RUBY', 'GRAND SAPPHIRE', 'GRAND URANUS', 'GRAND VENUS', 'SPRING SKY', 'SPRING WIND', 'DREAM DIVA', 'GRAND PACE', 'GRAND PIONEER', 'GRAND RACE']	
const CIDO_email = ['dran@vessel.cidoship.com', 'drbe@vessel.cidoship.com', 'drdi@vessel.cidoship.com', 'dror@vessel.cidoship.com', 'fobe@vessel.cidoship.com', 'foti@vessel.cidoship.com', 'fovi@vessel.cidoship.com', 'fowi@vessel.cidoship.com', 'grau@vessel.cidoship.com', 'grcp@vessel.cidoship.com', 'grda@vessel.cidoship.com', 'grdo@vessel.cidoship.com', 'grdu@vessel.cidoship.com', 'grle@vessel.cidoship.com', 'grne@vessel.cidoship.com', 'gror@vessel.cidoship.com', 'grpv@vessel.cidoship.com', 'gest@vessel.cidoship.com', 'grph@vessel.cidoship.com', 'grvg@vessel.cidoship.com', 'grvi@vessel.cidoship.com', 'gtna@vessel.cidoship.com', 'mrli@vessel.cidoship.com', 'drja@vessel.cidoship.com', 'grch@vessel.cidoship.com', 'grco@vessel.cidoship.com', 'grdi@vessel.cidoship.com', 'grea@vessel.cidoship.com', 'grhe@vessel.cidoship.com', 'grma@vessel.cidoship.com', 'grme@vessel.cidoship.com', 'grqu@vessel.cidoship.com', 'grru@vessel.cidoship.com', 'grsa@vessel.cidoship.com', 'grur@vessel.cidoship.com', 'grve@vessel.cidoship.com', 'spsk@vessel.cidoship.com', 'spwi@vessel.cidoship.com', 'drdv@vessel.cidoship.com', 'grpa@vessel.cidoship.com', 'grpi@vessel.cidoship.com', 'grra@vessel.cidoship.com']

const SHINSUNG_shipname=	['SHINSUNG BRIGHT', 'SHINSUNG ACCORD']	
const SHINSUNG_email = ['s.bright@sksat.kr', 's.accord@sksat.kr']

const WOOLIM_shipname= 	['WOOLIM 3', 'WOOLIM DRAGON']	
const WOOLIM_email = ['', '']

const WILHELMSEN_shipname=	['NEW FRONTIER1', 'NEW FRONTIER2']	
const WILHELMSEN_email = ['master.newfrontier1@ship.wilhelmsen.com', 'master.newfrontier2@ship.wilhelmsen.com']

const MEGALINE_shipname =	['MEGA TRUST', 'MEGA PASSION']	
const MEGALINE_email = ['megatrust@sea-one.com', 'megapassion@sea-one.com']

const JOONGANG_shipname=	['GLAD YOUNG', 'YOUNG HARMONY', 'YOUNG SPIRIT', 'YOUNG GLORY', 'SOUND YOUNG']	
const JOONGANG_email = ['jaglad@sea-one.com', 'jaharmony@sea-one.com', 'jaspirit@sea-one.com', 'jaglory@sea-one.com', 'jasound@sea-one.com']

const KORINSTAR_shipname =	['KS ADONIS', 'KS GRACE', 'POLARIS', 'KS CAMELLIA']	
const KORINSTAR_email = ['ksad@sksat.kr', 'ksgr@sksat.kr', 'polaris@sksat.kr', 'ksca@sksat.kr']

const TAIKOON_shipname =	['FG ROTTERDAM', 'JBU SAPPHIRE', 'JBU OPAL', 'CARIBBEAN 1', 'DS OCEAN', 'DS COUGAR', 'KOREA CHEMI', 'DM JADE', 'DM EMERALD', 'DM DRAGON', 'DM CONDOR', 'MEDIA', 'DM BEATRICE', 'GOLDEN DENISE']	
const TAIKOON_email = ['fgrotterdam@sea-one.com', 'jbusapphire@sea-one.com ', 'jbuopal@gtmailplus.com ', 'caribbean@sea-one.com ', 'dsocean@sea-one.com ', 'dscougar@sea-one.com ', 'koreachemi@sea-one.com ', 'Dmjade@SkyFile.com ', 'dmemerald@sea-one.com', 'dmdragon@sea-one.com ', 'dmcondor@sea-one.com ', '', 'dmbeatrice@stationsatcommail.com', 'goldendenise@sea-one.com ']

const HANARO_shipname =	['SEA EMPIRE', 'SEA OPAL', 'SEA HOPE', 'SEA DIAMOND', 'SEA SAPPHIRE', 'SEA TOPAZ', 'SEN TREASURE', 'PHOENIX NEREID', 'SEA ORION']	
const HANARO_email = ['seaempire1@sksat.kr', 'seaopal1@sksat.kr', 'seahope1@sksat.kr', 'seadiamond1@sksat.kr', 'seasapphire1@sksat.kr', 'seatopaz1@sksat.kr', 'sentreasure@sksat.kr', 'phoenixnereid@sksat.kr', 'seaorion@sksat.kr']

const HANGANG_shipname =	['GOLDEN MAPLE', 'MAPLE MARINA', 'MAPLE HARBOUR']	
const HANGANG_email = ['goldenmaple@sksat.kr', 'maple_marina@skyfile.com', 'mapleharbour@sksat.kr']

const FAIR_shipname =	['DONGBANG GIANT NO.1', 'DONGBANG GIANT NO.2', 'DONGBANG GIANT NO.5']	
const FAIR_email = ['dongbang.giant1@sea-one.com', 'dongbanggiant2@sea-one.com', 'dongbang.giant5@sea-one.com']

const EsMaritime_shipname = ['SEA CRYSTAL']
const EsMaritime_email = ['3fbd4@sea-one.com']



function makejson_email (shipnames, email) {
    return shipnames.map((name, index) => ({
      SHIPNAME: name,
      SHIPKEY: email[index]
    }));
  }


  const finalObject = {
    CIDO: makejson_email (CIDO_shipname, CIDO_email),
    POLARIS: makejson_email (POLARIS_shipname, POLARIS_email),
    POSSM: makejson_email (POSSM_shipname, POSSM_email),
    FMLK: makejson_email (FMLK_shipname, FMLK_email),
    STX : makejson_email (STX_shipname, STX_email),
    DORIKO : makejson_email (DORIKO_shipname, DORIKO_email),
    TAIKOON : makejson_email (TAIKOON_shipname, TAIKOON_email),
    KSS : makejson_email (KSS_shipname, KSS_email),
    HANARO : makejson_email (HANARO_shipname, HANARO_email),
    KSM : makejson_email (KSM_shipname, KSM_email),
    WILHELMSEN : makejson_email (WILHELMSEN_shipname, WILHELMSEN_email),
    SNGLOBAL : makejson_email (SN_GLOBAL_shipname, SN_GLOBAL_email),
    NJSM : makejson_email(NJSM_shipname, NJSM_email),
    MEGALINE : makejson_email (MEGALINE_shipname, MEGALINE_email),
    KORINSTAR : makejson_email (KORINSTAR_shipname, KORINSTAR_email),
    FAIR : makejson_email (FAIR_shipname, FAIR_email),
    SHINSUNG : makejson_email (SHINSUNG_shipname, SHINSUNG_email),
    BEOMJOO : makejson_email (BEOMJOO_shipname, BEOMJOO_email),
    JOONGANG : makejson_email (JOONGANG_shipname, JOONGANG_email),
    SINOKOR : makejson_email (SINOKOR_shipname, SINOKOR_email),
    LEESHIPPING : makejson_email (LEESHIPPING_shipname, LEESHIPPING_email),
    HANGANG : makejson_email (HANGANG_shipname, HANGANG_email),
    SEONGHO : makejson_email (SEONGHO_shipname, SEONGHO_email),
    BEOMJOO : makejson_email (BEOMJOO_shipname, BEOMJOO_email),
    PANBULK : makejson_email (PANBULK_shipname, PANBULK_email),
    WOCEAN : makejson_email (WOCEAN_shipname, WOCEAN_email),
    GFSM : makejson_email (GFSM_shipname, GFSM_email),
    TMS : makejson_email(TMS_shipname, TMS_email),
    SONGA : makejson_email(SONGA_shipname, SONGA_email),
    GLOVIS : makejson_email(GLOVIS_shipname, GLOVIS_email),
    SK_SHIPPING : makejson_email(SK_SHIPPING_shipname, SK_SHIPPING_email),
    PIL : makejson_email (PIL_shipname,PIL_email),
    HOS : makejson_email (HOS_shipname,HOS_email),
    ES_MARITIME : makejson_email (EsMaritime_shipname,EsMaritime_email),
    YOUHA_MARINE : makejson_email (YOUHA_MARINE_shipname,YOUHA_MARINE_email),
    WOOLIM : makejson_email (WOOLIM_shipname, WOOLIM_email),
    KLCSM : makejson_email (KLCSM_shipname, KLCSM_email),
    HMM : makejson_email (HMM_shipname, HMM_email),
  };


  const jsonString = JSON.stringify(finalObject, null, 2);

  fs.writeFile('ships_email_1.json', jsonString)
    .then(() => {
      console.log('JSON file has been saved.');
    })
    .catch((err) => {
      console.error('Error while saving JSON file:', err);
    });








