alert("This keyboard is made on Windows OS. To change language press CTRL+ALT+CAPS");

//create text area and classes
let textarea = document.createElement("TEXTAREA");
  textarea.className = "textarea";
  document.body.appendChild(textarea);

let keyboard = document.createElement("keyboard");
  keyboard.className = "keyboard";

let keyboard__keys1 = document.createElement("keyboard__keys1");
  keyboard__keys1.className = "keyboard__keys1";
  keyboard.appendChild(keyboard__keys1);

let keyboard__keys2 = document.createElement("keyboard__keys2");
  keyboard__keys2.className = "keyboard__keys2";
  keyboard.appendChild(keyboard__keys2);

let keyboard__keys3 = document.createElement("keyboard__keys3");
  keyboard__keys3.className = "keyboard__keys3";
  keyboard.appendChild(keyboard__keys3);

let keyboard__keys4 = document.createElement("keyboard__keys4");
  keyboard__keys4.className = "keyboard__keys4";
  keyboard.appendChild(keyboard__keys4);

let keyboard__keys5 = document.createElement("keyboard__keys5");
  keyboard__keys5.className = "keyboard__keys5";
  keyboard.appendChild(keyboard__keys5);

  //create buttons

let btn_quotes_angled = document.createElement("button");
  btn_quotes_angled.className = "keyboard__key";
  btn_quotes_angled.innerHTML = "`";
  keyboard__keys1.appendChild(btn_quotes_angled);

let btn_1 = document.createElement("button");
  btn_1.className = "keyboard__key";
  btn_1.innerHTML = "1";
  keyboard__keys1.appendChild(btn_1);

let btn_2 = document.createElement("button");
  btn_2.className = "keyboard__key";
  btn_2.innerHTML = "2";
  keyboard__keys1.appendChild(btn_2);

let btn_3 = document.createElement("button");
  btn_3.className = "keyboard__key";
  btn_3.innerHTML = "3";
  keyboard__keys1.appendChild(btn_3);

let btn_4 = document.createElement("button");
  btn_4.className = "keyboard__key";
  btn_4.innerHTML = "4";
  keyboard__keys1.appendChild(btn_4);

let btn_5 = document.createElement("button");
  btn_5.className = "keyboard__key";
  btn_5.innerHTML = "5";
  keyboard__keys1.appendChild(btn_5);

let btn_6 = document.createElement("button");
  btn_6.className = "keyboard__key";
  btn_6.innerHTML = "6";
  keyboard__keys1.appendChild(btn_6);

let btn_7 = document.createElement("button");
  btn_7.className = "keyboard__key";
  btn_7.innerHTML = "7";
  keyboard__keys1.appendChild(btn_7);

let btn_8 = document.createElement("button");
  btn_8.className = "keyboard__key";
  btn_8.innerHTML = "8";
  keyboard__keys1.appendChild(btn_8);

let btn_9 = document.createElement("button");
  btn_9.className = "keyboard__key";
  btn_9.innerHTML = "9";
  keyboard__keys1.appendChild(btn_9);

let btn_0 = document.createElement("button");
  btn_0.className = "keyboard__key";
  btn_0.innerHTML = "0";
  keyboard__keys1.appendChild(btn_0);

let btn_minus = document.createElement("button");
  btn_minus.className = "keyboard__key";
  btn_minus.innerHTML = "-";
  keyboard__keys1.appendChild(btn_minus);

let btn_equal = document.createElement("button");
  btn_equal.className = "keyboard__key";
  btn_equal.innerHTML = "=";
  keyboard__keys1.appendChild(btn_equal);

let btn_backspace = document.createElement("button");
  btn_backspace.className = "keyboard__key__2";
  btn_backspace.innerHTML = "Backspace";
  keyboard__keys1.appendChild(btn_backspace);

let btn_tab = document.createElement("button");
  btn_tab.className = "keyboard__key__2";
  btn_tab.innerHTML = "Tab";
  keyboard__keys2.appendChild(btn_tab);

let btn_q = document.createElement("button");
  btn_q.className = "keyboard__key";
  btn_q.innerHTML = "q";
  keyboard__keys2.appendChild(btn_q);

let btn_w = document.createElement("button");
  btn_w.className = "keyboard__key";
  btn_w.innerHTML = "w";
  keyboard__keys2.appendChild(btn_w);

let btn_e = document.createElement("button");
  btn_e.className = "keyboard__key";
  btn_e.innerHTML = "e";
  keyboard__keys2.appendChild(btn_e);

let btn_r = document.createElement("button");
  btn_r.className = "keyboard__key";
  btn_r.innerHTML = "r";
  keyboard__keys2.appendChild(btn_r);

let btn_t = document.createElement("button");
  btn_t.className = "keyboard__key";
  btn_t.innerHTML = "t";
  keyboard__keys2.appendChild(btn_t);

let btn_y = document.createElement("button");
  btn_y.className = "keyboard__key";
  btn_y.innerHTML = "y";
  keyboard__keys2.appendChild(btn_y);

let btn_u = document.createElement("button");
  btn_u.className = "keyboard__key";
  btn_u.innerHTML = "u";
  keyboard__keys2.appendChild(btn_u);

let btn_i = document.createElement("button");
  btn_i.className = "keyboard__key";
  btn_i.innerHTML = "i";
  keyboard__keys2.appendChild(btn_i);

let btn_o = document.createElement("button");
  btn_o.className = "keyboard__key";
  btn_o.innerHTML = "o";
  keyboard__keys2.appendChild(btn_o);

let btn_p = document.createElement("button");
  btn_p.className = "keyboard__key";
  btn_p.innerHTML = "p";
  keyboard__keys2.appendChild(btn_p);

let btn_bracket_left = document.createElement("button");
  btn_bracket_left.className = "keyboard__key";
  btn_bracket_left.innerHTML = "[";
  keyboard__keys2.appendChild(btn_bracket_left);

let btn_bracket_right = document.createElement("button");
  btn_bracket_right.className = "keyboard__key";
  btn_bracket_right.innerHTML = "]";
  keyboard__keys2.appendChild(btn_bracket_right);

let btn_del = document.createElement("button");
  btn_del.className = "keyboard__key__2";
  btn_del.innerHTML = "DEL";
  keyboard__keys2.appendChild(btn_del);

let btn_caps = document.createElement("button");
  btn_caps.className = "keyboard__key__2";
  btn_caps.innerHTML = "Caps";
  keyboard__keys3.appendChild(btn_caps);

let btn_a = document.createElement("button");
  btn_a.className = "keyboard__key";
  btn_a.innerHTML = "a";
  keyboard__keys3.appendChild(btn_a);

let btn_s = document.createElement("button");
  btn_s.className = "keyboard__key";
  btn_s.innerHTML = "s";
  keyboard__keys3.appendChild(btn_s);

let btn_d = document.createElement("button");
  btn_d.className = "keyboard__key";
  btn_d.innerHTML = "d";
  keyboard__keys3.appendChild(btn_d);

let btn_f = document.createElement("button");
  btn_f.className = "keyboard__key";
  btn_f.innerHTML = "f";
  keyboard__keys3.appendChild(btn_f);

let btn_g = document.createElement("button");
  btn_g.className = "keyboard__key";
  btn_g.innerHTML = "g";
  keyboard__keys3.appendChild(btn_g);

let btn_h = document.createElement("button");
  btn_h.className = "keyboard__key";
  btn_h.innerHTML = "h";
  keyboard__keys3.appendChild(btn_h);

let btn_j = document.createElement("button");
  btn_j.className = "keyboard__key";
  btn_j.innerHTML = "j";
  keyboard__keys3.appendChild(btn_j);

let btn_k = document.createElement("button");
  btn_k.className = "keyboard__key";
  btn_k.innerHTML = "k";
  keyboard__keys3.appendChild(btn_k);

let btn_l = document.createElement("button");
  btn_l.className = "keyboard__key";
  btn_l.innerHTML = "l";
  keyboard__keys3.appendChild(btn_l);

let btn_semicolumn = document.createElement("button");
  btn_semicolumn.className = "keyboard__key";
  btn_semicolumn.innerHTML = ";";
  keyboard__keys3.appendChild(btn_semicolumn);

let btn_quotes = document.createElement("button");
  btn_quotes.className = "keyboard__key";
  btn_quotes.innerHTML = "'";
  keyboard__keys3.appendChild(btn_quotes);

let btn_enter = document.createElement("button");
  btn_enter.className = "keyboard__key__2";
  btn_enter.innerHTML = "ENTER";
  keyboard__keys3.appendChild(btn_enter);

let btn_shift = document.createElement("button");
  btn_shift.className = "keyboard__key__2";
  btn_shift.innerHTML = "Shift";
  keyboard__keys4.appendChild(btn_shift);

let btn_z = document.createElement("button");
  btn_z.className = "keyboard__key";
  btn_z.innerHTML = "z";
  keyboard__keys4.appendChild(btn_z);

let btn_x = document.createElement("button");
  btn_x.className = "keyboard__key";
  btn_x.innerHTML = "x";
  keyboard__keys4.appendChild(btn_x);

let btn_c = document.createElement("button");
  btn_c.className = "keyboard__key";
  btn_c.innerHTML = "c";
  keyboard__keys4.appendChild(btn_c);

let btn_v = document.createElement("button");
  btn_v.className = "keyboard__key";
  btn_v.innerHTML = "v";
  keyboard__keys4.appendChild(btn_v);

let btn_b = document.createElement("button");
  btn_b.className = "keyboard__key";
  btn_b.innerHTML = "b";
  keyboard__keys4.appendChild(btn_b);

let btn_n = document.createElement("button");
  btn_n.className = "keyboard__key";
  btn_n.innerHTML = "n";
  keyboard__keys4.appendChild(btn_n);

let btn_m = document.createElement("button");
  btn_m.className = "keyboard__key";
  btn_m.innerHTML = "m";
  keyboard__keys4.appendChild(btn_m);

let btn_comma = document.createElement("button");
  btn_comma.className = "keyboard__key";
  btn_comma.innerHTML = ",";
  keyboard__keys4.appendChild(btn_comma);

let btn_period = document.createElement("button");
  btn_period.className = "keyboard__key";
  btn_period.innerHTML = ".";
  keyboard__keys4.appendChild(btn_period);

let btn_slash = document.createElement("button");
  btn_slash.className = "keyboard__key";
  btn_slash.innerHTML = "/";
  keyboard__keys4.appendChild(btn_slash);

let btn_shift2 = document.createElement("button");
  btn_shift2.className = "keyboard__key__2";
  btn_shift2.innerHTML = "Shift";
  keyboard__keys4.appendChild(btn_shift2);

let btn_ctrl = document.createElement("button");
  btn_ctrl.className = "keyboard__key__2";
  btn_ctrl.innerHTML = "Ctrl";
  keyboard__keys5.appendChild(btn_ctrl);

let btn_win = document.createElement("button");
  btn_win.className = "keyboard__key__2";
  btn_win.innerHTML = "Win";
  keyboard__keys5.appendChild(btn_win);

let btn_alt = document.createElement("button");
  btn_alt.className = "keyboard__key__2";
  btn_alt.innerHTML = "Alt";
  keyboard__keys5.appendChild(btn_alt);

let btn_space = document.createElement("button");
  btn_space.className = "keyboard__key__3";
  btn_space.innerHTML = " ";
  keyboard__keys5.appendChild(btn_space);

let btn_alt2 = document.createElement("button");
  btn_alt2.className = "keyboard__key__2";
  btn_alt2.innerHTML = "Alt";
  keyboard__keys5.appendChild(btn_alt2);

let btn_ctrl2 = document.createElement("button");
  btn_ctrl2.className = "keyboard__key__2";
  btn_ctrl2.innerHTML = "Ctrl";
  keyboard__keys5.appendChild(btn_ctrl2);

document.body.append(keyboard);


// clear textarea by clicking del
btn_del.onclick = function clear () {
  textarea.value = "";
}
//text typing
const buttons = document.querySelectorAll(".keyboard__key");
  buttons.forEach(btn=>{
    btn.addEventListener('click', () => {
      textarea.value += btn.innerText;
    })
});

btn_enter.addEventListener('click', () => {
    textarea.value += '\r\n';
})
  
btn_space.addEventListener('click', () => {
    textarea.value += " ";
})
  
btn_backspace.addEventListener('click', () => {
    let string = textarea.value;
    str = string.slice(0, -1)
    textarea.value = str;
})
let altClicked = false;
let ctrlClicked = false;

btn_alt.addEventListener('click', () => {
  altClicked = true;
  if(altClicked && ctrlClicked) languageRUS();
});
  
btn_ctrl.addEventListener('click', () => {
  ctrlClicked = true;
  if (altClicked && ctrlClicked) languageRUS ();
})

btn_alt2.addEventListener('click', () => {
    altClicked = true;
    if(altClicked && ctrlClicked) languageRUS();
});
    
  btn_ctrl2.addEventListener('click', () => {
    ctrlClicked = true;
    if (altClicked && ctrlClicked) languageRUS ();
});

let caps = 0;
btn_caps.addEventListener('click', () => {

  if (caps==0) {
    btn_q.innerText = "Q"; btn_w.innerText = "W"; btn_e.innerText = "E";
    btn_r.innerText = "R"; btn_t.innerText = "T"; btn_y.innerText = "Y"; 
    btn_u.innerText = "U"; btn_i.innerText = "I"; btn_o.innerText = "O"; 
    btn_p.innerText = "P"; btn_a.innerText = "A"; btn_s.innerText = "S"; 
    btn_d.innerText = "D"; btn_f.innerText = "F"; btn_g.innerText = "G"; 
    btn_h.innerText = "H"; btn_j.innerText = "J"; btn_k.innerText = "K"; 
    btn_l.innerText = "L"; btn_z.innerText = "Z"; btn_x.innerText = "X"; 
    btn_c.innerText = "C"; btn_v.innerText = "V"; btn_b.innerText = "B";
    btn_n.innerText = "N"; btn_m.innerText = "M";
    caps = 1;
  } 
  else 
  {
    btn_q.innerText = "q"; btn_w.innerText = "w"; btn_e.innerText = "e";
    btn_r.innerText = "r"; btn_t.innerText = "t"; btn_y.innerText = "y"; 
    btn_u.innerText = "u"; btn_i.innerText = "i"; btn_o.innerText = "o"; 
    btn_p.innerText = "p"; btn_a.innerText = "a"; btn_s.innerText = "s"; 
    btn_d.innerText = "d"; btn_f.innerText = "f"; btn_g.innerText = "g"; 
    btn_h.innerText = "h"; btn_j.innerText = "j"; btn_k.innerText = "k"; 
    btn_l.innerText = "l"; btn_z.innerText = "z"; btn_x.innerText = "x"; 
    btn_c.innerText = "c"; btn_v.innerText = "v"; btn_b.innerText = "b";
    btn_n.innerText = "n"; btn_m.innerText = "m";
    caps = 0;
  };
});

let shift = 0;
btn_shift.addEventListener('click', () => {
  if (shift == 0) {
    btn_quotes_angled.innerText = "~"; btn_1.innerText = "!"; btn_2.innerText = "@";
    btn_3.innerText = "#"; btn_4.innerText = "$"; btn_5.innerText = "%"; 
    btn_6.innerText = "^"; btn_7.innerText = "&"; btn_8.innerText = "*"; 
    btn_9.innerText = "("; btn_0.innerText = ")"; btn_minus.innerText = "_"; btn_equal.innerText = "+";
    btn_bracket_left.innerText = "{"; btn_bracket_right.innerText = "}"; btn_semicolumn.innerText = ":";
    btn_quotes.innerText = '"'; btn_comma.innerText = "<"; btn_period.innerText = ">"; btn_slash.innerText = "?";
    shift = 1;
  }
  else
  {
    btn_quotes_angled.innerText = "`"; btn_1.innerText = "1"; btn_2.innerText = "2";
    btn_3.innerText = "3"; btn_4.innerText = "4"; btn_5.innerText = "5"; 
    btn_6.innerText = "6"; btn_7.innerText = "7"; btn_8.innerText = "8"; 
    btn_9.innerText = "9"; btn_0.innerText = "0"; btn_minus.innerText = "-"; btn_equal.innerText = "=";
    btn_bracket_left.innerText = "["; btn_bracket_right.innerText = "]"; btn_semicolumn.innerText = ";";
    btn_quotes.innerText = "'"; btn_comma.innerText = ","; btn_period.innerText = "."; btn_slash.innerText = "/";
    shift = 0; 
  };
});

btn_shift2.addEventListener('click', () => {
  if (shift == 0) {
    btn_quotes_angled.innerText = "~"; btn_1.innerText = "!"; btn_2.innerText = "@";
    btn_3.innerText = "#"; btn_4.innerText = "$"; btn_5.innerText = "%"; 
    btn_6.innerText = "^"; btn_7.innerText = "&"; btn_8.innerText = "*"; 
    btn_9.innerText = "("; btn_0.innerText = ")"; btn_minus.innerText = "_"; btn_equal.innerText = "+";
    btn_bracket_left.innerText = "{"; btn_bracket_right.innerText = "}"; btn_semicolumn.innerText = ":";
    btn_quotes.innerText = '"'; btn_comma.innerText = "<"; btn_period.innerText = ">"; btn_slash.innerText = "?";
    shift = 1;
  }
  else
  {
    btn_quotes_angled.innerText = "`"; btn_1.innerText = "1"; btn_2.innerText = "2";
    btn_3.innerText = "3"; btn_4.innerText = "4"; btn_5.innerText = "5"; 
    btn_6.innerText = "6"; btn_7.innerText = "7"; btn_8.innerText = "8"; 
    btn_9.innerText = "9"; btn_0.innerText = "0"; btn_minus.innerText = "-"; btn_equal.innerText = "=";
    btn_bracket_left.innerText = "["; btn_bracket_right.innerText = "]"; btn_semicolumn.innerText = ";";
    btn_quotes.innerText = "'"; btn_comma.innerText = ","; btn_period.innerText = "."; btn_slash.innerText = "/";
    shift = 0; 
  };
});

function languageENG(){
let capsENG = 0;
btn_caps.addEventListener('click', () => {

  if (capsENG==0) {
    btn_q.innerText = "Q"; btn_w.innerText = "W"; btn_e.innerText = "E";
    btn_r.innerText = "R"; btn_t.innerText = "T"; btn_y.innerText = "Y"; 
    btn_u.innerText = "U"; btn_i.innerText = "I"; btn_o.innerText = "O"; 
    btn_p.innerText = "P"; btn_a.innerText = "A"; btn_s.innerText = "S"; 
    btn_d.innerText = "D"; btn_f.innerText = "F"; btn_g.innerText = "G"; 
    btn_h.innerText = "H"; btn_j.innerText = "J"; btn_k.innerText = "K"; 
    btn_l.innerText = "L"; btn_z.innerText = "Z"; btn_x.innerText = "X"; 
    btn_c.innerText = "C"; btn_v.innerText = "V"; btn_b.innerText = "B";
    btn_n.innerText = "N"; btn_m.innerText = "M";
    capsENG = 1;
  } 
  else 
  {
    btn_q.innerText = "q"; btn_w.innerText = "w"; btn_e.innerText = "e";
    btn_r.innerText = "r"; btn_t.innerText = "t"; btn_y.innerText = "y"; 
    btn_u.innerText = "u"; btn_i.innerText = "i"; btn_o.innerText = "o"; 
    btn_p.innerText = "p"; btn_a.innerText = "a"; btn_s.innerText = "s"; 
    btn_d.innerText = "d"; btn_f.innerText = "f"; btn_g.innerText = "g"; 
    btn_h.innerText = "h"; btn_j.innerText = "j"; btn_k.innerText = "k"; 
    btn_l.innerText = "l"; btn_z.innerText = "z"; btn_x.innerText = "x"; 
    btn_c.innerText = "c"; btn_v.innerText = "v"; btn_b.innerText = "b";
    btn_n.innerText = "n"; btn_m.innerText = "m";
    capsENG = 0;
  };
});

let shiftENG = 0;
btn_shift.addEventListener('click', () => {
  if (shiftENG == 0) {
    btn_quotes_angled.innerText = "~"; btn_1.innerText = "!"; btn_2.innerText = "@";
    btn_3.innerText = "#"; btn_4.innerText = "$"; btn_5.innerText = "%"; 
    btn_6.innerText = "^"; btn_7.innerText = "&"; btn_8.innerText = "*"; 
    btn_9.innerText = "("; btn_0.innerText = ")"; btn_minus.innerText = "_"; btn_equal.innerText = "+";
    btn_bracket_left.innerText = "{"; btn_bracket_right.innerText = "}"; btn_semicolumn.innerText = ":";
    btn_quotes.innerText = '"'; btn_comma.innerText = "<"; btn_period.innerText = ">"; btn_slash.innerText = "?";
    shiftENG = 1;
  }
  else
  {
    btn_quotes_angled.innerText = "`"; btn_1.innerText = "1"; btn_2.innerText = "2";
    btn_3.innerText = "3"; btn_4.innerText = "4"; btn_5.innerText = "5"; 
    btn_6.innerText = "6"; btn_7.innerText = "7"; btn_8.innerText = "8"; 
    btn_9.innerText = "9"; btn_0.innerText = "0"; btn_minus.innerText = "-"; btn_equal.innerText = "=";
    btn_bracket_left.innerText = "["; btn_bracket_right.innerText = "]"; btn_semicolumn.innerText = ";";
    btn_quotes.innerText = "'"; btn_comma.innerText = ","; btn_period.innerText = "."; btn_slash.innerText = "/";
    shiftENG = 0; 
  };
});

btn_shift2.addEventListener('click', () => {
  if (shiftENG == 0) {
    btn_quotes_angled.innerText = "~"; btn_1.innerText = "!"; btn_2.innerText = "@";
    btn_3.innerText = "#"; btn_4.innerText = "$"; btn_5.innerText = "%"; 
    btn_6.innerText = "^"; btn_7.innerText = "&"; btn_8.innerText = "*"; 
    btn_9.innerText = "("; btn_0.innerText = ")"; btn_minus.innerText = "_"; btn_equal.innerText = "+";
    btn_bracket_left.innerText = "{"; btn_bracket_right.innerText = "}"; btn_semicolumn.innerText = ":";
    btn_quotes.innerText = '"'; btn_comma.innerText = "<"; btn_period.innerText = ">"; btn_slash.innerText = "?";
    shiftENG = 1;
  }
  else
  {
    btn_quotes_angled.innerText = "`"; btn_1.innerText = "1"; btn_2.innerText = "2";
    btn_3.innerText = "3"; btn_4.innerText = "4"; btn_5.innerText = "5"; 
    btn_6.innerText = "6"; btn_7.innerText = "7"; btn_8.innerText = "8"; 
    btn_9.innerText = "9"; btn_0.innerText = "0"; btn_minus.innerText = "-"; btn_equal.innerText = "=";
    btn_bracket_left.innerText = "["; btn_bracket_right.innerText = "]"; btn_semicolumn.innerText = ";";
    btn_quotes.innerText = "'"; btn_comma.innerText = ","; btn_period.innerText = "."; btn_slash.innerText = "/";
    shiftENG = 0; 
  };
});
};

function languageRUS(){

  let capsRUS = 0;

  btn_quotes_angled.innerText = "ё";
  btn_q.innerText = "й"; btn_w.innerText = "ц"; btn_e.innerText = "у";
  btn_r.innerText = "к"; btn_t.innerText = "е"; btn_y.innerText = "н"; 
  btn_u.innerText = "г"; btn_i.innerText = "ш"; btn_o.innerText = "щ"; 
  btn_p.innerText = "з"; btn_bracket_left.innerText = "х"; btn_bracket_right.innerText = "ъ";
  btn_a.innerText = "ф"; btn_s.innerText = "ы"; 
  btn_d.innerText = "в"; btn_f.innerText = "а"; btn_g.innerText = "п"; 
  btn_h.innerText = "р"; btn_j.innerText = "о"; btn_k.innerText = "л"; 
  btn_l.innerText = "д"; btn_semicolumn.innerText = "ж"; btn_quotes.innerText = "э";
  btn_z.innerText = "я"; btn_x.innerText = "ч"; 
  btn_c.innerText = "с"; btn_v.innerText = "м"; btn_b.innerText = "и";
  btn_n.innerText = "т"; btn_m.innerText = "ь"; btn_comma.innerText = "б";
  btn_period.innerText = "ю"; btn_slash.innerText = ".";

  btn_caps.addEventListener('click', () => {
    if (capsRUS==0){
        btn_quotes_angled.innerText = "Ё";
        btn_q.innerText = "Й"; btn_w.innerText = "Ц"; btn_e.innerText = "У";
        btn_r.innerText = "К"; btn_t.innerText = "Е"; btn_y.innerText = "Н"; 
        btn_u.innerText = "Г"; btn_i.innerText = "Ш"; btn_o.innerText = "Щ"; 
        btn_p.innerText = "З"; btn_bracket_left.innerText = "Х"; btn_bracket_right.innerText = "Ъ";
        btn_a.innerText = "Ф"; btn_s.innerText = "Ы"; 
        btn_d.innerText = "В"; btn_f.innerText = "А"; btn_g.innerText = "П"; 
        btn_h.innerText = "Р"; btn_j.innerText = "О"; btn_k.innerText = "Л"; 
        btn_l.innerText = "Д"; btn_semicolumn.innerText = "Ж"; btn_quotes.innerText = "Э";
        btn_z.innerText = "Я"; btn_x.innerText = "Ч"; 
        btn_c.innerText = "С"; btn_v.innerText = "М"; btn_b.innerText = "И";
        btn_n.innerText = "Т"; btn_m.innerText = "Ь"; btn_comma.innerText = "Б";
        btn_period.innerText = "Ю";
        capsRUS = 1;
    } else {
        btn_quotes_angled.innerText = "ё";
        btn_q.innerText = "й"; btn_w.innerText = "ц"; btn_e.innerText = "у";
        btn_r.innerText = "к"; btn_t.innerText = "е"; btn_y.innerText = "н"; 
        btn_u.innerText = "г"; btn_i.innerText = "ш"; btn_o.innerText = "щ"; 
        btn_p.innerText = "з"; btn_bracket_left.innerText = "х"; btn_bracket_right.innerText = "ъ";
        btn_a.innerText = "ф"; btn_s.innerText = "ы"; 
        btn_d.innerText = "в"; btn_f.innerText = "а"; btn_g.innerText = "п"; 
        btn_h.innerText = "р"; btn_j.innerText = "о"; btn_k.innerText = "л"; 
        btn_l.innerText = "д"; btn_semicolumn.innerText = "ж"; btn_quotes.innerText = "э";
        btn_z.innerText = "я"; btn_x.innerText = "ч"; 
        btn_c.innerText = "с"; btn_v.innerText = "м"; btn_b.innerText = "и";
        btn_n.innerText = "т"; btn_m.innerText = "ь"; btn_comma.innerText = "б";
        btn_period.innerText = "ю";
        capsRUS = 0;
    }
  });
  
  let shiftRUS = 0;
  btn_shift.addEventListener('click', () => {
    if (shift == 0) {
      btn_quotes_angled.innerText = "Ё";
      btn_1.innerText = "!"; btn_2.innerText = '"';
      btn_3.innerText = "№"; btn_4.innerText = ";"; btn_5.innerText = "%"; 
      btn_6.innerText = ":"; btn_7.innerText = "?"; btn_8.innerText = "*"; 
      btn_9.innerText = "("; btn_0.innerText = ")"; btn_minus.innerText = "_"; btn_equal.innerText = "+";
      btn_bracket_left.innerText = "Х"; btn_bracket_right.innerText = "Ъ";
      btn_semicolumn.innerText = "Ж"; btn_quotes.innerText = "Э";
      btn_comma.innerText = "Б"; btn_period.innerText = "Ю";
      btn_slash.innerText = ",";
      shiftRUS = 1;
    }
    else
    {
      btn_quotes_angled.innerText = "ё";
      btn_1.innerText = "1"; btn_2.innerText = "2";
      btn_3.innerText = "3"; btn_4.innerText = "4"; btn_5.innerText = "5"; 
      btn_6.innerText = "6"; btn_7.innerText = "7"; btn_8.innerText = "8"; 
      btn_9.innerText = "9"; btn_0.innerText = "0"; btn_minus.innerText = "-"; btn_equal.innerText = "=";
      btn_bracket_left.innerText = "х"; btn_bracket_right.innerText = "ъ";
      btn_semicolumn.innerText = "ж"; btn_quotes.innerText = "э";
      btn_comma.innerText = "б"; btn_period.innerText = "ю";
      btn_slash.innerText = ".";
      shiftRUS = 0; 
    };
  });
  
  btn_shift2.addEventListener('click', () => {
    if (shiftRUS == 0) {
        btn_quotes_angled.innerText = "Ё";
        btn_1.innerText = "!"; btn_2.innerText = '"';
        btn_3.innerText = "№"; btn_4.innerText = ";"; btn_5.innerText = "%"; 
        btn_6.innerText = ":"; btn_7.innerText = "?"; btn_8.innerText = "*"; 
        btn_9.innerText = "("; btn_0.innerText = ")"; btn_minus.innerText = "_"; btn_equal.innerText = "+";
        btn_bracket_left.innerText = "Х"; btn_bracket_right.innerText = "Ъ";
        btn_semicolumn.innerText = "Ж"; btn_quotes.innerText = "Э";
        btn_comma.innerText = "Б"; btn_period.innerText = "Ю";
        btn_slash.innerText = ",";
        shiftRUS = 1;
      }
      else
      {
        btn_quotes_angled.innerText = "ё";
        btn_1.innerText = "1"; btn_2.innerText = "2";
        btn_3.innerText = "3"; btn_4.innerText = "4"; btn_5.innerText = "5"; 
        btn_6.innerText = "6"; btn_7.innerText = "7"; btn_8.innerText = "8"; 
        btn_9.innerText = "9"; btn_0.innerText = "0"; btn_minus.innerText = "-"; btn_equal.innerText = "=";
        btn_bracket_left.innerText = "х"; btn_bracket_right.innerText = "ъ";
        btn_semicolumn.innerText = "ж"; btn_quotes.innerText = "э";
        btn_comma.innerText = "б"; btn_period.innerText = "ю";
        btn_slash.innerText = ".";
        shiftRUS = 0; 
      };
  });

  let altClickedRUS= false; 
  let ctrlClickedRUS = false;

  btn_alt.addEventListener('click', () => {
    altClickedRUS= true;
    if(altClickedRUS && ctrlClickedRUS) languageENG();
  });
    
  btn_ctrl.addEventListener('click', () => {
    ctrlClickedRUS = true;
    if (altClickedRUS && ctrlClickedRUS) languageENG ();
  });
  
  btn_alt2.addEventListener('click', () => {
      altClickedRUS= true;
      if(altClickedRUS && ctrlClickedRUS) languageENG();
  });
      
    btn_ctrl2.addEventListener('click', () => {
      ctrlClickedRUS = true;
      if (altClickedRUS && ctrlClickedRUS) languageENG ();
  });  
}

