/* Generated by the Nim Compiler v1.9.3 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;

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

function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}
var F = {procname: "module dom", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/dom.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module dom", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/dom.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function newSeq_33556878(len_33556880) {
  var result_33556881 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 603;
    result_33556881 = new Array(len_33556880); for (var i = 0 ; i < len_33556880 ; ++i) { result_33556881[i] = null; }  framePtr = F.prev;

  return result_33556881;

}

function example_654311427(e_654311428) {
  var F = {procname: "dom_examples_1.example", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_1.nim", line: 0};
  framePtr = F;
    F.line = 18;
    rawEcho([68,111,99,117,109,101,110,116,32,105,115,32,114,101,97,100,121]);
  framePtr = F.prev;

  
}
var F = {procname: "module dom_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_1.nim", line: 0};
framePtr = F;
F.line = 18;
document.addEventListener("DOMContentLoaded", example_654311427, false);
framePtr = F.prev;
var F = {procname: "module dom_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function example_687865859() {
  var F = {procname: "dom_examples_2.example", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_2.nim", line: 0};
  framePtr = F;
    F.line = 22;
    rawEcho([53,32,115,101,99,111,110,100,115,32,97,102,116,101,114,32,100,111,99,117,109,101,110,116,32,114,101,97,100,121]);
  framePtr = F.prev;

  
}

function domReady_687865860(e_687865861) {
  var F = {procname: "dom_examples_2.domReady", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_2.nim", line: 0};
  framePtr = F;
    F.line = 22;
    var _ = setTimeout(example_687865859, 5000);
  framePtr = F.prev;

  
}
var F = {procname: "module dom_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_2.nim", line: 0};
framePtr = F;
F.line = 22;
document.addEventListener("DOMContentLoaded", domReady_687865860, false);
framePtr = F.prev;
var F = {procname: "module dom_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function example_704643075(e_704643076) {
  var F = {procname: "dom_examples_3.example", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_3.nim", line: 0};
  framePtr = F;
    F.line = 30;
    rawEcho([68,111,99,117,109,101,110,116,32,105,115,32,117,110,108,111,97,100,101,100]);
  framePtr = F.prev;

  
}
var F = {procname: "module dom_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_3.nim", line: 0};
framePtr = F;
F.line = 30;
document.addEventListener("unload", example_704643075, false);
framePtr = F.prev;
var F = {procname: "module dom_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_3.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function example_721420291() {
  var F = {procname: "dom_examples_4.example", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_4.nim", line: 0};
  framePtr = F;
    F.line = 37;
    window.location.reload();
  framePtr = F.prev;

  
}
var F = {procname: "module dom_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_4.nim", line: 0};
framePtr = F;
F.line = 37;
var _ = setTimeout(example_721420291, 5000);
framePtr = F.prev;
var F = {procname: "module dom_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_examples_4.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module dom_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module dom_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/dom_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
