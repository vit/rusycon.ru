TopMenu = new Array();

function TopMenuItem(name) {
	this.name = name;
	this.SubMenu = new Array();
	return this;
}

function SubMenuItem(name, url, alt) {
	this.name = name;
	this.url = url;
	this.alt = alt;
	return this;
}

TopMenu[0] = new TopMenuItem("link10");
TopMenu[0].SubMenu[0] = new SubMenuItem("link11", "acad_ras.html", "��������� � �����-�������������� ���");
//TopMenu[0].SubMenu[1] = new SubMenuItem("link12", "acad2.htm", "�����-�������������� ��� (������)");
TopMenu[0].SubMenu[1] = new SubMenuItem("link13", "mosspec.htm", "����������� ������");
TopMenu[0].SubMenu[2] = new SubMenuItem("link14", "spbspec.htm", "����������� �����-����������");
TopMenu[0].SubMenu[3] = new SubMenuItem("link15", "regspec.htm", "����������� ������ �������� ������");
TopMenu[0].SubMenu[4] = new SubMenuItem("link16", "rusgroups.htm", "���������� ����������");
TopMenu[0].SubMenu[5] = new SubMenuItem("link17", "engspec.htm", "���������� ����������� � ����������");
TopMenu[0].SubMenu[6] = new SubMenuItem("link18", "vacancies.htm", "��������");

TopMenu[1] = new TopMenuItem("link20");
TopMenu[1].SubMenu[0] = new SubMenuItem("link21", "rusorg.htm", "���������� ����������� � �����");
TopMenu[1].SubMenu[1] = new SubMenuItem("link22", "engorg.htm", "������������� ����������� � �����");
TopMenu[1].SubMenu[2] = new SubMenuItem("link25", "insts.htm", "���������� ����������� ���� � ���");
TopMenu[1].SubMenu[3] = new SubMenuItem("link26", "firms.htm", "�����������");

TopMenu[2] = new TopMenuItem("link30");
TopMenu[2].SubMenu[0] = new SubMenuItem("link31", "rusconf.htm", "����������� � ������");
TopMenu[2].SubMenu[1] = new SubMenuItem("link32", "engconf.htm", "����������� �� �������");
TopMenu[2].SubMenu[2] = new SubMenuItem("link33", "exhibit.htm", "��������");

TopMenu[3] = new TopMenuItem("link40");
TopMenu[3].SubMenu[0] = new SubMenuItem("link41", "rusjournals.htm", "���������� �������");
TopMenu[3].SubMenu[1] = new SubMenuItem("link42", "engjournals.htm", "���������� �������");
TopMenu[3].SubMenu[2] = new SubMenuItem("link43", "newspapers.htm", "������");
TopMenu[3].SubMenu[3] = new SubMenuItem("link44", "newbooks.htm", "����� ����� �� ������� �����");
TopMenu[3].SubMenu[4] = new SubMenuItem("link45", "rusbooks.htm", "����� ���������� �������, �������� �� �������");
TopMenu[3].SubMenu[5] = new SubMenuItem("link46", "ruspublishers.htm", "������������");
TopMenu[3].SubMenu[6] = new SubMenuItem("link47", "ruslib.htm", "����������");
TopMenu[3].SubMenu[7] = new SubMenuItem("link48", "onlinemag.htm", "������-��������");

TopMenu[4] = new TopMenuItem("link50");
TopMenu[4].SubMenu[0] = new SubMenuItem("link51", "databases.htm", "���� ������ �� �������� � ����������");
TopMenu[4].SubMenu[1] = new SubMenuItem("link52", "infosites.htm", "�������������� ����� �� ����� � �������");
TopMenu[4].SubMenu[2] = new SubMenuItem("link53", "bookshelf.htm", "������� �����");
TopMenu[4].SubMenu[3] = new SubMenuItem("link54", "edu_sites.htm", "������� ���������");
TopMenu[4].SubMenu[4] = new SubMenuItem("link55", "online_sites.htm", "������-������������");
TopMenu[4].SubMenu[5] = new SubMenuItem("link56", "chaos_sites.htm", "���������� �������� � ����");
TopMenu[4].SubMenu[6] = new SubMenuItem("link57", "history_cyb.html", "������� ������ ����������, �����������, �����������");
                                                
TopMenu[5] = new TopMenuItem("link60");
TopMenu[5].SubMenu[0] = new SubMenuItem("link61", "../journal/index_r.html#1", "����� ����������");
TopMenu[5].SubMenu[1] = new SubMenuItem("link62", "../journal/index_r.html#2", "��� �������");
TopMenu[5].SubMenu[2] = new SubMenuItem("link63", "../journal/index_r.html#3", "������");

var roll = (document.images)? true : false;
var supp = (o || n || e);
var timeout = 0;

var xpos = 0;	// x-offset
var ypos = 32; 	// y-offset
wide = 121;		// menu item width

function img_default(name) { return "img/" + name + ".gif"; }
function img_active(name) { 
//if((name == "link10") || (name == "link20") || (name == "link30") || (name == "link40") || (name == "link50") || (name == "link60")){
//	return "img/_" + name + ".gif";}
//else 
return "img/_" + name + ".gif"; 
}

function show1(item) {
	if (o) { if (document.getElementById(item)) document.getElementById(item).style.visibility = "visible"; }
	if (e) { if (document.all[item]) document.all[item].style.visibility = "visible"; }
	if (n) { if (document.layers[item]) document.layers[item].visibility = "show"; }
}

function hide1(item) {
	if (o) { if (document.getElementById(item)) document.getElementById(item).style.visibility = "hidden"; } 
	if (e) { if (document.all[item]) document.all[item].style.visibility = "hidden"; } 
	if (n) { if (document.layers[item]) document.layers[item].visibility = "hide"; }
}

function move1(item, xoff, yoff) {
	if (o) {
		document.getElementById(item).style.left = xoff;
		document.getElementById(item).style.top = yoff;
	} else if (e) {
		document.all[item].style.left = xoff;
		document.all[item].style.top = yoff;
	} else if (n) {
		document.layers[item].left = xoff;
		document.layers[item].top = yoff;
	}
}

function hide2() {
	for (var i = 0; i < TopMenu.length; i++) {
		var name = TopMenu[i].name;
		if (roll) document.images['img_'+name].src = img_default(name);
		hide1(name);
	}
	timeout = 0;
}

function roll1(item) {
	if (roll) {
		for (var i = 0; i < TopMenu.length; i++)	
			document.images['img_'+TopMenu[i].name].src = (i == item)? img_active(TopMenu[i].name) : img_default(TopMenu[i].name);
	}
	if (supp) {
		if (timeout != 0) { clearTimeout(timeout); timeout = 0; }
		for (var i = 0; i < TopMenu.length; i++)
			if (i == item) show1(TopMenu[i].name); else hide1(TopMenu[i].name);
	}
}

function unroll1(item) {
	if (roll) document.images['img_'+TopMenu[item].name].src = img_default(TopMenu[item].name);
	if (supp) timeout = setTimeout("hide1('"+TopMenu[item].name+"')",1000);
}

function subover(item, subitem) {
	if (roll) {
		document.images['img_'+TopMenu[item].name].src = img_active(TopMenu[item].name);
	}
	if (supp) {
		if (timeout != 0) { clearTimeout(timeout); timeout = 0; } else show1(TopMenu[item].name);
	}
}

function subout() {
	timeout = setTimeout("hide2()",1000);
}

function preload(img) {
	if (roll) {
		load = new Image;
		load.src = img;
	}
}

function xoffset(item) {
	if (n) {
		return document.layers[item].pageX;
	} else if (o || e) {
		var elem = (o)? document.getElementById(item) : document.all[item];
		var pos = elem.offsetLeft;
		while (elem.offsetParent != null) {
			elem = elem.offsetParent;
			pos += elem.offsetLeft;
			if (elem.tagName == 'BODY') break;
		} return pos;
	} else return 0;
}

function init_subnav() {
	for (var item = 0; item < TopMenu.length; item++) {
		nav = TopMenu[item];
		preload(img_active(nav.name));
		document.writeln('<div id="' + nav.name + '" class="SubMenu">');
		for (var i = 0; i < nav.SubMenu.length; i++) {
			preload(img_active(nav.SubMenu[i].name));
			document.writeln('<a href="' + nav.SubMenu[i].url + '" onmouseover="subover(' + item + ',' + i + ')" onmouseout="subout()">' + '<img name="img_' + nav.SubMenu[i].name + '" src="' + img_default(nav.SubMenu[i].name) + '" width="120" height="32" border="0" alt="' + nav.SubMenu[i].alt + '"></a><br>');
		}
		document.writeln('</div>');
	}
}

function resize1() {
	xpos = xoffset("target");
	for (var i = 0; i < TopMenu.length; i++) {
		move1(TopMenu[i].name, xpos, ypos);
		xpos += wide;
	}
}

function init() {
	init_subnav();
	resize1();
}
