


function Dateandtime(){

  let time= new Date();
  return <h2>This is the current : {time.toDateString()} - {time.toLocaleTimeString()};
  </h2>

}

export default Dateandtime;