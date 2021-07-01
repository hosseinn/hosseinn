var mymap = L.map('community_map').setView([28.505, 16.09], 13);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(mymap);

mymap.setZoom(1.5);

var marker1 = L.marker([48.13, 11.56]).addTo(mymap);
marker1.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2018/09/member_monday_battsengel_ichinnorov.jpg' width='100' height='100' /><a href='https://blog.documentfoundation.org/blog/2018/09/03/community-member-monday-battsengel-ichinnorov/' target='_blank'>Battsengel Ichinnorov</a>");

var marker2 = L.marker([52.51, 13.39]).addTo(mymap);
marker2.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2018/08/member_monday_sam_tuke.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2018/08/13/community-member-monday-sam-tuke/' target='_blank'>Sam Tuke</a>");

var marker3 = L.marker([26.23, 92.94]).addTo(mymap);
marker3.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2018/05/contributor_interview_MKYadava.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2018/05/28/interview-mk-yadava-talks-about-libreoffice-and-foss-adoption-in-india/' target='_blank'>MK Yadava</a>");

var marker4 = L.marker([59.44, 24.74]).addTo(mymap);
marker4.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2018/04/contributor_interview_laugasson.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2018/04/11/libreoffice-contributor-interview-edmund-laugasson/' target='_blank'>Edmund Laugasson</a>");

var marker5 = L.marker([18.52, 73.85]).addTo(mymap);
marker5.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2017/09/contributor_Chandrakant_Dhutadmal.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2017/09/07/libreoffice-contributor-interview-chandrakant-dhutadmal/' target='_blank'>Chandrakant Dhutadmal</a>");

var marker6 = L.marker([21.02, 105.85]).addTo(mymap);
marker6.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2017/08/libreoffice_contributor_Nguyen-Vu-Hung.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2017/08/10/libreoffice-contributor-interview-nguyen-vu-hung/' target='_blank'>Nguyen Vu Hung</a>");

var marker7 = L.marker([48.21, 16.37]).addTo(mymap);
marker7.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2018/06/contributor_andreas_kainz.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2018/06/05/libreoffice-interview-andreas-kainz-talks-about-new-icons-and-the-notebookbar/' target='_blank'>Andreas Kainz</a>");

var marker8 = L.marker([-27.39, -55.92]).addTo(mymap);
marker8.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2017/06/libreoffice_interview_daniel_rodriguez.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2017/06/13/libreoffice-contributor-interview-daniel-rodriguez/' target='_blank'>Daniel A. Rodriguez</a>");

var marker9 = L.marker([-22.91,-43.20]).addTo(mymap);
marker9.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2016/06/olivier_hallot_07062010_964x1036-953x1024.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2017/05/26/video-interview-olivier-hallot-documentation-coordinator/' target='_blank'>Olivier Hallot</a>");

var marker10 = L.marker([53.5503, 9.9914]).addTo(mymap);
marker10.bindPopup("<a href='https://blog.documentfoundation.org/blog/2017/05/10/video-interview-thorsten-behrens-libreoffice-developer/' target='_blank'>Thorsten Behrens</a>");

var marker11 = L.marker([52.2053, 0.1212]).addTo(mymap);
marker11.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2017/12/smile31.jpeg' width='100' /><a href='https://blog.documentfoundation.org/blog/2017/05/02/video-interview-michael-meeks-libreoffice-developer/' target='_blank'>Michael Meeks</a>");

var marker12 = L.marker([48.8561, 2.348]).addTo(mymap);
marker12.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2017/04/libreoffice_interview_alex_arnaud.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2017/04/25/libreoffice-contributor-interview-alex-arnaud/' target='_blank'>Alex Arnaud</a>");

var marker13 = L.marker([39.4685, -0.3605]).addTo(mymap);
marker13.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2016/06/developer_xisco_fauli.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2017/04/08/video-interview-xisco-fauli-qa-engineer-libreoffice/' target='_blank'>Xisco Fauli</a>");

var marker14 = L.marker([61.0578, 28.1892]).addTo(mymap);
marker14.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2017/03/contributor_lera_goncharuk.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2017/03/21/libreoffice-contributor-interview-lera-goncharuk/' target='_blank'>Lera Goncharuk</a>");

var marker15 = L.marker([50.086, 14.4223]).addTo(mymap);
marker15.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2017/02/libreoffice_contributor_stanislav_horacek.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2017/02/27/libreoffice-contributor-interview-stanislav-horacek/' target='_blank'>Stanislav Horacek</a>");

var marker16 = L.marker([47.4959, 19.0458]).addTo(mymap);
marker16.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2017/01/lo_contributor_tamas_bunth.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2017/01/24/libreoffice-contributor-interview-tamas-bunth/' target='_blank'>Tamas Bunth</a>");

var marker17 = L.marker([51.5064, -0.1233]).addTo(mymap);
marker17.bindPopup("<a href='https://blog.documentfoundation.org/blog/2017/01/10/libreoffice-contributor-interview-hazel-russman/' target='_blank'>Hazel Russman</a>");

var marker18 = L.marker([55.6857, 12.5636]).addTo(mymap);
marker18.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2016/11/contributor_interview_leif_lodahl.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2016/11/24/libreoffice-contributor-interview-leif-lodahl/' target='_blank'>Leif Lodahl</a>");

var marker19 = L.marker([41.3276, 19.819]).addTo(mymap);
marker19.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2018/02/ilovefs-gallery-145.jpg' width='100' /><a href='https://www.youtube.com/watch?v=4FhOQgcXoUA' target='_blank'>Jona Azizaj</a>");

var marker20 = L.marker([54.6871, 25.2771]).addTo(mymap);
marker20.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2016/09/contributor_interview_aleksas_pantechovskis.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2016/09/26/document-liberation-project-interview-alex-pantechovskis/' target='_blank'>Alex Pantechovskis</a>");

var marker21 = L.marker([51.513, 7.4652]).addTo(mymap);
marker21.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2016/09/contributor_interview_Regina_Henschel.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2016/09/14/libreoffice-contributor-interview-regina-henschel/' target='_blank'>Regina Henschel</a>");

var marker22 = L.marker([17.3608, 78.4726]).addTo(mymap);
marker22.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2016/08/contributor_interview_susobhan_ghosh.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2016/08/30/libreoffice-contributor-interview-susobhan-ghosh/' target='_blank'>Susobhan Ghosh</a>");

var marker23 = L.marker([25.066, 121.531]).addTo(mymap);
marker23.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2016/08/contributor_interview_franklin_weng.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2016/08/24/libreoffice-contributor-interview-franklin-weng/' target='_blank'>Franklin Weng</a>");

var marker24 = L.marker([49.4401, 1.0926]).addTo(mymap);
marker24.bindPopup("<a href='https://blog.documentfoundation.org/blog/2016/07/06/libreoffice-developer-interview-laurent-balland-poirier/' target='_blank'>Laurent Balland-Poirier</a>");

var marker25 = L.marker([39.9224, 32.855]).addTo(mymap);
marker25.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2016/06/developer_interview_MuhammetKara.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2016/06/14/libreoffice-developer-interview-muhammet-kara/' target='_blank'>Muhammet Kara</a>");

var marker26 = L.marker([35.7231, 140.2233]).addTo(mymap);
marker26.bindPopup("<a href='https://blog.documentfoundation.org/blog/2013/02/21/interview-ogasawara/' target='_blank'>Naruhiko Ogasawara</a>");

var marker27 = L.marker([56.8371, 60.5985]).addTo(mymap);
marker27.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2013/02/helenrussian-768x1024.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2013/02/01/interview-with-libreoffice-localizers-around-the-world-helen-sophie/' target='_blank'>Helen Ushakova</a>");

var marker28 = L.marker([35.7791, -78.6401]).addTo(mymap);
marker28.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2012/11/koheiyoshida.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2012/11/29/developer-interview-kohei-yoshida/' target='_blank'>Kohei Yoshida</a>");

var marker29 = L.marker([6.449, 7.500]).addTo(mymap);
marker29.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2018/10/interview_onyeibo_oku.png' width='100' /><a href='https://blog.documentfoundation.org/blog/2018/10/29/community-member-monday-onyeibo-oku/' target='_blank'>Onyeibo Oku</a>");

var marker30 = L.marker([42.6405, -71.3168]).addTo(mymap);
marker30.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2018/11/Member_Monday_Cathy_Crumbley.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2018/11/26/community-member-monday-cathy-crumbley/' target='_blank'>Cathy Crumbley</a>");

var marker31 = L.marker([-6.54,106.53]).addTo(mymap);
marker31.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2018/10/member_monday_ahmad_haris.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2018/10/15/community-member-monday-ahmad-haris/' target='_blank'>Ahmad Haris</a>");

var marker32 = L.marker([57.70,11.61]).addTo(mymap);
marker32.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2016/11/guilhem-crop.png' width='100' /><a href='https://blog.documentfoundation.org/blog/2018/10/09/interview-guilhem-moulin-on-libreoffice-infrastructure-and-services/' target='_blank'>Guilhem Moulin</a>");

var marker33 = L.marker([45.46,9.10]).addTo(mymap);
marker33.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2014/12/italo-speaking.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2018/03/19/italo-vignoli-on-libreoffice-marketing-and-the-challenges-ahead/' target='_blank'>Italo Vignoli</a>");

var marker34 = L.marker([51.47,3.25]).addTo(mymap);
marker34.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2016/07/developer_winfried_donkers.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2016/07/19/libreoffice-developer-interview-winfried-donkers/' target='_blank'>Winfried Donkers</a>");

var marker35 = L.marker([-6.9339, 107.607]).addTo(mymap);
marker35.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/01/interview_andika_triwidada.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/01/07/community-member-monday-jose-gatica-and-andika-triwidada/' target='_blank'>Andika Triwidada</a>");

var marker36 = L.marker([-39.8117, -73.2458]).addTo(mymap);
marker36.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/01/interview_jose_gatica.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/01/07/community-member-monday-jose-gatica-and-andika-triwidada/' target='_blank'>Jose Gatica</a>");

var marker37 = L.marker([30.0525, 31.2451]).addTo(mymap);
marker37.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/02/interview_khaled_hosny.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/02/11/community-member-monday-khaled-hosny/' target='_blank'>Khaled Hosny</a>");

var marker38 = L.marker([34.6998, 135.1895]).addTo(mymap);
marker38.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/01/interview_homamed_trabelsi.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/01/14/community-member-monday-mohamed-trabelsi-and-jim-raykowski/' target='_blank'>Mohamed Trabelsi</a>");

var marker39 = L.marker([57.7892, -152.4070]).addTo(mymap);
marker39.bindPopup("<a href='https://blog.documentfoundation.org/blog/2019/01/14/community-member-monday-mohamed-trabelsi-and-jim-raykowski/' target='_blank'>Jim Raykowski</a>");

var marker40 = L.marker([12.5261, 76.8945]).addTo(mymap);
marker40.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2016/07/developer_krishna_keshav.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2016/07/12/libreoffice-developer-interview-krishna-keshav/' target='_blank'>Krishna Keshav</a>");

var marker41 = L.marker([20.8883, -76.2589]).addTo(mymap);
marker41.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://es.blog.documentfoundation.org/wp-content/uploads/sites/6/2017/02/CarlosParraZaldivar-768x570.jpg' width='100' /><a href='https://es.blog.documentfoundation.org/colaboradores-hispanos-lic-carlos-parra-zaldivar/' target='_blank'>Lic. Carlos Parra Zaldivar</a>");

var marker42 = L.marker([21.8813, -102.2964]).addTo(mymap);
marker42.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://es.blog.documentfoundation.org/wp-content/uploads/sites/6/2017/02/fitoschido.jpg' width='100' /><a href='https://es.blog.documentfoundation.org/colaboradores-hispanos-adolfo-jayme-barrientos/' target='_blank'>Adolfo Jayme Barrientos</a>");

var marker43 = L.marker([41.3807, 2.1811]).addTo(mymap);
marker43.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://es.blog.documentfoundation.org/wp-content/uploads/sites/6/2019/02/IsmaelFanlo.jpg' width='100' /><a href='https://es.blog.documentfoundation.org/miembros-de-nuestra-comunidad-ismael-fanlo/' target='_blank'>Ismael Fanlo</a>");

var marker44 = L.marker([-1.966, 30.075]).addTo(mymap);
marker44.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/03/interview_dieudonne_dukuzumuremy.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/03/04/community-member-monday-dieudonne-dukuzumuremy-and-tomas-kapiye/' target='_blank'>Dieudonne Dukuzumuremy</a>");

var marker45 = L.marker([34.6931, 135.1881]).addTo(mymap);
marker45.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/03/interview_tomas_kapiye.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/03/04/community-member-monday-dieudonne-dukuzumuremy-and-tomas-kapiye/' target='_blank'>Tomas Kapiye</a>");

var marker46 = L.marker([22.5696, 88.35]).addTo(mymap);
marker46.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/04/interview_biraj_karmakar.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/04/08/community-member-monday-biraj-karmakar/' target='_blank'>Biraj Karmakar</a>");

var marker47 = L.marker([52.6022, 39.5947]).addTo(mymap);
marker47.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/04/Community_Member_Monday_Roman_Kuznetzov.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/04/29/community-member-monday-roman-kuznetsov/' target='_blank'>Roman Kuznetsov</a>");

var marker48 = L.marker([55.0953, 36.6123]).addTo(mymap);
marker48.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/05/community_member_monday_Vera-Blagoveschenskaya.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/05/13/community-member-monday-vera-blagoveschenskaya/' target='_blank'>Vera Blagoveschenskaya</a>");

var marker49 = L.marker([45.813, 24.983]).addTo(mymap);
marker49.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/05/community_member_buzea_bogdan.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/05/27/community-member-monday-buzea-bogdan/' target='_blank'>Buzea Bogdan</a>");

var marker50 = L.marker([34.8194, 134.6828]).addTo(mymap);
marker50.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/07/interview_jun_nogata.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/07/08/community-member-monday-jun-nogata/' target='_blank'>Jun Nogata</a>");

var marker51 = L.marker([37.5636, 126.9786]).addTo(mymap);
marker51.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/08/community_interview_DaeHyun_Sung.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/08/05/community-member-monday-daehyun-sung/' target='_blank'>DaeHyun Sung</a>");

var marker52 = L.marker([27.6195, 85.5530]).addTo(mymap);
marker52.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/08/community_member_monday_Sanjog_Sigdel.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/08/19/community-member-monday-sanjog-sigdel/' target='_blank'>Sanjog Sigdel</a>");

var marker53 = L.marker([0.3193, 32.5813]).addTo(mymap);
marker53.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/09/kampabits_2.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/09/02/community-member-monday-emmanuel-semutenga/' target='_blank'>Emmanuel Semutenga</a>");

var marker55 = L.marker([19.4323, -99.1358]).addTo(mymap);
marker55.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://es.blog.documentfoundation.org/wp-content/uploads/sites/6/2019/08/Mauricio-Baeza.jpg' width='100' /><a href='https://es.blog.documentfoundation.org/colaboradores-hispanos-mauricio-baeza/' target='_blank'>Mauricio Baeza</a>");

var marker56 = L.marker([18.9245, -99.2333]).addTo(mymap);
marker56.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/11/community_member_monday_celia_palacios.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/11/11/community-member-monday-celia-palacios/' target='_blank'>Celia Palacios</a>");

var marker57 = L.marker([50.0642, 14.5212]).addTo(mymap);
marker57.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/10/community_member_monday_petr_valach.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/10/28/community-member-monday-petr-valach/' target='_blank'>Petr Valach</a>");

var marker58 = L.marker([42.5656, 12.6425]).addTo(mymap);
marker58.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/01/PonzoGabriele_portrait_PP.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/11/29/local-event-update-libreoffice-at-openfest-in-sofia-bulgaria/' target='_blank'>Gabriele Ponzo</a>");

var marker59 = L.marker([10.0001, -84.1060]).addTo(mymap);
marker59.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://es.blog.documentfoundation.org/wp-content/uploads/sites/6/2020/01/XiomaraCespedes.jpg' width='100' /><a href='https://es.blog.documentfoundation.org/lunes-de-miembros-de-la-comunidad-xiomara-cespedes-jimenez/' target='_blank'>Xiomara Céspedes Jiménez (Spanish)</a>");

var marker60 = L.marker([17.9532, 102.6215]).addTo(mymap);
marker60.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2019/12/community_monday_Saikeo_Kavhanxay.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2019/12/23/community-member-monday-saikeo-kavhanxay/' target='_blank'>Saikeo Kavhanxay</a>");

var marker61 = L.marker([57.7049, 11.9601]).addTo(mymap);
marker61.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/04/community_member_monday_leif.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2020/04/06/community-member-monday-leif-joran-olsson/' target='_blank'>Leif-Jöran Olsson</a>");

var marker62 = L.marker([-7.8005, 110.3671]).addTo(mymap);
marker62.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/04/community_interview_stanislaus_pinasthika.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2020/04/20/community-member-monday-stanislaus-j-pinasthika/' target='_blank'>Stanislaus J. Pinasthika</a>");

var marker63 = L.marker([46.4958, 11.3482]).addTo(mymap);
marker63.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/05/community_interview_marco_marinello.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2020/05/11/community-member-monday-marco-marinello/' target='_blank'>Marco Marinello</a>");

var marker64 = L.marker([-7.8076, 110.4274]).addTo(mymap);
marker64.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/05/community_member_monday_rania_amina.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2020/05/25/community-member-monday-rania-amina/' target='_blank'>Rania Amina</a>");

var marker65 = L.marker([46.6673, 11.1594]).addTo(mymap);
marker65.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/06/community_interview_andreas_hainisch.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2020/06/08/community-member-monday-andreas-hainisch/' target='_blank'>Andreas Heinisch</a>");

var marker66 = L.marker([3.1474, 101.6867]).addTo(mymap);
marker66.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/07/community_interview_khairul.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2020/07/13/community-member-monday-khairul-aizat-kamarudzzaman/' target='_blank'>Khairul Aizat Kamarudzzaman</a>");

var marker67 = L.marker([25.790, 86.072]).addTo(mymap);
marker67.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/08/community_bubbles.png' width='150' /><a href='https://blog.documentfoundation.org/blog/2020/08/17/community-member-monday-pulkit-krishna/' target='_blank'>Pulkit Krishna</a>");

var marker68 = L.marker([41.030, 28.982]).addTo(mymap);
marker68.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/12/community_interview_sarper_akdemir.jpg' width='150' /><a href='https://blog.documentfoundation.org/blog/category/interviews/' target='_blank'>Sarper Akdemir</a>");

var marker69 = L.marker([22.5722, 88.3173]).addTo(mymap);
marker69.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/12/community_interview_Shivam_Kumar_Singh.jpg' width='150' /><a href='https://blog.documentfoundation.org/blog/2020/12/07/community-member-monday-shivam-kumar-singh/' target='_blank'>Shivam Kumar Singh</a>");

var marker70 = L.marker([53.1342, 23.1509]).addTo(mymap);
marker70.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/10/community_interview_marcin_popko.jpg' width='100' /><a href='https://blog.documentfoundation.org/blog/2020/10/19/community-member-monday-marcin-popko/' target='_blank'>Marcin Popko</a>");

var marker71 = L.marker([22.2885, 70.8000]).addTo(mymap);
marker71.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/09/community_interview_pranam_lashkari.jpg' width='150' /><a href='https://blog.documentfoundation.org/blog/2020/09/14/community-member-monday-pranam-lashkari-collabora-gsoc/' target='_blank'>Pranam Lashkari</a>");

var marker72 = L.marker([50.0417, 14.4072]).addTo(mymap);
marker72.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/08/community_interview_Tomas_Chvatal.jpg' width='150' /><a href='https://blog.documentfoundation.org/blog/2020/08/31/community-member-monday-tomas-chvatal/' target='_blank'>Tomas Chvatal</a>");

var marker73 = L.marker([35.577, 45.450]).addTo(mymap);
marker73.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/06/community_interview_Jwtiyar_Ali.jpg' width='150' /><a href='https://blog.documentfoundation.org/blog/2020/06/22/community-member-monday-jwtiyar-ali/' target='_blank'>Jwtiyar Ali</a>");

var marker74 = L.marker([-4.741, 11.909]).addTo(mymap);
marker74.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2020/07/community_interview_sandra_louvero.jpg' width='150' /><a href='https://blog.documentfoundation.org/blog/2020/07/27/community-member-monday-sandra-louvero/' target='_blank'>Sandra Louvezo</a>");

var marker75 = L.marker([-23.5539, -46.6727]).addTo(mymap);
marker75.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2021/01/community_interview_felipe_viggiano.jpg' width='150' /><a href='https://blog.documentfoundation.org/blog/2021/01/25/community-member-monday-felipe-viggiano-and-zhenghua-fong/' target='_blank'>Felipe Viggiano</a>");

var marker76 = L.marker([27.960, 116.356]).addTo(mymap);
marker76.bindPopup("<a href='https://blog.documentfoundation.org/blog/2021/01/25/community-member-monday-felipe-viggiano-and-zhenghua-fong/' target='_blank'>Zhenghua Fong</a>");

var marker77 = L.marker([-23.3095, -51.1729]).addTo(mymap);
marker77.bindPopup("<img style='display:block;margin-left:auto;margin-right:auto;' src='https://blog.documentfoundation.org/wp-content/uploads/2021/03/community_interview_rafael_lima.jpg' width='150' /><a href='https://blog.documentfoundation.org/blog/2021/03/01/community-member-monday-rafael-lima/' target='_blank'>Rafael Lima</a>");
