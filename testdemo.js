"object" != typeof JSON && (JSON = {}),
	function() {
		"use strict";
		var rx_one = /^[\],:{}\s]*$/,
			rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
			rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
			rx_four = /(?:^|:|,)(?:\s*\[)+/g,
			rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			gap, indent, meta, rep;

		function f(t) {
			return t < 10 ? "0" + t : t
		}

		function this_value() {
			return this.valueOf()
		}

		function quote(t) {
			return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function(t) {
				var e = meta[t];
				return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + t + '"'
		}

		function str(t, e) {
			var r, n, o, u, f, a = gap,
				i = e[t];
			switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) {
				case "string":
					return quote(i);
				case "number":
					return isFinite(i) ? String(i) : "null";
				case "boolean":
				case "null":
					return String(i);
				case "object":
					if (!i) return "null";
					if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) {
						for (u = i.length, r = 0; r < u; r += 1) f[r] = str(r, i) || "null";
						return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o
					}
					if (rep && "object" == typeof rep)
						for (u = rep.length, r = 0; r < u; r += 1) "string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ":" : ":") + o);
					else
						for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ":" : ":") + o);
					return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o
			}
		}
		"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
		}, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		}, JSON.stringify = function(t, e, r) {
			var n;
			if (indent = gap = "", "number" == typeof r)
				for (n = 0; n < r; n += 1) indent += " ";
			else "string" == typeof r && (indent = r);
			if ((rep = e) && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
			return str("", {
				"": t
			})
		}), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
			var j;

			function walk(t, e) {
				var r, n, o = t[e];
				if (o && "object" == typeof o)
					for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]);
				return reviver.call(t, e, o)
			}
			if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(t) {
					return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
				})), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
				"": j
			}, "") : j;
			throw new SyntaxError("JSON.parse")
		})
	}();


function textSet(lay, eff, group, gname) {
	textSet_arr = [];
	effobj = {
		"起始": "ADBE Text Percent Start",
		"结束": "ADBE Text Percent End",
		"偏移": "ADBE Text Percent offset",
		"位置3D": "ADBE Text Position 3D",
		"缩放3D": "ADBE Text Scale 3D",
		"倾斜": "ADBE Text Skew",
		"倾斜轴": "ADBE Text Skew Axis",
		"旋转X": "ADBE Text Rotation X",
		"旋转Y": "ADBE Text Rotation Y",
		"旋转": "ADBE Text Rotation",
		"不透明度": "ADBE Text Opacity",
		"填充不透明度": "ADBE Text Fill Opacity",
		"描边不透明度": "ADBE Text Stroke Opacity",
		"填充颜色": "ADBE Text Fill Color",
		"描边颜色": "ADBE Text Stroke Color",
		"填充色相": "ADBE Text Fill Hue",
		"描边色相": "ADBE Text Stroke Hue",
		"描边宽度": "ADBE Text Stroke Width"
	};
	if (lay && lay instanceof TextLayer) {
		if (!group) {
			if (lay.Text.Animators.numProperties > 0) {
				anim = lay.Text.Animators(1);
			} else {
				anim = lay.Text.Animators.addProperty("ADBE Text Animator");
			}
			if (gname) {
				anim.name = gname;
			}
		} else {
			anim = group;
		}
		prop = anim.property("ADBE Text Animator Properties").addProperty(effobj[eff]);
		textSet_arr.push(anim);
		textSet_arr.push(prop);
		return textSet_arr;
	}
}

function timeAction(func, sec, ci, xun) {
	id = 0;
	t = 1;
	xun = xun || true;
	if (func) {
		han = function() {
			func();
			if (t == ci) {
				app.cancelTask(id);
			}
			t += 1;
		};
		id = app.scheduleTask("han()", sec * 1000, xun);
	}
}

function itLoop(func, fan) {
	fan = fan || 0;
	timeAction_arr = [];
	if (fan == 1) {
		for (i = app.project.numItems; i > 0; i--) {
			if (func) {
				func(app.project.item(i), i);
			}
			timeAction_arr.push(app.project.item(i));
		}
	} else {
		for (i = 1; i <= app.project.numItems; i++) {
			if (func) {
				func(app.project.item(i), i);
			}
			timeAction_arr.push(app.project.item(i));
		}
	}
	return timeAction_arr;
}

function ailLoop(func, fan) {
	fan = fan || 0;
	ailLoop_arr = [];
	ai = app.project.activeItem;
	if (ai) {
		if (fan == 1) {
			for (i = ai.numLayers; i > 0; i--) {
				if (func) {
					func(ai.layer(i), ai, i);
				}
				ailLoop_arr.push(ai.layer(i));
			}
		} else {
			for (i = 1; i <= ai.numLayers; i++) {
				if (func) {
					func(ai.layer(i), ai, i);
				}
				ailLoop_arr.push(ai.layer(i));
			}
		}
	}
	return ailLoop_arr;
}

function aisLoop(func, fan) {
	fan = fan || 0;
	aisLoop_arr = [];
	ai = app.project.activeItem;
	if (ai) {
		ais = ai.selectedLayers;
		if (fan == 1) {
			for (i = ais.length - 1; i >= 0; i--) {
				if (func) {
					func(ais[i], ai, i);
				}
				aisLoop_arr.push(ais[i]);
			}
		} else {
			for (i = 0; i < ais.length; i++) {
				if (func) {
					func(ais[i], ai, i);
				}
				aisLoop_arr.push(ais[i]);
			}
		}
	}
	return aisLoop_arr;
}

function aispLoop(func, fan) {
	fan = fan || 0;
	aispLoop_arr = [];
	ai = app.project.activeItem;
	if (ai) {
		ais = ai.selectedLayers;
		for (i = 0; i < ais.length; i++) {
			aisp = ais[i].selectedProperties;
			for (j = 0; j < aisp.length; j++) {
				if (func) {
					func(aisp[j], ais[i], ai, j, i);
				}
				aispLoop_arr.push(aisp[j]);
			}
		}
	}
	return aispLoop_arr;
}

function arrLoop(arr, func, fan) {
	shuzu = [];
	fan = fan || 0;
	if (arr) {
		if (fan == false) {
			for (i = 0; i < arr.length; i++) {
				if (func) {
					func(arr[i], i);
				}
				shuzu.push(arr[i]);
			}
		} else {
			for (i = arr.length - 1; i >= 0; i--) {
				if (func) {
					func(arr[i], i);
				}
				shuzu.push(arr[i]);
			}
		}
	}
	return shuzu;
}

function timeLoop(func, type, fan) {
	timeLoop_arr = [];
	type = type || "frame";
	ai = app.project.activeItem;
	switch (type) {
		case "time":
			lei = ai.duration;
			break;
		case "frame":
			lei = ai.duration / ai.frameDuration;
			break;
	}
	if (ai) {
		if (fan == false) {
			for (i = 0; i < lei; i++) {
				if (func) {
					func(i);
				}
				timeLoop_arr.push(i);
			}
		} else {
			for (i = lei - 1; i >= 0; i--) {
				if (func) {
					func(i);
				}
				timeLoop_arr.push(i);
			}
		}
	}
	return timeLoop_arr;
}

function strToRgb(string, ae) {
	var t = (ae == true) ? 255 : 1;
	var sColor = string.toLowerCase();
	var sColorChange = [];
	for (i = 1; i < 7; i += 2) {
		sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)) / t);
	}
	return sColorChange;
}

function rgbToAe(rgb) {
	ae = [];
	for (i = 0; i < rgb.length; i++) {
		ae.push(rgb[i] / 255);
	}
	ae.push(1);
	return ae;
}

function goLoop(m, n, fan, han) {
	if (fan == false) {
		for (i = m; i < n; i++) {
			if (han) {
				han(i);
			}
		}
	} else {
		for (i = (n - 1); i > (m - 1); i--) {
			if (han) {
				han(i);
			}
		}
	}
}

function dataFile(path, moren) {
	var that = this;
	this.path = path;
	this.moren = moren;
	this.yusheObj = (this.moren) ? this.moren : {};
	this.yusheData = [];
	this.yusheArray = [];
	if (path) {
		this.yusheFile = File(this.path);
	} else {
		return false;
	}

	if (!this.yusheFile.exists) {
		this.yusheFile.encoding = "UTF-8";
		this.yusheFile.open("w");
		this.yusheFile.write(JSON.stringify(this.yusheObj));
		this.yusheFile.close();
	} else {
		this.yusheFile.encoding = "UTF-8";
		this.yusheFile.open("r");
		this.yusheObj = JSON.parse(this.yusheFile.read());
		this.yusheFile.close();
	}

	this.shuaxin = function() {
		this.yusheArray = [];
		for (k in this.yusheObj) {
			this.yusheArray.push(k);
		}
	}
	this.addItem = function(newName, val) {
		if (newName && val) {
			this.yusheObj[newName] = val;
			this.yusheFile.encoding = "UTF-8";
			this.yusheFile.open("w");
			this.yusheFile.write(JSON.stringify(this.yusheObj));
			this.yusheFile.close();
		}
	}
	this.renameItem = function(oldName, newName) {
		if (oldName && newName) {
			this.yusheObj[newName] = this.yusheObj[oldName];
			delete this.yusheObj[oldName];
			this.yusheFile.encoding = "UTF-8";
			this.yusheFile.open("w");
			this.yusheFile.write(JSON.stringify(this.yusheObj));
			this.yusheFile.close();
		}
	}
	this.resetItem = function(objName, newValue) {
		if (objName && newValue) {
			this.yusheObj[objName] = newValue;
			this.yusheFile.encoding = "UTF-8";
			this.yusheFile.open("w");
			this.yusheFile.write(JSON.stringify(this.yusheObj));
			this.yusheFile.close();
		}
	}
	this.deleteItem = function(objName) {
		if (objName) {
			delete this.yusheObj[objName];
			this.yusheFile.encoding = "UTF-8";
			this.yusheFile.open("w");
			this.yusheFile.write(JSON.stringify(this.yusheObj));
			this.yusheFile.close();
		}
	}

	this.shuaxin();
}

function createCon(lay, type, name, val, list) {
	type = type || 1;
	conarr = ["ADBE Slider Control", "ADBE Checkbox Control", "ADBE Point Control", "ADBE Point3D Control", "ADBE Color Control", "ADBE Angle Control", "ADBE Layer Control", "ADBE Dropdown Control"];
	con = lay.Effects.addProperty(conarr[type - 1]);
	if (lay) {
		if (list && type == 8) {
			temp = con.property(1).setPropertyParameters(list);
			con = temp.propertyGroup(1);
		}
		if (name) {
			con.name = name;
		}
		if (val) {
			con.property(1).setValue(val);
		}
		return con;
	}
}
