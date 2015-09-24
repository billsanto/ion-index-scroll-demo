angular.module('starter.services', [])

    .factory('Contacts', function () {

        // Some fake testing data
        var contacts = [
                {
                    id: 0,
                    name: 'Cow Bells',
                    address: '123 Fake St.',
                    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                }, {
                    id: 1,
                    name: 'Hopdoddy Bar',
                    address: '123 Fake St.',
                    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
                }, {
                    id: 2,
                    name: 'Freddie\'s Place',
                    address: '123 Fake St.',
                    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
                }, {
                    id: 3,
                    name: 'Franklin BBQ',
                    address: '123 Fake St.',
                    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
                }, {
                    id: 4,
                    name: 'Soco Burgers',
                    address: '123 Fake St.',
                    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
                }, {
                    id: 5,
                    name: 'Sandy\'s Burgers',
                    address: '123 Fake St.',
                    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                }, {
                    id: 6,
                    name: 'Wholly Cow',
                    address: '123 Fake St.',
                    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
                }, {
                    id: 7,
                    name: 'Uncle Billy\'s',
                    address: '123 Fake St.',
                    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
                }, {
                    id: 8,
                    name: 'P Terrys',
                    address: '123 Fake St.',
                    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
                }, {
                    id: 9,
                    name: 'Shake Shack',
                    address: '123 Fake St.',
                    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'

                }, {
                    id: 10,
                    name: 'Five Guys',
                    address: '123 Fake St.',
                    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
                }
            ]
            ;


        return {
            all: function () {
                return contacts;
            },
            remove: function (contact) {
                contacts.splice(contacts.indexOf(contact), 1);
            },
            get: function (contactId) {
                for (var i = 0; i < contacts.length; i++) {
                    if (contacts[i].id === parseInt(contactId)) {
                        return contacts[i];
                    }
                }
                return null;
            }
        };
    })
    .
    factory('Teeth', function () {
        var teeth = [
            {
                position: 1,
                arch: 'maxillary',
                quadrant: 1,
                quadrantDescription: 'Upper Right',
                primaryFdi: '',
                primaryUniversal: '',
                primaryDescription: '',
                permanentFdi: '18',
                permanentUniversal: '1',
                permanentDescription: 'Third Molar'
            }, {
                position: 2,
                arch: 'maxillary',
                quadrant: 1,
                quadrantDescription: 'Upper Right',
                primaryFdi: '',
                primaryUniversal: '',
                primaryDescription: '',
                permanentFdi: '17',
                permanentUniversal: '2',
                permanentDescription: 'Second Molar'
            }, {
                position: 3,
                arch: 'maxillary',
                quadrant: 1,
                quadrantDescription: 'Upper Right',
                primaryFdi: '',
                primaryUniversal: '',
                primaryDescription: '',
                permanentFdi: '16',
                permanentUniversal: '3',
                permanentDescription: 'First Molar'
            }, {
                position: 4,
                arch: 'maxillary',
                quadrant: 1,
                quadrantDescription: 'Upper Right',
                primaryFdi: '55',
                primaryUniversal: 'A',
                primaryDescription: 'Second Molar',
                permanentFdi: '15',
                permanentUniversal: '4',
                permanentDescription: 'Second Premolar'
            }, {
                position: 5,
                arch: 'maxillary',
                quadrant: 1,
                quadrantDescription: 'Upper Right',
                primaryFdi: '54',
                primaryUniversal: 'B',
                primaryDescription: 'First Molar',
                permanentFdi: '14',
                permanentUniversal: '5',
                permanentDescription: 'First Premolar'
            }, {
                position: 6,
                arch: 'maxillary',
                quadrant: 1,
                quadrantDescription: 'Upper Right',
                primaryFdi: '53',
                primaryUniversal: 'C',
                primaryDescription: 'Canine',
                permanentFdi: '13',
                permanentUniversal: '6',
                permanentDescription: 'Canine'
            }, {
                position: 7,
                arch: 'maxillary',
                quadrant: 1,
                quadrantDescription: 'Upper Right',
                primaryFdi: '52',
                primaryUniversal: 'D',
                primaryDescription: 'Lateral Incisor',
                permanentFdi: '12',
                permanentUniversal: '7',
                permanentDescription: 'Lateral Incisor'
            }, {
                position: 8,
                arch: 'maxillary',
                quadrant: 1,
                quadrantDescription: 'Upper Right',
                primaryFdi: '51',
                primaryUniversal: 'E',
                primaryDescription: 'Central Incisor',
                permanentFdi: '11',
                permanentUniversal: '8',
                permanentDescription: 'Central Incisor'
            }, {
                position: 9,
                arch: 'maxillary',
                quadrant: 2,
                quadrantDescription: 'Upper Left',
                primaryFdi: '61',
                primaryUniversal: 'F',
                primaryDescription: 'Central Incisor',
                permanentFdi: '21',
                permanentUniversal: '9',
                permanentDescription: 'Central Incisor'
            }, {
                position: 10,
                arch: 'maxillary',
                quadrant: 2,
                quadrantDescription: 'Upper Left',
                primaryFdi: '62',
                primaryUniversal: 'G',
                primaryDescription: 'Lateral Incisor',
                permanentFdi: '22',
                permanentUniversal: '10',
                permanentDescription: 'Lateral Incisor'
            }, {
                position: 11,
                arch: 'maxillary',
                quadrant: 2,
                quadrantDescription: 'Upper Left',
                primaryFdi: '63',
                primaryUniversal: 'H',
                primaryDescription: 'Canine',
                permanentFdi: '23',
                permanentUniversal: '11',
                permanentDescription: 'Canine'
            }, {
                position: 12,
                arch: 'maxillary',
                quadrant: 2,
                quadrantDescription: 'Upper Left',
                primaryFdi: '64',
                primaryUniversal: 'I',
                primaryDescription: 'First Molar',
                permanentFdi: '24',
                permanentUniversal: '12',
                permanentDescription: 'First Premolar'
            }, {
                position: 13,
                arch: 'maxillary',
                quadrant: 2,
                quadrantDescription: 'Upper Left',
                primaryFdi: '65',
                primaryUniversal: 'J',
                primaryDescription: 'Second Molar',
                permanentFdi: '25',
                permanentUniversal: '13',
                permanentDescription: 'Second Premolar'
            }, {
                position: 14,
                arch: 'maxillary',
                quadrant: 2,
                quadrantDescription: 'Upper Left',
                primaryFdi: '',
                primaryUniversal: '',
                primaryDescription: '',
                permanentFdi: '26',
                permanentUniversal: '14',
                permanentDescription: 'First Molar'
            }, {
                position: 15,
                arch: 'maxillary',
                quadrant: 2,
                quadrantDescription: 'Upper Left',
                primaryFdi: '',
                primaryUniversal: '',
                primaryDescription: '',
                permanentFdi: '27',
                permanentUniversal: '15',
                permanentDescription: 'Second Molar'
            }, {
                position: 16,
                arch: 'maxillary',
                quadrant: 2,
                quadrantDescription: 'Upper Left',
                primaryFdi: '',
                primaryUniversal: '',
                primaryDescription: '',
                permanentFdi: '28',
                permanentUniversal: '16',
                permanentDescription: 'Third Molar'
            } , {
                position: 17,
                arch: 'mandibular',
                quadrant: 3,
                quadrantDescription: 'Lower Left',
                primaryFdi: '',
                primaryUniversal: '',
                primary_description: '',
                permanentFdi: '38',
                permanentUniversal: '17',
                permanentDescription: 'Third Molar',
            }, {
                position: 18,
                arch: 'mandibular',
                quadrant: 3,
                quadrantDescription: 'Lower Left',
                primaryFdi: '',
                primaryUniversal: '',
                primary_description: '',
                permanentFdi: '37',
                permanentUniversal: '18',
                permanentDescription: 'Second Molar',
            }, {
                position: 19,
                arch: 'mandibular',
                quadrant: 3,
                quadrantDescription: 'Lower Left',
                primaryFdi: '',
                primaryUniversal: '',
                primary_description: '',
                permanentFdi: '36',
                permanentUniversal: '19',
                permanentDescription: 'First Molar',
            }, {
                position: 20,
                arch: 'mandibular',
                quadrant: 3,
                quadrantDescription: 'Lower Left',
                primaryFdi: '75',
                primaryUniversal: 'K',
                primary_description: 'Second Molar',
                permanentFdi: '35',
                permanentUniversal: '20',
                permanentDescription: 'Second Premolar',
            }, {
                position: 21,
                arch: 'mandibular',
                quadrant: 3,
                quadrantDescription: 'Lower Left',
                primaryFdi: '74',
                primaryUniversal: 'L',
                primary_description: 'First Molar',
                permanentFdi: '34',
                permanentUniversal: '21',
                permanentDescription: 'First Premolar',
            }, {
                position: 22,
                arch: 'mandibular',
                quadrant: 3,
                quadrantDescription: 'Lower Left',
                primaryFdi: '73',
                primaryUniversal: 'M',
                primary_description: 'Canine',
                permanentFdi: '33',
                permanentUniversal: '22',
                permanentDescription: 'Canine',
            }, {
                position: 23,
                arch: 'mandibular',
                quadrant: 3,
                quadrantDescription: 'Lower Left',
                primaryFdi: '72',
                primaryUniversal: 'N',
                primary_description: 'Lateral Incisor',
                permanentFdi: '32',
                permanentUniversal: '23',
                permanentDescription: 'Lateral Incisor',
            }, {
                position: 24,
                arch: 'mandibular',
                quadrant: 3,
                quadrantDescription: 'Lower Left',
                primaryFdi: '71',
                primaryUniversal: 'O',
                primary_description: 'Central Incisor',
                permanentFdi: '31',
                permanentUniversal: '24',
                permanentDescription: 'Central Incisor',
            }, {
                position: 25,
                arch: 'mandibular',
                quadrant: 4,
                quadrantDescription: 'Lower Right',
                primaryFdi: '81',
                primaryUniversal: 'P',
                primary_description: 'Central Incisor',
                permanentFdi: '41',
                permanentUniversal: '25',
                permanentDescription: 'Central Incisor',
            }, {
                position: 26,
                arch: 'mandibular',
                quadrant: 4,
                quadrantDescription: 'Lower Right',
                primaryFdi: '82',
                primaryUniversal: 'Q',
                primary_description: 'Lateral Incisor',
                permanentFdi: '42',
                permanentUniversal: '26',
                permanentDescription: 'Lateral Incisor',
            }, {
                position: 27,
                arch: 'mandibular',
                quadrant: 4,
                quadrantDescription: 'Lower Right',
                primaryFdi: '83',
                primaryUniversal: 'R',
                primary_description: 'Canine',
                permanentFdi: '43',
                permanentUniversal: '27',
                permanentDescription: 'Canine',
            }, {
                position: 28,
                arch: 'mandibular',
                quadrant: 4,
                quadrantDescription: 'Lower Right',
                primaryFdi: '84',
                primaryUniversal: 'S',
                primary_description: 'First Molar',
                permanentFdi: '44',
                permanentUniversal: '28',
                permanentDescription: 'First Premolar',
            }, {
                position: 29,
                arch: 'mandibular',
                quadrant: 4,
                quadrantDescription: 'Lower Right',
                primaryFdi: '85',
                primaryUniversal: 'T',
                primary_description: 'Second Molar',
                permanentFdi: '45',
                permanentUniversal: '29',
                permanentDescription: 'Second Premolar',
            }, {
                position: 30,
                arch: 'mandibular',
                quadrant: 4,
                quadrantDescription: 'Lower Right',
                primaryFdi: '',
                primaryUniversal: '',
                primary_description: '',
                permanentFdi: '46',
                permanentUniversal: '30',
                permanentDescription: 'First Molar'
            }, {
                position: 31,
                arch: 'mandibular',
                quadrant: 4,
                quadrantDescription: 'Lower Right',
                primaryFdi: '',
                primaryUniversal: '',
                primary_description: '',
                permanentFdi: '47',
                permanentUniversal: '31',
                permanentDescription: 'Second Molar',
            }, {
                position: 32,
                arch: 'mandibular',
                quadrant: 4,
                quadrantDescription: 'Lower Right',
                primaryFdi: '',
                primaryUniversal: '',
                primary_description: '',
                permanentFdi: '48',
                permanentUniversal: '32',
                permanentDescription: 'Third Molar',

            }
        ];

        return {
            all: function () {
                return teeth;
            },

            ids: function (dentitionAge, dentitionLocale) {
                var returnArray = [];

                function arraysIdentical(a, b) {
                    var i = a.length;

                    if (i != b.length) return false;

                    while (i--) {
                        if (a[i] !== b[i]) return false;
                    }
                    return true;
                }

                for (var t in teeth) {
                    if (arraysIdentical(['primary', 'fdi'], [dentitionAge, dentitionLocale])) {
                        returnArray.push(teeth[t].primaryFdi);
                    }
                    else if (arraysIdentical(['primary', 'universal'], [dentitionAge, dentitionLocale])) {
                        returnArray.push(teeth[t].primaryUniversal);
                    }
                    else if (arraysIdentical(['permanent', 'fdi'], [dentitionAge, dentitionLocale])) {
                        returnArray.push(teeth[t].permanentFdi);
                    }
                    else if (arraysIdentical(['permanent', 'universal'], [dentitionAge, dentitionLocale])) {
                        returnArray.push(teeth[t].permanentUniversal);
                    }
                    else {
                        console.log('Failed to map teeth notation from the arguments provided');
                        console.log('t = ', t, ', dentitionAge = ', dentitionAge, ', dentitionLocale = ', dentitionLocale);
                    }
                }

                return returnArray;
            },

            toothDescriptions: function (dentitionAge) {
                var returnArray = [];

                for (var t in teeth) {
                    switch (dentitionAge) {
                        case 'primary':
                            returnArray.push(teeth[t].primaryDescription);
                            break;
                        case 'permanent':
                            returnArray.push(teeth[t].permanentDescription);
                            break;

                        default:
                            console.log('Failed to map teeth descriptions from the arguments provided');
                    }
                }

                return returnArray;
            },

            maxIdLength: function (dentitionAge, dentitionLocale) {
                return (dentitionAge === 'primary' && dentitionLocale === 'universal') ? 1 : 2;
            }
        }
    }
)
;
