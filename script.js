mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuY2hzcG90dGVycyIsImEiOiJjbGJrdnAycXQwMW1rM25waXF1dHQ4djRhIn0.k00FDSeJrdDFoV_tMw7tLQ';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/benchspotters/cldqe41ou000a01pb42sblgnd',
        center: [4.388123,51.043351],
        zoom: 7
    });

    map.on('load', () => {
        map.addSource('places', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Waterbufferbos Ten Bos te Aalst (Bufferende landschapsparken op de valleiflanken)</strong><p>‘Waterbufferbos Ten Bos’ in Aalst kan rekenen op de appreciatie van de jury omwille van hoge ambities en complexiteit (in de combinatie van de inrichting van het waterbufferbos, de aanleg van een open bedding voor hemelwaterafvoer en de ontharding en herinrichting van een kruispunt). Ook de rijke samenwerking tussen betrokken partners spreekt in het voordeel van het project.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.088399, 50.906627]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Sponslandschap Gasthuisstraat te Roosdaal (Bufferende landschapsparken op de valleiflanken)</strong><p>De ontharding van een deel van de Roosdaalse Gasthuisstraat en het gedeeltelijk omzetten van WUG-gebied in natte natuur maken dat ‘Sponslandschap Gasthuisstraat’ door de jury in zijn geheel als een interessant project werd bestempeld, dat past in deze oproep. Ten opzichte van vergelijkbare voorstellen in het actieprogramma, werd deze straat als de meest strategische gezien.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.070148,50.837756]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Wolfsgracht Denderleeuw (Bufferende landschapsparken op de valleiflanken)</strong><p>Ook ‘Wolfsgracht Denderleeuw’ is een goed voorbeeld van het type complexe en geïntegreerde projecten waar deze oproep naar zoekt. Het zal inzetten op de reïntegratie van de Wolfsgracht met zijn huidige beperkte potentie voor captatie en infiltratie. Een dwarsgeul, dijkje en poelen zullen de gracht meer ruimte geven, ook voor een elzenbroekbos, dat op termijn zal zorgen voor buffering en infiltratie van hemelwater van de nieuwe woningen. In een volgende fase zal ook werk gemaakt worden van de doorwaadbaarheid en beleefbaarheid van het park. De uitgewerkte financiële tabel die de meerkosten van het hogere ambitieniveau onderbouwt, sterkt de jury in de keuze van project.'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.067726, 50.879872]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Watterbufferlandschap bovenloop Hollebeek te Geraardsbergen (Bufferende landschapsparken op de valleiflanken)</strong><p>Bij ‘Hollebeek Geraardsbergen’ grijpt men geplande rioleringswerken aan om een geïntegreerde aanpak met ontharding en groenblauwe inrichting gestalte te geven. De beoogde ingrepen zullen de sponswerking van de Hollebeekvallei bevorderen die enerzijds de snelle afvoer, welke overstromingsschade geeft in de afwaartse gebieden, reduceert en anderzijds de verdroging van de natuur- en landbouwgebieden wegwerkt. Ook dit project werd geprezen omwille van zijn geïntegreerde en complexe karakter.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.921285, 50.756721]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                "<strong>Huldenberg herbront (Herbronnen in Brabantse Walden)</strong><p>‘Huldenberg herbront’ is een hefboomproject voor de problematiek van bronnen waarvan het water niet gebruikt wordt en die rioleringen te veel belasten. De complexiteit van dit project is illustratief voor de verwachtingen op dat vlak in deze oproep. De jury vindt de hoge subsidievraag verantwoord op basis van de hoge ambities op vlak van ontharding en groenblauwe herinrichting en het feit dat de kwalitatieve uitvoering kan worden bewaakt dankzij de inzet van de procedure Open Oproep Vlaams Bouwmeester.</p>"
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.583245, 50.789218]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Bron Pier Slot	(Herbronnen in Brabantse Walden)</strong><p>‘Bron Pier Slot’ is een gelijkaardig project als het vorige waarvan een eerste fase wordt opgenomen in de Lokale Gebiedsdeal. Het project bevat een sterke en door de jury geapprecieerde component van hergebruik van het bronwater in een mix van privé- en publieke gebruikers.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.656420, 50.803142]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Ter Lanen herbront in de Brabantse wouden (Herbronnen in Brabantse Walden)</strong><p>‘Ter Lanen herbront’ zet met zijn acties in op twee bron-strengen en op samenwerking, wat volgens de jury resulteert in een complex en geïntegreerd project met een hefboomfunctie voor de ruimere omgeving en de thematiek van bronnen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.600599, 50.770181]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                "<strong>Bronloop verbindt Neerijse	(Herbronnen in Brabantse Walden)</strong><p>‘Bronloop verbindt Neerijse’ is een waardevol project door zijn combinatie van de aanleg van een bronloop met verschillende ontmoetingsplekken en het gebruik van het bronwater binnen de bedrijvigheid van een brouwerij als pilootproject.</p>"
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.624308, 50.815277]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Waterskatepark sportsite te Liedekerke	(Op(en)ruimen van het Denderlandschap)</strong><p>De jury evalueert het project ‘Waterskatepark Sportsite’ te Liedekerke positief. De inzet van het skatepark als multifunctionele waterinfrastructuur waarbij een cascade wordt gecreëerd voor de opvang, vertraagde afvoer en -infiltratie van hemelwater, samen met de ambitie van waterhergebruik, vindt de jury innovatief en voorbeeldstellend voor de multifunctionele en waterbewuste inrichting van de publieke ruimte. Het ambitieniveau past bij de Sportsite als bestemming van bovenlokaal belang.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.078015, 50.865885]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Klimaatstraat Rerum Novarum te Aalst	(Op(en)ruimen van het Denderlandschap)</strong><p>De jury acht de ‘klimaatstraten Rerum Novarum’ te Aalst en ‘Kappellenweide’ te Roosdaal voldoende kwalitatief uitgewerkt met overtuigende ruimtelijke geïntegreerde ontwerpen, waarbij de kwaliteit en samenwerking met de rioolbeheerders en diverse ruimtegebruikers, als basis kunnen dienen voor het beoogde leer- en muliplicatoreffect.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.070019,50.928691]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Klimaatstraat Sportlaan te Liedekerke (Op(en)ruimen van het Denderlandschap)</strong><p>De actie ‘ontharding en inrichting van de Sportlaan tot klimaatstraat’ overtuigt de jury, in de eerste plaats omwille van zijn kwantitatieve onthardingsdoelstellingen en de reorganisatie van (trage) mobiliteit en parkeren met meer ruimte voor groenblauw als resultaat. De jury legde de voorwaarde van eventuele gedeeltelijke selectie van dit project voor aan Liedekerke.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.079809, 50.862998]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Klimaatstraat Kapelleweide te Roosdaal	(Op(en)ruimen van het Denderlandschap)</strong><p>De jury acht de ‘klimaatstraten Rerum Novarum’ te Aalst en ‘Kappellenweide’ te Roosdaal voldoende kwalitatief uitgewerkt met overtuigende ruimtelijke geïntegreerde ontwerpen, waarbij de kwaliteit en samenwerking met de rioolbeheerders en diverse ruimtegebruikers, als basis kunnen dienen voor het beoogde leer- en muliplicatoreffect.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.084117, 50.843472]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Roosterbeek Zonhoven: Openleggen Roosterbeek	(Lokale Gebiedsdeal Droogte Noord-Zuid Limburg)</strong><p>Bij het deelproject ‘Vallei Roosterbeek’ wordt de vallei van de Roosterbeek in het centrum van Zonhoven hersteld. Er wordt ruimte aan water gegeven zowel in het centrum als stroomopwaarts. De jury apprecieert de gecombineerde inzet op ontharding, buffering, infiltratie en groenblauwe dooradering. Een strakke vooropgestelde timing waarbij eind dit jaar een omgevingsvergunning zal worden aangevraagd, maakt dit een haalbaar project. Daarbij wordt de toegevoegde waarde van de Lokale gebiedsdeal (aan een project dat zich bevindt in de fase van vergunningsaanvraag) voldoende gemotiveerd met een aantal wijzigingen en toevoeging van hogere ambities t.o.v. het eerder opgemaakte projectvoorstel, waaronder de herinrichting van de Bookmolen als bronmaatregel en de samenwerkingsovereenkomst met de provincie in functie van extra focus op ecologie en natuurlijke groenblauwe inrichting. De jury onderstreept de relatie met een watergebonden inrichting van het stedelijk park als een belangrijk perspectief net als het omzetten van bestaande woonuitbreidingsgebieden die het park verder kunnen versterken. Hoewel dit omwille van de langere termijn buiten de gebiedsdeal valt, hoopt de jury dat dit project ook een hefboom zal zijn om deze ontwikkelingen maximaal in te zetten voor waterinfiltratie en verder meegenomen wordt in relatie tot het complex project Noord-Zuid Limburg.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.367072, 50.990771]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Groenstraatbeek/Roodebeek Houthalen-Helchteren: Herstel Groenstraatbeek (Lokale Gebiedsdeal Droogte Noord-Zuid Limburg)</strong><p>De jury beoordeelt het deelproject ‘Vallei Groenbeekstraat/Roodebeek’ te Houthalen-Helchteren als een goed voorbeeld van een geïntegreerd project, waarvan, zoals bij ‘vallei Roosterbeek’, de zichtbaarheid door de jury als meerwaarde wordt ingeschat om goede projecten ook te laten (be)leven als algemene publieke ruimtes. De acties gaan over het herinrichten van een bedrijventerrein zodat ruimte voor infiltratie en opvang ontstaat, het openleggen van de Groenstraatbeek en aanpassen van een bekken zodat ingrepen op het bedrijventerrein zo optimaal mogelijk het beeksysteem voeden en zorgen voor de verdere vernatting van Brelaarheide. De aanpak van de Koolmijnlaan samen met de ‘mijnpompen’ vindt de jury zeer positief. De landschappelijke heraanleg van de Koolmijnlaan wordt aangegrepen om de problematiek van de mijnpompen aan te pakken. Hiermee wordt expliciet ingezet op de droogteproblematiek van natuurgebied Brelaarheide.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.389758, 51.029478]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Vallei Dommel Peer: Herinrichting Bomerstraat (Lokale Gebiedsdeal Droogte Noord-Zuid Limburg)</strong><p>Bij ‘Vallei Dommel Peer’ wordt ingezet op ontharding, vergroening, herinrichting van de oevers, infiltratie, hergebruik en het verbinden van het centrum met de Dommelvallei. De herinrichting van de Bomerstraat wordt aangegrepen als kans om deze verbindingsweg naar het Dommelpark maximaal te vergroenen. Deze actie kan een hefboom vormen om andere straten op een gelijkaardige manier in te richten. Het project omvat ook de herinrichting van de Zuidervest en de inrichting van een park.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.449747,51.131645]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>De plas van bever Bas (Lokale Gebiedsdeal Droogte Kleine Nete)</strong><p>Het project ‘De plas van bever Bas’ te Grobbendonk speelt goed in op de eigenheid van deze oproep. De complexiteit en geïntegreerde aanpak is vooral terug te vinden in de combinatie van vele acties (infiltratie, recreatie, hergebruik, educatie, herstel) en watergerelateerde maatregelen in een intergenerationeel park met waterbeleeftuin. De aanwezige hydrologische strategie en redenering opgebouwd vanuit een hernieuwd of hersteld watersysteem (grachten, vijver, wadi, afkoppelen hemelwater daken, …) overtuigt de jury voldoende dat dit meer is dan een dorpspark-heraanleg, namelijk ook een droogteproject.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.736466, 51.190782]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Ontharding Le Paige (Lokale Gebiedsdeal Droogte Kleine Nete)</strong><p>Het project ‘Ontharding Le Paige’ te Herentals betreft een eerste fase in een grotere totaalvisie voor kernversterking en complexe poortontwikkeling tot de Kleine Nete (erfgoed, recreatie, biodiversiteit). De jury ziet een belangrijke sleutel in de volgende fase van het project, met een totaal verwachte netto-ontharding van +/- 3540 m², en ziet de gebiedsdeal als hefboom voor extra aandacht voor ontharding en waterinfiltratie in een sterk verstedelijkt deel van de vallei van de Kleine Nete en toekomstige onthardingsprojecten hogerop in het stroomgebied.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.837419, 51.186571]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Ontharding hoeve Zegge	(Lokale Gebiedsdeal Droogte Kleine Nete)</strong><p>Het project ‘Ontharding hoeve Zegge’ te Geel overtuigt de jury gezien de voorbeeldwaarde van ontharding en herinrichting van landbouwgebied rond de Zegge naar moeras met duidelijk hydrologische functie, en daar waar het bijzonder zinvol is. De jury erkent een mogelijk hoge precedentwaarde, maar betreurt dat dit project, gezien het belang ervan, uiteindelijk via deze oproep moet worden goedgekeurd en nog geen plek heeft gevonden in andere Blue Deal trajecten, zoals de Blue Deal grondenbank.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.936399, 51.201701]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Kortrijk: Van Kava tot monding	(Lokale Gebiedsdeal Droogte Gebiedscoalitie Leievallei)</strong><p>In het deelproject ‘Van Kava tot monding’ stelt initiatiefnemer Kortrijk diverse acties voor. Grondverwerving i.f.v. uitbreiding en opwaardering van natte natuur, ontharding en herinrichting van de beekvallei worden gecombineerd met recreatie en educatie. De jury waardeert dat diverse ingrepen tot een geïntegreerd verhaal worden samengebracht. De jury ziet het wel als een belangrijke voorwaarde dat de ingrepen inzake recreatie en educatie pas worden uitgevoerd als de ontharding en inrichtingswerken zijn voltooid. Voor het uitkijkpunt moet maximaal worden ingespeeld op de mogelijkheden voor educatie omtrent het watersysteem en klimaatverandering.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.231808,50.823014]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Menen: Boulevard Leiewerken (Lokale Gebiedsdeal Droogte Gebiedscoalitie Leievallei)</strong><p>‘Boulevard Leiewerken’ te Menen getuigt van een ambitieuze ontharding en stelt watertechnische maatregelen voor zoals infiltratie, berging en hergebruik. Hemelwater wordt opgevangen voor infiltratie ter plekke en/of ingezet voor hergebruik, waarbij de ambities voor een kwalitatieve inrichting van de publieke ruimte duidelijk het regulier beleid overstijgen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.130727, 50.792154]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Zulte: Boelakepont	(Lokale Gebiedsdeal Droogte Gebiedscoalitie Leievallei)</strong><p>Bij ‘Boulakepont’ te Zulte wordt het projectgebied ingezet als spons om hemelwater te capteren om het daarna beschikbaar te stellen aan de omgeving. Technische oplossingen voor vertraagde afvoer worden gekoppeld aan ruimtelijke invullingen die plaats bieden voor natuur, recreatie en klimaatbestendige landschapsontwikkeling. Het project toont op kwalitatieve wijze hoe een rommelige rand tussen bebouwd weefsel en Leievallei kan worden getransformeerd tot verbindend landschap. Hierbij dient voldoende aandacht te gaan naar de (gewestplan) bestemmingen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.438131, 50.920911]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Wielsbeke: Speelbos Sint-Baafs-Vijve	(Lokale Gebiedsdeal Droogte Gebiedscoalitie Leievallei)</strong><p>Met het deelproject ‘Speelbos Sint-Baafs-Vijve’ wil de gemeente Wielsbeke een multifunctioneel speelbos ontwikkelen waarbij het watersysteem als uitgangspunt is genomen. Er wordt ruimte voor water, sport, spel, een productief landschap en natuurontwikkeling voorzien. De jury vindt het een zeer interessant project om het bergen en infiltreren van water hand in hand te laten gaan met het ontwikkelen van een kwaliteitsvol natuur- en speellandschap. Bijkomend pluspunt is het afleiden van hemelwater vanop het naastliggend bedrijventerrein naar plaatsen waar er een vraag is naar water.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.398612, 50.908016]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Brongebied van de Bosbeek - As	(Lokale Gebiedsdeal Droogte Stroomdal Bosbeek)</strong><p>In ‘Brongebied Bosbeek’ te As zal men een stort, na ambtshalve sanering door OVAM, inrichten als waterretentiezone, maatregelen nemen voor het vertraagd afvoeren van hemelwater in het gebied ten noorden van de Oude Beek, en het Geytenbroek vernatten en voorzien van een knuppelpad. Voor een vernatting van de Bosbeekvallei wordt ingezet op twee gebieden; de omgeving van de Schansdijkstraat en het Geytenbroek. De koppeling van de unieke historische watersituatie die is ontstaan door mijnverzakkingen aan een vernattingsambitie van dit gebied maakt dit een zeer interessant en ook innovatief project dat een voorbeeldwaarde zal hebben voor gelijkaardige gebieden.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.583605, 51.013910]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Bovenloop van de Kleine Beek - Opglabbeek (Lokale Gebiedsdeal Droogte Stroomdal Bosbeek)</strong><p>Met de uitbouw van een entree d.m.v. het wegnemen van bebouwing vanuit het dorp (Opglabbeek) tot de vallei van de Kleine Beek, het ontharden van een straat en het aanleggen van een doorstroommoeras, zal het project ‘Bovenloop Kleine Beek’ een aantal cruciale elementen realiseren van een nog groter en complexer centrumproject. Dit project zal dan ook zeker een hefboom vormen voor een verdere transformatie van het centrum. Via de Kleine Beek zal vanuit Opglabbeek een verbinding tot de Bosbeek worden gerealiseerd.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.591293, 51.043556]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Dorpskern Opoeteren (Lokale Gebiedsdeal Droogte Stroomdal Bosbeek)</strong><p>‘Dorpskern Opoeteren’ maakt werk van een strategische en structurele ontharding van het centrum van Opoeteren, op de strategische plek waar dorpskern en beekvallei elkaar raken. Zo tracht men de natuurlijke valleiflank te herstellen. De kern van Opoeteren maakt hiermee ook terug een verbinding met haar ontstaansgeschiedenis die is toe te wijzen aan de aanwezigheid van de Bosbeek. De jury keurt dit project goed in de eerste plaats omwille van de hoge ambitie voor ontharding en het herstel van de natuurlijke valleiflank op deze centraal gelegen locatie: in totaal wordt beoogd om ongeveer 5.500 m² verharding uit te breken waarvan 4.000 m² effectief wordt onverhard.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.655009, 51.068773]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Landschappelijke verbinding Bosbeek-Oudsberg in Opoeteren (Lokale Gebiedsdeal Droogte Stroomdal Bosbeek)</strong><p>Met ‘Verbinding Bosbeek – Oudsberg’ zal men in Opoeteren een gemeenteweg ontharden en downgraden van een weg voor doorgaand verkeer tot een fietspad, en een zone realiseren voor de opvang van afstromend hemelwater langs de Kasteelstraat. Het project situeert zich op een strategische plek. Drie landschappen komen hier samen: een duinenlandschap vanuit het noorden, een bebost gebied vanuit het nationaal park en de oost-west georiënteerde Bosbeekvallei. Wat betreft de aanleg van een waterretentiezone gaat het Agentschap Natuur en Bos principieel akkoord. De precieze uitwerking ervan (locatie, dimensies, …) dient afgestemd met de terreinbeheerder.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.640529, 51.056932]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Natte Natuur: Herstel van een nat bos langs de rivier Groot Schijn in het Rivierenhof (Antwerpen)</strong><p>De Provincie beheert het grootste park (135 ha) binnen het grondgebied van de stad Antwerpen. Het Rivierenhof bevindt zich grotendeels aan de rand van de stedelijke kern. Het project creëert een aanzienlijk stuk waardevolle natte natuur (8000 m²). Men gaat aan de slag in een lager gelegen zone, die gedomineerd wordt door een oude populierenaanplant en een invasieve exoot (Canadese kornoelje). Door het project wordt de plek terug in verbinding gebracht met het Groot Schijn, de waterloop die meandert doorheen het Rivierenhof. Het herstel van de relatie tussen waterloop en vallei maakt dit projectvoorstel waardevol en een hefboom voor het gebiedsgericht proces ‘Oostelijke Verbinding’ en de daarin opgenomen doelstellingen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.456722, 51.218970]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Natte Natuur: Vallei inrichting Babbelbeekse beemden (Duffel)</strong><p>Het project heeft een strategische ligging op de rand tussen de kern en openruimte van Duffel. Het doel is het herstel van de vallei, droog/natgradiënten, graslanden en de optimalisatie en inrichting van extra natte natuur. De gronden zijn reeds in gemeentelijke eigendom en de tussenliggende percelen zijn in eigendom van Natuurpunt. De geplande werken hebben concreet betrekking op het herstel van de waterloop, waterberging, grachten, schuine oevers, houtkanten, poel, wandelpaden,... Dit project zal zorgen voor de ontwikkeling van een belangrijke deel van de vallei met 1,9 ha natte natuur (op termijn 6,4 ha) als onderdeel van het ruimer strategisch project Mechels Rivierenland.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.509123, 51.106833]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Natte Natuur: Ontwikkeling Landuytmoeras Terhagen (Rumst)</strong><p>Het project is een kleiner onderdeel van een groot aantal maatregelen voor landschapsontwikkeling in de Rupelstreek te Ranst. Het verbeteren van de natte natuur in deze kleiput is een volgende stap in het versterken en verbinden van een uitgebreid netwerk natte natuur. Het kadert binnen de grotere toekomstvisie voor de hele site, maakt onderdeel uit van het Rivierpark Scheldevallei en sluit aan bij de doelstellingen van het landinrichtingsproject Openruimteverbindingen Rupelstreek. Binnen het project worden enkele percelen aangekocht binnen de site Ceupens en via een hele reeks maatregelen ingericht als natte natuur. Op site Catenberg wordt een onthardings- en vernattingsproject voorgesteld.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.399379, 51.079148]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Natte Natuur: Realiseren van natte natuur tussen Netekanaal en Kleine Nete (Ranst)</strong><p>Het projectvoorstel zet in op de aankoop van vier percelen (0,8 ha) tussen de Kleine Nete en de Bollaak. Het gaat om percelen die deel uitmaken van het natuurlijk valleisysteem maar ingericht werden met vijvers en weekendverblijven. Binnen het bovenlokale gebiedsontwikkelingsproces voor de vallei van de Kleine Nete wordt voor dit gebied gestreefd naar het herstel van het natuurlijk valleisysteem (ligging in Natura 2000 en Vlaams Ecologisch Netwerk). De betrokken percelen die thans via het toepassen van een recht van voorkoop verworven kunnen worden, blijken een cruciale schakel te zijn om deze doelstelling te kunnen realiseren. Het project koppelt de ontwikkeling van natte natuur aan het realiseren van bijkomende waterbergingsmogelijkheden, ecologisch beekherstel en het herstel van het door sterk weekendverblijven verstoorde cultuurhistorisch waardevol valleilandschap.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.617766, 51.164799]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Natte Natuur: Kroonwerk Herentals (Herentals)</strong><p>Het projectvoorstel zet in op het opnieuw inschakelen van oude vestinggrachten in het waternetwerk. Dit deel van de vesten valt samen met de doordocht van de Kleine Nete door het stedelijk gebied Herentals waar de vallei op z’n smalst is. Het versterken van de connectiviteit van de natuurlijke structuur door het ontwikkelen van de Kleine Nete als een stevige groenblauwe ader door deze sterk bebouwde ruimte is een prioritaire opgave binnen het bovenlokale gebiedsontwikkelingsproces voor de vallei van de Kleine Nete. Het project bundelt meerdere opgaves in één geïntegreerd project waarbij netto ca. 1 ha nieuwe natte natuur ontwikkeld wordt: het versterken van de ecologische connectiviteit, het creëren van nieuwe natte natuur, het opnieuw watervoerend en -bergend maken van oude meanders, het herstel van waardevolle erfgoedelementen en het verhogen van de ruimtelijke kwaliteit van de publieke ruimte.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.837944, 51.18619]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Natte Natuur: Herstel van het Springbos in de Goorbosbeekvallei (Duffel)</strong><p>Het project is gekaderd in de werking van het strategisch project Mechels Rivierenland zoekt synergie met naastgelegen ontwikkelingen (vergroten reservaat), natuurontwikkeling, waterbeleid (incl. waterkwaliteit, waterberging en beperken overstromingen), klimaatbeleid (koolstofopslag), en de glastuinbouw in SK Waver. De subsidie gaat vooral naar aankoop van vier percelen die in een combinatie met bijkomende eigen middelen ook zal zorgen voor de afbraak van constructies, afbraak dam, slibopruiming grachten, moerasontwikkeling en inrichting (vlonderpaden,..). Dit project zal zorgen voor de ontwikkeling van 2,48 ha natte natuur als onderdeel van een ruimer project.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.497858, 51.079947]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Natte Natuur: Herstel van rietlandvegetatie in de Zegge (Geel)</strong><p>Het projectvoorstel zet in het op ontwikkeling van ca. 10 ha natte natuur in een gebied dat zeer sterk te lijden heeft onder verdroging. Het herstel en de ontwikkeling van deze natte moerasveennatuur in De Zegge is een belangrijk Natura 2000-doel. Het behoud, herstel en de ontwikkeling van het veengebied De Zegge en de aanpak van de verdrogingsproblematiek is één van de meest urgente en complexe opgaves binnen het bovenlokale gebiedsontwikkelingsproces Kleine Nete. Het project koppelt de ontwikkeling van natte natuur aan de het realiseren van klimaatbeleidsdoelen, gezien dat door verdroging van de veenpakketten massale hoeveelheden CO2 vrij te komen uit de bodem. Dit project zal op korte termijn bijdragen tot het significant herstel van de natte natuur in het Natura 2000-gebied.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.937925, 51.196995]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Natte Natuur: Kelderijbeemd (Bornem)</strong><p>Het project betreft het omvormen van weiland naar moerasgebied op eigen percelen van de gemeente Bornem. Hierdoor wordt er een extra buffercapaciteit gecreëerd die de wateroverlast in de gemeente beperkt. Bovendien maakt het project deel uit van het bovenlokaal gebiedsontwikkelingsproces Rivierpark Scheldevallei. De aangevraagde inrichting is ook aanvullend en complementair aan het landinrichtingsproject Schelde en Rupel en past daarnaast binnen het actief peilbeheer dat voorgesteld wordt in het riviercontract Vliet-Molenbeek dat momenteel wordt voorbereid.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.281538, 51.085069]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Natte Natuur: Tegengaan acute verdroging elzenbroekbos in SBZ Moer van Hingene (Bornem)</strong><p>Het project heeft als doel om de acute verdroging van het elzenbroekbos in het SBZ Moer van Hingene tegen te gaan. Dit gebied is verdroogd als gevolg van de wijziging van de waterhuishouding in de benedenloop van de Vliet-Grote Molenbeek. De voeding van dit gebied verdween samen met de getijwerking bij de realisatie van het pompgemaal met lozing op het kanaal. Via het project wordt op kunstmatige wijze voor voeding van het gebied voorzien via zonnepompen. Daarnaast worden stuwtjes voorzien om het water beter op te houden. Het project kadert binnen onder meer project Otterland en he riviercontract Vliet-Molenbeken.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.285273, 51.091527]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Natte Natuur: Natte Natuur in Niel versterken en verbinden (Niel)</strong><p>Het projectvoorstel realiseert een belangrijke natte verbinding tussen twee natuurgebieden en vormt hiervoor de missing-link. Op de site De Stunt wordt natte natuur gerealiseerd in de vorm van wadi’s. Bovendien wordt het Niels Broek vernat door het plaatsen van vier stuwen en de aanleg van poelen in weiland Broeklei. Het project realiseert een belangrijke groenblauwe verbinding die de leefbaarheid van de gemeente verhoogt. Het kadert binnen het landinrichtingsproject Openruimteverbindingen in de Rupelstreek en het gebiedsprogramma Rupelstreek.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.329079, 51.105824]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Boortmeerbeek</strong><p>De aanvraag is gekaderd in de werking van het strategisch project Mechels Rivierenland en is deel van het actieprogramma, met name van een ruimer project rond de Weesbeek/Dijle en de verbinding / uitbreiding van een natuurgebied (Pikhakendonk, Dijlemonding,..) en een open ruimte gebied Boortmeerbeek/Kampenhout. Dit project zal zorgen voor de ontwikkeling van een belangrijk deel van een vallei met 8.493 m² natte natuur als onderdeel van een ruimer project. Het doel is de herwaardering van een stuk van het herstel van de verschillende delen van de waterloop. Bij de inrichting zal er worden gezorgd voor beplanting, de aanleg van een poel en mogelijke werken aan de waterloop, berging, ...</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.565238, 50.978714]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Verwijderen stort Kwadebeekvallei (Sint-Genesius-Rode)</strong><p>De gemeente neemt een belangrijke trekkersrol in een project met belangen dat de gemeentegrenzen overschrijdt en dat deel is van het LIP Molenbeekvallei in de Vlaamse Rand. De raming in het landinrichtingsplan is te laag om het volledige stort te kunnen saneren. De verwijdering van het stort wordt gecombineerd met extensieve natuurlijke waterberging. De percelen waar het stort op ligt zijn eigendom van de gemeente Sint-Genesius-Rode. Het stort is volledig gelegen op veenbodem. Het herstel van de Kwadebeek heeft een gunstige invloed op de in de omgeving aanwezige vroedmeesterpad.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.347969, 50.739042]
                        }
                    },
                {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Opwaardering Tangebeekvallei Borgt (Grimbergen)</strong><p>Het project maakt deel uit van het strategisch project Groene Noordrand en sluit aan op de plannen in het landinrichtingsproject Groene Noordrand. Het draagt bij tot de maximale vrijwaring en de kwalitatieve opwaardering van de open ruimte, het herstel van groenblauwe verbindingen en het creëren van meer ruimte voor waterinfiltratie. Het project wil het ‘Buurtpark Borgt’ kwalitatief, klimaatbestendig en ecologisch versterken, de Tangebeekvallei opwaarderen en de bestaande groenkernen ‘Tangebeekbos’ en ‘Domein Ter Tommen’ met zijn grote oppervlakte moerasbos aaneenschakelen als deel van het beoogde robuuste groenblauwe netwerk.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.406778, 50.928567]
                        }
                    },
                   {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Bijkomend ontharden van de gemeentelijke recreatiezone ten voordele van de inrichting van parkgebied met buffergracht (Grimbergen)</strong><p>Het projectgebied bevat een voetbalveld, een skatepark, voetbalinfrastructuur en terreinen voor hondenscholen. Alle infrastructuur wordt uit het park weggehaald en onthard en de parkzone krijgt een natuurlijke inrichting met waterbuffering (via het vooruitstrevende principe van een swale), maatregelen die de biodiversiteit sterk verhogen, recreatieve doorwandelbaarheid en zones voor waterbeheersing. De infiltratie van hemelwater wordt bevorderd en water krijgt een belangrijke plek in de heringerichte parkzone. De realisatie van het project zorgt voor een kwalitatieve versterking van de vallei en is een inspirerende quickwin en hefboom voor de latere uitvoering van het lopende strategisch project Groene Noordrand en een aantal landinrichtingsplannen. Het effent het pad voor een volledige herinrichting als groenblauw netwerk en als natte natuur van een valleigebied met een lengte van ruim 12 kilometer.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.390463, 50.943309]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Opwaardering Molenbeek (Wemmel)</strong><p>Het project maakt deel uit van het openruimtelandschap in de bebouwde kern van Wemmel en vormt een belangrijke schakel voor de later uit te voeren plannen voor de ontwikkeling van een aaneengesloten blauwgroen netwerk en recreatief systeem van de Molenbeek- en Maalbeekvallei van de Groene Noordrand. Met het vernatuurlijken van de Molenbeek en de aanleg van wadi’s wordt plek gegeven aan natte natuurontwikkeling. Een meer gedifferentieerd beheer met het oog op (natte) natuur versterkt dat gegeven. Het herstel van de natuurwaarde zorgt voor extra waterbuffering en zo draagt het project ook bij tot de vermindering van de wateroverlast in Wemmel maar ook in het stroomafwaarts gelegen Grimbergen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.310104, 50.909115]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Zuurstof voor de Vogelzangbeek (Sint-Pieters-Leeuw)</strong><p>Onder de koepel van het strategisch project Zennevallei werkt de gemeente Sint-Pieters-Leeuw aan de opwaardering van de regionale bedrijvenzone 3 fonteinen. Het project verdient zeker de nodige ondersteuning en de gemeente maakt gedurfde en vooruitstrevende keuzes. Het gaat om de verwerving en afbraak van een bedrijfsgebouw vlak langs de waterloop. De afbraak en ontharding en de evolutie naar meer natte natuur is een meerwaarde voor de latere plannen in dit gebied. De signaalwaarde van het project is groot. Als hefboomproject kan dit project inspirerend en exemplarisch worden ingezet voor de verdere verbetering en versterking van de groenblauwe structuren, natte natuur en open ruimte.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.290825, 50.808463]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Groen-blauwe ader Zuunbeek (Sint-Pieters-Leeuw)</strong><p>Het project betreft de aankoop van enkele restpercelen binnen een deels reeds gerealiseerde groene verbinding. De realisatie van dit project is een goede aanvulling. De inrichting van deze en reeds verworven percelen maakt het mogelijk om de verstedelijkte Zuunbeekvallei uit te bouwen tot een waardevolle groenblauwe ader en biedt mogelijkheden voor een ecologische opwaardering van de waterloop.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.27831, 50.795833]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Dossier Ravaartstraat als onderdeel vernatting Peutiebos-Floordambos op grondgebied van Stad Vilvoorde (Vilvoorde)</strong><p>Het project Ravaartstraat gaat om een ontharden van een overgedimensioneerde weg op twee gemeenten (Vilvoorde en Steenokkerzeel) ten voordele van natte natuur. De Ravaartstraat verbindt de natuurreservaten Peutiebos (stad Vilvoorde) en Floordambos (gemeente Steenokkerzeel). De bossen zijn ontwikkeld op natte veenbodem. Het afstromen van vervuild wegwater naar de aanliggende natuurgebieden wordt hiermee ook vermeden. Het is onderdeel van een totaal aanpak binnen het landinrichtingsproject (vernatting, ecologische verbinding, recreatief medegebruik, bosuitbreiding, …) waar ook een opstuwing van de Trawoolbeek wordt voorzien. De Ravaartstraat als onderdeel van de vernatting van het Peutiebos op grondgebied van de stad Vilvoorde betreft een essentiële gemeentelijke aanvulling voor de gehele uitvoering van het LIP.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.455514, 50.923934]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Dossier Ravaartstraat als onderdeel vernatting Peutiebos-Floordambos op grondgebied van gemeente Steenokkerzeel (Steenokkerzeel)</strong><p>Het dossier Ravaartstraat gaat om een ontharden van een overgedimensioneerde weg op twee gemeenten (Vilvoorde en Steenokkerzeel) ten voordele van natte natuur. Het is onderdeel van een totaal aanpak binnen het landinrichtingsproject (vernatting, ecologische verbinding, recreatief medegebruik, bosuitbreiding, …) waar ook een opstuwing van de Trawoolbeek wordt voorzien. De ontharding van de Ravaartstraat en de aanleg van een grotere poel op het grondgebied van gemeente Steenokkerzeel staan in nauw verband met het hydrologisch regime van het ganse veenbos-complex. De werken gebeuren op enige afstand van de waterloop, maar kaderen in een bredere visie om tot een totaalherstel van de waterhuishouding en daarvan afhankelijke natuur te komen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.468291, 50.921382]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Nat Nossegem - Kleine Beek (Zaventem)</strong><p>In dit project worden twee bestaande bufferbekkens omgevormd zodat ze ook ecologisch interessant zouden worden. Momenteel is dit vallei-ecosysteem zo goed als onbestaande doordat er geen ruimte is voor natte natuur en de waterkwaliteit van de beek zeer slecht is. Het betreft een quickwin die op relatief korte termijn uitgevoerd kan worden. Het opbreken van de overgedimensioneerde betonnen kuip van het oude bufferbekken en de nieuwe doorsteek van de kleine beek, moeten toelaten dat het water kan meanderen doorheen het oude bufferbekken. Hierbij zal de ontwikkeling van natte natuur gestimuleerd worden en worden ook recreatieve doorgangen beter georganiseerd.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.499435, 50.882356]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Meer broek voor de Mansbroeken (Affligem)</strong><p>De Mansbroeken in de vallei van de Bellebeek in Teralfene kent een moeizame ontwatering door heel wat menselijke ingrepen. Dit heeft gezorgd voor een versnelde verlanding van de moerasbiotoop. Het project zal deze natte biotoop herstellen via verschillende hydrologische ingrepen. Er zal bijkomende waterbuffering gecreëerd worden (ontslibben, ophogingen ongedaan maken,…), peilbeheer (voor droge en natte periodes), waterkwaliteit (lozing weggewerkt), vegetatiebeheer (tegen verlanding). De subsidie zal voornamelijk aangewend worden voor aankoop van de grond (2,5 ha). Het project heeft een sensibiliserende werking naar de omgeving: er is veel wateroverlast in Affligem, en beoogt bij te dragen aan het klimaatbestendig maken van het centrum van Teralfene.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.098923, 50.888396]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Aanleg poel en omgeving in de Warandeduinen t.h.v. de site van de radiozendmasten (Middelkerke)</strong><p>Een oude militaire infrastructuur in de Warandeduin wordt afgebroken en maakt plaats voor deaanleg van een poel. De herinrichting van het terrein levert een belangrijke bijdrage aan het versterken van de restpopulatie kamsalamander in het gebied. De ingreep draagt tevens bij aan het vergroten van de infiltratiecapaciteit van de duinen, en zo het versterken van de zoetwaterlens onder het duinencomplex. Deze is van groot belang als zoetwaterbron voor de drinkwatervoorziening van de kust en het tegengaan van verzilting het poldercomplex. Het project is zo een waardevolle stepping stone en lokale hefboom voor het versterken van het Vlaamse duinencomplex; een belangrijke doelstelling van het gebiedsproces T.OP Kustzone!</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [2.803855, 51.18173]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Hefboomproject Natte Natuur - Uitkerkse Polder (Blankenberge)</strong><p>Natuurpunt en de stad Blankenberge voorzien lokale afgravingen en het afdammen van slootjes, op de structurele verdroging van de Uitkerkse polder tegen te gaan. De ingrepen van de huidige case zijn nuttig als korte termijnoplossing om de droogte te bestrijden. Het plaatsen van de schotten kan een meer structurele oplossing bieden. In het bovenlokale gebiedsproces gebiedsproces T.OP Kustzone vormt duurzaam watermanagement  in het poldercomplex een van de aandachtspunten. De case van de Uitkerkse polder situeert zich binnen de Oudlandpolder, waar een raamakkoord werd afgesloten tussen Vlaamse en lokale partners om dit watermanagement toekomstgericht aan te pakken, onder meer door compartimentering en peilsturing. De ingrepen door Natuurpunt zijn complementair aan de aanpak van het raamakkoord.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.136184, 51.290938]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Herwaardering van de IJselbeek (Wervik)</strong><p>De provincie West-Vlaanderen wil in samenwerking met de stad Wervik de ingebuisde IJselbeek openleggen, waarbij deze beek tevens een hermeandering krijgt. Het project voorziet de aankoop van een tweetal hectare grond om een natte natuurproject te realiseren van ongeveer 1,7 hectare. De percelen worden afgegraven in functie van de creatie van natte bloemrijke hooilanden met waar mogelijk ook het voorzien van kleine landschapselementen. Ter hoogte van het stuk waar de inbuizing niet wordt opgebroken, wordt een bypass in open profiel aangelegd waardoor het water vanaf de autosnelweg A19 in open profiel kan afstromen tot aan de Geluwebeek. Het project draagt bij tot het versterken van het blauwgroene netwerk in de regio Zuid-West-Vlaanderen en creëert natte natuur in het systeem van de Leie.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.06471, 50.82092]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Inrichting Blankenbergse Dijk 155 (Brugge)</strong><p>De case van stad Brugge bevindt zich in het poldercomplex van de Nieuwe Polder van Blankenberge, en sluit aan op de nattere omgeving van de Sint-Pietersplas. Voor dit recreatiedomein is een masterplan in opmaak. Het project beoogt de inrichting van de recent aangekochte gronden ter hoogte van de Blankenbergse Dijk 155. De huidige akkers worden ingericht als (nattere) poldergraslanden door afplaggen en de herinrichting van laantjes. De hefboomfunctie situeert zich in het omzetten van hoogproductieve akkers naar (vochtige) graslanden waar dit ruimtelijk en fysisch wenselijk en nuttig is, om zodoende de polder meer klimaatbestendig te maken. In het bovenlokale gebiedsproces gebiedsproces T.OP Kustzone vormt duurzaam watermanagement in het poldercomplex een van de aandachtspunten.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.191157, 51.238562]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Uitbreiding van het provinciedomein De Gavers, Met ruimte voor natte natuur, recreatie en natuureducatie (Harelbeke)</strong><p>De uitbreiding van De Gavers voorziet ruimte voor natte natuur, recreatie en natuureducatie in drie deelzones. De eerste deelzone omvat natuur, natte meersen (natte weiden, poelen, historische grachten, moerasbossen, bosranden, struwelen en bomenrijen) en natuureducatie. In de tweede deelzone wordt een gecontroleerd overstromingsgebied (GOG) aangelegd en een uitbreiding van het natuurgebied voorzien. Door de aanleg van het GOG op twee zijlopen van de Gaverbeek wordt deze beek ontlast. Het verwerven van terreinen langs de Gaverbeek laat toe deze ecologisch in te richten. In een derde deelzone (buiten deze subsidiëring) wordt voorzien in een hermeandering van de Gaverbeek. Het ganse project vormt een hefboom voor verdere acties in het provinciedomein en levert een bijdrage tot de realisatie van de Gaverbeekvisie als bovenlokaal proces en het versterken van het blauwgroene netwerk in de regio Zuid-West-Vlaanderen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.316915, 50.840186]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Kortrijk</strong><p>Het project ‘herwaardering van de Hellebeek’ wenst 2 ha natte natuur te realiseren. Voor de realisatie van het project zal de stad Kortrijk aan weerzijden van de beek een strook grond aankopen met een totale oppervlakte van ca. 1,6 ha. De gronden liggen volledig in woonuitbreidingsgebied. De waterloop wordt opengelegd en de oeverzones krijgen een verflauwd talud, waardoor natte graslanden en natte ruigte (spontaan) kunnen ontwikkelen. Daarnaast worden ook beekbegeleidende landschapselementen aangeplant en een bufferzone en gracht aangelegd. Het project draagt bij tot het versterken van het blauwgroene netwerk in de regio Zuid-West-Vlaanderen, creëert natte natuur in de Leievallei, en draagt ook bij tot het vrijwaren en versterken van de resterende open ruimte in de omgeving van de luchthaven Kortrijk-Wevelgem.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.224799, 50.923934]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Menen</strong><p>Het Barakkenpark is een nieuw stukje natuur dat gerealiseerd wordt bij het centrum van Menen. Het toegepaste natuurstreefbeeld is het valleibos, voortbouwend op de visie van valleiherstel dat natte natuur creëert in het systeem van de Leie en bijdraagt tot het versterken van het blauwgroene netwerk in de regio Zuid-West-Vlaanderen. De gronden werden reeds in 2019 verworven door de stad Menen en het ontwerp werd via een participatief traject opgemaakt. Water krijgt een prominente plek in het park, met verschillende waterelementen (wadi, poel, gracht) en bostypes. Naast natuurontwikkeling en ecologie vormt ook toegankelijkheid een belangrijk onderdeel van het project.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.130082, 50.7916]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Realisatie natte natuur groenpool Gentbrugse Meersen (Gent)</strong><p>Het projectvoorstel zet in op het ontwikkelen van ca. 10 ha nieuwe natte natuur in het voormalige meersengebied langs de Bovenschelde binnen een globale ontwikkelingsvisie op de groenpool langs de Bovenschelde. De aanvraag omvat ook de verwerving van 3 van deze 10 ha die nog niet in eigendom van stad Gent is. De inrichting van dit meersengebied draagt bij aan de doelstellingen van het bovenlokale gebiedsontwikkelingsproces voor de Scheldevallei (strategisch project Rivierpark Scheldevallei). Voor de 3 ha nog te verwerven, zal de stad indien nodig over gaan tot onteigening. Het project koppelt de ontwikkeling van natte natuur aan de ontwikkeling van een randstedelijk groengebied (groenpool) met een recreatieve functie.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.783153, 51.045064]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Landschapspark Burchtdam (Ninove)</strong><p>Het ambitieuze project herstelt een typisch meersengebied als onderdeel van een landschapspark in de onmiddellijke nabijheid van het stadscentrum. Het betreft de omvorming van weidegronden door vernatting met een centrale hermeandering van de aanwezige beken en de aanleg van wijkklimaatbuffers aan de buitenzijde die het water vanuit de wijken opvangen. De parkpaden die de wijkklimaatbuffers scheiden van het centrale open meersengebied vervullen een bijkomende cruciale functie als dijkje. Zo ontstaan buffers die het water ophouden, infiltreren en vertraagd afvoeren naar het open meersenlandschap. De wijkklimaatbuffers worden beplant met bomen, afgewisseld door droge donken en rietmoerasvegetatie. Het is een waardevol hefboomproject in kader van de gebiedsontwikkeling Ruimte voor Water Dendervallei als voorbeeld van zachte verbreding en inschakelen van de winterbedding.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.024082, 50.832772]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Hefboomproject Natte Natuur Oude Leiemeander Kerkhoek Olsene (Zulte)</strong><p>De gemeente Deinze wil een restperceel tussen de begraafplaats, het waterzuiveringsstation en een oude Leiemeander structureel vernatten. Tevens wordt voorzien in een trage weg langsheen de Leiemeander. Het initiatief van gemeente Zulte is waardevol voor het proces van Rivierherstel Leie, en geeft aan dat realisatie van de natuurdoelen van Rivierherstel niet noodzakelijk louter een aangelegenheid is van bovenlokale overheden. Het past ook in het Interbestuurlijk Samenwerkingsakkoord Zuid-West-Vlaanderen waarin de integrale aanpak van de Leievallei een van de acties vormt.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.455708, 50.937439]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Optimalisatie van het peilbeheer in de Damsloot gelegen in de Damvallei door aanpassen van de stuw Asserij naar een regelbare en vismigreerbare stuw (Laarne)</strong><p>Het project zal via het plaatsen van vier stuwen op eigen terrein ervoor zorgen dat er opnieuw ecologisch waardevolle natte natuur kan gecreëerd worden en wateroverlast beperkt wordt. Ook wordt de relatie gelegd met recreatie via de wandelpaden in de buurt. Een aanzienlijke oppervlakte natte natuur (65ha) wordt op deze manier voorzien. Het project kadert binnen het Strategisch Project Rivierpark Scheldevallei.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.823974, 51.044575]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Aankoop gronden Mangelbeekvallei (Heusden-Zolder)</strong><p>De gemeente Heusden-Zolder wenst de subsidie te gebruiken voor de aankoop van 7 ha grond in de Mangelbeekvallei. Omwille van de strategische ligging van de percelen in functie van het landinrichtingsplan Mijn Mangelbeek, de mogelijkheid om ze nu aan te kopen én hun bestemming volgens het gewestplan als grond voor openbaar nut, is het van groot belang om deze gronden in het beheer van de gemeente te krijgen. Het project zal de waterhuishouding in het gebied verbeteren, de natuur vernatten en de debieten van de pompen in het mijnverzakkingsgebied verlagen. Op korte termijn worden reeds exoten verwijderd en de vegetatie voor natte natuur aangepast. Vervolgens worden op basis van de lopende eco-hydrologische studie gepaste maatregelen uitgevoerd.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.28186, 51.020635]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Vernatten veen met omgeving en educatieve functie Kelchterhoef (Heusden-Zolder)</strong><p>Dit projectvoorstel beoogt onder meer: het vernatten van het veenpakket, het herstel van het moerasbos en, bodempeilverhoging van de Laambeek. Een oppervlakte van 3,5ha aan verdrogend veen kan hersteld worden, en dit met een directe impact op het duurzaam behoud van 4,5ha mesofiel moerasbos. Het project draagt in grote mate bij aan de realisatie van belangrijke doelstellingen uit zowel het uitvoeringsprogramma De Wijers (2016) als de lopende landinrichtingsprojecten De Wijers. Het geeft ook onrechtstreeks uitvoering aan de ambities van het complex project Noord-Zuid Limburg en wordt ingebed in een ruimere recreatieve structuur. Het belang van de bescherming van veen voor de opslag van CO2 en het herinrichten van de zone als ‘spons’ zijn zeer belangrijk in functie van klimaatuitdagingen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.440284, 51.030225]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Herstel van natte graslanden en bossen in Elsenhout, Stiemervallei (Genk)</strong><p>In het gebied Elsenhout wordt gestreefd naar het herstel van 7,6 ha natte natuur, waarvan ongeveer 4,4 ha vochtige dotterbloemgraslanden en 3,2 ha Elzenbroekbossen. Vandaag zijn de graslanden in Elsenhout in slechte staat: ze zijn verruigd, dreigen te verbossen en het watersysteem is verstoord. In de natte broekbossen komen heel wat exoten voor die de broekbossen bedreigen. Dit gebied heeft grote potentie om natte dotterbloemgraslanden te ontwikkelen met elementen van zuur laagveen. Om samen met Natuurpunt de natuurinrichtingsmaatregelen te kunnen uitvoeren en het streefbeeld in het natuurbeheerplan te bereiken wil de stad Genk delen van het gebied aankopen. Het project draagt ook in grote mate bij aan de realisatie van belangrijke doelstellingen uit zowel het uitvoeringsprogramma De Wijers (2016) als de landinrichtingsprojecten Stiemerbeekvallei en De Wijers.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.525153, 50.994995]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Open maken van vennen in Kielenswen, Stiemervallei (Genk)</strong><p>In het gebied Kielenswen wordt gestreefd naar het herstel van 6,4 ha natte natuur, meer bepaald vennen, vochtige graslanden en Elzenbroekbossen. Momenteel is het gebied Kielenswen dicht begroeid en dreigen de waterstructuren en vennen dicht te slibben. Het is belangrijk deze zone te versterken om de voeding van natuurgebied Dde Maten te blijven garanderen. Maatregelen zoals het open maken van waterstructuren en slibverwijdering zijn nodig om de vennen en de oude Stiemer-arm in ere te herstellen. De aankoop van een aantal bijkomende percelen, creëert één groot aaneengesloten stuk natte natuur dat efficiënt beheerd kan worden. Door enkele vennen te verbinden, ontstaat een brede strook nat grasland die machinaal bewerkt kan worden. De stad Genk wil dit samen met Natuurpunt en de vzw Neos vzw realiseren door percelen aan te kopen en natuurinrichtingsmaatregelen uit te voeren.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.487345, 50.971091]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Open maken van vennen in Kielenswen, Stiemervallei (Genk)</strong><p>In het gebied Kielenswen wordt gestreefd naar het herstel van 6,4 ha natte natuur, meer bepaald vennen, vochtige graslanden en Elzenbroekbossen. Momenteel is het gebied Kielenswen dicht begroeid en dreigen de waterstructuren en vennen dicht te slibben. Het is belangrijk deze zone te versterken om de voeding van natuurgebied Dde Maten te blijven garanderen. Maatregelen zoals het open maken van waterstructuren en slibverwijdering zijn nodig om de vennen en de oude Stiemer-arm in ere te herstellen. De aankoop van een aantal bijkomende percelen, creëert één groot aaneengesloten stuk natte natuur dat efficiënt beheerd kan worden. Door enkele vennen te verbinden, ontstaat een brede strook nat grasland die machinaal bewerkt kan worden. De stad Genk wil dit samen met Natuurpunt en de vzw Neos vzw realiseren door percelen aan te kopen en natuurinrichtingsmaatregelen uit te voeren.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.487345, 50.971091]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Bilzen</strong><p>Het project heeft tot doel de ecologische waarde van de Munsterbeek te verhogen over de hele lengte van de waterloop in het open (natuur)gebied stroomafwaarts van de Appelboomgaardstraat. Hiervoor worden veel variaties in het stroompatroon van de waterloop gecreëerd. Dit geeft aanleiding tot (lokaal) variërende stroomsnelheden, wat op zijn beurt zorgt voor verschillende samenstellingen van het beekbeddingmateriaal. De (graaf)werken die zullen uitgevoerd worden om de Munsterbeek over dit hele tracé met ongeveer een lengte van 850m ecologisch te herwaarderen bestaan uit het actief uitgraven en terug inschakelen van oude meanders, de creatie van micromeanders en het inbrengen van natuurlijke materialen zoals dood hout en stenen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.51545, 50.889807]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Natte Natuur: Slangbeek als beleefbare natte natuurverbinding (Zonhoven en Hasselt)</strong><p>De Slangbeekvallei is een van de structurerende parallelle beekvalleien die de ‘ladderstructuur’ van De Wijers vormen en is aangeduid als een provinciale natte natuurverbinding. De bovenlokale visie is toegespitst op de versterking van die blauwgroene aders, die historisch ook een cruciale rol speelden in de ontwikkeling van De Wijers en bij uitbreiding de regio midden-Limburg. Het voorgestelde project versterkt de waterloop in die rol, noodzakelijk voor het in stand houden van een aantal bedreigde soorten. Het creëert natuurlijke stapstenen en verbindingen tussen de belangrijke SBZ-gebieden om zo de soorten gemakkelijker te laten migreren en de genetische dispersie te bevorderen. Het project kadert binnen de doelstellingen van de landinrichtingsprojecten van De Wijers waarbij naast natuur(verbindingen) ook andere relevante openruimtethema’s aan bod komen zoals beleefbaarheid, klimaatbuffering, waterveiligheid…</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.376341, 50.97666]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuin Ontharding 2018 (Coalitievormend): GruunRant Onthardt</strong><p>Dit grootschalige project wil een onthardingsgolf op gang brengen om de Antwerpse stadsrand te defragmenteren en te vergroenen. Door coalitievorming wil men zoveel mogelijk concrete onthardingsprojecten uitwerken met lokale betrokkenen en actoren. Het project vertrok van een ruimtelijke analyse die verschillende strategisch gelegen en potentieel te ontharden zones in kaart bracht. Intussen zijn via verschillende participatiemomenten en overlegmomenten vele mensen (burgers, politici, districtsen gemeentebesturen, …) in de ban van het ontharden van de groene rand rond Antwerpen. Vier projecten (twee scholen, een bedrijventerrein en een gemeente) zijn uitgekozen om ook daadwerkelijk te gaan ontharden. De fase van ontwerp wordt op gestart samen met de participatiefase. Via deze eerste golf van ontharding worden anderen getriggerd om mee de vergroeningsbril op te zetten. In een volgende fase zullen ook projecten van de Stad Antwerpen meegenomen worden om aan de slag te gaan met ontharden. De bedoeling is om een vernieuwende en lokaal sterk verankerde coalitie op te zetten die ook na de proeftuin via samenwerking verder inzet op ontharding.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.491455, 51.252004]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Coalitievormend):	Geïntegreerde ontharding Redingenhof (Leuven)</strong><p>Het project omvat een vernieuwende coalitie tusseneen school en buurtbewoners, publieke en professionele partners, die inzetten op verschillende onthardingen door de herinrichting van twee straten en een aanpalend schoolterrein. Men stelt een aanpak voor over de perceelsgrenzen heen, die werkt rond verharde terreinen in publiek en privaat bezit. Daardoor ontstaan kansen voor een sterkere doorwaadbaarheid (het realiseren van een doorsteek waar je nu niet door kan) en vernieuwende onderhoudsmodellen in samenwerking. Via een reeks concrete acties rond de thema’s water, mobiliteit en biodiversiteit wordt de coalitie gevormd en het draagvlak voor een meer permanente ontharding versterkt.'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.69322, 50.872601]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Infiltratie in co-creatie (Borsbeek) </strong><p>Op de site van het fort van Borsbeek wordt een ruime natuurlijke herinrichting gerealiseerd, nadat grote oppervlakten verharding weggenomen zijn en oude loodsen gesloopt werden. Er komt geen bijkomend ruimte-beslag. De activiteiten die plaatsvonden in de te slopen gebouwen, verhuizen naar historische gebouwen in het fort. De ontharde ruimte krijgt veel aandacht voor biodiversiteit, waterhuishouding en (historische) belevings-waarde en wordt zoals het natuurgebied ernaast onder het beheer van Natuurpunt gebracht.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.477732, 51.187286]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Ontharding en waterberging in de vallei van de Kleine Nete (Lier, Nijlen, Ranst en Zandhoven)</strong><p>Natuurpunt werkt stapsgewijs aan het ontharden in de benedenloop van de vallei van de Kleine Nete. Als proeftuin ontharding maakt men een versterking en versnelling van de uitvoering van deze ambitie en werking. Ze doen dit door zonevreemde verblijven en verhardingen in natuurgebied op te ruimen en het oorspronkelijke reliëf te herstellen. Ook trachten ze andere historische ophogingen met bv bouwpuin uit dit overstromingsgevoelig gebied te verwijderen. Zo realiseren ze meer ruimte voor natuur en waterberging en creëren een aantrekkelijker landschap voor wandel- en fietsrecreatie, een echte win-win-win.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.615543, 51.178816]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Gummarushof (Mechelen)</strong><p>De bewoners van toekomstig co-housingsproject Gummarushofen vzw Gummarus OLV (de naburige scouts) slaan de handen in elkaar om hun terreinen te ontharden en om te vormen tot een groene oase in de wijk. Met hun voorstel willen ze sterk inzetten op biodiversiteit, infiltratie van water en hergebruik van het ontharde materiaal, alsook het openstellen van de toekomstige binnentuin voor buurt- en andere socio-culturele activiteiten. De transformatie van het gebied gebeurt op een participatieve en co-creatieve manier tussen 24 gezinnen van verschillende grootte en de leden van de scouts.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.482513, 51.038067]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Groen in plaats van Grijs: Het centrale marktplein en omgeving rond gemeentehuis helemaal omgevormd tot een groen ontmoetings-en landschapspark	(Vorselaar)</strong><p>De gemeente Vorselaar wil haar centrale marktplein autovrij maken en ontharden. Ze zal naast het groener heringerichte plein een grotere, trage en groene verbinding creëren. Daarbij worden gebouwen gesloopt en wordt het gemotoriseerd verkeer gereorganiseerd en verminderd. Het voorgestelde project past binnen een groter masterplan en bovendien is het ontharden verankerd in een meerjarenplan en een vademecum openbaar domein. Het voorstel toont een sterk engagement op financieel, sociaal en politiek vlak.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.773709, 51.201611]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Zuurstof voor de vogelzangbeek (Sint-Pieters-Leeuw)</strong><p>De Vogelzangbeek is vandaag sterk verweven en verscholen in het verstedelijkte landschap. Dit project wil door ontharding de aanwezigheid van de Vogelzangbeek verbeteren. Door een zeer strategisch gelegen bedrijfsgebouw te slopen, wil het een toonaangevende bijdrage leveren aan het verder ontharden en vrijwaren van de vallei van de Vogelzangbeek. De ontharde ruimte zal worden omgevormd tot natuurgebied, met aandacht voor waterbeheer, biodiversiteit, landschapsbeleving en recreatie. Het project kadert in een ruimere strategische aanpak en ambitie voor het versterken van het netwerk van groenblauwe aders.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.29203, 50.807797]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Van grijs naar groen speelparadijs (Halle)</strong><p>Met dit project willen de scholen meer dan de helft van hun verharde speelplaats ontharden. De scholen sluiten met hun onthardingsproject aan bij het project van het landschapspark Zenne dat de stad Halle wil realiseren, wat de impact van beide projecten versterkt. De ontharde speelruimte zal na de schooluren en tijdens de weekends ook voor een breder publiek toegankelijk zijn, in functie van het medegebruik van schoollokalen voor ontspanning, actieve en rustige spelmomenten, educatieve activiteiten, e.d. De aansluiting bij het landschapspark de Zenne, de klimaatrobuuste aanpak, het binnentrekken van hoogstammig groen in de stad en de zichtbaarheid naar het publiek domein ondersteunen de strategische impact. Ook op educatief vlak staat dit project sterk.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.238017, 50.734873]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): De zevensprong onthardt	(Leuven)</strong><p>Freinetschool de Zevensprong is gelegen in het sterk verharde centrum van Leuven en wil op een innovatieve manier haar grootste speelplaats maximaal ontharden. De speelplaatswerkgroep is samengesteld uit ouders, leerkrachten, onderhoudspersoneel. Ze ging in zee met een architect en landschapsontwerper met veel ervaring in het kwalitatief vergroenen en ecologisch heraanleggen van speelplaatsen. Het origineel ontwerp heeft een educatieve en sterk participatieve insteek en brede samenwerkingsverbanden. Het voorziet een buitenklas, uitwisselingen met de moestuin (werken op gesloten kringlopen) en betrekt de kinderen bij het onthardingsproces en de aanleg van de veelzijdig groene speelplaatsherinrichting. Ook opgenomen in het voorstel zijn wateropvang en -zuivering, en het versterken van ecologie in de stad. Alles is ook opgenomen in een breed leertraject en lessenpakket dat de school verder zal uitdragen naar andere scholen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.702727, 50.88215]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Ontharden Zenneweide (Halle)</strong><p>Het project voorziet een effectieve ontharding van eenbedrijventerrein bij de Zenne in Lembeek, en de herbestemmingervan tot een openbaar natuurpark ‘Zenneweide’.Daarbij worden op het bedrijventerrein gebouwengesloopt en hun funderingen verwijderd, en worden bv.ook de toegangswegen weggenomen. Daarna wordt ookde bestemming gewijzigd van industriegebied tot natuurgebied.Het natuurpark wordt één van de grotere schakelsbinnen het openruimteproject ‘landschapspark Zenne’,dat kadert in het strategisch project Zennevallei.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.227336, 50.713194]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Speelgroenplaats - een droom van een speelplaats (Kortrijk)</strong><p>Voor de heraanleg van haar speelplaats werkte BasisschoolSint-Paulus aan een participatief voortraject metvele partners, kinderen, leerkrachten en ouders. Daarvoorwerkte de school met een sterk team met goedetechnische kennis, speelplaats- en landschapsontwerpervaring. Het project realiseerde een ruime ontharding, met veel aandacht voor het ecologisch ontwerp en hetverhogen van de opvangcapaciteit en het hergebruik vanhemelwater. Overtollig hemelwater zal via natuurlijkedrainage door de ontharde speelplaats in de bodem kunneninfiltreren. De groene speel- en leeromgeving en hetduurzaam omspringen met water, maar ook de kennis diewordt opgedaan en de heraanleg van de speelplaats zelf,worden op een pedagogische en leerrijke manier ingezetten voordele van de kinderen van de school. Bovendienwordt de ruimte op termijn opengesteld voor de buurten jeugdwerkorganisaties in samenwerking met de stadKortrijk. De school gaat heel bewust om met het creërenvan meer biodiversiteit, verbeteren van de luchtkwaliteiten het zoeken van oplossingen voor het gebrek aan deschaduw die er op betonnen speelplaatsen vaak is. Derealisatie van het project is te volgen via diverse kanalenzoals www.speelgroenplaats.be en sociale media. Dit zorgtervoor dat de betrokkenheid van ouders en kinderenhoog is. Daarnaast zet de school ook in op het inspirerenvan andere scholen en leerkrachten om dezelfde stappente zetten.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.254352, 50.822329]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Har(d)t voor groen (Brugge)</strong><p>Dit onthardingsproject, dat wordt getrokken door diversebetrokkenen van de school, maakt van de speelplaats eenover het algemeen groene speelplaats, met wadi’s en meteen didactisch doel. De strategische locatie van deze onthardingdraagt bij tot vergroening van de omgeving. De school maakt werk van educatie en communicatie rond ontharden, en zal de vernieuwde speelplaats op afgesproken momenten openstellen voor externen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.185858, 51.199222]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Transitie industriële verkenssite naar eetbare pluktuin	(Ardooie)</strong><p>Dit project werkt aan de transformatie van een industri¬eel varkensbedrijf met vier mestvarkensstallen tot een streekeigen en inspirerend duurzaam project, dat publiek toegankelijk is en de gemeenschap in de omgeving be¬trekt. De vier stalgebouwen en de omliggende verharding worden omgevormd tot verschillende biotopen voor mens en dier. Van één stal wordt de vloerplaat onthard en de stal blijft bestaan als afdak met zachte grondbodem voor dieren. Een tweede stal wordt volledig afgebroken en he¬raangelegd als pluk-, proef- en kruidentuin. De derde stal wordt volledig onthard en alleen een open stalen frame blijft behouden zodat er eetbare klimplanten aan groeien. De laatste stal zal een transitie ondergaan tot getrapte wa¬terbiotoop voor de eigen waterzuivering in een rietveld. Ook de asfaltering voor de stallen en de silo-platforms worden volledig onthard.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.208996, 50.988214]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Omgevingsontwerp Markt 23 (Wetteren)</strong><p>Om de doestelling ‘Wetteren aan de Schelde: een hechteband’ op het terrein te realiseren werd in 2018 een nieuwgemeentehuis en een nieuw stadsdeel ontwikkeld tussende Schelde en de Markt met fiets- en voetgangersverbindingover de Schelde. Om de verbondenheid tussen de Markt, het nieuwe plein Rode Heuvel en de Schelde te verhogen, worden een aantal gebouwen die in het centrum van Wetteren erg dicht bij de kerk staan, afgebroken en zullen samen met de omliggende ruimte worden onthard. Op die manier ontstaat meer publieke ruimte die een cruciale en groene verbinding vormt tussen de Markt en de Schelde en komt de architectuur van de kerk beter tot haar recht en wordt een groene stapsteen gelegd in de verstedelijkte doortocht van de Schelde door Wetteren.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.885432, 51.007849]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Betonschraap de Smet de Naeyerpark (Gent)</strong><p>Het voorstel verbindt bestaande groene ruimtes van het historische Paul de Smet de Naeyerpark met elkaar door overmaatse wegverharding te schrappen. De ingreep wijzigt de verkeerssituatie sterk door twee knips (onderbreken en/of verwijderen van een stuk straat) en beperkt het parkeeraanbod. Er komt meer plaats voor wateropvang en –infiltratie en een sterkere collectivisering van de ruimte. De ingrepen bieden een meerwaarde voor de buurt en de nabijgelegen scholen, en voor een omvattend fietsnetwerk op stedelijk niveau, waardoor de strategische impact groter wordt. Daarnaast wordt een ruimere studieopdracht uitgevoerd naar diverse onthardings- en infiltratiemogelijkheden in buurt van het Paul de Smet de Naeyerpark. Dit ontwerpend onderzoek moet resulteren in een afgetoetste projectenlijst van maatregelen die de stad Gent kan uitrollen of verder onderzoeken in functie van het evolueren van bestaande historische wijken naar een integraal en klimaatrobuust openbaar domein. Deze projectenlijst voor het inbrengen van water- en groenelementen in het openbaar domein vormt samen met de analyse en de evaluatie van de processen die werden doorlopen om tot dit resultaat te komen, de basis voor een draaiboek die een meerwaarde kan bieden bij het uitrollen van toekomstige onthardingsprocessen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.718742, 51.03152]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Betonschraap / ontharding Oostakkerdorp (Gent)</strong><p>Het doel van het project is om de verharde oppervlakte drastisch te verminderen, en de verkeersafwikkeling (van alle vervoersmodi) op een slimmere, veiligere en veel meer leefbare manier te organiseren. De ontharde oppervlakte zal op kwalitatieve groene manier worden heringericht met meervoudig ruimtegebruik voor alle doelgroepen, met ook aandacht voor waterhuishouding. Het zal de aanwezige groenruimte sterk vergroten. Het geheel kadert ook in de uitvoering van enkele van de strategische doelstellingen, waarop de nieuwe Gentse Stadsbouwmeester samen met de stad en bevolking verder zal inzetten.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.376341, 50.97666]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Quick-win): Transformatie Evence Coppeelaan	(Genk)</strong><p>Dit project wil op korte termijn omvangrijke delen verharding van de Evence Coppéelaan definitief uitbreken. Daarmee zet het strategisch in op een kwalitatieve verbinding met meer groen en ruimte voor zachte mobiliteit tussen de stadskern, het station van Genk en de cultuursite C-Mine. De helft van de baanvakken wordt geschrapt. Het project is een voorbeeld voor de transformatie, inclusief ontharding van vele overmaatse (steen)wegen in Vlaanderen, met aandacht voor vergroening (inclusief onderhoud en beheer), waterhuishouding en strategische (her)ontwikkeling.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.494325, 50.978174]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (quick-win): Heusden-Zolder</strong><p>Het project realiseert een centrale groenruimte voor Zolder door o.a. het strategisch knippen (onderbreken en een gedeelte wegnemen) van de Dekenstraat (een tweevaksbaan met langsgelegen parkeerplaatsen). Daarbij worden het beschermde landschap van het Domherenpark en de groene zone rond de voormalige pastorie verbonden. De basisschool Beekbeemden uit de Mangelbeekvallei wordt afgebroken en verhuist naar een centralere locatie. De bedoeling is om het ruimtebeslag te verminderen en te ontharden. Zo komt er meer ruimte voor natuur en water en worden het landschap en de verstedelijkte omgeving versterkt en gelijktijdig dichter bij elkaar gebracht. </p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.284554, 51.033593]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2018 (Systemisch): De robuuste klimaatstraat (Antwerpen)</strong><p>Stad Antwerpen gaat na of de klassieke straatinrichting kan evolueren en hoe straten op de meest efficiënte manier ingezet kunnen worden voor de wijk en haar bewoners. Straten kennen heel wat functies en het is dan ook een uitdaging om alle veranderende noden van een straat te begrijpen en een leefbare straat te creëren. Daarnaast wil de stad Antwerpen met oog op de klimaatverandering, haar straten klaarmaken voor de toekomst. Om antwoord te bieden op de klimaatuitdagingen gaat de stad op zoek naar manieren om overstromingen te vermijden bij hevige regen, verkoeling te brengen tijdens hete zomers en water op te vangen om tijdens extreme droogte te hergebruiken. Om dit te bereiken wordt de procedure van ontwerp, uitvoering en beheer van de aanleg van een straat herschreven. Bewoners worden actief betrokken bij de heraanleg van hun straat ener wordt gekeken naar publiek alsook privéterrein. Een straat maakt altijd deel uit van een wijk of een buurt. Daarom bekijkt de stad of er samenwerkingen mogelijk zijn met bewoners, lokale handelaars of bedrijven in de straat. Een nieuwe beleidsaanpak wordt ontwikkeld met als doel klimaatrobuuste ruimte te creëren op publiek en privaat domein. De heraanleg van een straat is het ideale moment om een publieke ruimte opnieuw functioneel in te richten en rekening te houden met alle noden van bewoners en de wijk. Er wordt nauw gekeken naar de functie van de straat in de omringende wijk en bewoners worden actief betrokken bij de nieuwe realisatie. Ze worden uitgenodigd om mee na te denken over hun omgeving op vlak van groen, water, mobiliteit, veiligheid, thermisch comfort en beeldkwaliteit, en zelf acties te ondernemen op privaat domein. Het project streeft naar een evolutie in het ontwerp-, uitvoerings- en beheersproces en gaat dit testen en evalueren in twee concrete pilootcases.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.402299, 51.220023]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (Ruimte voor water): Duffel</strong><p>"De gemeente Duffel richt zich op een strategische knip en ontharding van het gehele kruispunt tussen de straat Senthout en de Hoevelaan. De actie zal de hier ingebuisde Arkelloop opnieuw in een open bedding laten lopen, en zal tegelijkertijd gemotoriseerd sluipverkeer tegengaan en inzetten op een functionele recreatieve verbinding voor fietsers en voetgangers. Het ontsnippert een deel open ruimte van de vallei van de Arkelloop en herstelt een fauna-migratiecorridor en verbinding met het natuurgebied Babbelbeekse Beemden verderop."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.507321, 51.104879]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (Ruimte voor water): Reconversie Den Bleek (Geraardsbergen)</strong><p>"Het lokaal bestuur Geraardsbergen wil het recreatiedomein Den Bleek, gelegen langs de Dender, een nieuwe dynamiek en uitstraling geven. De site heeft een zeer strategische ligging voor de Geraardsbergense waterhuishouding. De recreatieve groenzone ligt namelijk net voor het stadscentrum en er bevindt zich een stuwsluis waardoor het waterpeil geregeld kan worden. Het huidige openluchtzwembad en enkele andere gebouwen en verhardingen zullen hier verdwijnen als onderdeel van de hervorming naar een kwalitatief recreatieve groenzone dichtbij het centrum. De bedoeling is om overstromingen te beperken. De beslissing tot sluiten was niet eenvoudig. Vanuit een participatietraject met het Regionaal Landschap Vlaamse Ardennen zal men werken aan een gedragen ontwerp en reconversieproces voor de site, waarbij duurzaamheid en vergroening voorop staan gesteld."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.8785, 50.769266]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (Ruimte voor water): Weg voor water (Sint-Niklaas)</strong><p>"Met het project ‘Weg voor water’ wil de stad Sint-Niklaas water opnieuw meer zichtbaarheid geven in combinatie met het vergroenen van de Baenlandwijk in Sint-Niklaas. Men wil de wijk meer ontharden, de onderliggende historische waterloop terug open leggen, en in de publieke ruimte op een kwaliteitsvolle manier meer plaats geven aan buffering, berging en infiltratie van water. Via de ontwikkeling van een cascadesysteem zet het project in op het herstellen van de waterballans op elk niveau (kavel, bouwblok, straat (van gevel tot gevel), wijk)."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.139558, 51.155339]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (Ruimte voor water): Veemarkt als groenblauwe missing link (Sint-Truiden)</strong><p>"De herinrichting van de Veemarktsite in Sint-Truiden voorziet een complete transformatie van het uitdovende slachthuis en de verharde randparking naar een stedelijke groenblauwe zone rond de open te leggen Cicindria-beek. Er ontstaat een stedelijke groenzone die het stadspark met het Speelhof verbindt en een groene long vormt ter ondersteuning van geplande stadsontwikkelingsprojecten. De ontharding van de Veemarkt is een eerste deelproject in het verder openleggen en creëren van een groenblauwe ader die de binnenstad opnieuw met het omliggende landschap verbindt en inzet op het versterken van de kwaliteit van de trage verbindingen als alternatief voor gemotoriseerd verkeer."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.189789, 50.822429]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (Ruimte voor water): WIJWATER (Genk)</strong><p>"Met het project WIJWATER streeft de stad Genk naar een omslag in ruimtegebruik in het verstedelijkte valleigebied van de Stiemervallei. Het wil de natuurlijke vallei- en waterdynamiek herstellen via een concreet onthardingsproject in de tuinwijk Waterschei-Noord. De ontharding wordt hier ingezet als een mogelijk middel om het watersysteem te herdenken, via SUDS (Sustainable Urban Drainage Systems) en het inzetten op decentrale maatregelen en natuurlijke oplossingen die waterinfiltratie en ecosysteemdiensten maximaliseren en zo bijdragen tot een veerkrachtige en klimaatbestendige stad. WIJWATER kiest bewust voor in samenwerking met inwoners en diverse stakeholders."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.189789,50.822429]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (School en omgeving): Het Sint-Pietersinstuut onthardt met groen en blauw (Turnhout)</strong><p>"De volledige omgeving van het Sint-Pietersinstituut in Turnhout wordt heringericht. Het hemelwater wordt geïnfiltreerd in een beek of wadi of wordt gebruikt voor het spoelen van toiletten. Het inrichten met inheemse streekeigen bomen, struiken en planten zorgt voor een meer klimaatrobuuste speelplaats en een grotere biodiversiteit. Bovendien wordt er via buitenklassen en speel-en werkhoeken ingezet op een optimaal leer- en leefklimaat voor de leerlingen."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.959782, 51.329626]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (School en omgeving): Park Piot (Turnhout)</strong><p>"Het project ‘Park Piot’ is gelegen in de binnenstad van Turnhout, tegenover de stedelijke kunstacademie en een nieuw stadsdeel in ontwikkeling. Het project voorziet in de afbraak van de niet-geklasseerde schoolgebouwen en enkele speelplaatsen van de school Heilig Graf, waardoor er een grote groenzone wordt gecreëerd. Het doel is een open ruimte te ontwikkelen rond de school en in de binnenstad, in synergie met de omgeving."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.951685, 51.325114]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (School en omgeving): Grobbendonk, Vorselaar, Lille, Olen, Geel & Mol</strong><p>"Het project ‘Kempense Scholen Ontharden’ zal zo’n 7500m² ontharden en vergroenen verspreid over 15 speelplaatsen op 12 verschillende vestigingen in de provincie Antwerpen. Het Regionaal Landschap Kleine en Grote Nete en MOS zullen hun ervaring en expertise samen inzetten in een participatief traject, de pedagogische omkadering en het ontwerp van de natuurlijke inrichting van de speelplaats. Het gaat om volgende scholen: GBS Klimopschool Bouwel, GBS Klimopschool Grobbendonk, GBS De Knipoog Vorselaar, GBS Gierle (Lille) kleuterschool, GBS Het Trapleerke Lille, GVBS De Wingerd Lille, GVB De Springplank Lille, Freinetschool De Vlindertuin Lille, VBS De Knipoog Olen, SBS Larum (Geel), VBS Millekemol (Mol Millegem), Gemeentelijke jongensschool site Mollekemil (Mol Millegem)."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.918812, 51.172462]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (School en omgeving): Niel, Nijlen, Kessel, Schelle, Lier, Kalmthout, Kapellen, Aartselaar</strong><p>"Dit project van het Regionaal Landschap Rivierenland, Regionaal landschap De Voorkempen en de Zuidrand bundelt acht scholen in een verstedelijkte context om samen de effecten en voordelen van ontharden te ontdekken. Via een leer- en doe-traject gaan de leerkrachten en leerlingen zelf hun speelplaatsen ontharden en kiezen welke natuurlijke inrichting ze zullen aanleggen. Het gaat om volgende scholen: VBS Sint-Hubertusschool Niel, Githo Nijlen, Gekko Bonheiden, Sint-Lutgardis Schelle, Sint-Gummaruscollege Lier, Basisschool den Heuvel Kalmthout, Basisschool Zilverenhoek Kapellen, Cade Aartselaar."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.522692, 51.242293]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (School en omgeving): Kapelleweide / Transformatie parkeerplein en schoolomgeving tot groen publiek park (Roosdaal)</strong><p>"Het project ‘Kapelleweide’ van de gemeente Roosdaal bestaat uit het ontharden van de schoolomgeving rond de basisschool Immaculata Maria-Instituut, net als de speelplaats zelf. Het doel is om een groot aantal parkeerplaatsen voor de kerk te schrappen. Hierdoor wordt de verkeersveiligheid vergroot en wordt de omgeving aantrekkelijker en waterdoorlatend. Hiervoor wordt inspiratie gehaald uit de culturele geschiedenis van de Kapelleweide."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.083947, 50.84316]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (School en omgeving): Gedeelde schoolinfrastructuur basisschool de Plataan en Gemeentelijke Technische School Merchtem & schoolomgeving (Merchtem)</strong><p>"Met dit project stelt de gemeente Merchtem een knip voor van de weg aan de basisschool de Plataan, om de verkeersveiligheid aan de school te verbeteren. De bestaande parkeerplaatsen voor de school worden verwijderd en vervangen door inheems groen, aansluitend bij het bestaande park. Ook de drie speelplaatsen worden onthard en vergroend, met het oog op meer waterinfiltratie, natuurlijke verkoeling en een aangenamere speelplaats."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.227436, 50.957994]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (School en omgeving): Blanden</strong><p>"In dit project in Blanden zal de gemeente Oud-Heverlee een recent aangekochte woning met betonnen woonerfafbreken en het terrein zo ontharden. De doelstelling is om er een ‘wilde’ groene rust- en speelplek van te maken die na de schooluren door omwonenden gebruikt kan worden. Bovendien wil de gemeente meer open ruimte creëren om zo de leefbaarheid van de omgeving te vergroten. Ten slotte wordt de toegang tot de school verplaatst om de veiligheid te vergroten."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.704845, 50.825905]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (School en omgeving): Campus Wevelgem (Wevelgem)</strong><p>"Het project betreft het transformeren van de Deken Jonckheerestraat tot een aantrekkelijke groene campusomgeving voor de omliggende scholen, jeugdbewegingen, woonzorgcentrum en andere publieke functies. Campus Wevelgem was het deelproject van het masterplan Centrum Wevelgem dat het meest enthousiast onthaald werd door het brede publiek. Om dit project te realiseren zal in eerste instantie de straat zelf geknipt worden voor gemotoriseerd verkeer en zal het bestaande wegdek onthard en vergroend worden. In overleg met de verschillende actoren op de site wordt bekeken waar op privaat terrein opportuniteiten zijn om bijkomende parkeerzones, verharde speelplaatsen, opritten… te ontharden. De campus zal een belangrijke schakel vormen in het fietsnetwerk als alternatief voor de gewestweg."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.183082, 50.80672]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (School en omgeving): Het land achter de Boerenpoort (Rollegem)</strong><p>""Midden in het landelijke Rollegem (deelgemeente van Kortrijk) ligt “De Kindervriend”, een voorziening waar kinderen met een verstandelijke handicap verblijven en school lopen. Oude koterij wordt afgesmeten, grote oppervlaktes beton van de speelplaats en van de vroegere parking worden onthard en omgevormd tot een groene speelomgeving voor de leerlingen met een ernstige verstandelijke handicap. De centrale ligging in het dorp biedt de mogelijkheid om het dorpslandschap te verfraaien en de site open te stellen voor de buurt als veilige doorgang voor fietsers en wandelaars.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.259047, 50.767703]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (School en omgeving): Groene speelplaats SBS de Brug (Roeselare)</strong><p>"Het project Groene Speelplaats Stedelijke Basisschool De Brug in Roeselare wil de bestaande verharde speelplaats en parking ontharden om een meerwaarde te creëren voor de school én de buurt op het vlak van spel, sociale interactie, groen, biodiversiteit en verkeersveiligheid. Hiervoor wordt een participatief traject gehouden met de school en de buurt, in samenwerking met VIVES en de KU Leuven. Zo kan er ook ingezet worden op biodiversiteit en recyclage."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.120989, 50.95314]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (School en omgeving): De school als groene long in de wijk / een plek van samen leren en samen leven (Kortrijk)</strong><p>"Dit project wil de Athena campus Drie Hofsteden in Kortrijk omvormen tot de groene long van Kortrijk-Oost. Hiervoor worden verschillende speelplaatsen onthard en omgevormd tot klimaatadaptieve, onderhoudsarme leerplekken en een gezonde en kwalitatieve leefomgeving voor de leerlingen, het personeel en de buurtbewoners. Bovendien worden overbodige parkeerterreinen en ontsluitingswegen onthard."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.286593,50.823816]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (School en omgeving): VIIO Borgloon (Borgloon)</strong><p>"Bij de renovatie van de secundaire school VIIO Borgloon wordt het leegstaand internaatsgebouw aan de Tongersesteenweg volledig gesloopt. De vrijgekomen ruimte wordt een groene uitbreiding van de speelplaats. Ook parkeerplaatsen naast de school worden onthard. Bovendien wordt werk gemaakt van gedeeld ruimtegebruik van een deel van de schoolgebouwen en de groene omgeving."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.357033, 50.799228]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (Weg weg): Verbinding A. Ruzettelaan (Blankenberge)</strong><p>"De noordelijk gelegen rijweg met aanpalende parkeerstroken en het oude en te smalle fiets- en voetpad in de A. Ruzettelaan tussen de J. Gadeynehelling en het kruispunt met de Koning Albert I-laan langsheen de duinen worden integraal onthard. Hiervoor wordt het noordelijke gedeelte van de rijweg, inclusief parkeerplaatsen, met een huidige breedte van 15,50 meter onthard om terug te laten verduinen met uitzondering van een recreatief fietspad, dat kadert binnen het ontwerp-Mobiliteitsplan van de stad Blankenberge. Hierdoor zorgt men voor de natuurlijke versteviging van de bestaande duinengordel en een kwalitatieve trage verbinding hierlangs, waarbij men verder inzet op het stimuleren van meer gebruik van de fiets en het openbaar vervoer."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.143182, 51.319116]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (Weg weg): Ontharden parking Groeningelaan (Kortrijk)</strong><p>"De stad Kortrijk zal met het project de 2700 m2 grote asfaltoppervlakte van de huidige parking op de Groeningelaan ontharden. Men wil het onthardingsproject gebruiken als een kans om de stad leefbaarder en klimaatrobuuster te maken op verschillende vlakken: vergroening, reorganisatie van de mobiliteit en waterbeheersing. Het project zal zo ook een ontbrekende schakel in het groene lint van de Kortrijkse binnenstad realiseren. De ruimte wordt teruggegeven aan de buurt en er wordt een aantrekkelijke verblijfsplek gecreëerd. Het project zet in op positieve mobiliteitsverandering door het wegnemen van een parking en het versterken van het binnenstedelijk wandel- en fietsnetwerk."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.275641, 50.826899]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (Weg weg): Groene weide Sint-Jozefskerk. Transformatie van de kerkomgeving als ‘prelude’ voor een nieuw creatief en ondernemend wijkweefsel (Roeselare)</strong><p>"De stad Roeselare wil de omgeving van de Sint-Jozefkerk in Roeselare ontharden met het oog op de ontwikkeling van een nieuwe kwalitatieve groene ontmoetingsruimte in co-beheer met de buurt. Door een gewijzigde circulatie wordt de mobiliteit in deze buurt herzien, veiliger gemaakt en wordt meer ruimte gereserveerd voor groen en water. Zo ontstaat een meer kwalitatieve ruimte die een belangrijke rol speelt in de activatie van de buurt en het versterken van de identiteit van deze plek. Er is een lokaal engagement voor een omslag naar een duurzame leefbare en levendige wijk. De ontwijdde kerk, in eigendom van 3Architecten, zal worden omgevormd tot kantoren voor 3Architecten en een polyvalente ruimte dat als creatieve hub wordt opengesteld voor de buurt."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.137437, 50.939461]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (weg weg): Realisatie natuurcorridor en recreatieve herinrichting openruimtegebied Kiewit-Zonhoven (Zonhoven)</strong><p>"Het wegdek van de Kauwbosstraat-Boekrakelaan is acht meter breed en het traject wordt momenteel veel als sluipweg gebruikt. Deze weg loopt over de gemeentegrenzen van de gemeente Zonhoven en de stad Genk heen. Beiden zijn overeengekomen om deze weg voor een lengte van 2 km op te breken voor de realisatie van een trage fiets- en wandelweg met een breedte van 2,5 à 3 m. Voor de gemeente Zonhoven wordt de Kauwbosstraat voor een lengte van 1,4 km onthard, voor de stad Genk wordt de Boekrakelaan voor 0,6 km opgebroken. Dit is goed voor een totale oppervlakte van 12.000 m². Hierdoor worden de huidige ecologisch waardevolle bermen verbreed en in natuurwaarde versterkt. Zo ontstaat een belangrijke verbinding tussen de nabije natuurreservaten, waarbij men ook inzet op het (be)leefbaar maken hiervan voor buurtbewoners en recreanten, met bijzondere aandacht voor de inwoners van het aanpalende zorgcentrum Ter Heide en hun begeleiders, familie en vrijwilligers."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.409126, 50.974316]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Proeftuinen Ontharding 2019 (weg weg): Groen-blauwe herinrichting Koolmijnlaan en Voortplein (Heusden-Zolder)</strong><p>"Via het downscalen en deels ontharden van de Koolmijnlaan en het Voortplein zal de gemeente Heusden-Zolder 13.160 m2 overbodig asfalt en beton opbreken. De Koolmijnlaan is een veel gebruikte fietsverbinding voor heel wat scholieren uit de buurt. De bedoeling is deze weg, die vandaag een onveilige mentale en fysische barrière vormt, te transformeren naar een verbindende wandel- en fietsboulevard in een versterkte natuurlijke omgeving. Extra aandacht gaat naar goede hemelwateropvang. Met dit project zet Heusden-Zolder samen met haar inwoners verder in op een meer duurzame mobiliteit, met respect voor het mijnerfgoed en aansluitend op de fietssnelweg kolenspoor en het nieuwe netwerk aan trage wegen in de Mangelbeekballei."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.313543, 51.041558]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 1.0: Lachenebeek (Kontich)</strong><p>"De overkoepelende ambitie is om twee valleigebieden maximaal te dooraderen in woonwijken en KMO-zones. In de Lachenebeek worden de bestaande schaarse open gebieden in woonwijken maximaal ingeschakeld en worden waterlopen terug uit hun overwelvingen gehaald, waardoor een blauwgroene dooradering tot in de wijken doordringt. Hierbij worden onder meerde woonstraten in de wijk Beemdenlaan/Doopput en Stationswijk verder onthard, worden straten waar mogelijk geknipt, komt er een blauwgroen belevingspark,  worden percelen nabij Doopput bouwvrij gehouden. In het kader van de heraanleg van de N1 is de installatie van een doorstroommoeras voorzien. In de Babbelsebeek worden aangrenzende woonwijken verder afgekoppeld, met nieuwe open grachten en kleine retentiezones. Hiervoor wordt de Duffelsesteenweg onthard en afgekoppeld via een bufferzone, gecontroleerde extra buffering en vertraagde afvoer voorzien van de Blauwe Steenbeek, natte natuur hersteld, bosuitbreiding gedaan en woonstraten onthard."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.462328, 51.136152]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 1.0: Vorselaar</strong><p>"Met het groenblauw dooraderingsproject zet Vorselaar in op de complete transformatie van haar bebouwd weefsel. Zo zal in het transformatieproject een gebiedsdekkend strategisch meerjarenplan voor alle 104 straten in Vorselaar en 4 concrete doorbraakprojecten uitgerold worden. Op die manier worden wijken onthard, woonstraten vergroend en verbindingsstraten groenblauw ingericht. Daarnaast wordt het klooster- en schooldomein onthard, worden verbindingen met omliggende functies groenblauw ingericht, worden harde bestemmingen omgezet naar zachte bestemmingen enzovoort. Bovendien werkt de gemeente aan de groenblauwe verbinding van het urbane centrum naar het buitengebied, met aandacht voor duurzame mobiliteit en trage verbindingen in combinatie met ontharding en vergroening. Ten slotte worden er ook acht woningen afgebroken en wordt de ruimte ingevuld als groene long met aandacht voor het omliggende sociale weefsel."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.772695, 51.202489]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 1.0: Lageweg/Zwaantjes (Antwerpen)</strong><p>"De Hollebeekvallei is een van de weinige deels bewaarde beekvalleien in de stad Antwerpen en vormt bovendien een waardevolle link tussen de zuidelijke groene landschappen en de Scheldevallei. De Hollebeekvallei komt nu ter hoogte van de hoek Krugerstraat en Antwerpsesteenweg abrupt ten einde en verdwijnt ondergronds in het stedelijk weefsel. In dit project wordt de beekvallei ter hoogte van het projectgebied de Lageweg en de Zwaantjes opnieuw opengelegd en hersteld en ontstaat er een waardevolle stapsteen voor allerlei fauna en flora. Het heropenen van de beek biedt ruimte voor waterbuffering en een oplossing voor de bestaande overstromingen in het gebied. De realisatie van de nieuwe groenblauwe ader is een katalysator voor de uitvoering van de planprocessen Lageweg en Zwaantjes. De quick-wins bestaan uit de systematische vergroting en vernatting van het park en worden op korte termijn gerealiseerd. Het transformatietraject situeert zich in aangrenzend gebied aan de site de Lageweg. In de open centrale ruimte wordt de Hollebeek opengelegd en komt er een ondergrondse link met het Provinciaal domein van de Hollebeekvallei.""</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.364389, 51.188855]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 1.0: Bronplein/Maartstraat (Landen)</strong><p>"Landen wil met dit project het stadslandschap versterken en ruimtelijke ontwikkelingsprojecten realiseren door het  ruimtegebruik te verbeteren en door ecosysteemdiensten te combineren vanuit de kernkwaliteiten van ruimtelijke ontwikkeling. Door middel van enkele strategische onthardingsprojecten worden diverse knelpunten en opportuniteiten aangepakt. Zo worden het Bronplein en de Maartstraat onthard in het centrum en wordt de Korea wijk omgevormd tot een klimaatwijk."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.081337, 50.75478]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 1.0: Leuvensesteenweg/Centrum (Boutersem)</strong><p>""Dit project leidt tot een robuuste, waarneembare en functionele beekvallei in het centrum van Boutersem. Het transformatieproject verwijdert de bottleneck en verbindt de vallei ten noorden en ten zuiden van de Leuvensesteenweg. De niet-bebouwde delen worden via planologische ruil van bebouwing gevrijwaard, de verharding en bebouwing worden sterk verminderd, de ruimte wordt geherwaardeerd door tal van constructies te slopen en meer ruimte voor water en natuur te creëren. Het kerngebied wordt bevestigd en geherwaardeerd als moeras- en overstromingsgebied. In de randen komt een pad dat de verschillende toegangen tot het gebied verbindt. Dat pad vormt een belangrijke schakel in het netwerk van trage wegen. De belangrijkste quick-win projecten zijn de transformatie van het sportveld met ruimte voor water en biodiversiteit, het opheffen van een parkeerterrein met herstel van het natuurlijk reliëf (herstel natuurlijk moeras), de aanleg van een circulair pad en het meervoudig ruimtegebruik van school- en scoutsterreinen.""</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.834803, 50.841089]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 1.0: Mandel (Izegem)</strong><p>"Izegem wil met verschillende projecten zorgen voor de groenblauwe dooradering van zijn kern. Zo wordt de noordoever van het kanaal onthard en de Mandel opengelegd. Op die manier ontstaat er een groene fiets- en wandelzone en wordt het mobiliteitsverhaal aangepakt. Daarnaast wordt de ontharde noord-zuid-as verbonden met de groene west-oost-as die door het openleggen van de Mandel een groen-blauwe as van ruim een kilometer lang wordt. Al die projecten samen vormen een samenhangend geheel, dat een aanzienlijke oppervlakte aaneengesloten verharding omvormt tot een groenblauwe ader voor de kern."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.213217, 50.918086]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 1.0: Centrumparking in Hulste / Sport- en Sociosite in Bavikhove (Harelbeke)</strong><p>"Het project omvat de realisatie van vier deelprojecten uit de totaalvisie op de beekvallei in de dorpskernen van Bavikhove en Hulste, met nadruk op de continue open beek en trage verbinding, groen en ontharding. De centrumparking in Hulste transformeert van een asfaltvlakte naar een gebied met een open beekvallei met flankerend groen en herinrichting van de parking op een natuurinclusieve manier. De voorheen private pastorietuin in Hulste wordt, eenmaal vrijgegeven door de kerkfabriek, voor het publiek opengesteld en uitgebreid. De beek wordt opnieuw zichtbaar gemaakt. De sport- en sociosite in Bavikhove wordt volledig heringericht, waarbij de parking langs de ingekokerde beek onthard wordt, de beek een open bedding krijgt en een recent aangekocht perceel vergroend wordt. I.p.v. het sluiten van een wijkverzamelweg, inclusief lintbebouwing, omvat het transformatieproject in Bavikhove het behoud van de open ruimte met een planologische ruil van de bouwgrondbestemming."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.29637, 50.883571]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 1.0: Reznorsite/Centrum (Menen)</strong><p>"De Geluwebeek biedt sterke kansen voor een groene omslag in Menen door het fijnmazig netwerk van groene massa en water in de bebouwde en open ruimte te versterken. Daarom wordt de Reznorsite, een sterk verhard terrein in Menen-Centrum, getransformeerd tot een groenblauwe zone. Hierbij wordt onder meer een beek opengelegd en is de aanleg voorzien van een avontuurlijk park en een nat stadsbos met sponsfunctie. Via deze projecten wordt de bebouwde kern van Menen blauwgroen dooraderd en worden doelstellingen op het vlak van klimaatadaptatie bereikt."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.121529, 50.796223]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 1.0: Vianeplein/Amandusplein	(Geraardsbergen)</strong><p>"In dit project bouwt de stad Geraardsbergen met een samenhangend geheel van maatregelen in de open ruimte en kernen een robuust en veerkrachtig groenblauw netwerk uit in Moerbeke en Viane. De stad voorziet enkele onthardingsprojecten binnen de bebouwde ruimte. Zo worden onder andere het oostelijk deel van het Vianeplein en het Amandusplein in grote mate onthard, vergroend en omgevormd tot hemelwaterpleinen. Daarnaast wordt de huidige parking die het Moerbekeplein vormt, getransformeerd tot een klimaatadaptief plein, met ruimte voor beplanting, waterbufferende terrassen, wadi, verblijfruimte,..."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.882448, 50.771665]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 1.0: Stiemervallei	(Genk)</strong><p>"Stad Genk wil de Stiemervallei opwaarderen tot een multifunctionele groenblauwe ader die de levenskwaliteit van de Genkenaar verhoogt en de veerkracht van de stad versterkt. Zowel het transformatieproject als de quick-wins streven naar een omslag in ruimtegebruik in de Stiemervallei. Ze moeten leiden tot een systemisch herstel van de natuurlijke vallei- en waterdynamiek. De waterstrategie is opgebouwd uit een divers pallet aan onthardings-en watermaatregelen over de volledige valleigradiënt - van beek tot flank. In dit project wordt een deel van deze maatregelen uitgevoerd. Met de quick-wins wordt er gewerkt aan een nieuwe ecologisch waardevolle waterloop in de vallei, de natte natuur vrijwaren van bebouwing en het ontharden van overmaatse verharding op de valleiflanken. In het transformatieproject zorgen ontharding en groenblauwe ingrepen ervoor dat het omliggende stedelijke weefsel op de valleiflanken klimaatbestendig wordt."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.497593, 50.982708]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 2.0: Omvorming speelplein De Vloed naar bufferbekkenvrijwaren woongebied en omvorming naar buffergebiedvrijwaren woonuitbreidingsgebied (Arendonk)</strong><p>"De gemeente Arendonk voorziet 3 concrete projecten ter versterking van de groenblauwe as gevormd door de waterloop de Wamp door de kern van de gemeente. De 3 projecten versterken de groenblauwe structuur in de kern, maken de bestaande sites klimaat robuuster en helpen de kern beschermen tegen overstromingen ruimte voor water te creëren. Het gaat om de omvorming ‘old school’ speelplein met grasveld en basketbalveld naar een bufferbekken langs de Maeskensloop in combinatie met een natuurlijke waterspeelzone. Het tweede project is de vrijwaring van 9.200 m² woongebied van bebouwing en de inrichting van dit terrein als buffer- infiltratiegebied, gecombineerd met enkele trage doorsteken en natuurlijke speelelementen. Ten oosten van de kern wordt het 5 ha grote woonuitbreidingsgebied Wampe Velden definitief gevrijwaard van bebouwing en herbestemd naar een open ruimte functie. Het gebied zal een meer natuurlijke inrichting krijgen: structuurrijke waterloop, habitat voor modderkruiper in de perceelsgrachten, bufferbekken voor de regenwaterriolering, …"</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.083663, 51.324234]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 2.0: Herne</strong><p>"Lokaal bestuur Herne beslist het voormalige scholencomplex ‘Markevallei’ af te breken. In samenwerking met het departement omgeving wordt er ruimte gecreëerd voor vergroening en vernatting. Biodiversiteit, infiltratie en ontmoeting staan centraal. De werken kaderen binnen de Blue Deal - een initiatief van de Vlaamse Regering om de strijd tegen droogte en waterschaarste aan te gaan."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.028913, 50.723717]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 2.0: Vergeten oase / oud zwembad	(Linkebeek)</strong><p>"Het oud zwembad van Linkebeek dat in 1993 de deuren sloot is een vergeten oase. De betonnen zwembadvloer en verharde omgevingsaanleg zijn nog aanwezig en geven een verloederde indruk. De aanwezige bronnen op de site wateren af via een grachtstructuur. De beboste heuvelflanken geven een geborgen gevoel en hinten naar de potenties van het gebied. Het zijn de recepten voor een stukje unieke natuur: de verharding (2.200 m²) wordt weg genomen, de bronnen vormen een stukje nieuwe natte natuur, de Linkebeek krijgt een natuurlijke oeverzone en het gebied wordt toegankelijk gemaakt voor de inwoners. De kans wordt gegrepen om eveneens het aansluitende recreatie-gebied aan te pakken door een natuurlijke speelzone in te richten en de toegangszone op te waarderen met hogere natuurwaarden en ruimte voor de Linkebeek. De vergeten oase vormt een schakel in een groter geheel en visie om de groenblauwe verbindingen die de Linkebeek en bovenlopen zijn op te waarderen. Het water en natuur krijgen weer plaats in het dorpscentrum van Linkebeek. Op deze wijze kan de gemeente de effecten van wateroverlast, droogte, verschralen van de natuur milderen en pogen te herstellen."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.329659, 50.774787]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 2.0: Pattyne-Duprez (Avelgem)</strong><p>"In de Meersstraat in Avelgem ligt Pattyne-Duprez, een historisch gegroeid bedrijf dat altijd aan textielveredeling heeft gedaan. De site Pattyne-Duprez is ruim 1,3 ha groot en ligt bij de Avelgemse gemeentegrens, in landelijk gebied, vlakbij de oude Scheldearm en te midden de Avelgemse Scheldemeersen, een natuurgebied van meer dan 100 ha. Hoewel de site volgens het Gewestplan Kortrijk in een gebied ligt voor milieubelastende industrie, kan ze te midden het natuurgebied geen kant meer op. Leiedal kocht de site op vraag van de gemeente aan in 2020, om een ‘groene’ bestemming opnieuw mogelijk te maken, een unieke kans om de Scheldemeersen te herstellen. Een vorm van reconversie, maar wel revolutionair. Het ruimtebeslag reduceren is hier niet de enige doelstelling. Ook het terugdringen van de druk op de open ruimte vormt een belangrijke insteek waarbij een evenwicht gezocht wordt tussen hoge natuur- en biodiversiteitswaarde enerzijds en belevingswaarde anderzijds."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.450305, 50.768861]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 2.0: Sloop Villa & stationsomgevingsloop loods, conciergewoningtuinen en garage boven koker (Kortemark)</strong><p>"Het Lokaal Bestuur Kortemark wil de Krekebeek, momenteel ingekokerd vanaf het domein Krekemeersen tot aan Talpe’s Putten, terug in open profiel krijgen in de dorpskern van de hoofdgemeente. Voor die realisatie moeten enkele stappen gezet worden: de aankoop en sloop van een leegstaande woning en bijhorende tuin (op vandaag vaak doelwit van vandalen), het opbreken van een parking bij een horecazaak, het deels verwerven van enkele tuinen en de sloop van de huidige gebouwen en garageboxen van de technische dienst. Op korte termijn verhuizen deze sowieso naar een andere locatie. In één beweging zou zo al een behoorlijke oppervlakte worden onthard. Het zou er ook voor zorgen dat de Krekebeek op termijn terug voor 100 procent in open profiel gebracht kan worden en dat illegale lozingspunten, die nu verscholen zitten in de koker, voorgoed verdwijnen – goed nieuws dus voor de waterkwaliteit. Tegelijkertijd wordt de omgeving vergroend."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.042733, 51.025097]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 2.0: Casinoplein/Conservatoriumplein	(Kortrijk)</strong><p>"Medio 2023 opent de nieuwe ondergrondse parking van het Kortrijkse stationsproject, waardoor de bovengrondse parkeerplaatsen op het Casino- en Conservatoriumplein een nieuwe invulling kunnen krijgen in functie van vergroening, verblijfskwaliteit, natuur en water. De pleinen bevinden zich op één van de assen die deel uitmaken van de stedelijke ambities voor groenblauwe plekken in de stad. Via de realisatie van deze 2 quick-wins zet de stad in op zowel biodiversiteits- als klimaatambities. De ambities worden afgestemd met het gebruik en noden van de buurtbewoners én de vele bezoekers van regionale voorzieningen zoals het muziekcentrum Track en het bus- en treinstation. Het project biedt heel wat koppelkansen: creatie van natuurlijke speelruimte, groene oases voor de inwoners in de verharde, dichtbebouwde stadskern, een groene en verkeersveilige corridor voor passanten van het station naar Kortrijk-Weide of naar de Grote Markt en het winkelwandelgebied… Bovendien zorgen de groene invulling én de aandacht voor waterinfiltratie en circulair gebruik voor een betere luchtkwaliteit en bestrijding van het hitte-eilandeffect."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.262594, 50.825796]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 2.0: Transformatie oude begraafplaats (Menen)</strong><p>"VAN MINERALE BEGRAAFPLAATS NAAR DUURZAAM PARK: Transformatie van de oude begraafplaats in de bebouwde kern van Menen tot een hedendaags boomrijk en uitnodigend park voor inwoners en tot schakel in een ruimer groenblauw netwerk.De oude begraafplaats aan de Zandputstraat in Menen heeft alle kenmerken van veel oude begraafplaatsen: verharding, weinig groen en een algemeen lage beeld- en belevingskwaliteit… De plek is niet uitnodigend en vormt een grote leegte in een dens bebouwde omgeving met een tekort aan kwalitatieve en groene publieke ruimte. Door haar strategische locatie - aansluitend aan het stationsplein en het centrum van de stad, gelegen in een sterk verhard bouwblok dat met waterproblemen te maken heeft, en naast een school die kampt met te weinig buitenruimte – heeft de site een grote potentie om uit te groeien tot een belangrijke groenpool voor haar omgeving en mee te bouwen aan een ruimer groenblauw netwerk in de stad Menen."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.110905, 50.801557]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 2.0: Akkerstraat/Philemon Haumanstraat	(Temse)</strong><p>"We dromen van een gemeente waar je heerlijk kan vertoeven, wandelen, ver’wonder’d zijn, waar natuur en mens hand in hand gaan met elkaar. Een plaats waar verbinding en herstel van natuur centraal staan naast welbevinden, gezondheid, plezier en spel. Kortom, een voetganger- en kindvriendelijke buurt combineren met aspecten van klimaatrobuustheid; ook jij zou hier willen wonen, geef toe. We willen starten met een pilootproject, een proeftuin, met als doel heel de gemeente te inspireren en stimuleren om dezelfde weg op te gaan. Waar: de Akkerstraat en de Philemon Haumanstraat. Straten gekenmerkt door steen, zonder groen, zonder beleving, midden in onze dichtbewoonde kern van Temse. We streven naar een groen-blauwe transformatie van deze twee straten. Een zaadje dat we planten om uit te groeien doorheen heel onze kern, en verder, richting een gezond en regeneratief Temse! Werk jij graag mee aan onze klimaatrobuuste wijk? Samen gaan we de uitdaging aan!"</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.21422, 51.126324]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 2.0: Park Vissegat	(Sint-Truiden)</strong><p>"Sint-Truiden ontstond in de zevende eeuw langs de oevers van de Cicindria. Ondanks het omliggende landschap van waterlopen en brongebieden, is de aanwezigheid van water vandaag nog slechts met moeite terug te vinden in de binnenstad: gebieden werden drooggelegd, waterlopen aangepast, gekanaliseerd en ingekokerd. Vandaag is het water grotendeels aan het zicht onttrokken. De voorbije jaren werkte de Stad Sint-Truiden al aan het herwaarderen van verschillende beeklopen (Gemeentelijk Ruimtelijk Structuurplan, diverse RUP’s, opmaak hemelwaterplan). Met het oog op de uitdagingen rond klimaatverandering schakelt de stad Sint-Truiden een versnelling hoger en wordt er concreet ingezet op ingrepen rond het herstel van de Cicindria en de Trudobronbeek en de vergroening van publiek domein. De ontharding van de Veemarkt is uitgebreid bestudeerd in kader van “Vlaanderen Breekt Uit 2019” en wordt nu omgezet worden in een concrete realisatie. De eerste fase is in uitvoering (ontharding van 13.100m²) en na afbraak van één van beide veemarkthallen en het voormalig slachthuisbedrijf komt nog eens min. 8.000m² vrij om te vergroenen en om te vormen tot een nieuw hedendaags groenblauw PARK."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.21422, 51.126324]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':'<strong>Groenblauwe dooradering 2.0: Alken vallei (Alken)</strong><p>"ln aanloop naar de omvorming van recreatiedomein De Alk en omliggende omgeving tot valleipark, maakt de gemeente nu al werk van ingrepen die het centrum van Alken ontharden, vergroenen en vernatten. Verouderde gebouwen (sanitair, snoepwinkel) en het asfalt in het verkeerspark en op wandelpaden verdwijnen. Het deel van de Koutermanstraat bij de site van De Molen wordt onthard en vergroend. Kers op de taart moet het openleggen en meanderen van de aangrenzende Herk zijn. De Vlaamse Milieumaatschappij zet daar mee de schouders onder. De werken passen in het programma Alken Vallei 2030 en de creatie van een ruimere parkzone, die toegang geeft tot de vallei van Herk en Mombeek. Het opzet van een groenblauwe ader in de dorpskern van Alken sluit naadloos aan bij het Blue Deal-beleid van Vlaams minister Zuhal Demir. De raming van de werken bedraagt 1,37 miljoen euro. Alken rekent op een Vlaamse subsidie van 600.000 euro."</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.310473, 50.875738]
                        },
                    }
                ]
            }
        });
      
        // Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'circle',
            'source': 'places',
            'paint': {
                'circle-opacity': 0,
                'circle-stroke-width': 0,
                'circle-stroke-color': '#4f3d5a'
            }
        });
        
        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        map.on('mouseenter', 'places', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });

        map.on('mouseleave', 'places', () => {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
    });

map.addControl(new mapboxgl.FullscreenControl());