// Custom App JS
let testvar = 444;
 //$('#ui-bar').remove();
// $(document.head).find('#style-ui-bar').remove();

//this sets the back button to off
//Config.history.maxStates = 1;
//this removes newline or line breaks
//Config.debug = false; // forcibly enable test mode
Config.passages.nobr = true;
State.variables.posY = 3;
State.variables.posX = 6;
State.variables.offY = 0;
State.variables.offX = 0;

$(document).on(":passageend", function (ev) {
    if ($("canvas#floorMap").length) {
        var canvas = document.querySelector("#floorMap");
        var context = canvas.getContext("2d");
        var mapArray = [
			
			[ 0, 0, 0, 0, 0, 0, 0, 0],
			[ 0, 0, 0, 0, 0, 0, 0, 0],
			[ 0, 0, 0, 0, 0, 0, 0, 0],
			[ 0, 0, 0, 0, 0, 0, 0, 0],
			[ 0, 0, 0, 0, 0, 0, 0, 0],
			[ 0, 0, 0, 0, 0, 0, 0, 0],
			[ 0, 0, 0, 0, 0, 0, 0, 0],
			[ 0, 0, 0, 0, 0, 0, 0, 0]		
        ];
	
        var blocksize = 50, gap = 1, size = blocksize + gap;
        context.fillStyle = '#222222';
        context.fillRect(0, 0, mapArray[0].length * size + (gap * 2), mapArray.length * size + (gap * 2));
	
        for (var i = 0; i < mapArray.length; i++) {
            for (var j = 0; j < mapArray[i].length; j++) {
                if ((j === 0 || j === 1 || j===2) && (i === 0 || i === 1)){
					context.fillStyle = '#8C8469';//shoreline
                    context.fillRect(j * size + gap + 1, i * size + gap + 1, blocksize, blocksize);

				} else if ((j === 3 || j === 4 || j===5) && (i === 0 || i === 1)){
					context.fillStyle = '#83989F';//arts district
                    context.fillRect(j * size + gap + 1, i * size + gap + 1, blocksize, blocksize);
                
				} else if ((j === 6 || j === 7 || j===8) && (i === 0 || i === 1)){
					context.fillStyle = '#48798B';//world trade center
                    context.fillRect(j * size + gap + 1, i * size + gap + 1, blocksize, blocksize);

                } else if ((j === 0 || j === 1 || j===2) && (i === 2 || i === 3)){
					context.fillStyle = '#6A8C4D';//farming community
                    context.fillRect(j * size + gap + 1, i * size + gap + 1, blocksize, blocksize);

                } else if ((j === 0 || j === 1||j===2 ) && (i === 4 || i === 5)){
					context.fillStyle = '#54594F';//virtual playground
                    context.fillRect(j * size + gap + 1, i * size + gap + 1, blocksize, blocksize);

				} else if ((j === 3 || j === 4 || j===5) && (i === 4 || i === 5)){
					context.fillStyle = '#83989F';//sports complex
                    context.fillRect(j * size + gap + 1, i * size + gap + 1, blocksize, blocksize);

				} else if ((j === 6 || j === 7 || j===8) && (i === 2 || i === 3)){
					context.fillStyle = '#2E4E59';//hells kitchen
                    context.fillRect(j * size + gap + 1, i * size + gap + 1, blocksize, blocksize);

				} else if ((j === 6 || j === 7 || j===8) && (i === 4 || i === 5 )){
					context.fillStyle = '#B2CED9';//manufacturing
                    context.fillRect(j * size + gap + 1, i * size + gap + 1, blocksize, blocksize);
				
                 } else {
                    switch (mapArray[i][j]) {
                        case 0:
                            context.fillStyle = 'grey';
                            context.fillRect(j * size + gap + 1, i * size + gap + 1, blocksize, blocksize);
                            break;
                    }
                }
            }
        }
    }
});

//end the game at sunset
//sunset is 240 turns()
// State.variables.begin = false;
// if(State.variables.begin === true) {
// 	Config.navigation.override = function (dest) {
// 		var myTurns = turns();
// 		if (myTurns > 240) {
// 			return "Sunset";
// 		}
// 	};
// }

//countdown to security guard arriving at player location in Pharaohs Tombs
(function () {
	setInterval(function () {
		var sv = State.variables;
		if (sv.timeLimit < sv.seconds) {
			--sv.seconds;
			$("#time").text(sv.seconds);
		}
	}, 1000);
})();


$(document).on(':passagestart', function (ev) {
	if (!ev.passage.tags.includes('noreturn')) {
		State.variables.return = ev.passage.title;
	}
});
//This is the metro map

$(document).on(":passageend", function (ev) {
    if ($("canvas#test").length) {
        var canvas = document.querySelector("#test");
        var ctx = canvas.getContext("2d");
		ctx.fillStyle = '#83989F';
		ctx.strokeStyle = '#83989F';
		ctx.lineWidth = 3;

		const drawHexagon= (x, y, r) => {
			ctx.beginPath();
				for (var i = 0; i < 6; i++) {
					const a = 2 * Math.PI / 6;
					ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
				}

			ctx.closePath();
			ctx.stroke();
		};
		 drawHexagon(102,85,58);//Sanguine Shore
		 drawHexagon(65,190,63);//Farmers Alliance
		 drawHexagon(205,110,58);//arts district
		 drawHexagon(302,135,52);//metro port
		 drawHexagon(276,232,60);//Market District
		 drawHexagon(206,330,65);//Manufacturing Yard
		 drawHexagon(101,297,60);//Virtual Playground

		 ctx.font = "12px sans-serif";
		 ctx.textAlign = "center";
		ctx.fillText("Sanguine Shore", 102,85);
		ctx.fillText("Farmers Alliance", 65,190);
		ctx.fillText("Arts District", 205,110);
		ctx.fillText("MetroPort", 302,135);
		ctx.fillText("Market District", 276,232);
		ctx.fillText("Manufacturing Yards", 206,330);
		ctx.fillText("Virtual Playground", 101,297);

		//star
		ctx.beginPath();
         ctx.moveTo(250, 190);//start
         ctx.lineTo(255, 200);//a
    	 ctx.lineTo(266, 200);//b
         ctx.lineTo(257, 208);//c
	     ctx.lineTo(261, 219);//d
	 	 ctx.lineTo(250, 213);//e
         ctx.lineTo(239, 219);//f
         ctx.lineTo(243, 208);//g
		 ctx.lineTo(235, 200);//h
		 ctx.lineTo(245, 200);//i
		 ctx.lineTo(250, 190);//j
         ctx.fill();
    }
});

// random passcode

//This creates a random door code for the Longhouse
const random = Math.floor(Math.random() * 9000 + 1000);
State.variables.decode = random;

var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
State.variables.curDateTime = dateTime;


setup.VarUtils = { /* Variable Utility Functions */
	

	/* isArray: Returns if a value is an array. */
	isArray: function (Value) {
		return Array.isArray(Value);
	},

	/* isBoolean: Returns if a value is a boolean. */
	isBoolean: function (Value) {
		return typeof Value === "boolean";
	},

	/* isDate: Returns if value is a date object. */
	isDate: function (Value) {
		return setup.VarUtils.isObject(Value) && Value instanceof Date;
	},

	/* isFunction: Returns if a value is a function. */
	isFunction: function (Value) {
		return typeof Value === "function";
	},

	/* isGenericObject: Returns if a value is a generic object. */
	isGenericObject: function (Value) {
		return setup.VarUtils.isObject(Value) && Value.constructor === Object;
	},

	/* isInteger: Returns if a value is an integer. */
	isInteger: function (Value) {
		return Number.isInteger(Value);
	},

	/* isMap: Returns if a value is a map. */
	isMap: function (Value) {
		return setup.VarUtils.isObject(Value) && Value instanceof Map;
	},

	/* isNull: Returns if a value is null. */
	isNull: function (Value) {
		return Value === null;
	},

	/* isNumber: Returns if a value is a number. */
	isNumber: function (Value) {
		return (typeof Value === "number") && Number.isFinite(Value) && (!Number.isNaN(Value));
	},

	/* isObject: Returns if a value is an object (not including "null"). */
	isObject: function (Value) {
		return !!Value && typeof Value === "object";
	},

	/* isProperty: Returns if Prop is a property of the object Obj. */
	isProperty: function (Obj, Prop) {
		var result = false;
		if (setup.VarUtils.isObject(Obj)) {
			result = Obj ? hasOwnProperty.call(Obj, Prop) : false;
			if (!result) {				 /* if not pass... */
				try {
					if (Obj[Prop] === undefined) {
						result = false;  /* double-check fail */
					} else {
						result = true;   /* double-check pass */
					}
				} catch(error) {
					result = false;		 /* error fail */
				}
			}
		}
		return result;
	},

	/* Returns if a value is a regexp. */
	isRegExp: function (Value) {
		return setup.VarUtils.isObject(Value) && Value.constructor === RegExp;
	},

	/* isSet: Returns if a value is a set. */
	isSet: function (Value) {
		return setup.VarUtils.isObject(Value) && Value instanceof Set;
	},

	/* isString: Returns if a value is a string. */
	isString: function (Value) {
		return (typeof Value === "string") || (Value instanceof String);
	},

	/* isUndefined: Returns if a value is undefined. */
	isUndefined: function (Value) {
		return typeof Value === "undefined";
	},

	/* spread: Returns a Map, Set, or String converted to an array.
			If the second parameter is an Array, Map, Set, or String, then
			the two objects are spread and returned as a single array.
			If a function is passed as the second parameter, this calls the
			function with the spread array as parameters and returns that
			function's value. */
	spread: function (Value, Funct) {
		var arr = [];
		if (setup.VarUtils.isArray(Value)) {
			arr = clone(Value);
		} else if (setup.VarUtils.isMap(Value)) {
			Value.forEach(function(val, key, map) {
				arr.push([key, val]);
			});
		} else if (setup.VarUtils.isSet(Value)) {
			Value.forEach(function(val, key, set) {
				arr.push(val);
			});
		} else if (setup.VarUtils.isString(Value)) {
			arr = Value.split('');
		}
		if (setup.VarUtils.isFunction(Funct)) {
			return Funct.apply(null, arr);
		} else if (setup.VarUtils.isObject(Funct)) {
			arr = arr.concat(setup.VarUtils.spread(Funct));
		}
		return arr;
	},

	/* arraysAreEqual: Check two arrays to see if they're identical.
			IgnoreObjectPairs is for internal use to prevent infinite loops
			of objects. */
	arraysAreEqual: function (Array1, Array2, IgnoreObjectPairs) {
		if (setup.VarUtils.isArray(Array1) && setup.VarUtils.isArray(Array2)) {
			var i = 0;
			if (setup.VarUtils.isUndefined(IgnoreObjectPairs)) {
				IgnoreObjectPairs = [];
			}
			if (IgnoreObjectPairs.length > 0) {
				for (i = 0; i < IgnoreObjectPairs.length; i++) {
					if (((IgnoreObjectPairs[i][0] === Array1) && (IgnoreObjectPairs[i][1] === Array2)) ||
						((IgnoreObjectPairs[i][0] === Array2) && (IgnoreObjectPairs[i][1] === Array1))) {
							return true;  /* Ignores object pairs that have already been checked to prevent infinite loops. */
					}
				}
			}
			IgnoreObjectPairs.push([Array1, Array2]);
			if (Array1.length !== Array2.length) {
				return false;  /* Arrays are not the same length. */
			}
			if (Array1.length > 0) {
				for (i = 0; i < Array1.length; i++) {
					if (!setup.VarUtils.valuesAreEqual(Array1[i], Array2[i], IgnoreObjectPairs)) {  /* OOO function call. */
						return false;  /* Values or types do not match. */
					}
				}
			}
			return true;  /* All values match. */
		}
		return false;  /* Both are not arrays. */
	},

	/* mapsAreEqual: Returns if two maps contain the same values in the
			same order.
			IgnoreObjectPairs is for internal use to prevent infinite loops
			of objects. */
	mapsAreEqual: function (Map1, Map2, IgnoreObjectPairs) {
		if (setup.VarUtils.isMap(Map1) && setup.VarUtils.isMap(Map2)) {
			if (Map1.size === Map2.size) {
				if (setup.VarUtils.isUndefined(IgnoreObjectPairs)) {
					IgnoreObjectPairs = [];
				}
				if (IgnoreObjectPairs.length > 0) {
					for (var i = 0; i < IgnoreObjectPairs.length; i++) {
						if (((IgnoreObjectPairs[i][0] === Map1) && (IgnoreObjectPairs[i][1] === Map2)) ||
							((IgnoreObjectPairs[i][0] === Map2) && (IgnoreObjectPairs[i][1] === Map1))) {
								return true;  /* Ignores object pairs that have already been checked to prevent infinite loops. */
						}
					}
				}
				IgnoreObjectPairs.push([Map1, Map2]);
				var a = setup.VarUtils.spread(Map1), b = setup.VarUtils.spread(Map2);
				return setup.VarUtils.arraysAreEqual(a, b, IgnoreObjectPairs);  /* Compares maps. */
			}
		}
		return false;  /* Both are either not maps or are maps of different sizes. */
	},

	/* objectsAreEqual: Check two objects to see if they're identical.
			IgnoreObjectPairs is for internal use to prevent infinite loops
			of objects. */
	objectsAreEqual: function (Obj1, Obj2, IgnoreObjectPairs) {
		if (setup.VarUtils.isObject(Obj1) && setup.VarUtils.isObject(Obj2)) {
			var i = 0;
			if (setup.VarUtils.isUndefined(IgnoreObjectPairs)) {
				IgnoreObjectPairs = [];
			}
			if (IgnoreObjectPairs.length > 0) {
				for (i = 0; i < IgnoreObjectPairs.length; i++) {
					if (((IgnoreObjectPairs[i][0] === Obj1) && (IgnoreObjectPairs[i][1] === Obj2)) ||
						((IgnoreObjectPairs[i][0] === Obj2) && (IgnoreObjectPairs[i][1] === Obj1))) {
							return true;  /* Ignores object pairs that have already been checked to prevent infinite loops. */
					}
				}
			}
			IgnoreObjectPairs.push([Obj1, Obj2]);
			if (setup.VarUtils.isGenericObject(Obj1) && setup.VarUtils.isGenericObject(Obj2)) {
				var Keys1 = Object.keys(Obj1).sort(), Keys2 = Object.keys(Obj2).sort();
				if (!setup.VarUtils.arraysAreEqual(Keys1, Keys2)) {
					return false;  /* Objects have a different number of keys or have different keys. */
				}
				if (Keys1.length > 0) {
					var Key;
					for (i = 0; i < Keys1.length; i++) {
						Key = Keys1[i];
						if (!setup.VarUtils.valuesAreEqual(Obj1[Key], Obj2[Key], IgnoreObjectPairs)) {  /* OOO function call. */
							return false;  /* Values do not match. */
						}
					}
				}
				return true;  /* All values match. */
			} else {
				return setup.VarUtils.valuesAreEqual(Obj1, Obj2, IgnoreObjectPairs);  /* Return whether objects match. OOO function call. */
			}
		}
		return false;  /* Both are not objects. */
	},

	/* setsAreEqual: Returns if two sets contain the same values in the
			same order.
			IgnoreObjectPairs is for internal use to prevent infinite loops
			of objects. */
	setsAreEqual: function (Set1, Set2, IgnoreObjectPairs) {
		if (setup.VarUtils.isSet(Set1) && setup.VarUtils.isSet(Set2)) {
			if (Set1.size === Set2.size) {
				if (setup.VarUtils.isUndefined(IgnoreObjectPairs)) {
					IgnoreObjectPairs = [];
				}
				if (IgnoreObjectPairs.length > 0) {
					for (var i = 0; i < IgnoreObjectPairs.length; i++) {
						if (((IgnoreObjectPairs[i][0] === Set1) && (IgnoreObjectPairs[i][1] === Set2)) ||
							((IgnoreObjectPairs[i][0] === Set2) && (IgnoreObjectPairs[i][1] === Set1))) {
								return true;  /* Ignores object pairs that have already been checked to prevent infinite loops. */
						}
					}
				}
				IgnoreObjectPairs.push([Set1, Set2]);
				var a = setup.VarUtils.spread(Set1), b = setup.VarUtils.spread(Set2);
				return setup.VarUtils.arraysAreEqual(a, b, IgnoreObjectPairs);  /* Compares sets. */
			}
		}
		return false;  /* Both are either not sets or are sets of different sizes. */
	},

	/* setsMatch: Returns if two sets contain matches for all values in
			any order. */
	setsMatch: function (Set1, Set2) {
		if (setup.VarUtils.isSet(Set1) && setup.VarUtils.isSet(Set2)) {
			if (Set1.size === Set2.size) {
				if (Set1.size > 0) {  /* Compare sets. */
					var setIterator = Set1.values();
					var result = setIterator.next();
					while (!result.done) {
						if (!Set2.has(result.value)) return false;  /* Sets do not match. */
						result = setIterator.next();
					}
				}
				return true;  /* Sets match. */
			}
		}
	},

	/* valuesAreEqual: Check two variables to see if they're identical.
			This function does not support comparing symbols, functions, or
			custom types.
			IgnoreObjectPairs is for internal use to prevent infinite loops
			of objects. */
	valuesAreEqual: function (Var1, Var2, IgnoreObjectPairs) {
		if (typeof Var1 === typeof Var2) {
			switch (typeof Var1) {
				/* String */
				case "string":
				/* Number */
				case "number":  // eslint-disable-line no-fallthrough
				/* Boolean */
				case "boolean":  // eslint-disable-line no-fallthrough
					return Var1 === Var2;  /* Returns whether variables are equal or not. */
				/* Undefined */
				case "undefined":
					return true;  /* Variables are both undefined. */
				/* Object */
				case "object":
					/* Array Object */
					if (setup.VarUtils.isArray(Var1) && setup.VarUtils.isArray(Var2)) {
						return setup.VarUtils.arraysAreEqual(Var1, Var2, IgnoreObjectPairs);  /* Return whether arrays are equal. */
					/* Generic Object */
					} else if (setup.VarUtils.isGenericObject(Var1) && setup.VarUtils.isGenericObject(Var2)) {
						return setup.VarUtils.objectsAreEqual(Var1, Var2, IgnoreObjectPairs);  /* Return whether generic objects are equal. */
					/* Date Object */
					} else if (setup.VarUtils.isDate(Var1) && setup.VarUtils.isDate(Var2)) {
						return (Var1 - Var2) == 0;  /* Returns whether dates are equal. */
					/* Map Object */
					} else if (setup.VarUtils.isMap(Var1) && setup.VarUtils.isMap(Var2)) {
						return setup.VarUtils.mapsAreEqual(Var1, Var2, IgnoreObjectPairs);  /* Return whether maps are equal. */
					/* Set Object */
					} else if (setup.VarUtils.isSet(Var1) && setup.VarUtils.isSet(Var2)) {
						return setup.VarUtils.setsAreEqual(Var1, Var2, IgnoreObjectPairs);  /* Return whether sets are equal. */
					/* Null Object */
					} else if ((Var1 === null) && (Var2 === null)) {
						return true;  /* Objects are both null. */
					}
					return false;  /* Objects either don't match or are of an unsupported type. */
				default:
					return false;  /* Unsupported type. */
			}
		} else {
			return false;  /* Variables are not of the same type. */
		}
	},

	/* indexOfObject: Returns the index of the first matching Obj object
			in the Arr array or 0 if not found.
			Starts at index Idx (or 0 if Idx not included).
			If Idx is negative, then it starts at that offset from the end of
			the array (to a minimum of 0).
			Returns undefined if Arr is not an array. */
	indexOfObject: function (Arr, Obj, Idx) {
		if (!setup.VarUtils.isArray(Arr)) {
			return undefined;  // Not an array.
		}
		if (Arr.length === 0) {
			// Empty array.
			return 0;  // No match.
		}
		var i;
		if (setup.VarUtils.isUndefined(Idx) || !setup.VarUtils.isInteger(Idx)) {
			Idx = 0;
		}
		if (Idx < 0) {
			Idx = Arr.length + Idx;
			if (Idx < 0) {
				Idx = 0;
			}
		}
		for (i = Idx; i < Arr.length; i++) {
			if (setup.VarUtils.valuesAreEqual(Obj, Arr[i])) {
				return i;  // Found a match.
			}
		}
		return 0;  // No match.
	}
};

Array.prototype.indexOfObject = function(obj, fromIndex) {
	return setup.VarUtils.indexOfObject(this, obj, fromIndex);
};

