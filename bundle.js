!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";function o(n){var e,t=n.url.split("/")[6];return`\n    <div class="pokemonCard" id="${t}">\n      <img src="${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${t}.gif`}">\n      <h3>${e=n.name,e[0].toUpperCase()+e.slice(1).toLowerCase()}</h3>\n    </div>\n  `}t.r(e);var i=document.getElementById("main"),r=0;function u(n){var e;(e=n,fetch("https://pokeapi.co/api/v2/pokemon/"+e).then((function(n){return n.json()}))).then((function(n){i.innerHTML=function(n){return`\n    <h1>${n.name} is ${n.height} tall</h1>\n    <button id="back">Back</button>\n    <div>\n      <img src="${n.sprites.other.dream_world.front_default}">\n    </div>\n    <div>\n      <img src="${n.sprites.front_default}">\n    </div>\n  `}(n),document.getElementById("back").addEventListener("click",(function(){c(r,20)}))}))}function c(n,e){i.innerHTML="\n    <h3>Loading pokemons...</h3>\n  ",function(n,e){return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${e}&offset=${n*e}`).then((function(n){return n.json()})).then((function(n){return n.results}))}(n,e).then((function(n){i.innerHTML=function(n,e){return`\n    <h1>My Pokemons</h1>\n    ${0==e?"":'<button id="previous">Previous</button>'}         \n    <button id="next">Next</button>\n    <div id="pokemonList">\n      ${n.map(o).join("")}\n    </div>\n  `}(n,r);var t=document.getElementById("previous");t&&t.addEventListener("click",(function(){c(--r,e)})),document.getElementById("next").addEventListener("click",(function(){c(++r,e)})),document.getElementById("pokemonList").childNodes.forEach((function(n){n.addEventListener("click",(function(n){u(n.currentTarget.id)}))}))}))}i.innerHTML='\n    <h1>My Pokedex</h1>\n    <button id="view">View pokemons</button>\n  ',document.getElementById("view").addEventListener("click",(function(){c(r,20)}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImNyZWF0ZVBva2Vtb25DYXJkTWFya3VwIiwicG9rZW1vbiIsInN0ciIsInBva2Vtb25JZCIsInVybCIsInNwbGl0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwibWFpbk5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3VycmVudFBhZ2UiLCJyZW5kZXJQb2tlbW9uIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiaW5uZXJIVE1MIiwiaGVpZ2h0Iiwic3ByaXRlcyIsIm90aGVyIiwiZHJlYW1fd29ybGQiLCJmcm9udF9kZWZhdWx0IiwiY3JlYXRlUG9rZW1vbk1hcmt1cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJQb2tlbW9ucyIsInBhZ2UiLCJwZXJQYWdlIiwiZGF0YSIsInJlc3VsdHMiLCJmZXRjaFBva2Vtb25zIiwicG9rZW1vbnMiLCJtYXAiLCJqb2luIiwiY3JlYXRlUG9rZW1vbnNNYXJrdXAiLCJwcmV2aW91c0J1dHRvbk5vZGUiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0Il0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLCtCQ3JFOUMsU0FBU0MsRUFBd0JDLEdBQ3RDLElDZDZCQyxFRGN6QkMsRUFBeUJGLEVBQVFHLElDVDFCQyxNQUFNLEtBQUssR0RZdEIsTUFBTyxzQ0FDMEJGLHdCQ1QxQiw2SERNb0NBLHdCQ2ZkRCxFRG9CSkQsRUFBUTFCLEtDbkIxQjJCLEVBQUksR0FBR0ksY0FBZ0JKLEVBQUlLLE1BQU0sR0FBR0MscUMsT0NZN0MsSUFBSUMsRUFBV0MsU0FBU0MsZUFBZSxRQUVuQ0MsRUFBYyxFQUdsQixTQUFTQyxFQUFjVixHQ2xCaEIsSUFBc0JXLEtEbUJkWCxFQ2xCTlksTUFBTSxxQ0FBcUNELEdBQ2pERSxNQUFLLFNBQVVDLEdBQ2QsT0FBT0EsRUFBSUMsV0RpQlpGLE1BQUssU0FBVWYsR0FDZFEsRUFBU1UsVUZxQk4sU0FBNkJsQixHQUNsQyxNQUFPLGFBQ0NBLEVBQVExQixXQUFXMEIsRUFBUW1CLHFGQUduQm5CLEVBQVFvQixRQUFRQyxNQUFNQyxZQUFZQywyREFHbEN2QixFQUFRb0IsUUFBUUcsa0NFN0JUQyxDQUFvQnhCLEdBRXBCUyxTQUFTQyxlQUFlLFFBQzlCZSxpQkFBaUIsU0FBUyxXQUN2Q0MsRUFBZWYsRUFUUCxVQWNkLFNBQVNlLEVBQWVDLEVBQU1DLEdBQzVCcEIsRUFBU1UsVUZ5QkYseUNHakRGLFNBQXVCUyxFQUFNQyxHQUNsQyxPQUFPZCxNQUFNLDJDQUEyQ2MsWUFBa0JELEVBQU9DLEtBQ2hGYixNQUFLLFNBQVVDLEdBQ2QsT0FBT0EsRUFBSUMsVUFFWkYsTUFBSyxTQUFVYyxHQUNkLE9BQU9BLEVBQUtDLFdEb0JkQyxDQUFjSixFQUFNQyxHQUNuQmIsTUFBSyxTQUFVaUIsR0FDZHhCLEVBQVNVLFVGVk4sU0FBOEJjLEVBQVVyQixHQU83QyxNQUFPLG1DQUYwQixHQUFmQSxFQUlBLEdBQUssOEhBUkxxQixFQUNqQkMsSUFBSWxDLEdBQ0ptQyxLQUFLLHNCRU9pQkMsQ0FBcUJILEVBQVVyQixHQUVwRCxJQUFJeUIsRUFBcUIzQixTQUFTQyxlQUFlLFlBQzdDMEIsR0FDRkEsRUFBbUJYLGlCQUFpQixTQUFTLFdBRTNDQyxJQURBZixFQUM0QmlCLE1BSVhuQixTQUFTQyxlQUFlLFFBQzlCZSxpQkFBaUIsU0FBUyxXQUV2Q0MsSUFEQWYsRUFDNEJpQixNQUdSbkIsU0FBU0MsZUFBZSxlQUM5QjJCLFdBQVdDLFNBQVEsU0FBVUMsR0FDM0NBLEVBQU1kLGlCQUFpQixTQUFTLFNBQVVlLEdBRXhDNUIsRUFEZ0I0QixFQUFNQyxjQUFjNUIsYUFRMUNMLEVBQVNVLFVGdkRGLDhFRXlEY1QsU0FBU0MsZUFBZSxRQUM5QmUsaUJBQWlCLFNBQVMsV0FDdkNDLEVBQWVmLEVBbERMIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7XG4gIGdldENhcGl0YWxpemVkLFxuICBnZXRJZEZyb21VcmwsXG4gIGdldEFuaW1hdGVkU2hpbnlJbWFnZUZyb21JZFxufSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVNYXJrdXAoKSB7XG4gIHJldHVybiBgXG4gICAgPGgxPk15IFBva2VkZXg8L2gxPlxuICAgIDxidXR0b24gaWQ9XCJ2aWV3XCI+VmlldyBwb2tlbW9uczwvYnV0dG9uPlxuICBgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9rZW1vbkNhcmRNYXJrdXAocG9rZW1vbikge1xuICB2YXIgcG9rZW1vbklkID0gZ2V0SWRGcm9tVXJsKHBva2Vtb24udXJsKTtcbiAgdmFyIGltYWdlVXJsID0gZ2V0QW5pbWF0ZWRTaGlueUltYWdlRnJvbUlkKHBva2Vtb25JZCk7XG5cbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwicG9rZW1vbkNhcmRcIiBpZD1cIiR7cG9rZW1vbklkfVwiPlxuICAgICAgPGltZyBzcmM9XCIke2ltYWdlVXJsfVwiPlxuICAgICAgPGgzPiR7Z2V0Q2FwaXRhbGl6ZWQocG9rZW1vbi5uYW1lKX08L2gzPlxuICAgIDwvZGl2PlxuICBgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9rZW1vbnNNYXJrdXAocG9rZW1vbnMsIGN1cnJlbnRQYWdlKSB7XG4gIHZhciBwb2tlbW9uTGlzdCA9IHBva2Vtb25zXG4gIC5tYXAoY3JlYXRlUG9rZW1vbkNhcmRNYXJrdXApXG4gIC5qb2luKFwiXCIpO1xuXG4gIHZhciBpc0ZpcnN0UGFnZSA9IGN1cnJlbnRQYWdlID09IDA7XG5cbiAgcmV0dXJuIGBcbiAgICA8aDE+TXkgUG9rZW1vbnM8L2gxPlxuICAgICR7aXNGaXJzdFBhZ2UgPyBcIlwiIDogYDxidXR0b24gaWQ9XCJwcmV2aW91c1wiPlByZXZpb3VzPC9idXR0b24+YH0gICAgICAgICBcbiAgICA8YnV0dG9uIGlkPVwibmV4dFwiPk5leHQ8L2J1dHRvbj5cbiAgICA8ZGl2IGlkPVwicG9rZW1vbkxpc3RcIj5cbiAgICAgICR7cG9rZW1vbkxpc3R9XG4gICAgPC9kaXY+XG4gIGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb2tlbW9uTWFya3VwKHBva2Vtb24pIHtcbiAgcmV0dXJuIGBcbiAgICA8aDE+JHtwb2tlbW9uLm5hbWV9IGlzICR7cG9rZW1vbi5oZWlnaHR9IHRhbGw8L2gxPlxuICAgIDxidXR0b24gaWQ9XCJiYWNrXCI+QmFjazwvYnV0dG9uPlxuICAgIDxkaXY+XG4gICAgICA8aW1nIHNyYz1cIiR7cG9rZW1vbi5zcHJpdGVzLm90aGVyLmRyZWFtX3dvcmxkLmZyb250X2RlZmF1bHR9XCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxpbWcgc3JjPVwiJHtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cIj5cbiAgICA8L2Rpdj5cbiAgYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBva2Vtb25zTG9hZGluZ01hcmt1cCgpIHtcbiAgcmV0dXJuIGBcbiAgICA8aDM+TG9hZGluZyBwb2tlbW9ucy4uLjwvaDM+XG4gIGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb2tlbW9uc0Vycm9yTWFya3VwKGVycm9yKSB7XG4gIHJldHVybiBgXG4gICAgPGgzPlVuYWJsZSB0byBnZXQgcG9rZW1vbnM8L2gzPlxuICAgIDxwPiR7ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgPHA+Q2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uPC9wPlxuICBgO1xufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRDYXBpdGFsaXplZChzdHIpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZEZyb21VcmwodXJsKSB7XG4gIHJldHVybiB1cmwuc3BsaXQoXCIvXCIpWzZdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5pbWF0ZWRTaGlueUltYWdlRnJvbUlkKGlkKSB7XG4gIHJldHVybiBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24tdi9ibGFjay13aGl0ZS9hbmltYXRlZC9zaGlueS8ke2lkfS5naWZgO1xufSIsImltcG9ydCB7XG4gIGZldGNoUG9rZW1vbnMsXG4gIGZldGNoUG9rZW1vblxufSBmcm9tICcuL3NlcnZpY2VzJztcblxuaW1wb3J0IHtcbiAgY3JlYXRlSG9tZU1hcmt1cCxcbiAgY3JlYXRlUG9rZW1vbnNNYXJrdXAsXG4gIGNyZWF0ZVBva2Vtb25NYXJrdXAsXG4gIGNyZWF0ZVBva2Vtb25zTG9hZGluZ01hcmt1cCxcbiAgY3JlYXRlUG9rZW1vbnNFcnJvck1hcmt1cFxufSBmcm9tICcuL3RlbXBsYXRlcyc7XG5cbnZhciBtYWluTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxudmFyIGN1cnJlbnRQYWdlID0gMDtcbnZhciBwZXJQYWdlID0gMjA7XG5cbmZ1bmN0aW9uIHJlbmRlclBva2Vtb24ocG9rZW1vbklkKSB7XG4gIGZldGNoUG9rZW1vbihwb2tlbW9uSWQpXG4gIC50aGVuKGZ1bmN0aW9uIChwb2tlbW9uKSB7XG4gICAgbWFpbk5vZGUuaW5uZXJIVE1MID0gY3JlYXRlUG9rZW1vbk1hcmt1cChwb2tlbW9uKVxuXG4gICAgdmFyIGJhY2tCdXR0b25Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpO1xuICAgIGJhY2tCdXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmVuZGVyUG9rZW1vbnMoY3VycmVudFBhZ2UsIHBlclBhZ2UpO1xuICAgIH0pO1xuICB9KVxufVxuXG5mdW5jdGlvbiByZW5kZXJQb2tlbW9ucyhwYWdlLCBwZXJQYWdlKSB7XG4gIG1haW5Ob2RlLmlubmVySFRNTCA9IGNyZWF0ZVBva2Vtb25zTG9hZGluZ01hcmt1cCgpO1xuXG4gIGZldGNoUG9rZW1vbnMocGFnZSwgcGVyUGFnZSlcbiAgLnRoZW4oZnVuY3Rpb24gKHBva2Vtb25zKSB7XG4gICAgbWFpbk5vZGUuaW5uZXJIVE1MID0gY3JlYXRlUG9rZW1vbnNNYXJrdXAocG9rZW1vbnMsIGN1cnJlbnRQYWdlKTtcblxuICAgIHZhciBwcmV2aW91c0J1dHRvbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpb3VzXCIpO1xuICAgIGlmIChwcmV2aW91c0J1dHRvbk5vZGUpIHtcbiAgICAgIHByZXZpb3VzQnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3VycmVudFBhZ2UtLTtcbiAgICAgICAgcmVuZGVyUG9rZW1vbnMoY3VycmVudFBhZ2UsIHBlclBhZ2UpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEJ1dHRvbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIik7JydcbiAgICBuZXh0QnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGN1cnJlbnRQYWdlKys7XG4gICAgICByZW5kZXJQb2tlbW9ucyhjdXJyZW50UGFnZSwgcGVyUGFnZSk7XG4gICAgfSk7XG5cbiAgICB2YXIgcG9rZW1vbkxpc3ROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb2tlbW9uTGlzdFwiKTtcbiAgICBwb2tlbW9uTGlzdE5vZGUuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHBva2Vtb25JZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICAgIHJlbmRlclBva2Vtb24ocG9rZW1vbklkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KVxufVxuXG5mdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICBtYWluTm9kZS5pbm5lckhUTUwgPSBjcmVhdGVIb21lTWFya3VwKCk7XG5cbiAgdmFyIHZpZXdCdXR0b25Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWV3XCIpO1xuICB2aWV3QnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICByZW5kZXJQb2tlbW9ucyhjdXJyZW50UGFnZSwgcGVyUGFnZSk7XG4gIH0pO1xufVxuXG5yZW5kZXJIb21lKCk7IiwiZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9rZW1vbihpZCkge1xuICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2lkfWApXG4gIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBva2Vtb25zKHBhZ2UsIHBlclBhZ2UpIHtcbiAgcmV0dXJuIGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9JHtwZXJQYWdlfSZvZmZzZXQ9JHtwYWdlICogcGVyUGFnZX1gKVxuICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIH0pXG4gIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEucmVzdWx0cztcbiAgfSlcbn0iXSwic291cmNlUm9vdCI6IiJ9