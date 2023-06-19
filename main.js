(()=>{"use strict";const e=async function(e){const t="http://api.weatherapi.com/v1/current.json?key=1bf8f4b95ad14cf186b162118230606&q="+e+"&aqi=no";try{const n=await fetch(t,{mode:"cors"});if(!n.ok)throw new Error(`City ${e} not found`);return function(e){const{current:{feelslike_c:t,temp_c:n,wind_mph:o,humidity:i},location:{name:c}}=e;return{cityName:c,temperature:n,feelsLike:t,windSpeed:o,humidity:i}}(await n.json())}catch(e){return null}},t=function(e){if(!e)return;document.getElementById("weatherResult");const t=document.getElementById("cityName"),n=document.getElementById("temperature"),o=document.getElementById("feelsLike"),i=document.getElementById("humidity"),c=document.getElementById("wind");t.textContent=`${e.cityName}`,n.textContent=`Temperature ${e.temperature} °C`,o.textContent=`Feels like: ${e.feelsLike} °C`,i.textContent=`Humidity: ${e.humidity} %`,c.textContent=`Wind: ${e.windSpeed} m/h`},n=document.getElementById("searchForm"),o=document.querySelector('input[type="text"]'),i=document.getElementById("searchBtn");n.addEventListener("submit",(e=>{e.preventDefault()})),i.addEventListener("click",(async()=>{if(""===o.value)return;const n=await e(o.value);console.log(n),console.log(o.value),t(n)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFxQkEsRUFkSUEsZUFBeUJDLEdBQ3ZCLE1BQU1DLEVBQVcsbUZBQW9GRCxFQUFNLFVBQzNHLElBQ0UsTUFBTUUsUUFBaUJDLE1BQU1GLEVBQVUsQ0FBRUcsS0FBTSxTQUMvQyxJQUFLRixFQUFTRyxHQUFJLE1BQU0sSUFBSUMsTUFBTSxRQUFRTixlQUUxQyxPQVpKLFNBQXFCTyxHQUNuQixNQUFPQyxTQUFVQyxZQUFhQyxFQUFXQyxPQUFPQyxFQUFhQyxTQUFVQyxFQUFXQyxTQUFVQSxHQUM1RkMsVUFBV0MsS0FBTUMsSUFBYVgsRUFDOUIsTUFBTyxDQUFDVyxXQUFVTixjQUFhRixZQUFXSSxZQUFXQyxXQUN2RCxDQU9pQkksT0FBa0JqQixFQUFTa0IsT0FFMUMsQ0FBRSxNQUFPQyxHQUNQLE9BQU8sSUFDVCxDQUNGLEVDTUosRUF0QkksU0FBMEJDLEdBQ3hCLElBQUtBLEVBQWEsT0FFSUMsU0FBU0MsZUFBZSxpQkFBOUMsTUFHTU4sRUFBV0ssU0FBU0MsZUFBZSxZQUNuQ1osRUFBY1csU0FBU0MsZUFBZSxlQUN0Q2QsRUFBWWEsU0FBU0MsZUFBZSxhQUNwQ1QsRUFBV1EsU0FBU0MsZUFBZSxZQUNuQ0MsRUFBT0YsU0FBU0MsZUFBZSxRQUVyQ04sRUFBU1EsWUFBYyxHQUFHSixFQUFZSixXQUN0Q04sRUFBWWMsWUFBYyxlQUFlSixFQUFZVixpQkFDckRGLEVBQVVnQixZQUFjLGVBQWVKLEVBQVlaLGVBQ25ESyxFQUFTVyxZQUFjLGFBQWFKLEVBQVlQLGFBQ2hEVSxFQUFLQyxZQUFjLFNBQVNKLEVBQVlSLGVBQzFDLEVDZEVhLEVBQWFKLFNBQVNDLGVBQWUsY0FDckNJLEVBQWNMLFNBQVNNLGNBQWMsc0JBQ3JDQyxFQUFZUCxTQUFTQyxlQUFlLGFBRTFDRyxFQUFXSSxpQkFBaUIsVUFBV0MsSUFDbkNBLEVBQUVDLGdCQUFnQixJQUl0QkgsRUFBVUMsaUJBQWlCLFNBQVNoQyxVQUNoQyxHQUEwQixLQUF0QjZCLEVBQVlNLE1BQWMsT0FDOUIsTUFBTVosUUFBb0IsRUFBa0JNLEVBQVlNLE9BQ3hEQyxRQUFRQyxJQUFJZCxHQUNaYSxRQUFRQyxJQUFJUixFQUFZTSxPQUN4QixFQUFzQlosRUFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9tb2R1bGVzL3ZpZXdyZXN1bHQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3ZWF0aGVyID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XG4gICAgICBjb25zdCB7Y3VycmVudDoge2ZlZWxzbGlrZV9jOiBmZWVsc0xpa2UsIHRlbXBfYzp0ZW1wZXJhdHVyZSwgd2luZF9tcGg6IHdpbmRTcGVlZCwgaHVtaWRpdHk6IGh1bWlkaXR5fSwgXG4gICAgICBsb2NhdGlvbjoge25hbWU6IGNpdHlOYW1lfX0gPSBkYXRhO1xuICAgICAgcmV0dXJuIHtjaXR5TmFtZSwgdGVtcGVyYXR1cmUsIGZlZWxzTGlrZSwgd2luZFNwZWVkLCBodW1pZGl0eX07XG4gICAgfVxuICBcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoY2l0eSkge1xuICAgICAgY29uc3QgZW5kcG9pbnQgPSAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTFiZjhmNGI5NWFkMTRjZjE4NmIxNjIxMTgyMzA2MDYmcT0nKyBjaXR5ICsnJmFxaT1ubydcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgQ2l0eSAke2NpdHl9IG5vdCBmb3VuZGApO1xuICAgICAgICBjb25zdCBkYXRhID0gcHJvY2Vzc0RhdGEoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZmV0Y2hEYXRhIH07XG4gIH0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXI7IiwiY29uc3QgdmlldyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gc2V0V2VhdGhlclJlc3VsdCh3ZWF0aGVyRGF0YSkge1xuICAgICAgaWYgKCF3ZWF0aGVyRGF0YSkgcmV0dXJuO1xuICBcbiAgICAgIGNvbnN0IHdlYXRoZXJSZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJSZXN1bHRcIik7XG4gICAgICAvLyB3ZWF0aGVyUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIFxuICAgICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHlOYW1lXCIpO1xuICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBlcmF0dXJlXCIpO1xuICAgICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc0xpa2VcIik7XG4gICAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XG4gICAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpO1xuICBcbiAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY2l0eU5hbWV9YDtcbiAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlICR7d2VhdGhlckRhdGEudGVtcGVyYXR1cmV9IMKwQ2A7XG4gICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHt3ZWF0aGVyRGF0YS5mZWVsc0xpa2V9IMKwQ2A7XG4gICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5odW1pZGl0eX0gJWA7XG4gICAgICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7d2VhdGhlckRhdGEud2luZFNwZWVkfSBtL2hgO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHsgc2V0V2VhdGhlclJlc3VsdCB9O1xuICB9KSgpO1xuICBcbmV4cG9ydCBkZWZhdWx0IHZpZXc7XG4iLCJpbXBvcnQgd2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXJcIjtcbmltcG9ydCB2aWV3IGZyb20gXCIuL21vZHVsZXMvdmlld3Jlc3VsdFwiO1xuXG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRm9ybScpXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQnRuJyk7XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHNlYXJjaElucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmZldGNoRGF0YShzZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpXG4gICAgY29uc29sZS5sb2coc2VhcmNoSW5wdXQudmFsdWUpXG4gICAgdmlldy5zZXRXZWF0aGVyUmVzdWx0KHdlYXRoZXJEYXRhKTtcbiAgfSk7Il0sIm5hbWVzIjpbImFzeW5jIiwiY2l0eSIsImVuZHBvaW50IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJvayIsIkVycm9yIiwiZGF0YSIsImN1cnJlbnQiLCJmZWVsc2xpa2VfYyIsImZlZWxzTGlrZSIsInRlbXBfYyIsInRlbXBlcmF0dXJlIiwid2luZF9tcGgiLCJ3aW5kU3BlZWQiLCJodW1pZGl0eSIsImxvY2F0aW9uIiwibmFtZSIsImNpdHlOYW1lIiwicHJvY2Vzc0RhdGEiLCJqc29uIiwiZXJyb3IiLCJ3ZWF0aGVyRGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kIiwidGV4dENvbnRlbnQiLCJzZWFyY2hGb3JtIiwic2VhcmNoSW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=