/* Generated by the Nim Compiler v1.9.3 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI134217749 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217751 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217741 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217743 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555834 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555178 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555186 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554450 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555185 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555182 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555183 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217745 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI134217745 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217745.node = NNI134217745;
var NNI33555183 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555183.node = NNI33555183;
NTI33555185.base = NTI33555182;
NTI33555186.base = NTI33555182;
var NNI33555182 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555185, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554450, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554449, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554449, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555186, name: "up", sons: null}]};
NTI33555182.node = NNI33555182;
var NNI33555178 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555178.node = NNI33555178;
NTI33555182.base = NTI33555178;
NTI33555183.base = NTI33555182;
NTI134217745.base = NTI33555183;
var NNI33555834 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554450, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554435, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554450, name: "Field2", sons: null}]};
NTI33555834.node = NNI33555834;
var NNI134217743 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217743.node = NNI134217743;
var NNI134217741 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217741.node = NNI134217741;
NTI134217741.base = NTI33555183;
NTI134217743.base = NTI134217741;
var NNI134217751 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217751.node = NNI134217751;
NTI134217751.base = NTI33555183;
var NNI134217749 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217749.node = NNI134217749;
NTI134217749.base = NTI33555183;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557215, src_33557216, ti_33557217) {
  var result_33557226 = null;

    switch (ti_33557217.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557206(ti_33557217))) {
      result_33557226 = src_33557216;
      }
      else {
        result_33557226 = [src_33557216[0], src_33557216[1]];
      }
      
      break;
    case 19:
            if (dest_33557215 === null || dest_33557215 === undefined) {
        dest_33557215 = {};
      }
      else {
        for (var key in dest_33557215) { delete dest_33557215[key]; }
      }
      for (var key in src_33557216) { dest_33557215[key] = src_33557216[key]; }
      result_33557226 = dest_33557215;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557217.base == null))) {
      result_33557226 = nimCopy(dest_33557215, src_33557216, ti_33557217.base);
      }
      else {
      if ((ti_33557217.kind == 17)) {
      result_33557226 = (dest_33557215 === null || dest_33557215 === undefined) ? {m_type: ti_33557217} : dest_33557215;
      }
      else {
        result_33557226 = (dest_33557215 === null || dest_33557215 === undefined) ? {} : dest_33557215;
      }
      }
      nimCopyAux(result_33557226, src_33557216, ti_33557217.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557216)) { 
        if(dest_33557215 === null || dest_33557215 === undefined || dest_33557215.length != src_33557216.length) {
          dest_33557215 = new src_33557216.constructor(src_33557216);
        } else {
          dest_33557215.set(src_33557216, 0);
        }
        result_33557226 = dest_33557215;
      } else {
        if (src_33557216 === null) {
          result_33557226 = null;
        }
        else {
          if (dest_33557215 === null || dest_33557215 === undefined || dest_33557215.length != src_33557216.length) {
            dest_33557215 = new Array(src_33557216.length);
          }
          result_33557226 = dest_33557215;
          for (var i = 0; i < src_33557216.length; ++i) {
            result_33557226[i] = nimCopy(result_33557226[i], src_33557216[i], ti_33557217.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557216 === null) {
        result_33557226 = null;
      }
      else {
        if (dest_33557215 === null || dest_33557215 === undefined || dest_33557215.length != src_33557216.length) {
          dest_33557215 = new Array(src_33557216.length);
        }
        result_33557226 = dest_33557215;
        for (var i = 0; i < src_33557216.length; ++i) {
          result_33557226[i] = nimCopy(result_33557226[i], src_33557216[i], ti_33557217.base);
        }
      }
    
      break;
    case 28:
            if (src_33557216 !== null) {
        result_33557226 = src_33557216.slice(0);
      }
    
      break;
    default: 
      result_33557226 = src_33557216;
      break;
    }

  return result_33557226;

}

function arrayConstr(len_33557258, value_33557259, typ_33557260) {
        var result = new Array(len_33557258);
    for (var i = 0; i < len_33557258; ++i) result[i] = nimCopy(null, value_33557259, typ_33557260);
    return result;
  

  
}

function mnewString(len_33556956) {
        return new Array(len_33556956);
  

  
}

function addInt(a_33557003, b_33557004) {
        var result = a_33557003 + b_33557004;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557268, a_33557269, b_33557270) {
  var result_33557271 = 0;

  BeforeRet: {
    if (((a_33557269 <= i_33557268) && (i_33557268 <= b_33557270))) {
    result_33557271 = i_33557268;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  };

  return result_33557271;

}

function chckIndx(i_33557263, a_33557264, b_33557265) {
  var result_33557266 = 0;

  BeforeRet: {
    if (((a_33557264 <= i_33557263) && (i_33557263 <= b_33557265))) {
    result_33557266 = i_33557263;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557263, a_33557264, b_33557265);
    }
    
  };

  return result_33557266;

}

function cstrToNimstr(c_33556857) {
      var ln = c_33556857.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556857.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556857.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556860) {
  var result_33556861 = null;

    var res_33556899 = newSeq_33556878((s_33556860).length);
    var i_33556900 = 0;
    var j_33556901 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556900 < (s_33556860).length)) break Label2;
          var c_33556902 = s_33556860[i_33556900];
          if ((c_33556902 < 128)) {
          res_33556899[j_33556901] = String.fromCharCode(c_33556902);
          i_33556900 += 1;
          }
          else {
            var helper_33556915 = newSeq_33556878(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556916 = c_33556902.toString(16);
                  if ((((code_33556916) == null ? 0 : (code_33556916).length) == 1)) {
                  helper_33556915.push("%0");;
                  }
                  else {
                  helper_33556915.push("%");;
                  }
                  
                  helper_33556915.push(code_33556916);;
                  i_33556900 += 1;
                  if ((((s_33556860).length <= i_33556900) || (s_33556860[i_33556900] < 128))) {
                  break Label3;
                  }
                  
                  c_33556902 = s_33556860[i_33556900];
                }
            };
++excHandler;
            try {
            res_33556899[j_33556901] = decodeURIComponent(helper_33556915.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556899[j_33556901] = helper_33556915.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556901 += 1;
        }
    };
    if (res_33556899.length < j_33556901) { for (var i = res_33556899.length ; i < j_33556901 ; ++i) res_33556899.push(null); }
               else { res_33556899.length = j_33556901; };
    result_33556861 = res_33556899.join("");

  return result_33556861;

}

function raiseException(e_33556648, ename_33556649) {
    e_33556648.name = ename_33556649;
    if ((excHandler == 0)) {
    unhandledException(e_33556648);
    }
    
    e_33556648.trace = nimCopy(null, rawWriteStackTrace_33556605(), NTI33554449);
    throw e_33556648;

  
}

function makeNimstrLit(c_33556854) {
      var result = [];
  for (var i = 0; i < c_33556854.length; ++i) {
    result[i] = c_33556854.charCodeAt(i);
  }
  return result;
  

  
}
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer_33557206(ti_33557207) {
  var result_33557208 = false;

  BeforeRet: {
    result_33557208 = !((ConstSet1[ti_33557207.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557208;

}

function nimCopyAux(dest_33557219, src_33557220, n_33557221) {
    switch (n_33557221.kind) {
    case 0:
      break;
    case 1:
            dest_33557219[n_33557221.offset] = nimCopy(dest_33557219[n_33557221.offset], src_33557220[n_33557221.offset], n_33557221.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557221.sons.length; i++) {
      nimCopyAux(dest_33557219, src_33557220, n_33557221.sons[i]);
    }
    
      break;
    case 3:
            dest_33557219[n_33557221.offset] = nimCopy(dest_33557219[n_33557221.offset], src_33557220[n_33557221.offset], n_33557221.typ);
      for (var i = 0; i < n_33557221.sons.length; ++i) {
        nimCopyAux(dest_33557219, src_33557220, n_33557221.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556392(x_33556393, x_33556393_Idx, y_33556394) {
          if (x_33556393[x_33556393_Idx] === null) { x_33556393[x_33556393_Idx] = []; }
      var off = x_33556393[x_33556393_Idx].length;
      x_33556393[x_33556393_Idx].length += y_33556394.length;
      for (var i = 0; i < y_33556394.length; ++i) {
        x_33556393[x_33556393_Idx][off+i] = y_33556394.charCodeAt(i);
      }
    

  
}

function raiseOverflow() {
    raiseException({message: [111,118,101,114,45,32,111,114,32,117,110,100,101,114,102,108,111,119], parent: null, m_type: NTI134217743, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33557001) {
        if (a_33557001 > 2147483647 || a_33557001 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: [118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101], parent: null, m_type: NTI134217751, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_33556783, a_33556784, b_33556785) {
    var Temporary1;

    if ((b_33556785 < a_33556784)) {
    Temporary1 = [105,110,100,101,120,32,111,117,116,32,111,102,32,98,111,117,110,100,115,44,32,116,104,101,32,99,111,110,116,97,105,110,101,114,32,105,115,32,101,109,112,116,121];
    }
    else {
    Temporary1 = ([105,110,100,101,120,32] || []).concat(HEX24_369098760(i_33556783) || [],[32,110,111,116,32,105,110,32] || [],HEX24_369098760(a_33556784) || [],[32,46,46,32] || [],HEX24_369098760(b_33556785) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554449), parent: null, m_type: NTI134217749, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars_301990072(result_301990074, result_301990074_Idx, x_301990075, start_301990076, n_301990077) {
    var Temporary1;

  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 43;
    var old_301990078 = (result_301990074[result_301990074_Idx]).length;
    F.line = 44;
    if (result_301990074[result_301990074_Idx].length < (Temporary1 = chckRange(addInt(old_301990078, n_301990077), 0, 2147483647), Temporary1)) { for (var i = result_301990074[result_301990074_Idx].length; i < Temporary1; ++i) result_301990074[result_301990074_Idx].push(0); }
         else {result_301990074[result_301990074_Idx].length = Temporary1; };
    Label2: {
      F.line = 46;
      var iHEX60gensym4_301990092 = 0;
      F.line = 119;
      var i_654311460 = 0;
      Label3: {
        F.line = 120;
          Label4: while (true) {
          if (!(i_654311460 < n_301990077)) break Label4;
            F.line = 49;
            iHEX60gensym4_301990092 = i_654311460;
            F.line = 49;
            result_301990074[result_301990074_Idx][chckIndx(addInt(old_301990078, iHEX60gensym4_301990092), 0, (result_301990074[result_301990074_Idx]).length - 1)] = x_301990075.charCodeAt(chckIndx(addInt(start_301990076, iHEX60gensym4_301990092), 0, (x_301990075).length - 1));
            F.line = 122;
            i_654311460 = addInt(i_654311460, 1);
          }
      };
    };
  framePtr = F.prev;

  
}

function addChars_301990068(result_301990070, result_301990070_Idx, x_301990071) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 55;
    addChars_301990072(result_301990070, result_301990070_Idx, x_301990071, 0, ((x_301990071) == null ? 0 : (x_301990071).length));
  framePtr = F.prev;

  
}

function addInt_301990093(result_301990094, result_301990094_Idx, x_301990095) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 111;
    addChars_301990068(result_301990094, result_301990094_Idx, ((x_301990095) + ""));
  framePtr = F.prev;

  
}

function addInt_301990111(result_301990112, result_301990112_Idx, x_301990113) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 115;
    addInt_301990093(result_301990112, result_301990112_Idx, BigInt(x_301990113));
  framePtr = F.prev;

  
}

function HEX24_369098760(x_369098761) {
  var result_369098762 = [[]];

  var F = {procname: "dollars.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/dollars.nim", line: 0};
  framePtr = F;
    F.line = 18;
    addInt_301990111(result_369098762, 0, x_369098761);
  framePtr = F.prev;

  return result_369098762[0];

}

function auxWriteStackTrace_33556518(f_33556519) {
  var result_33556520 = [[]];

    var it_33556528 = f_33556519;
    var i_33556529 = 0;
    var total_33556530 = 0;
    var tempFrames_33556531 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555834);
    Label1: {
        Label2: while (true) {
        if (!(!((it_33556528 == null)) && (i_33556529 <= 63))) break Label2;
          tempFrames_33556531[i_33556529].Field0 = it_33556528.procname;
          tempFrames_33556531[i_33556529].Field1 = it_33556528.line;
          tempFrames_33556531[i_33556529].Field2 = it_33556528.filename;
          i_33556529 += 1;
          total_33556530 += 1;
          it_33556528 = it_33556528.prev;
        }
    };
    Label3: {
        Label4: while (true) {
        if (!!((it_33556528 == null))) break Label4;
          total_33556530 += 1;
          it_33556528 = it_33556528.prev;
        }
    };
    result_33556520[0] = nimCopy(null, [], NTI33554449);
    if (!((total_33556530 == i_33556529))) {
    result_33556520[0].push.apply(result_33556520[0], [40]);;
    result_33556520[0].push.apply(result_33556520[0], HEX24_369098760((total_33556530 - i_33556529)));;
    result_33556520[0].push.apply(result_33556520[0], [32,99,97,108,108,115,32,111,109,105,116,116,101,100,41,32,46,46,46,10]);;
    }
    
    Label5: {
      var j_33556564 = 0;
      var colontmp__654311452 = 0;
      colontmp__654311452 = (i_33556529 - 1);
      var res_654311454 = colontmp__654311452;
      Label6: {
          Label7: while (true) {
          if (!(0 <= res_654311454)) break Label7;
            j_33556564 = res_654311454;
            result_33556520[0].push.apply(result_33556520[0], cstrToNimstr(tempFrames_33556531[j_33556564].Field2));;
            if ((0 < tempFrames_33556531[j_33556564].Field1)) {
            result_33556520[0].push.apply(result_33556520[0], [40]);;
            addInt_301990111(result_33556520, 0, tempFrames_33556531[j_33556564].Field1);
            if (false) {
            result_33556520[0].push.apply(result_33556520[0], [44,32]);;
            addInt_301990111(result_33556520, 0, 0);
            }
            
            result_33556520[0].push.apply(result_33556520[0], [41]);;
            }
            
            result_33556520[0].push.apply(result_33556520[0], [32,97,116,32]);;
            add_33556392(result_33556520, 0, tempFrames_33556531[j_33556564].Field0);
            result_33556520[0].push.apply(result_33556520[0], [10]);;
            res_654311454 -= 1;
          }
      };
    };

  return result_33556520[0];

}

function rawWriteStackTrace_33556605() {
  var result_33556606 = [];

    if (!((framePtr == null))) {
    result_33556606 = nimCopy(null, ([84,114,97,99,101,98,97,99,107,32,40,109,111,115,116,32,114,101,99,101,110,116,32,99,97,108,108,32,108,97,115,116,41,10] || []).concat(auxWriteStackTrace_33556518(framePtr) || []), NTI33554449);
    }
    else {
      result_33556606 = nimCopy(null, [78,111,32,115,116,97,99,107,32,116,114,97,99,101,98,97,99,107,32,97,118,97,105,108,97,98,108,101,10], NTI33554449);
    }
    

  return result_33556606;

}

function newSeq_33556878(len_33556880) {
  var result_33556881 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 603;
    result_33556881 = new Array(len_33556880); for (var i = 0 ; i < len_33556880 ; ++i) { result_33556881[i] = null; }  framePtr = F.prev;

  return result_33556881;

}

function unhandledException(e_33556644) {
    var buf_33556645 = [[]];
    if (!(((e_33556644.message).length == 0))) {
    buf_33556645[0].push.apply(buf_33556645[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110,58,32]);;
    buf_33556645[0].push.apply(buf_33556645[0], e_33556644.message);;
    }
    else {
    buf_33556645[0].push.apply(buf_33556645[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110]);;
    }
    
    buf_33556645[0].push.apply(buf_33556645[0], [32,91]);;
    add_33556392(buf_33556645, 0, e_33556644.name);
    buf_33556645[0].push.apply(buf_33556645[0], [93,10]);;
    buf_33556645[0].push.apply(buf_33556645[0], rawWriteStackTrace_33556605());;
    var cbuf_33556646 = toJSStr(buf_33556645[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556646);
  }
  else {
    throw cbuf_33556646;
  }
  

  
}

function sysFatal_268435498(message_268435501) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    raiseException({message: nimCopy(null, message_268435501, NTI33554449), m_type: NTI134217745, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_268435496(msg_268435497) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 36;
    sysFatal_268435498(msg_268435497);
  framePtr = F.prev;

  
}

function failedAssertImpl_268435532(msg_268435533) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 41;
    raiseAssert_268435496(msg_268435533);
  framePtr = F.prev;

  
}
var F = {procname: "module jsconsole_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim", line: 0};
framePtr = F;
F.line = 101;
console.assert(true, "[jsAssert] /home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim(9, 10)","42 == 42");
F.line = 101;
console.assert(false, "[jsAssert] /home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim(10, 10)","42 != 42");
F.line = 101;
console.assert(false, "[jsAssert] /home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim(11, 10)","\'`\' == \'\\n\' and \'\\t\' == \'\\x00\'");
if (false) {
F.line = 101;
failedAssertImpl_268435532(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim(12, 3) `42 == 42` "));
}

framePtr = F.prev;
var F = {procname: "module jsconsole_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole_group1_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_group1_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole_group1_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_group1_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
