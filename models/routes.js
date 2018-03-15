// export the class

//https://www.gpsies.com/
//(.*),(.*),(.*)
//{ lat: $1, lon: $2, el: $3 },
//Larger round in oslo
const OSLO_ROUND = {
    name: "Gressholmen",
    meters: '7000',
    country: 'Norway',
    index: 0,
    segementId: 0,
    gps: [
    { lat: 59.88458761, lon: 10.76115131, el: 4.0 },
    { lat: 59.88493213, lon: 10.75711727, el: 1.0 },
    { lat: 59.88514745, lon: 10.75505733, el: 1.0 },
    { lat: 59.88506132, lon: 10.75196743, el: 1.0 },
    { lat: 59.88506132, lon: 10.74990749, el: 1.0 },
    { lat: 59.88506132, lon: 10.74767589, el: 1.0 },
    { lat: 59.88493213, lon: 10.74467182, el: 1.0 },
    { lat: 59.88523358, lon: 10.74252605, el: 1.0 },
    { lat: 59.88605179, lon: 10.74132442, el: 1.0 },
    { lat: 59.88618098, lon: 10.73874950, el: 1.0 },
    { lat: 59.88622404, lon: 10.73643207, el: 1.0 },
    { lat: 59.88622404, lon: 10.73445796, el: 1.0 },
    { lat: 59.88618098, lon: 10.73196887, el: 1.0 },
    { lat: 59.88669773, lon: 10.72990894, el: 1.0 },
    { lat: 59.88686998, lon: 10.72836399, el: 1.0 },
    { lat: 59.88721447, lon: 10.72690486, el: 1.0 },
    { lat: 59.88725753, lon: 10.72484493, el: 1.0 },
    { lat: 59.88717141, lon: 10.72338581, el: 1.0 },
    { lat: 59.88708529, lon: 10.72132587, el: 1.0 },
    { lat: 59.88699916, lon: 10.71918010, el: 1.0 },
    { lat: 59.88678385, lon: 10.71694850, el: 1.0 },
    { lat: 59.88643936, lon: 10.71514606, el: 1.0 },
    { lat: 59.88618098, lon: 10.71227073, el: 1.0 },
    { lat: 59.88583647, lon: 10.71055412, el: 1.0 },
    { lat: 59.88523358, lon: 10.70952415, el: 1.0 },
    { lat: 59.88411389, lon: 10.70900917, el: 1.0 },
    { lat: 59.88299417, lon: 10.70935249, el: 1.0 },
    { lat: 59.88170213, lon: 10.70883750, el: 1.0 },
    { lat: 59.87997934, lon: 10.70866584, el: 1.0 },
    { lat: 59.87911791, lon: 10.71003913, el: 1.0 },
    { lat: 59.87825646, lon: 10.71192741, el: 1.0 },
    { lat: 59.87773957, lon: 10.71484565, el: 1.0 },
    { lat: 59.87773957, lon: 10.71793556, el: 1.0 },
    { lat: 59.87808416, lon: 10.71999549, el: 1.0 },
    { lat: 59.87817031, lon: 10.72274208, el: 1.0 },
    { lat: 59.87756728, lon: 10.72428703, el: 1.0 },
    { lat: 59.87687809, lon: 10.72651863, el: 1.0 },
    { lat: 59.87575812, lon: 10.72703361, el: 1.0 },
    { lat: 59.87463811, lon: 10.72806358, el: 1.0 },
    { lat: 59.87403502, lon: 10.72960853, el: 1.0 },
    { lat: 59.87437964, lon: 10.73321342, el: 1.0 },
    { lat: 59.87472427, lon: 10.73596000, el: 1.0 },
    { lat: 59.87541351, lon: 10.73767662, el: 1.0 },
    { lat: 59.87567197, lon: 10.74042320, el: 1.0 },
    { lat: 59.87748113, lon: 10.74385643, el: 1.0 },
    { lat: 59.87885948, lon: 10.74866294, el: 1.0 },
    { lat: 59.87980706, lon: 10.75123786, el: 1.0 },
    { lat: 59.88152986, lon: 10.75518608, el: 1.0 },
    { lat: 59.88325257, lon: 10.75879096, el: 1.0 },
    { lat: 59.88394163, lon: 10.76067924, el: 1.0 }
    ]
};


// Short round in Oslo
const OSLO_SMALL = {
    name: "Ormsundet",
    country: 'Norway',
    index: 1,
    segementId: 0,
    meters: '600',
    gps: [
        {lat: 59.88458761, lon: 10.76097965, el: 3.0},
        {lat: 59.88488907, lon: 10.75823307, el: 1.0},
        {lat: 59.88544890, lon: 10.75488567, el: 1.0},
        {lat: 59.88536277, lon: 10.75050830, el: 1.0},
        {lat: 59.88510439, lon: 10.74767589, el: 1.0},
        {lat: 59.88437229, lon: 10.74467182, el: 1.0},
        {lat: 59.88303724, lon: 10.74312686, el: 1.0},
        {lat: 59.88230509, lon: 10.74166774, el: 1.0},
        {lat: 59.88118530, lon: 10.74106693, el: 1.0},
        {lat: 59.88028084, lon: 10.74063777, el: 1.0},
        {lat: 59.87963477, lon: 10.74089527, el: 1.0},
        {lat: 59.87864411, lon: 10.74149608, el: 1.0},
        {lat: 59.87795494, lon: 10.74192523, el: 1.0},
        {lat: 59.87739498, lon: 10.74252605, el: 1.0},
        {lat: 59.87640426, lon: 10.74321269, el: 1.0},
        {lat: 59.87554274, lon: 10.74235439, el: 1.0},
        {lat: 59.87463811, lon: 10.74115276, el: 1.0},
        {lat: 59.87356115, lon: 10.74072360, el: 1.0},
        {lat: 59.87274263, lon: 10.74132442, el: 1.0},
        {lat: 59.87231183, lon: 10.74304103, el: 1.0},
        {lat: 59.87226874, lon: 10.74492931, el: 1.0},
        {lat: 59.87218258, lon: 10.74681758, el: 1.0},
        {lat: 59.87269955, lon: 10.74827671, el: 1.0},
        {lat: 59.87356115, lon: 10.75025081, el: 1.0},
        {lat: 59.87437964, lon: 10.75179576, el: 1.0},
        {lat: 59.87519812, lon: 10.75265407, el: 1.0},
        {lat: 59.87610273, lon: 10.75394153, el: 1.0},
        {lat: 59.87743806, lon: 10.75522899, el: 1.0},
        {lat: 59.87825646, lon: 10.75591564, el: 1.0},
        {lat: 59.87890255, lon: 10.75703144, el: 1.0},
        {lat: 59.88010855, lon: 10.75780391, el: 1.0},
        {lat: 59.88105610, lon: 10.75883388, el: 1.0},
        {lat: 59.88200361, lon: 10.75917720, el: 1.0},
        {lat: 59.88312337, lon: 10.75969219, el: 1.0},
        {lat: 59.88394163, lon: 10.76029300, el: 1.0},
        {lat: 59.88428616, lon: 10.76097965, el: 1.0}
    ]
};

//Ildjernet
const ILDJERNET = {
    name: "Ildjernet",
    country: 'Norway',
    index: 2,
    meters: '20610',
    segementId: 0,
    gps: [
        {lat: 59.88463068, lon: 10.76067924, el: 2.0},
        {lat: 59.88428616, lon: 10.75758934, el: 1.0},
        {lat: 59.88376937, lon: 10.75415611, el: 1.0},
        {lat: 59.88325257, lon: 10.75089454, el: 1.0},
        {lat: 59.88299417, lon: 10.74746131, el: 1.0},
        {lat: 59.88187441, lon: 10.74402809, el: 1.0},
        {lat: 59.88135758, lon: 10.74110984, el: 1.0},
        {lat: 59.88075461, lon: 10.73681831, el: 1.0},
        {lat: 59.87989320, lon: 10.73252677, el: 1.0},
        {lat: 59.87946248, lon: 10.72995185, el: 1.0},
        {lat: 59.87929020, lon: 10.72720527, el: 1.0},
        {lat: 59.87860104, lon: 10.72291374, el: 1.0},
        {lat: 59.87773957, lon: 10.71879386, el: 1.0},
        {lat: 59.87722268, lon: 10.71415901, el: 1.0},
        {lat: 59.87687809, lon: 10.71038246, el: 1.0},
        {lat: 59.87670579, lon: 10.70626258, el: 1.0},
        {lat: 59.87644733, lon: 10.70197105, el: 1.0},
        {lat: 59.87601658, lon: 10.69750785, el: 1.0},
        {lat: 59.87541351, lon: 10.69321632, el: 1.0},
        {lat: 59.87524120, lon: 10.68806648, el: 1.0},
        {lat: 59.87506889, lon: 10.68446159, el: 1.0},
        {lat: 59.87524120, lon: 10.68051338, el: 1.0},
        {lat: 59.87515504, lon: 10.67587852, el: 1.0},
        {lat: 59.87498273, lon: 10.67193031, el: 1.0},
        {lat: 59.87455196, lon: 10.66781044, el: 1.0},
        {lat: 59.87420733, lon: 10.66369056, el: 1.0},
        {lat: 59.87386270, lon: 10.65922737, el: 1.0},
        {lat: 59.87291495, lon: 10.65493583, el: 1.0},
        {lat: 59.87153636, lon: 10.65115928, el: 1.0},
        {lat: 59.86981304, lon: 10.64806938, el: 1.0},
        {lat: 59.86843432, lon: 10.64635276, el: 1.0},
        {lat: 59.86740024, lon: 10.64600944, el: 1.0},
        {lat: 59.86593524, lon: 10.64721107, el: 1.0},
        {lat: 59.86438400, lon: 10.64892768, el: 1.0},
        {lat: 59.86266031, lon: 10.64927101, el: 1.0},
        {lat: 59.86102272, lon: 10.64841270, el: 1.0},
        {lat: 59.85921266, lon: 10.64806938, el: 1.0},
        {lat: 59.85757490, lon: 10.64652442, el: 1.0},
        {lat: 59.85593706, lon: 10.64635276, el: 1.0},
        {lat: 59.85378188, lon: 10.64343452, el: 1.0},
        {lat: 59.85266114, lon: 10.64326286, el: 1.0},
        {lat: 59.85188521, lon: 10.64223289, el: 1.0},
        {lat: 59.85041953, lon: 10.64103126, el: 1.0},
        {lat: 59.84947111, lon: 10.64000129, el: 1.0},
        {lat: 59.84826400, lon: 10.63811302, el: 1.0},
        {lat: 59.84766042, lon: 10.63605308, el: 1.0},
        {lat: 59.84636701, lon: 10.63382148, el: 1.0},
        {lat: 59.84630234, lon: 10.63294172, el: 1.0},
        {lat: 59.84589275, lon: 10.63195466, el: 1.0},
        {lat: 59.84552627, lon: 10.63118219, el: 1.0},
        {lat: 59.84496576, lon: 10.63092470, el: 1.0},
        {lat: 59.84403875, lon: 10.63062429, el: 1.0},
        {lat: 59.84326262, lon: 10.63062429, el: 1.0},
        {lat: 59.84218464, lon: 10.63062429, el: 1.0},
        {lat: 59.84136535, lon: 10.63049554, el: 1.0},
        {lat: 59.84015795, lon: 10.63010931, el: 1.0},
        {lat: 59.83981296, lon: 10.63212633, el: 1.0},
        {lat: 59.84026575, lon: 10.63349962, el: 1.0},
        {lat: 59.84052449, lon: 10.63590288, el: 1.0},
        {lat: 59.84108507, lon: 10.63822031, el: 1.0},
        {lat: 59.84222776, lon: 10.64002275, el: 1.0},
        {lat: 59.84272364, lon: 10.64113855, el: 1.0},
        {lat: 59.84311171, lon: 10.64182519, el: 2.0},
        {lat: 59.84436213, lon: 10.64143896, el: 1.0},
        {lat: 59.84528913, lon: 10.64195394, el: 1.0},
        {lat: 59.84636701, lon: 10.64319849, el: 1.0},
        {lat: 59.84921245, lon: 10.64412117, el: 1.0},
        {lat: 59.85145414, lon: 10.64497947, el: 1.0},
        {lat: 59.85343704, lon: 10.64686775, el: 1.0},
        {lat: 59.85464397, lon: 10.64789772, el: 1.0},
        {lat: 59.85688529, lon: 10.64841270, el: 1.0},
        {lat: 59.85972983, lon: 10.65047264, el: 1.0},
        {lat: 59.86171224, lon: 10.65098762, el: 1.0},
        {lat: 59.86533199, lon: 10.65201759, el: 1.0},
        {lat: 59.86714172, lon: 10.65201759, el: 1.0},
        {lat: 59.87015771, lon: 10.65244674, el: 1.0},
        {lat: 59.87334575, lon: 10.66231727, el: 1.0},
        {lat: 59.87334575, lon: 10.67124366, el: 1.0},
        {lat: 59.87325959, lon: 10.68017005, el: 1.0},
        {lat: 59.87334575, lon: 10.69407463, el: 1.0},
        {lat: 59.87403502, lon: 10.69922447, el: 1.0},
        {lat: 59.87515504, lon: 10.70780754, el: 1.0},
        {lat: 59.87601658, lon: 10.71536064, el: 1.0},
        {lat: 59.87670579, lon: 10.72411537, el: 1.0},
        {lat: 59.87808416, lon: 10.73596000, el: 1.0},
        {lat: 59.87946248, lon: 10.74093818, el: 1.0},
        {lat: 59.88152986, lon: 10.74763298, el: 1.0},
        {lat: 59.88247736, lon: 10.75329780, el: 1.0},
        {lat: 59.88351097, lon: 10.75861930, el: 1.0},
        {lat: 59.88376937, lon: 10.76085090, el: 1.0}
    ]
};

const BLEIKOYA = {
    name: "Bleikoya",
    country: 'Norway',
    index: 3,
    segementId: 17179877,
    meters: '4050',
    gps: [
        { lat: 59.88598040, lon: 10.75883380, el: 4.0 },
        { lat: 59.88593740, lon: 10.75763220, el: 2.0 },
        { lat: 59.88580820, lon: 10.75608730, el: 1.0 },
        { lat: 59.88563590, lon: 10.75411310, el: 1.0 },
        { lat: 59.88554980, lon: 10.75239650, el: 1.0 },
        { lat: 59.88537750, lon: 10.75025080, el: 1.0 },
        { lat: 59.88533450, lon: 10.74776170, el: 1.0 },
        { lat: 59.88533450, lon: 10.74595920, el: 1.0 },
        { lat: 59.88576510, lon: 10.74407100, el: 1.0 },
        { lat: 59.88628190, lon: 10.74338430, el: 1.0 },
        { lat: 59.88714310, lon: 10.74338430, el: 1.0 },
        { lat: 59.88778900, lon: 10.74381350, el: 1.0 },
        { lat: 59.88860720, lon: 10.74510090, el: 1.0 },
        { lat: 59.88921000, lon: 10.74638840, el: 1.0 },
        { lat: 59.88981280, lon: 10.74767580, el: 1.0 },
        { lat: 59.89058790, lon: 10.74870580, el: 1.0 },
        { lat: 59.89123370, lon: 10.74939250, el: 1.0 },
        { lat: 59.89196570, lon: 10.74836250, el: 1.0 },
        { lat: 59.89209480, lon: 10.74681750, el: 1.0 },
        { lat: 59.89209480, lon: 10.74535840, el: 1.0 },
        { lat: 59.89205180, lon: 10.74347010, el: 1.0 },
        { lat: 59.89179340, lon: 10.74183940, el: 1.0 },
        { lat: 59.89153510, lon: 10.74055190, el: 1.0 },
        { lat: 59.89114760, lon: 10.73866360, el: 1.0 },
        { lat: 59.89076010, lon: 10.73703280, el: 1.0 },
        { lat: 59.89037260, lon: 10.73531620, el: 1.0 },
        { lat: 59.88981280, lon: 10.73411460, el: 1.0 },
        { lat: 59.88925310, lon: 10.73308460, el: 1.0 },
        { lat: 59.88865020, lon: 10.73222630, el: 1.0 },
        { lat: 59.88796130, lon: 10.73136800, el: 1.0 },
        { lat: 59.88710000, lon: 10.73076720, el: 1.0 },
        { lat: 59.88662640, lon: 10.73205470, el: 1.0 },
        { lat: 59.88645410, lon: 10.73351380, el: 1.0 },
        { lat: 59.88636800, lon: 10.73497290, el: 1.0 },
        { lat: 59.88628190, lon: 10.73634620, el: 1.0 },
        { lat: 59.88628190, lon: 10.73754780, el: 1.0 },
        { lat: 59.88615270, lon: 10.73909280, el: 1.0 },
        { lat: 59.88606650, lon: 10.74038020, el: 1.0 },
        { lat: 59.88602350, lon: 10.74123850, el: 1.0 },
        { lat: 59.88580820, lon: 10.74235430, el: 1.0 },
        { lat: 59.88537750, lon: 10.74364180, el: 1.0 },
        { lat: 59.88499000, lon: 10.74724670, el: 1.0 },
        { lat: 59.88490380, lon: 10.74999330, el: 1.0 },
        { lat: 59.88572200, lon: 10.75849050, el: 5.0 }
        ]
};

const NYSTULVATN = {
    name: "Nystulvatn",
    country: 'Norway',
    index: 4,
    segementId: 17179917,
    meters: '2550',
    gps: [
        { lat: 59.56154930, lon: 9.038808340, el: 303.0 },
        { lat: 59.56204930, lon: 9.038894170, el: 303.0 },
        { lat: 59.56241890, lon: 9.039452070, el: 303.0 },
        { lat: 59.56252760, lon: 9.040610790, el: 303.0 },
        { lat: 59.56261460, lon: 9.041512010, el: 303.0 },
        { lat: 59.56278850, lon: 9.042584890, el: 303.0 },
        { lat: 59.56291890, lon: 9.043443200, el: 303.0 },
        { lat: 59.56300590, lon: 9.044387340, el: 303.0 },
        { lat: 59.56331030, lon: 9.044644830, el: 303.0 },
        { lat: 59.56381030, lon: 9.044644830, el: 303.0 },
        { lat: 59.56431030, lon: 9.044086930, el: 303.0 },
        { lat: 59.56481030, lon: 9.043571940, el: 303.0 },
        { lat: 59.56541900, lon: 9.043357370, el: 303.0 },
        { lat: 59.56598420, lon: 9.042713640, el: 303.0 },
        { lat: 59.56657120, lon: 9.042327400, el: 304.0 },
        { lat: 59.56709290, lon: 9.041898250, el: 303.0 },
        { lat: 59.56709290, lon: 9.040524950, el: 305.0 },
        { lat: 59.56722330, lon: 9.038379190, el: 303.0 },
        { lat: 59.56733200, lon: 9.036834230, el: 303.0 },
        { lat: 59.56767980, lon: 9.035546770, el: 303.0 },
        { lat: 59.56798410, lon: 9.034430980, el: 303.0 },
        { lat: 59.56839710, lon: 9.033701410, el: 303.0 },
        { lat: 59.56857100, lon: 9.033014770, el: 303.0 },
        { lat: 59.56852750, lon: 9.032070630, el: 303.0 },
        { lat: 59.56824500, lon: 9.031255240, el: 308.0 },
        { lat: 59.56774500, lon: 9.031383990, el: 308.0 },
        { lat: 59.56711460, lon: 9.031856060, el: 306.0 },
        { lat: 59.56657120, lon: 9.032328120, el: 303.0 },
        { lat: 59.56609290, lon: 9.032242290, el: 303.0 },
        { lat: 59.56541900, lon: 9.031641480, el: 306.0 },
        { lat: 59.56476680, lon: 9.031598560, el: 304.0 },
        { lat: 59.56431030, lon: 9.031040660, el: 306.0 },
        { lat: 59.56385380, lon: 9.030869000, el: 303.0 },
        { lat: 59.56357110, lon: 9.031126490, el: 303.0 },
        { lat: 59.56346240, lon: 9.031770220, el: 303.0 },
        { lat: 59.56328850, lon: 9.032671450, el: 303.0 },
        { lat: 59.56300590, lon: 9.033915990, el: 303.0 },
        { lat: 59.56289720, lon: 9.034774300, el: 303.0 },
        { lat: 59.56252760, lon: 9.035589690, el: 303.0 },
        { lat: 59.56228850, lon: 9.036362170, el: 303.0 },
        { lat: 59.56194060, lon: 9.037048810, el: 303.0 },
        { lat: 59.56163620, lon: 9.038271900, el: 303.0 },
    ]
};

const RIVER_THAMES = {
    name: 'River Thames',
    country: 'United Kingdom',
    index: 7,
    segementId: 0,
    meters: 6910,
    gps: [
        { lat: 51.50604460, lon: -0.07379293, el: 8.0 },
        { lat: 51.50628500, lon: -0.07580995, el: 7.0 },
        { lat: 51.50665900, lon: -0.07756948, el: 8.0 },
        { lat: 51.50679250, lon: -0.07920026, el: 4.0 },
        { lat: 51.50762060, lon: -0.08198976, el: 4.0 },
        { lat: 51.50770070, lon: -0.08417844, el: 4.0 },
        { lat: 51.50839520, lon: -0.08821249, el: 5.0 },
        { lat: 51.50852870, lon: -0.09048700, el: 4.0 },
        { lat: 51.50892940, lon: -0.09250402, el: 4.0 },
        { lat: 51.50941020, lon: -0.09460687, el: 4.0 },
        { lat: 51.50965060, lon: -0.09688138, el: 4.0 },
        { lat: 51.50981080, lon: -0.09907007, el: 4.0 },
        { lat: 51.50978410, lon: -0.10138750, el: 4.0 },
        { lat: 51.51013130, lon: -0.10469198, el: 4.0 },
        { lat: 51.51013130, lon: -0.10743856, el: 4.0 },
        { lat: 51.51015800, lon: -0.10967016, el: 4.0 },
        { lat: 51.51005120, lon: -0.11070013, el: 4.0 },
        { lat: 51.51005120, lon: -0.11293172, el: 6.0 },
        { lat: 51.50959710, lon: -0.11524915, el: 13.0 },
        { lat: 51.50933000, lon: -0.11649370, el: 13.0 },
        { lat: 51.50879580, lon: -0.11782407, el: 4.0 },
        { lat: 51.50820820, lon: -0.11893987, el: 4.0 },
        { lat: 51.50762060, lon: -0.11988401, el: 4.0 },
        { lat: 51.50711310, lon: -0.12039899, el: 4.0 },
        { lat: 51.50633840, lon: -0.11988401, el: 4.0 },
        { lat: 51.50676580, lon: -0.11876821, el: 5.0 },
        { lat: 51.50708630, lon: -0.11769533, el: 4.0 },
        { lat: 51.50748700, lon: -0.11670827, el: 4.0 },
        { lat: 51.50799450, lon: -0.11589288, el: 4.0 },
        { lat: 51.50855540, lon: -0.11361837, el: 4.0 },
        { lat: 51.50895610, lon: -0.11168718, el: 4.0 },
        { lat: 51.50911640, lon: -0.10941267, el: 4.0 },
        { lat: 51.50924990, lon: -0.10645151, el: 4.0 },
        { lat: 51.50930330, lon: -0.10447740, el: 4.0 },
        { lat: 51.50924990, lon: -0.10237455, el: 4.0 },
        { lat: 51.50908960, lon: -0.10061502, el: 4.0 },
        { lat: 51.50908960, lon: -0.09915590, el: 4.0 },
        { lat: 51.50898280, lon: -0.09743928, el: 4.0 },
        { lat: 51.50884920, lon: -0.09598016, el: 4.0 },
        { lat: 51.50850200, lon: -0.09392023, el: 4.0 },
        { lat: 51.50812810, lon: -0.09117364, el: 4.0 },
        { lat: 51.50786100, lon: -0.08902788, el: 4.0 },
        { lat: 51.50762060, lon: -0.08752584, el: 4.0 },
        { lat: 51.50743360, lon: -0.08512258, el: 4.0 },
        { lat: 51.50719320, lon: -0.08254766, el: 4.0 },
        { lat: 51.50681920, lon: -0.07988691, el: 4.0 },
        { lat: 51.50633840, lon: -0.07838487, el: 4.0 },
        { lat: 51.50564390, lon: -0.07658243, el: 4.0 },
        { lat: 51.50508300, lon: -0.07400751, el: 3.0 },
        { lat: 51.50535010, lon: -0.07284879, el: 3.0 },
    ]
};

const ALCATRAZ = {
    name: "Alcatraz",
    country: 'United States',
    index: 5,
    segementId: 17179935,
    meters: 5350,
    gps: [
        { lat: 37.80744440, lon: -122.422778, el: 1.0 },
        { lat: 37.80835990, lon: -122.423207, el: 1.0 },
        { lat: 37.80944480, lon: -122.423765, el: 1.0 },
        { lat: 37.81059760, lon: -122.423937, el: 1.0 },
        { lat: 37.81175040, lon: -122.423679, el: 1.0 },
        { lat: 37.81293700, lon: -122.423465, el: 1.0 },
        { lat: 37.81415760, lon: -122.423207, el: 1.0 },
        { lat: 37.81564930, lon: -122.422735, el: 1.0 },
        { lat: 37.81714100, lon: -122.422349, el: 1.0 },
        { lat: 37.81825970, lon: -122.422091, el: 1.0 },
        { lat: 37.81937850, lon: -122.421534, el: 1.0 },
        { lat: 37.82029380, lon: -122.421233, el: 1.0 },
        { lat: 37.82107350, lon: -122.420804, el: 1.0 },
        { lat: 37.82253120, lon: -122.420332, el: 1.0 },
        { lat: 37.82392110, lon: -122.419774, el: 1.0 },
        { lat: 37.82524310, lon: -122.419388, el: 1.0 },
        { lat: 37.82646340, lon: -122.419517, el: 1.0 },
        { lat: 37.82737860, lon: -122.420418, el: 1.0 },
        { lat: 37.82815830, lon: -122.421233, el: 1.0 },
        { lat: 37.82853110, lon: -122.422392, el: 1.0 },
        { lat: 37.82876840, lon: -122.423636, el: 1.0 },
        { lat: 37.82883620, lon: -122.424795, el: 1.0 },
        { lat: 37.82863280, lon: -122.426340, el: 1.0 },
        { lat: 37.82700580, lon: -122.426726, el: 1.0 },
        { lat: 37.82524310, lon: -122.426469, el: 1.0 },
        { lat: 37.82419220, lon: -122.425954, el: 1.0 },
        { lat: 37.82327700, lon: -122.425611, el: 1.0 },
        { lat: 37.82148030, lon: -122.425010, el: 1.0 },
        { lat: 37.81914120, lon: -122.425010, el: 1.0 },
        { lat: 37.81829360, lon: -122.425267, el: 1.0 },
        { lat: 37.81646290, lon: -122.425267, el: 1.0 },
        { lat: 37.81500510, lon: -122.424409, el: 1.0 },
        { lat: 37.81419150, lon: -122.424323, el: 1.0 },
        { lat: 37.81303870, lon: -122.424066, el: 1.0 },
        { lat: 37.81198770, lon: -122.424108, el: 1.0 },
        { lat: 37.81134350, lon: -122.424237, el: 1.0 },
        { lat: 37.81002120, lon: -122.424108, el: 1.0 },
        { lat: 37.80890240, lon: -122.424151, el: 1.0 },
        { lat: 37.80771570, lon: -122.424066, el: 1.0 },
        { lat: 37.80724100, lon: -122.423293, el: 1.0 }
    ]
};

const NEW_YORK = {
    name: "New York",
    country: 'United States',
    index: 6,
    segementId: 17179902,
    meters: 7000,
    gps: [{ lat: 40.70034920, lon: -74.0132671, el: 1.0 },
        { lat: 40.69979610, lon: -74.0134602, el: 1.0 },
        { lat: 40.69961720, lon: -74.0139323, el: 1.0 },
        { lat: 40.69956840, lon: -74.0142434, el: 1.0 },
        { lat: 40.69938130, lon: -74.0151447, el: 1.0 },
        { lat: 40.69924300, lon: -74.0158957, el: 1.0 },
        { lat: 40.69909660, lon: -74.0167325, el: 1.0 },
        { lat: 40.69896650, lon: -74.0176767, el: 1.0 },
        { lat: 40.69873060, lon: -74.0201711, el: 1.0 },
        { lat: 40.69801480, lon: -74.0222311, el: 1.0 },
        { lat: 40.69697360, lon: -74.0252351, el: 1.0 },
        { lat: 40.69638790, lon: -74.0272092, el: 1.0 },
        { lat: 40.69599750, lon: -74.0299558, el: 1.0 },
        { lat: 40.69534670, lon: -74.0331315, el: 1.0 },
        { lat: 40.69443560, lon: -74.0361356, el: 1.0 },
        { lat: 40.69332930, lon: -74.0402555, el: 1.0 },
        { lat: 40.69293890, lon: -74.0430021, el: 1.0 },
        { lat: 40.69287380, lon: -74.0451478, el: 1.0 },
        { lat: 40.69202780, lon: -74.0478944, el: 1.0 },
        { lat: 40.69098650, lon: -74.0487527, el: 1.0 },
        { lat: 40.68968490, lon: -74.0488386, el: 1.0 },
        { lat: 40.68844830, lon: -74.0481519, el: 1.0 },
        { lat: 40.68740700, lon: -74.0458345, el: 1.0 },
        { lat: 40.68747210, lon: -74.0436029, el: 1.0 },
        { lat: 40.68844830, lon: -74.0416288, el: 1.0 },
        { lat: 40.68877370, lon: -74.0399980, el: 1.0 },
        { lat: 40.68942460, lon: -74.0376806, el: 1.0 },
        { lat: 40.69124680, lon: -74.0343332, el: 1.0 },
        { lat: 40.69144210, lon: -74.0310716, el: 1.0 },
        { lat: 40.69280870, lon: -74.0282392, el: 1.0 },
        { lat: 40.69339440, lon: -74.0249776, el: 1.0 },
        { lat: 40.69463090, lon: -74.0229177, el: 1.0 },
        { lat: 40.69593240, lon: -74.0190553, el: 1.0 },
        { lat: 40.69690850, lon: -74.0165662, el: 1.0 },
        { lat: 40.69749420, lon: -74.0145063, el: 1.0 },
        { lat: 40.69777070, lon: -74.0140450, el: 1.0 },
        { lat: 40.69812860, lon: -74.0136802, el: 1.0 },
        { lat: 40.69869800, lon: -74.0133798, el: 1.0 },
        { lat: 40.69923490, lon: -74.0132939, el: 1.0 },
        { lat: 40.69990190, lon: -74.0131866, el: 1.0 }
    ]
};

const THE_ENGLISH_CHANNEL = {
    name: "The English Channel",
    country: 'United Kingdom',
    index: 8,
    segementId: 0,
    meters: 81920,
    gps: [{ lat: 51.12329690, lon: 1.330075260, el: 1.0 },
        { lat: 51.12060330, lon: 1.336426730, el: 1.0 },
        { lat: 51.12076490, lon: 1.343851080, el: 1.0 },
        { lat: 51.11904090, lon: 1.351919170, el: 1.0 },
        { lat: 51.11634700, lon: 1.356725690, el: 1.0 },
        { lat: 51.11332960, lon: 1.368055340, el: 1.0 },
        { lat: 51.11085090, lon: 1.388912200, el: 1.0 },
        { lat: 51.10632430, lon: 1.402645110, el: 1.0 },
        { lat: 51.10201280, lon: 1.419124600, el: 1.0 },
        { lat: 51.09554480, lon: 1.436977380, el: 1.0 },
        { lat: 51.08778210, lon: 1.457576750, el: 1.0 },
        { lat: 51.07980230, lon: 1.477832790, el: 1.0 },
        { lat: 51.07419400, lon: 1.492595670, el: 1.0 },
        { lat: 51.06491740, lon: 1.515598290, el: 1.0 },
        { lat: 51.05952310, lon: 1.532077780, el: 1.0 },
        { lat: 51.05348080, lon: 1.548213950, el: 1.0 },
        { lat: 51.02930370, lon: 1.602630610, el: 1.0 },
        { lat: 51.00857040, lon: 1.643829340, el: 1.0 },
        { lat: 50.99992880, lon: 1.682281490, el: 1.0 },
        { lat: 50.99063730, lon: 1.711635580, el: 1.0 },
        { lat: 50.98804400, lon: 1.726741790, el: 1.0 },
        { lat: 50.98307300, lon: 1.745624540, el: 1.0 },
        { lat: 50.98047930, lon: 1.763477320, el: 1.0 },
        { lat: 50.97658840, lon: 1.787853240, el: 1.0 },
        { lat: 50.97377810, lon: 1.808109280, el: 1.0 },
        { lat: 50.97204860, lon: 1.825618740, el: 1.0 },
        { lat: 50.97183250, lon: 1.835918420, el: 1.0 },
        { lat: 50.97118390, lon: 1.844844810, el: 1.0 },
        { lat: 50.96858950, lon: 1.853084560, el: 1.0 },
        { lat: 50.96837330, lon: 1.845531460, el: 1.0 },
        { lat: 50.97377810, lon: 1.835918420, el: 1.0 },
        { lat: 50.97723690, lon: 1.819438930, el: 1.0 },
        { lat: 50.98393760, lon: 1.782360070, el: 1.0 },
        { lat: 50.99171780, lon: 1.749401090, el: 1.0 },
        { lat: 50.99992880, lon: 1.714725490, el: 1.0 },
        { lat: 51.00684220, lon: 1.692409510, el: 1.0 },
        { lat: 51.01310660, lon: 1.673870080, el: 1.0 },
        { lat: 51.02260960, lon: 1.648807520, el: 1.0 },
        { lat: 51.02800810, lon: 1.631984710, el: 1.0 },
        { lat: 51.04312080, lon: 1.600742340, el: 1.0 },
        { lat: 51.05844420, lon: 1.564693450, el: 1.0 },
        { lat: 51.07138970, lon: 1.534824370, el: 1.0 },
        { lat: 51.08648810, lon: 1.496372220, el: 1.0 },
        { lat: 51.09144800, lon: 1.474056240, el: 1.0 },
        { lat: 51.09640730, lon: 1.453456870, el: 1.0 },
        { lat: 51.10481530, lon: 1.429424280, el: 1.0 },
        { lat: 51.10869550, lon: 1.410198210, el: 1.0 },
        { lat: 51.11149760, lon: 1.397151940, el: 1.0 },
        { lat: 51.11602370, lon: 1.384449000, el: 1.0 },
        { lat: 51.12033390, lon: 1.363849630, el: 1.0 },
        { lat: 51.12162690, lon: 1.351490020, el: 1.0 },
        { lat: 51.12130360, lon: 1.346983900, el: 1.0 },
        { lat: 51.12130360, lon: 1.343464850, el: 1.0 },
        { lat: 51.12141140, lon: 1.340632430, el: 1.0 },
        { lat: 51.12221950, lon: 1.337800020, el: 1.0 },
        { lat: 51.12211170, lon: 1.335053440, el: 1.0 },
        { lat: 51.12372790, lon: 1.331276890, el: 1.0 }
    ]
};

const VENEZIA = {
    name: "Venezia",
    meters: '7230',
    country: 'Italy',
    segementId: 0,
    index: 9,
    gps: [
        { lat: 45.43122620, lon: 12.33685250, el: 1.0 },
        { lat: 45.43158760, lon: 12.33569380, el: 1.0 },
        { lat: 45.43152730, lon: 12.33427760, el: 1.0 },
        { lat: 45.43122620, lon: 12.33251810, el: 9.0 },
        { lat: 45.43131650, lon: 12.33058690, el: 4.0 },
        { lat: 45.43215980, lon: 12.32814070, el: 4.0 },
        { lat: 45.43300300, lon: 12.32753990, el: 6.0 },
        { lat: 45.43378600, lon: 12.32732530, el: 5.0 },
        { lat: 45.43459910, lon: 12.32715360, el: 4.0 },
        { lat: 45.43520140, lon: 12.32818360, el: 3.0 },
        { lat: 45.43562300, lon: 12.32947110, el: 9.0 },
        { lat: 45.43598440, lon: 12.33084440, el: 7.0 },
        { lat: 45.43628550, lon: 12.33196020, el: 8.0 },
        { lat: 45.43682760, lon: 12.33359090, el: 6.0 },
        { lat: 45.43758040, lon: 12.33530750, el: 3.0 },
        { lat: 45.43830310, lon: 12.33612290, el: 6.0 },
        { lat: 45.43929680, lon: 12.33595130, el: 3.0 },
        { lat: 45.43983880, lon: 12.33492130, el: 1.0 },
        { lat: 45.44032060, lon: 12.33410590, el: 1.0 },
        { lat: 45.44086260, lon: 12.33290430, el: 5.0 },
        { lat: 45.44140460, lon: 12.33196020, el: 6.0 },
        { lat: 45.44188640, lon: 12.33093020, el: 7.0 },
        { lat: 45.44227780, lon: 12.32955690, el: 6.0 },
        { lat: 45.44242840, lon: 12.32818360, el: 2.0 },
        { lat: 45.44239830, lon: 12.32715360, el: 1.0 },
        { lat: 45.44215740, lon: 12.32560870, el: 8.0 },
        { lat: 45.44185630, lon: 12.32423540, el: 7.0 },
        { lat: 45.44137450, lon: 12.32333420, el: 5.0 },
        { lat: 45.44080240, lon: 12.32234710, el: -1.0 },
        { lat: 45.43995930, lon: 12.32127420, el: 3.0 },
        { lat: 45.43920650, lon: 12.32037300, el: -1.0 },
        { lat: 45.43890540, lon: 12.31981510, el: -2.0 },
        { lat: 45.43926670, lon: 12.31917140, el: 1.0 },
        { lat: 45.44017010, lon: 12.31865640, el: -1.0 },
        { lat: 45.44001950, lon: 12.31796970, el: -3.0 },
        { lat: 45.43929680, lon: 12.31633900, el: 2.0 },
        { lat: 45.43830310, lon: 12.31535190, el: 0.0 },
        { lat: 45.43637590, lon: 12.31346360, el: -3.0 },
        { lat: 45.43514120, lon: 12.31230490, el: -1.0 },
        { lat: 45.43423770, lon: 12.31153240, el: 0.0 },
        { lat: 45.43276210, lon: 12.31045960, el: -3.0 },
        { lat: 45.43185860, lon: 12.30968710, el: 0.0 },
        { lat: 45.43131650, lon: 12.30990170, el: 1.0 },
        { lat: 45.43071420, lon: 12.31157540, el: 1.0 },
        { lat: 45.43068410, lon: 12.31307740, el: 6.0 },
        { lat: 45.43065400, lon: 12.31505150, el: 1.0 },
        { lat: 45.43044310, lon: 12.31754060, el: 1.0 },
        { lat: 45.43002150, lon: 12.32110260, el: 1.0 },
        { lat: 45.42905770, lon: 12.32500790, el: 1.0 },
        { lat: 45.42779280, lon: 12.32981440, el: 1.0 },
        { lat: 45.42842530, lon: 12.33436340, el: 1.0 },
        { lat: 45.42966010, lon: 12.33642330, el: 1.0 },
        { lat: 45.43083470, lon: 12.33758210, el: 1.0 },
        { lat: 45.43113580, lon: 12.33719580, el: 1.0 }
    ]
};

const GOZO = {
    name: "Gozo",
    meters: '5873',
    country: 'Malta',
    segementId: 0,
    index: 10,
    gps: [{ lat: 36.02452921, lon: 14.29903864, el: 3.0 },
        { lat: 36.02513661, lon: 14.29987549, el: 1.0 },
        { lat: 36.02544898, lon: 14.30152773, el: 1.0 },
        { lat: 36.02534485, lon: 14.30300831, el: 1.0 },
        { lat: 36.02458127, lon: 14.30485367, el: 1.0 },
        { lat: 36.02385239, lon: 14.30642008, el: 1.0 },
        { lat: 36.02310615, lon: 14.30886626, el: 1.0 },
        { lat: 36.02183926, lon: 14.31129097, el: 1.0 },
        { lat: 36.02123184, lon: 14.31373715, el: 1.0 },
        { lat: 36.01994756, lon: 14.31685924, el: 1.0 },
        { lat: 36.01828144, lon: 14.31874752, el: 1.0 },
        { lat: 36.01536565, lon: 14.32314634, el: 1.0 },
        { lat: 36.01439369, lon: 14.32344675, el: 8.0 },
        { lat: 36.01328287, lon: 14.32366132, el: 2.0 },
        { lat: 36.01220675, lon: 14.32379007, el: 1.0 },
        { lat: 36.01144304, lon: 14.32293176, el: 2.0 },
        { lat: 36.01102647, lon: 14.32035684, el: 1.0 },
        { lat: 36.01137361, lon: 14.31778192, el: 1.0 },
        { lat: 36.01376886, lon: 14.31576490, el: 1.0 },
        { lat: 36.01560864, lon: 14.31520700, el: 1.0 },
        { lat: 36.01904509, lon: 14.31078672, el: 1.0 },
        { lat: 36.02171778, lon: 14.30782556, el: 1.0 },
        { lat: 36.02404329, lon: 14.30452108, el: 1.0 },
        { lat: 36.02518867, lon: 14.30237531, el: 1.0 },
        { lat: 36.02508454, lon: 14.30100202, el: 1.0 },
        { lat: 36.02452921, lon: 14.29937124, el: 2.0 }]
};


module.exports = {
    GRESSHOLMEN : OSLO_ROUND,
    ORMSUNDET : OSLO_SMALL,
    ILDJERNET: ILDJERNET,
    BLEIKOYA: BLEIKOYA,
    NYSTULVATN: NYSTULVATN,
    RIVER_THAMES: RIVER_THAMES,
    ALCATRAZ: ALCATRAZ,
    NEW_YORK: NEW_YORK,
    VENEZIA: VENEZIA,
    GOZO: GOZO,
    THE_ENGLISH_CHANNEL: THE_ENGLISH_CHANNEL,
    routes: [OSLO_ROUND, OSLO_SMALL, ILDJERNET, BLEIKOYA, NYSTULVATN, ALCATRAZ,
        NEW_YORK, RIVER_THAMES, THE_ENGLISH_CHANNEL, VENEZIA, GOZO]

};

