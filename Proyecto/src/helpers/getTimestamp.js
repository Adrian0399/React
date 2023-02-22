export const getTimestamp = () => {
    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
    
      const d = new Date();
      let days = d.toLocaleDateString();
      let h = addZero(d.getHours());
      let m = addZero(d.getMinutes());
      let s = addZero(d.getSeconds());
      let date = days + " " + h + ":" + m + ":" + s;
      return date;
}